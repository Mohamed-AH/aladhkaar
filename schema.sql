-- Contact form messages. Run once:  npx wrangler d1 execute aladhkaar --remote --file=schema.sql
CREATE TABLE IF NOT EXISTS messages (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at INTEGER NOT NULL,           -- milliseconds since 1970
  type       TEXT    NOT NULL,           -- dhikr | idea | problem | other
  name       TEXT,
  email      TEXT,
  message    TEXT    NOT NULL,
  lang       TEXT,
  country    TEXT,
  ip_hash    TEXT,                       -- salted hash, only used for rate limiting
  status     TEXT    NOT NULL DEFAULT 'new'  -- new | done | spam
);
CREATE INDEX IF NOT EXISTS idx_messages_status ON messages (status, created_at);
CREATE INDEX IF NOT EXISTS idx_messages_ip ON messages (ip_hash, created_at);

-- Short share links: aladhkaar.com/c/<id>
CREATE TABLE IF NOT EXISTS shares (
  id         TEXT PRIMARY KEY,
  card       TEXT NOT NULL,              -- the card design as JSON
  created_at INTEGER NOT NULL,
  opens      INTEGER NOT NULL DEFAULT 0
);

-- Rate limits and inbox lockouts (the site also creates this table on first use).
CREATE TABLE IF NOT EXISTS hits (bucket TEXT NOT NULL, visitor TEXT NOT NULL, at INTEGER NOT NULL);
CREATE INDEX IF NOT EXISTS idx_hits ON hits (bucket, visitor, at);
