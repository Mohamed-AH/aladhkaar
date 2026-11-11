/* POST /api/share  { card: {...} }  ->  { ok, id, url }
 * Saves a card design and returns a short link like https://aladhkaar.com/c/k3x9a2q.
 * The same design always gets the same id, so sharing twice doesn't add rows.
 */

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });

const ALPHABET = "abcdefghijkmnopqrstuvwxyz23456789"; // no 0/1/l/o, easy to read aloud

export async function onRequestPost({ request, env }) {
  const origin = request.headers.get("Origin");
  if (origin && new URL(origin).host !== new URL(request.url).host) return json({ ok: false, error: "origin" }, 403);
  if (!env.DB) return json({ ok: false, error: "not_configured" }, 500);

  let body;
  try { body = await request.json(); } catch { return json({ ok: false, error: "bad_request" }, 400); }
  const card = body && body.card;
  if (!card || typeof card !== "object" || Array.isArray(card)) return json({ ok: false, error: "bad_request" }, 400);
  const text = JSON.stringify(card);
  if (text.length > 6000) return json({ ok: false, error: "too_big" }, 413);

  const digest = new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text)));
  let id = "";
  for (let i = 0; i < 7; i++) id += ALPHABET[digest[i] % ALPHABET.length];

  await env.DB.prepare("INSERT OR IGNORE INTO shares (id, card, created_at) VALUES (?, ?, ?)").bind(id, text, Date.now()).run();
  return json({ ok: true, id, url: new URL("/c/" + id, request.url).href });
}
