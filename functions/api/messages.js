/* /api/messages: your inbox of contact form messages.
 *   GET   ?status=new|done|all   list the latest messages
 *   POST  { id, status }          mark a message done, new, or spam
 * Requires the header  Authorization: Bearer <ADMIN_TOKEN>  (ADMIN_TOKEN is a secret you choose).
 */

import { visitorHash, count, hit } from "../../lib/limit.js";

// After this many wrong tokens in 15 minutes, a visitor is locked out until the window passes.
const MAX_FAILS = 10, FAIL_WINDOW = 15 * 60_000;
// Messages older than this are deleted (see the privacy note on the site).
const KEEP_MS = 365 * 86400_000;

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });

// Checks the token, with a lockout after repeated failures.
async function guard(request, env) {
  if (!env.ADMIN_TOKEN || !env.DB) return json({ ok: false, error: "auth" }, 401);
  const visitor = await visitorHash(request, env);
  if (await count(env.DB, "auth-fail", visitor, FAIL_WINDOW) >= MAX_FAILS) return json({ ok: false, error: "locked" }, 429);
  if (await authorized(request, env)) return null;
  await hit(env.DB, "auth-fail", visitor);
  return json({ ok: false, error: "auth" }, 401);
}

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
  const denied = await guard(request, env);
  if (denied) return denied;
  await env.DB.prepare("DELETE FROM messages WHERE created_at < ?").bind(Date.now() - KEEP_MS).run();
  const status = new URL(request.url).searchParams.get("status") || "new";
  const q = status === "all"
    ? env.DB.prepare("SELECT id, created_at, type, name, email, message, lang, country, status FROM messages ORDER BY created_at DESC LIMIT 300")
    : env.DB.prepare("SELECT id, created_at, type, name, email, message, lang, country, status FROM messages WHERE status = ? ORDER BY created_at DESC LIMIT 300").bind(status);
  const { results } = await q.all();
  return json({ ok: true, messages: results });
}

export async function onRequestPost({ request, env }) {
  const denied = await guard(request, env);
  if (denied) return denied;
  let body;
  try { body = await request.json(); } catch { return json({ ok: false }, 400); }
  const status = ["new", "done", "spam"].includes(body.status) ? body.status : null;
  if (!status || !Number.isInteger(body.id)) return json({ ok: false }, 400);
  await env.DB.prepare("UPDATE messages SET status = ? WHERE id = ?").bind(status, body.id).run();
  return json({ ok: true });
}

