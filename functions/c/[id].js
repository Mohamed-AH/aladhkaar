/* GET /c/<id>: open a shared card. Looks up the design and sends the visitor to the editor with it. */

function base64url(text) {
  const bytes = new TextEncoder().encode(text);
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export async function onRequestGet({ params, env, request }) {
  const home = new URL("/", request.url);
  const id = String(params.id || "");
  if (!/^[a-z0-9]{4,12}$/.test(id) || !env.DB) return Response.redirect(home.href, 302);
  const row = await env.DB.prepare("SELECT card FROM shares WHERE id = ?").bind(id).first();
  if (!row) return Response.redirect(home.href + "#missing", 302);
  env.DB.prepare("UPDATE shares SET opens = opens + 1 WHERE id = ?").bind(id).run().catch(() => {});
  return Response.redirect(home.href + "#card=" + base64url(row.card), 302);
}
