/* Counting requests per visitor in D1, for rate limits and lockouts.
 * Visitors are keyed by a salted hash of their IP, so raw IPs are never stored.
 * The table is created on first use, so no manual database step is needed.
 */

let ready = null;
const setup = db => ready || (ready = db.prepare(
  "CREATE TABLE IF NOT EXISTS hits (bucket TEXT NOT NULL, visitor TEXT NOT NULL, at INTEGER NOT NULL)"
).run().then(() => db.prepare("CREATE INDEX IF NOT EXISTS idx_hits ON hits (bucket, visitor, at)").run())
  .catch(e => { ready = null; throw e; }));

export async function visitorHash(request, env) {
  const ip = request.headers.get("CF-Connecting-IP") || "";
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode((env.IP_SALT || "aladhkaar") + ip));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
}

/** How many hits this visitor has in the bucket within the window. */
export async function count(db, bucket, visitor, windowMs) {
  await setup(db);
  const row = await db.prepare("SELECT COUNT(*) AS n FROM hits WHERE bucket = ? AND visitor = ? AND at > ?")
    .bind(bucket, visitor, Date.now() - windowMs).first();
  return row ? row.n : 0;
}

/** Record a hit, and now and then clear hits older than a day. */
export async function hit(db, bucket, visitor) {
  await setup(db);
  await db.prepare("INSERT INTO hits (bucket, visitor, at) VALUES (?, ?, ?)").bind(bucket, visitor, Date.now()).run();
  if (Math.random() < 0.05) await db.prepare("DELETE FROM hits WHERE at < ?").bind(Date.now() - 86400_000).run();
}

/** Same-site check for posts from our pages. Browsers always send Origin on a POST, so a missing one is refused. */
export function sameOrigin(request) {
  const origin = request.headers.get("Origin");
  if (!origin) return false;
  try { return new URL(origin).host === new URL(request.url).host; } catch { return false; }
}
