/* POST /api/contact: store a message from the contact form and email a copy.
 *
 * Bindings and settings (set in the Cloudflare dashboard or with wrangler):
 *   DB                D1 database (see schema.sql)
 *   TURNSTILE_SECRET  secret, Turnstile secret key (spam check; skipped if not set)
 *   RESEND_API_KEY    secret, Resend API key (email; skipped if not set, messages are still saved)
 *   TO_EMAIL          secret, where messages are sent
 *   FROM_EMAIL        variable, e.g. "Adhkar Maker <contact@aladhkaar.com>" on a domain verified in Resend
 *   IP_SALT           secret, any random text, used to hash IPs for rate limiting
 */

import { sameOrigin } from "../../lib/limit.js";

const TYPES = ["dhikr", "idea", "problem", "other"];
const LIMIT_PER_HOUR = 5;

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });

const clean = (v, max) => String(v ?? "").replace(/\u0000/g, "").trim().slice(0, max);

async function sha256(text) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
}

const escapeHTML = s => s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

export async function onRequestPost({ request, env, waitUntil }) {
  // Only accept posts from our own pages.
  if (!sameOrigin(request)) return json({ ok: false, error: "origin" }, 403);

  let body;
  try { body = await request.json(); } catch { return json({ ok: false, error: "bad_request" }, 400); }

  // Honeypot: bots fill the hidden field. Pretend it worked.
  if (clean(body.website, 200)) return json({ ok: true });

  const type = TYPES.includes(body.type) ? body.type : "other";
  const message = clean(body.message, 4000);
  const name = clean(body.name, 100);
  let email = clean(body.email, 200);
  const lang = clean(body.lang, 10);
  if (message.length < 3) return json({ ok: false, error: "empty" }, 400);
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) email = "";

  const ip = request.headers.get("CF-Connecting-IP") || "";

  // Spam check.
  if (env.TURNSTILE_SECRET) {
    const form = new FormData();
    form.append("secret", env.TURNSTILE_SECRET);
    form.append("response", clean(body.token, 4096));
    if (ip) form.append("remoteip", ip);
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body: form });
    const out = await res.json().catch(() => ({}));
    if (!out.success) return json({ ok: false, error: "captcha" }, 403);
  }

  if (!env.DB) return json({ ok: false, error: "not_configured" }, 500);

  // Simple rate limit per visitor, using a salted hash so raw IPs are never stored.
  const ipHash = await sha256((env.IP_SALT || "aladhkaar") + ip);
  const since = Date.now() - 3600_000;
  const recent = await env.DB.prepare("SELECT COUNT(*) AS n FROM messages WHERE ip_hash = ? AND created_at > ?").bind(ipHash, since).first();
  if (recent && recent.n >= LIMIT_PER_HOUR) return json({ ok: false, error: "rate" }, 429);

  const now = Date.now();
  const country = (request.cf && request.cf.country) || "";
  await env.DB.prepare(
    "INSERT INTO messages (created_at, type, name, email, message, lang, country, ip_hash, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'new')"
  ).bind(now, type, name, email, message, lang, country, ipHash).run();

  if (env.RESEND_API_KEY && env.TO_EMAIL) {
    const labels = { dhikr: "Dhikr suggestion", idea: "Idea", problem: "Problem", other: "Message" };
    const subject = `${labels[type]} from aladhkaar.com${name ? " · " + name : ""}`;
    const html = `<div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.6">
      <p><strong>${labels[type]}</strong>${name ? " from " + escapeHTML(name) : ""}${email ? " &lt;" + escapeHTML(email) + "&gt;" : ""}</p>
      <div dir="auto" style="white-space:pre-wrap;padding:12px 14px;background:#f5f3ee;border-radius:8px">${escapeHTML(message)}</div>
      <p style="color:#777;font-size:13px">Language: ${escapeHTML(lang || "?")} · Country: ${escapeHTML(country || "?")}</p></div>`;
    const send = fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: env.FROM_EMAIL || "Adhkar Maker <contact@aladhkaar.com>",
        to: [env.TO_EMAIL],
        subject,
        html,
        text: `${labels[type]}${name ? " from " + name : ""}${email ? " <" + email + ">" : ""}\n\n${message}`,
        ...(email ? { reply_to: email } : {})
      })
    }).then(r => { if (!r.ok) return r.text().then(t => console.log("Resend error", r.status, t)); })
      .catch(e => console.log("Resend failed", e));
    waitUntil(send);
  }

  return json({ ok: true });
}

