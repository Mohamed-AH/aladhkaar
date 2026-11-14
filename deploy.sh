#!/usr/bin/env bash
# Deploy the newest aladhkaar-update zip from Downloads.
# Run from Git Bash:  bash /d/aladhkaar/deploy.sh   (or just: deploy-adhkar, if you added the alias)
set -e
cd "$(dirname "$0")"

# The browser names repeat downloads "aladhkaar-update (1).zip", so take the newest one.
ZIP=$(ls -t ~/Downloads/aladhkaar-update*.zip 2>/dev/null | head -n 1)
if [ -z "$ZIP" ]; then
  echo "No aladhkaar-update zip found in Downloads."
  exit 1
fi
echo "Using: $ZIP"

TMP=$(mktemp -d)
unzip -oq "$ZIP" -d "$TMP"
cp -r "$TMP"/aladhkaar/* .
rm -r "${TMP:?}"

# Show which version is about to go live, so an old zip is easy to spot.
echo "Site version in this zip: $(grep -o 'adhkar-v[0-9]*' public/sw.js | head -n 1)"
read -r -p "Deploy this version? [y/N] " OK
case "$OK" in y|Y|yes) ;; *) echo "Stopped. Nothing was deployed."; exit 1 ;; esac

npx wrangler pages deploy --branch main
