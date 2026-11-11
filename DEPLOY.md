# Deploying aladhkaar.com (with contact form and short share links)

The site now has a small server part (Cloudflare Pages Functions) for the contact form and the short
`aladhkaar.com/c/…` share links. Uploading the folder in the dashboard doesn't run Functions, so from now on
you deploy with **Wrangler** from your computer. Everything below fits in Cloudflare's free plan.

## What's in the folder

```
aladhkaar/
  public/            the website (what you used to upload)
    inbox.html       your private inbox for contact messages
  functions/
    api/contact.js   receives contact form messages, saves them, emails you
    api/messages.js  feeds the inbox (needs your admin token)
    api/share.js     makes short share links
    c/[id].js        opens a short link
  schema.sql         database tables
  wrangler.toml      project settings (no secrets in here)
```

## 1. One-time setup on your computer

Install Node.js (LTS) from nodejs.org, then in a terminal:

```bash
cd path/to/aladhkaar
npx wrangler login
```

A browser window opens. Sign in to Cloudflare and allow access.

## 2. Create the database

```bash
npx wrangler d1 create aladhkaar
```

It prints a `database_id`. Paste it into `wrangler.toml` in place of `PASTE_DATABASE_ID_HERE`, then create the tables:

```bash
npx wrangler d1 execute aladhkaar --remote --file=schema.sql
```

## 3. Deploy

```bash
npx wrangler pages deploy
```

This deploys to your existing **adhkar-maker** Pages project, so aladhkaar.com and adhkar-maker.pages.dev keep
working. If Wrangler says the project doesn't exist, check the name in the dashboard (Workers & Pages) and
change `name` in `wrangler.toml` to match.

The database connection comes from `wrangler.toml`, so there's nothing to set in the dashboard.

Short share links work from this point. Try Share → Copy link on aladhkaar.com.

## 4. Secrets

Each command asks you to type the value. None of these go in any file.

```bash
npx wrangler pages secret put ADMIN_TOKEN --project-name adhkar-maker
npx wrangler pages secret put IP_SALT --project-name adhkar-maker
npx wrangler pages secret put TO_EMAIL --project-name adhkar-maker
```

- **ADMIN_TOKEN**: a long random password for your inbox. Keep it somewhere safe.
- **IP_SALT**: any random text. It's used to spot repeat senders without storing their IP address.
- **TO_EMAIL**: the address that should receive messages.

Open **aladhkaar.com/inbox.html**, paste your admin token, and you'll see every message. They're saved even
before email is set up.

## 5. Spam protection (Turnstile)

1. Dashboard → Turnstile → Add widget. Name it `aladhkaar`, add the hostnames `aladhkaar.com` and
   `adhkar-maker.pages.dev`, mode **Managed**.
2. Copy the **site key** (public) into `public/index.html`:
   ```html
   <meta name="turnstile-sitekey" content="0x4AAAA...your site key...">
   ```
3. Save the **secret key**:
   ```bash
   npx wrangler pages secret put TURNSTILE_SECRET --project-name adhkar-maker
   ```
4. Deploy again: `npx wrangler pages deploy`

## 6. Email notifications (Resend, free up to 3,000 emails a month)

1. Sign up at resend.com and add the domain `aladhkaar.com`. If the domain is on Cloudflare, Resend offers to
   add the DNS records for you. Otherwise copy the records it shows into Cloudflare DNS. Wait until it says
   **Verified**.
2. Create an API key (Sending access) and save it:
   ```bash
   npx wrangler pages secret put RESEND_API_KEY --project-name adhkar-maker
   ```
3. Deploy again. Messages now arrive by email too, and pressing Reply answers the sender directly when they
   left their email.

The sender address is `contact@aladhkaar.com` (set as `FROM_EMAIL` in `wrangler.toml`). It doesn't need a real
mailbox.

## Updating the site later

Edit files in `public/`, bump the `?v=` numbers in `index.html` and `VERSION` in `public/sw.js` when you change
CSS or JS, then:

```bash
npx wrangler pages deploy
```

## Checking it works

- Share → Copy link gives a link like `https://aladhkaar.com/c/u3dissk`, and opening it loads the design.
- Send a test message from "Suggest a dhikr to add". It appears in `inbox.html`, and in your email once
  Resend is set up.
- If something fails: Dashboard → adhkar-maker → Functions → Real-time logs.

## Connecting aladhkaar.com

Until you do this, use `adhkar-maker.pages.dev` everywhere (for example `adhkar-maker.pages.dev/inbox.html`).

1. Dashboard → Workers & Pages → adhkar-maker → **Custom domains** → Set up a custom domain → `aladhkaar.com`.
2. **If the domain already uses Cloudflare's nameservers**, Cloudflare adds the DNS record for you. Wait a few minutes.
3. **If it's still with your registrar's DNS**, the easiest route is to move DNS to Cloudflare (free): Dashboard →
   Add a domain → `aladhkaar.com` → Free plan, then change the nameservers at your registrar to the two Cloudflare
   shows you. This usually takes from a few minutes to a few hours. Then do step 1 again.
4. Add `www.aladhkaar.com` the same way so both addresses work.

Moving DNS to Cloudflare also makes the Resend email setup (step 6) one click.
