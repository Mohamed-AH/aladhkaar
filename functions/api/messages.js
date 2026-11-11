/* /api/messages: your inbox of contact form messages.
 *   GET   ?status=new|done|all   list the latest messages
 *   POST  { id, status }          mark a message done, new, or spam
 * Requires the header  Authorization: Bearer <ADMIN_TOKEN>  (ADMIN_TOKEN is a secret you choose).
 */

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });

async function authorized(request, env) {
  if (!env.ADMIN_TOKEN) return false;
  const got = (request.headers.get("Authorization") || "").replace(/^Bearer\s+/i, "");
  // Compare hashes so the check takes the same time whatever was typed.
  const enc = new TextEncoder();
  const [a, b] = await Promise.all([got, env.ADMIN_TOKEN].map(s => crypto.subtle.digest("SHA-256", enc.encode(s))));
  const x = new Uint8Array(a), y = new Uint8Array(b);
  let diff = 0;
  for (let i = 0; i < x.length; i++) diff |= x[i] ^ y[i];
  return diff === 0;
}

export async function onRequestGet({ request, env }) {
  if (!(await authorized(request, env))) return json({ ok: false, error: "auth" }, 401);
  const status = new URL(request.url).searchParams.get("status") || "new";
  const q = status === "all"
    ? env.DB.prepare("SELECT id, created_at, type, name, email, message, lang, country, status FROM messages ORDER BY created_at DESC LIMIT 300")
    : env.DB.prepare("SELECT id, created_at, type, name, email, message, lang, country, status FROM messages WHERE status = ? ORDER BY created_at DESC LIMIT 300").bind(status);
  const { results } = await q.all();
  return json({ ok: true, messages: results });
}

export async function onRequestPost({ request, env }) {
  if (!(await authorized(request, env))) return json({ ok: false, error: "auth" }, 401);
  let body;
  try { body = await request.json(); } catch { return json({ ok: false }, 400); }
  const status = ["new", "done", "spam"].includes(body.status) ? body.status : null;
  if (!status || !Number.isInteger(body.id)) return json({ ok: false }, 400);
  await env.DB.prepare("UPDATE messages SET status = ? WHERE id = ?").bind(status, body.id).run();
  return json({ ok: true });
}

