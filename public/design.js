/* Adhkar Maker: themes, patterns and figures (step 3) */
window.Design = (() => {
  "use strict";

  const tile = (w, h, body) =>
    `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${body}</svg>`)}")`;
  const GRAIN = tile(220, 220, `<filter id="g"><feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 .35 0 0 0 0 .28 0 0 0 0 .22 0 0 0 .09 0"/></filter><rect width="220" height="220" filter="url(#g)"/>`);

  const THEMES = [
    { id: "ivory", name: { en: "Ivory", ar: "عاجي" }, bg: "#fffdf8", ink: "#1f2421", ink2: "#6b716d", accent: "#1f6f5c", rule: "#e2ddd0" },
    { id: "sand",  name: { en: "Sand", ar: "رملي" }, bg: "#f7f0e3", ink: "#2b2620", ink2: "#786b5c", accent: "#a5652a", rule: "#e5d8c2" },
    { id: "sky",   name: { en: "Sky", ar: "سماوي" }, bg: "#f3f7fb", ink: "#1b2633", ink2: "#5d6d7e", accent: "#2d6a9c", rule: "#d6e1eb" },
    { id: "rose",  name: { en: "Rose", ar: "وردي" }, bg: "#fcf4f3", ink: "#2e2223", ink2: "#7c6466", accent: "#ad4757", rule: "#eed9d7" },
    { id: "sage",  name: { en: "Sage", ar: "زيتوني" }, bg: "#f2f5ee", ink: "#22281f", ink2: "#666f60", accent: "#56763a", rule: "#d9dfd0" },
    { id: "night", name: { en: "Night", ar: "ليلي" }, bg: "#14202b", ink: "#f2eee5", ink2: "#a6b0ba", accent: "#d8b16a", rule: "#2b3947" },
    { id: "ink",   name: { en: "Print", ar: "طباعة" }, bg: "#ffffff", ink: "#111111", ink2: "#555555", accent: "#111111", rule: "#d6d6d6" }
  ];

  const FONTS = [
    { id: "amiri", css: '"Amiri", serif', name: { en: "Amiri (classic)", ar: "أميري (كلاسيكي)" } },
    { id: "naskh", css: '"Noto Naskh Arabic", serif', name: { en: "Noto Naskh (clear)", ar: "نوتو نسخ (واضح)" } },
    { id: "markazi", css: '"Markazi Text", serif', name: { en: "Markazi (modern)", ar: "مركزي (حديث)" } },
    { id: "scheherazade", css: '"Scheherazade New", serif', name: { en: "Scheherazade (large marks)", ar: "شهرزاد (تشكيل واضح)" } },
    { id: "baloo", css: '"Baloo Bhaijaan 2", sans-serif', name: { en: "Baloo (rounded, for kids)", ar: "بالو (مستدير للأطفال)" } }
  ];

  const TITLE_FONTS = [
    { id: "same", css: null, name: { en: "Same as text", ar: "مثل النص" } },
    { id: "ruqaa", css: '"Aref Ruqaa", serif', name: { en: "Aref Ruqaa (calligraphy)", ar: "عارف رقعة (خط رقعة)" } },
    { id: "kufi", css: '"Reem Kufi", sans-serif', name: { en: "Reem Kufi (geometric)", ar: "ريم كوفي (هندسي)" } },
    { id: "messiri", css: '"El Messiri", sans-serif', name: { en: "El Messiri (elegant)", ar: "المسيري (أنيق)" } },
    { id: "lalezar", css: '"Lalezar", sans-serif', name: { en: "Lalezar (bold, playful)", ar: "لاله‌زار (عريض ومرح)" } }
  ];

  /* Ready-made designs: each one is a complete look. */
  const DESIGNS = [
    { id: "watercolor", name: { en: "Watercolor", ar: "ألوان مائية" }, classic: true,
      bg: "#fbf7f3", ink: "#3a2a2f", ink2: "#7a6a6e", accent: "#2d4f86", rule: "#ecdcd8", titleInk: "#7c1f37",
      inks: ["#b0305a", "#2c7a50", "#5b3a2a", "#2d4f86"],
      atmo: `${GRAIN}, radial-gradient(40% 26% at 16% 20%, rgba(244,170,184,.72), transparent 70%), radial-gradient(42% 26% at 84% 38%, rgba(156,210,180,.70), transparent 70%), radial-gradient(44% 28% at 22% 66%, rgba(160,194,236,.70), transparent 70%), radial-gradient(42% 26% at 80% 88%, rgba(248,196,152,.70), transparent 70%), radial-gradient(30% 18% at 58% 8%, rgba(255,222,196,.55), transparent 70%)`,
      titleFont: "same", font: "amiri", pattern: "none", place: "full", strength: 20,
      figure: "boy", pose: "dua", figStyle: "soft", figSide: "left", footer: "verse-remember" },
    { id: "ivy", name: { en: "Ivy & Berries", ar: "لبلاب وتوت" }, classic: true,
      bg: "#fdf9ef", ink: "#2b2a22", ink2: "#6d6a58", accent: "#3f7a3a", rule: "#e9e1c9", titleInk: "#2f5a2c",
      inks: ["#2f6b3a", "#a3263a", "#3b2f25", "#2c5a7a"],
      atmo: `${GRAIN}, radial-gradient(75% 30% at 50% 104%, rgba(150,190,130,.30), transparent 70%), radial-gradient(60% 30% at 50% -4%, rgba(250,214,196,.40), transparent 70%)`,
      titleFont: "same", font: "amiri", pattern: "ivy", place: "bottom", strength: 95,
      figure: "girl", pose: "dua", figStyle: "soft", figSide: "left", footer: "hadith-living-dead" },
    { id: "pastel", name: { en: "Morning Sky", ar: "سماء الصباح" }, classic: true,
      bg: "#f7f6f2", ink: "#2d2730", ink2: "#6f6672", accent: "#a8324e", rule: "#e6dde0", titleInk: "#6b2238", figRobe: "#857553",
      inks: ["#a8324e", "#2b6c8e", "#3e7a43", "#6b3f2a"],
      atmo: `${GRAIN}, radial-gradient(30% 9% at 28% 30%, rgba(255,255,255,.8), transparent 70%), radial-gradient(26% 8% at 74% 58%, rgba(255,255,255,.75), transparent 70%), radial-gradient(30% 9% at 34% 84%, rgba(255,255,255,.7), transparent 70%), linear-gradient(180deg, rgba(248,196,204,.50) 0%, rgba(250,222,190,.42) 26%, rgba(200,230,206,.42) 52%, rgba(196,220,245,.48) 78%, rgba(232,214,238,.40) 100%)`,
      titleFont: "messiri", font: "naskh", pattern: "none", place: "full", strength: 20,
      figure: "boy", pose: "dua", figStyle: "soft", figSide: "left", footer: "verse-call" },
    { id: "alhambra", name: { en: "Alhambra", ar: "الحمراء" },
      bg: "#0e3a32", ink: "#f3ead6", ink2: "#c4bba3", accent: "#d6a84c", rule: "#2a5249",
      atmo: "radial-gradient(120% 60% at 50% 0%, rgba(214,168,76,.20), transparent 60%), radial-gradient(80% 50% at 50% 110%, rgba(0,0,0,.35), transparent 70%)",
      titleFont: "ruqaa", font: "amiri", pattern: "stars", place: "frame", strength: 38, figure: "none" },
    { id: "fajr", name: { en: "Fajr", ar: "الفجر" },
      bg: "#fbf2ea", ink: "#2b2230", ink2: "#75677a", accent: "#c65f36", rule: "#ecd9cc",
      atmo: "radial-gradient(90% 40% at 50% -6%, rgba(242,148,92,.42), transparent 70%), linear-gradient(180deg, #f8dcc8 0%, rgba(251,242,234,0) 38%)",
      titleFont: "messiri", font: "naskh", pattern: "arches", place: "top", strength: 34, figure: "boy", pose: "dua", figStyle: "soft" },
    { id: "lantern", name: { en: "Lantern Night", ar: "ليلة الفانوس" },
      bg: "#0f1726", ink: "#f4efe4", ink2: "#9ba7b9", accent: "#f0c063", rule: "#253247",
      atmo: "radial-gradient(60% 40% at 85% 8%, rgba(240,192,99,.26), transparent 70%), radial-gradient(70% 50% at 0% 100%, rgba(70,120,190,.28), transparent 70%)",
      titleFont: "kufi", font: "amiri", pattern: "dots", place: "full", strength: 22, figure: "girl", pose: "dua", figStyle: "silhouette" },
    { id: "lapis", name: { en: "Lapis Print", ar: "لازورد" },
      bg: "#f7f6f1", ink: "#121418", ink2: "#565a62", accent: "#1f47ad", rule: "#dcdbd3",
      atmo: "linear-gradient(90deg, rgba(31,71,173,.07) 0 12px, transparent 12px)",
      titleFont: "kufi", font: "scheherazade", pattern: "lattice", place: "corners", strength: 26, figure: "none" },
    { id: "garden", name: { en: "Kids' Garden", ar: "حديقة الصغار" },
      bg: "#fff5d9", ink: "#2a2a1f", ink2: "#6c684f", accent: "#23936b", rule: "#efe2b8",
      atmo: "radial-gradient(45% 30% at 0% 100%, rgba(255,160,80,.30), transparent 70%), radial-gradient(45% 30% at 100% 0%, rgba(70,190,205,.30), transparent 70%)",
      titleFont: "lalezar", font: "baloo", pattern: "circles", place: "corners", strength: 32, figure: "boy", pose: "dua", figStyle: "soft", textSize: "l" },
    { id: "terracotta", name: { en: "Terracotta", ar: "فخّار" },
      bg: "#f2e4d3", ink: "#3a2418", ink2: "#7d5f4c", accent: "#b04f2b", rule: "#e3cdb6",
      atmo: "linear-gradient(165deg, rgba(176,79,43,.12), transparent 45%), radial-gradient(70% 45% at 100% 100%, rgba(120,60,30,.12), transparent 70%)",
      titleFont: "ruqaa", font: "scheherazade", pattern: "arches", place: "full", strength: 14, figure: "woman", pose: "stand", figStyle: "soft" }
  ];

  /* ---------- Patterns: small SVG tiles in the accent color ---------- */


  const PATTERNS = [
    { id: "none",    name: { en: "None", ar: "بدون" }, make: () => "none" },
    { id: "stars",   name: { en: "Stars", ar: "نجوم" }, make: c => tile(56, 56,
        `<g fill="none" stroke="${c}" stroke-width="1.1"><rect x="17" y="17" width="22" height="22"/><rect x="17" y="17" width="22" height="22" transform="rotate(45 28 28)"/><path d="M0 28h7M49 28h7M28 0v7M28 49v7"/></g>`) },
    { id: "circles", name: { en: "Circles", ar: "دوائر" }, make: c => tile(44, 44,
        `<g fill="none" stroke="${c}" stroke-width="1"><circle cx="0" cy="0" r="22"/><circle cx="44" cy="0" r="22"/><circle cx="0" cy="44" r="22"/><circle cx="44" cy="44" r="22"/><circle cx="22" cy="22" r="22"/></g>`) },
    { id: "arches",  name: { en: "Arches", ar: "أقواس" }, make: c => tile(40, 52,
        `<path d="M6 52V26Q6 8 20 5Q34 8 34 26V52" fill="none" stroke="${c}" stroke-width="1.1"/>`) },
    { id: "lattice", name: { en: "Lattice", ar: "شبكة" }, make: c => tile(36, 36,
        `<g fill="none" stroke="${c}" stroke-width="1"><path d="M18 0L36 18L18 36L0 18Z"/><circle cx="18" cy="18" r="3"/></g>`) },
    { id: "ivy",     name: { en: "Ivy", ar: "لبلاب" }, make: c => {
        const leaf = (x, y, r, f) => `<path transform="translate(${x} ${y}) rotate(${r})" fill="${f}" d="M0 0L-2-5C-9-4-13-9-9-12C-12-16-8-21-4-18C-3-23 3-23 4-18C8-21 12-16 9-12C13-9 9-4 2-5Z"/><path transform="translate(${x} ${y}) rotate(${r})" d="M0-1L0-17M0-9L-6-12M0-9L6-12" fill="none" stroke="#ffffff" stroke-opacity=".35" stroke-width=".8"/>`;
        const light = mix(c, "#ffffff", 0.28), dark = mix(c, "#000000", 0.25);
        return tile(180, 64,
          `<path d="M0 36C22 24 38 48 60 36S98 24 120 36S158 48 180 36" fill="none" stroke="${dark}" stroke-width="1.6"/>` +
          leaf(14, 30, -20, c) + leaf(40, 42, 160, light) + leaf(66, 33, 15, c) + leaf(92, 28, -35, light) + leaf(118, 40, 170, c) + leaf(146, 42, 200, light) + leaf(166, 31, 25, c) +
          `<g fill="#c3313d"><circle cx="78" cy="46" r="3"/><circle cx="84" cy="50" r="2.6"/><circle cx="153" cy="22" r="3"/></g><g fill="#fff" opacity=".7"><circle cx="77" cy="45" r=".9"/><circle cx="152" cy="21" r=".9"/></g>`);
      } },
    { id: "dots",    name: { en: "Dots", ar: "نقاط" }, make: c => tile(18, 18, `<circle cx="9" cy="9" r="1.6" fill="${c}"/>`) }
  ];

  const PLACEMENTS = ["full", "frame", "top", "bottom", "corners"];

  /* ---------- Figures: simple faceless shapes, colored through CSS variables ---------- */
  const SKIN = { light: "#efd3b5", medium: "#c99a6e", deep: "#8a5d3b" };

  function figureSVG(kind, pose) {
    const covered = kind === "girl" || kind === "woman";
    const robe = covered
      ? `<path d="M31 70Q50 62 69 70L84 240Q50 246 16 240Z" fill="var(--fig-robe)"/>`
      : `<path d="M32 66Q50 58 68 66L76 238Q50 244 24 238Z" fill="var(--fig-robe)"/>`;
    const feet = `<ellipse cx="40" cy="242" rx="10" ry="4.5" fill="var(--fig-shade)"/><ellipse cx="60" cy="242" rx="10" ry="4.5" fill="var(--fig-shade)"/>`;
    const sleeves = pose === "dua"
      ? `<path d="M35 74L30 118L44 99M65 74L70 118L56 99" fill="none" stroke="var(--fig-shade)" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/>`
      : `<path d="M35 74L29 150M65 74L71 150" fill="none" stroke="var(--fig-shade)" stroke-width="13" stroke-linecap="round"/>`;
    const hands = pose === "dua"
      ? `<ellipse cx="45" cy="91" rx="5" ry="9" transform="rotate(-12 45 91)" fill="var(--fig-skin)"/><ellipse cx="55" cy="91" rx="5" ry="9" transform="rotate(12 55 91)" fill="var(--fig-skin)"/>`
      : `<circle cx="29" cy="157" r="6" fill="var(--fig-skin)"/><circle cx="71" cy="157" r="6" fill="var(--fig-skin)"/>`;
    let head = "", drape = "";
    if (kind === "boy") {
      head = `<rect x="45" y="46" width="10" height="16" fill="var(--fig-skin)"/><circle cx="50" cy="36" r="16" fill="var(--fig-skin)"/>
        <path d="M34 37Q32 16 50 15Q68 16 66 37Q63 27 54 25Q44 24 34 37Z" fill="var(--fig-hair)"/>`;
    } else if (kind === "man") {
      head = `<rect x="45" y="44" width="10" height="18" fill="var(--fig-skin)"/>
        <path d="M32 34Q32 12 50 12Q68 12 68 34L73 72L60 66L61 40Q50 32 39 40L40 66L27 72Z" fill="var(--fig-cloth)"/>
        <circle cx="50" cy="36" r="13" fill="var(--fig-skin)"/>
        <path d="M33 24Q50 16 67 24" fill="none" stroke="var(--fig-hair)" stroke-width="4" stroke-linecap="round"/>`;
    } else {
      const long = kind === "woman";
      drape = `<path d="${long ? "M29 38Q25 82 36 94L64 94Q75 82 71 38Z" : "M31 38Q30 66 40 76L60 76Q70 66 69 38Z"}" fill="var(--fig-shade)"/>`;
      head = `<circle cx="50" cy="35" r="19" fill="var(--fig-shade)"/><circle cx="50" cy="38" r="12" fill="var(--fig-skin)"/>`;
    }
    return `<svg viewBox="0 0 100 252" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${robe}${feet}${sleeves}${drape}${hands}${head}</svg>`;
  }

  const FIGURES = [
    { id: "none",  name: { en: "None", ar: "بدون" } },
    { id: "boy",   name: { en: "Boy", ar: "ولد" }, child: true },
    { id: "girl",  name: { en: "Girl", ar: "بنت" }, child: true },
    { id: "man",   name: { en: "Man", ar: "رجل" } },
    { id: "woman", name: { en: "Woman", ar: "امرأة" } }
  ];

  // Mix two hex colors; t = share of b.
  function mix(a, b, t) {
    const p = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
    const [x, y] = [p(a), p(b)];
    return "#" + x.map((v, i) => Math.round(v + (y[i] - v) * t).toString(16).padStart(2, "0")).join("");
  }

  function figureColors(theme, accent, style, skin) {
    const robe = theme.figRobe || accent;
    if (style === "silhouette") return { robe, shade: robe, skin: robe, hair: robe, cloth: robe };
    return {
      robe,
      shade: mix(robe, theme.ink === "#f2eee5" ? "#000000" : theme.ink, 0.35),
      skin: SKIN[skin] || SKIN.light,
      hair: mix(theme.ink, "#3a2a1e", 0.4),
      cloth: mix(robe, "#ffffff", 0.72)
    };
  }

  return { THEMES, DESIGNS, TITLE_FONTS, FONTS, PATTERNS, PLACEMENTS, FIGURES, SKIN, figureSVG, figureColors, mix };
})();
