# aladhkaar.com

Adhkar Maker: make a morning and evening adhkar card, then print it, save it as a PDF or share it.

- `public/`: the site (static PWA), deployed to Cloudflare Pages.
- `functions/`: Cloudflare Pages Functions (short links, contact form, inbox).
- `schema.sql`: D1 database schema.

See [DEPLOY.md](DEPLOY.md) for setup and deployment. Secrets are set with `wrangler pages secret put` and are never stored in this repo.
