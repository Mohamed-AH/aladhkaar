/* Adhkar Maker: print, PDF and image export (step 4) */
window.Exporter = (() => {
  "use strict";

  const PX_PER_MM = 96 / 25.4;
  let fontText = null;
  const fontCache = new Map();

  async function blobToDataURL(blob) {
    return new Promise((ok, fail) => { const r = new FileReader(); r.onload = () => ok(r.result); r.onerror = fail; r.readAsDataURL(blob); });
  }

  // Build @font-face CSS with the font files inlined, limited to the families on the card.
  async function fontEmbedCSS(families) {
    if (!fontText) fontText = await (await fetch("fonts/fonts.css")).text();
    const blocks = fontText.match(/@font-face\s*\{[^}]*\}/g) || [];
    const out = [];
    for (const b of blocks) {
      const fam = (b.match(/font-family:\s*'([^']+)'/) || [])[1];
      if (!families.has(fam)) continue;
      const file = (b.match(/url\(([^)]+)\)/) || [])[1];
      if (!fontCache.has(file)) fontCache.set(file, await blobToDataURL(await (await fetch("fonts/" + file)).blob()));
      out.push(b.replace(file, fontCache.get(file)));
    }
    return out.join("\n");
  }

  function familiesOf(card) {
    const set = new Set(["IBM Plex Sans Arabic"]);
    const cs = getComputedStyle(card);
    ["--card-ar-font", "--card-title-font"].forEach(v => {
      const m = cs.getPropertyValue(v).match(/"([^"]+)"/);
      if (m) set.add(m[1]);
    });
    return set;
  }

  async function renderPage(card, w, h, ratio, fontCSS) {
    return htmlToImage.toCanvas(card, {
      width: w, height: h, pixelRatio: ratio, fontEmbedCSS: fontCSS, cacheBust: false,
      style: { transform: "none", left: "0", top: "0", boxShadow: "none", borderRadius: "0" }
    });
  }

  function download(blob, name) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = name; a.rel = "noopener";
    document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 30000);
  }

  const toBlob = (canvas, type, q) => new Promise(ok => canvas.toBlob(ok, type, q));

  async function pdf({ cards, w, h, name, onProgress }) {
    const fontCSS = await fontEmbedCSS(familiesOf(cards[0]));
    const mmW = w / PX_PER_MM, mmH = h / PX_PER_MM;
    const doc = new jspdf.jsPDF({ unit: "mm", format: [mmW, mmH], orientation: mmW > mmH ? "landscape" : "portrait", compress: true });
    for (let i = 0; i < cards.length; i++) {
      onProgress(i + 1, cards.length);
      const canvas = await renderPage(cards[i], w, h, 3.125, fontCSS); // about 300 dpi
      if (i > 0) doc.addPage([mmW, mmH], mmW > mmH ? "landscape" : "portrait");
      doc.addImage(canvas.toDataURL("image/jpeg", 0.92), "JPEG", 0, 0, mmW, mmH, undefined, "FAST");
    }
    download(doc.output("blob"), name + ".pdf");
  }

  async function pngFiles({ cards, w, h, name, onProgress, social }) {
    const fontCSS = await fontEmbedCSS(familiesOf(cards[0]));
    const files = [];
    for (let i = 0; i < cards.length; i++) {
      onProgress(i + 1, cards.length);
      // Social sizes come out exactly 1080 px wide; print sizes at about 240 dpi.
      const canvas = await renderPage(cards[i], w, h, social ? 1080 / w : 2.5, fontCSS);
      const blob = await toBlob(canvas, "image/png");
      files.push(new File([blob], cards.length > 1 ? `${name}-${i + 1}.png` : `${name}.png`, { type: "image/png" }));
    }
    return files;
  }

  // Phone share sheet with the image attached. Returns false where the browser can't share files.
  async function shareImage(opts, text, url) {
    const files = await pngFiles(opts);
    if (!(navigator.canShare && navigator.canShare({ files }))) return { ok: false, files };
    try { await navigator.share({ files, text: url ? `${text}\n${url}` : text }); return { ok: true }; }
    catch (e) { return { ok: e.name === "AbortError", aborted: e.name === "AbortError", files }; }
  }

  async function png(opts) {
    const files = await pngFiles(opts);
    // On phones, the share sheet lets people save straight to their photos.
    const coarse = matchMedia("(pointer: coarse)").matches;
    if (coarse && navigator.canShare && navigator.canShare({ files })) {
      try { await navigator.share({ files }); return; } catch (e) { if (e.name === "AbortError") return; }
    }
    for (const f of files) { download(f, f.name); await new Promise(r => setTimeout(r, 350)); }
  }

  function print({ w, h }) {
    let st = document.getElementById("printPageSize");
    if (!st) { st = document.createElement("style"); st.id = "printPageSize"; document.head.append(st); }
    st.textContent = `@page { size: ${(w / PX_PER_MM).toFixed(1)}mm ${(h / PX_PER_MM).toFixed(1)}mm; margin: 0; }`;
    window.print();
  }

  return { pdf, png, print, shareImage, download };
})();
