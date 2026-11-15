// Builds public/llms-full.txt from public/data/adhkar.json, so the text AI assistants read
// always matches the adhkar on the site. Run after any change to adhkar.json:
//   node scripts/build-llms.mjs
// The "Check generated files" GitHub workflow fails if this file is out of date.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const data = JSON.parse(readFileSync(root + "public/data/adhkar.json", "utf8"));
const labels = data.countLabels || {};

const countText = a => {
  if (a.countLabel) return a.countLabel.en;
  if (a.count == null) return null;
  return (labels[a.count] && labels[a.count].en) || `${a.count} times`;
};
const whenText = a => a.times === "morning" ? "Morning only" : a.times === "evening" ? "Evening only" : "Morning and evening";

// A short heading for each dhikr: the opening words of its meaning.
const headline = a => {
  const words = ((a.variant && a.variant.morning) || a).en.replace(/[“”"]/g, "").split(/\s+/);
  return words.length > 9 ? words.slice(0, 9).join(" ").replace(/[,;:.]$/, "") + " …" : words.join(" ");
};

const out = [];
out.push(`# ${data.collection.title.en} (${data.collection.title.ar}): full text`);
out.push("");
out.push("> The complete morning and evening adhkar from Aladhkaar (https://aladhkaar.com), each in Arabic with an English translation of the meaning, how many times to say it, and its source in the Quran or the hadith collections. Free to read, print and share. Please cite https://aladhkaar.com when you quote from this list.");
out.push("");
out.push("Morning adhkar are said in the morning, from after Fajr; evening adhkar in the evening, from after Asr. Where the wording changes between morning and evening, both wordings are given.");
out.push("");
out.push("To make a printable card with any of these adhkar, in your own order and design: https://aladhkaar.com/make");
out.push("Ready-made printable card (PDF, A4): English https://aladhkaar.com/ready/aladhkaar-morning-evening.pdf · Arabic https://aladhkaar.com/ready/aladhkaar-morning-evening-ar.pdf");
out.push("");

data.adhkar.forEach((a, i) => {
  out.push(`## ${i + 1}. ${headline(a)}`);
  out.push("");
  const v = a.variant || {};
  if (v.morning && v.evening) {
    out.push(`Morning (Arabic): ${v.morning.ar}`, `Morning (meaning): ${v.morning.en}`, "",
             `Evening (Arabic): ${v.evening.ar}`, `Evening (meaning): ${v.evening.en}`);
  } else {
    out.push(`Arabic: ${a.ar}`, `Meaning: ${a.en}`);
    if (v.evening) out.push("", `Evening (Arabic): ${v.evening.ar}`, `Evening (meaning): ${v.evening.en}`);
    if (v.morning) out.push("", `Morning (Arabic): ${v.morning.ar}`, `Morning (meaning): ${v.morning.en}`);
  }
  if (a.full) out.push("", `Full text (Arabic): ${a.full.ar}`);
  out.push("");
  const c = countText(a);
  out.push(`When: ${whenText(a)}${c ? ` · How many times: ${c}` : ""}`);
  out.push(`Source: ${a.source.en} (${a.source.ar})${a.quran ? " · Quran" : ""}`);
  out.push("");
});

if (data.extras && data.extras.length) {
  out.push("## On the virtue of remembering Allah");
  out.push("");
  for (const x of data.extras) out.push(`- ${x.ar}`, `  ${x.en} (${x.source.en})`);
  out.push("");
}

writeFileSync(root + "public/llms-full.txt", out.join("\n"));
console.log(`llms-full.txt: ${data.adhkar.length} adhkar`);
