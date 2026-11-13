# aladhkaar.com

**Adhkar Maker** is a free web app for making your own morning and evening adhkar card. Pick the adhkar you want, put them in your order, choose a design, then print it, save it as a PDF or image, or share it.

Live site: [aladhkaar.com](https://aladhkaar.com)

## Features

### Choosing and ordering adhkar
- 27 adhkar for the morning and evening, in Arabic with an English translation, repeat counts and sources (`public/data/adhkar.json`).
- Show morning, evening, or both on one card.
- Tick adhkar on or off, select all or none, and **drag to reorder** them (SortableJS).
- Options to show or hide the translation, repeat counts, numbering, sources and the site credit, plus a choice of footer.

### Layout
- Page sizes: **A5, A4, A3** for print, and **Phone**, **Square** and **Story** for sharing on social media.
- **Columns: Auto, 1, 2 or 3**, with an optional dividing line between columns. Three columns need A4 or A3.
- Text size: Medium, Large, Huge, or **Fit to pages**, where you choose the number of pages and the text scales to fill them.

### Design
- 9 ready-made designs: Watercolor, Ivy, Pastel, Alhambra, Fajr, Lantern, Lapis, Garden and Terracotta.
- 7 colour themes (Ivory, Sand, Sky, Rose, Sage, Night, Ink), custom accent and background colours, and a multicolour option.
- Background patterns (stars, circles, arches, lattice, ivy, dots) with placement (full page, frame, top, bottom, corners) and strength controls.
- **6 decorative borders**: thin line, double line, beaded, geometric, arabesque and mihrab, with their own colour, weight (thin, medium, bold) and gap.
- Text fonts: Amiri, Noto Naskh, Markazi, Scheherazade and Baloo (rounded, for kids). Title fonts: Aref Ruqaa, Reem Kufi, El Messiri and Lalezar. All fonts are self-hosted in `public/fonts/`.
- **Simple, featureless human silhouettes** (boy, girl, man, woman) with no facial features, in a dua or standing pose, a soft or solid silhouette style, adjustable skin tone and size.

### Save, print and share
- **Print** directly, with the page size set for the printer.
- **Save as PDF** (jsPDF) or **PNG images** (html-to-image). Social sizes come out 1080 px wide; print sizes at about 240 dpi.
- **Share** the image, or copy a short link (`aladhkaar.com/c/…`) that opens the same design.
- **My cards**: save designs in the browser, download a card file and open it again later.
- Ready-made printable cards in English and Arabic in `public/ready/`.

### Languages
The interface is available in 8 languages: English, Arabic, Urdu, Bahasa Indonesia, Bahasa Melayu, Turkish, French and Bengali, with right-to-left layout for Arabic and Urdu. The language is detected from the browser and can be changed from the globe menu. The adhkar themselves always stay in Arabic. The Urdu, Indonesian, Malay, Turkish, French and Bengali interface texts are first drafts awaiting review by native speakers.

### Other
- Landing page (`index.html`) with the ready-made cards, rotating quotes and a link to the maker (`make.html`).
- Contact form ("Suggest a dhikr to add") with Turnstile spam protection, saved to a database and emailed via Resend, plus a private inbox page (`inbox.html`).
- Installable PWA that works offline (service worker in `public/sw.js`).
- Content-Security-Policy and other security headers in `public/_headers`, and rate limits on share links and inbox sign-in.

## Project structure

```
public/                  the static site
  index.html             landing page (landing.js, landing.css)
  make.html              the card maker (app.js, design.js, export.js, styles.css)
  i18n-extra.js          interface translations
  data/adhkar.json       the adhkar, translations, counts and sources
  data/quotes.json       quotes shown on the landing page
  inbox.html             private inbox for contact messages
  fonts/  icons/  ready/  vendor/
functions/               Cloudflare Pages Functions
  api/contact.js         receives contact form messages, saves them, emails you
  api/messages.js        feeds the inbox (needs the admin token)
  api/share.js           makes short share links
  c/[id].js              opens a short link
lib/limit.js             rate limiting
schema.sql               Cloudflare D1 database tables
wrangler.example.toml    copy to wrangler.toml (git-ignored) and add your database_id
deploy.sh                one-command update and deploy
```

There is no build step. The site is plain HTML, CSS and JavaScript, and the libraries it uses (SortableJS, html-to-image, jsPDF) are vendored in `public/vendor/`.

## Running locally

```bash
npx wrangler pages dev public
```

This serves the site with the Functions. To try only the static pages, any static server pointed at `public/` works.

## Deployment

The site is hosted on **Cloudflare Pages** (project `adhkar-maker`) with Pages Functions and a D1 database, all within Cloudflare's free plan.

- First-time setup (Wrangler login, database, secrets, Turnstile, Resend email, custom domain) is in [DEPLOY.md](DEPLOY.md).
- To deploy: `npx wrangler pages deploy --branch main`.
- `deploy.sh` takes the newest `aladhkaar-update*.zip` from Downloads, copies it over the local folder (leaving `wrangler.toml` alone) and deploys.
- The latest update zip is always at [releases/latest/download/aladhkaar-update.zip](https://github.com/Mohamed-AH/aladhkaar/releases/latest/download/aladhkaar-update.zip). It is rebuilt by `.github/workflows/release.yml` on every push to `main`, as a release named after `VERSION` in `public/sw.js`.

When you change CSS or JS, bump the `?v=` numbers in the HTML and `VERSION` in `public/sw.js` so browsers pick up the new files. The current version is `adhkar-v17`.

Secrets (`ADMIN_TOKEN`, `IP_SALT`, `TO_EMAIL`, `TURNSTILE_SECRET`, `RESEND_API_KEY`) are set with `wrangler pages secret put` and are never stored in this repo.
