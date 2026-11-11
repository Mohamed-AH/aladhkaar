/* Adhkar Maker: editor */
(() => {
  "use strict";

  const STORE_KEY = "adhkar-maker:v1";
  const D = window.Design;

  const I18N = {
    en: {
      appName: "Adhkar Maker", cardSection: "Card", titleLabel: "Title", timeLabel: "Time of day",
      modeBoth: "Both", modeMorning: "Morning", modeEvening: "Evening",
      showTranslation: "English translation", showCounts: "Repeat counts", showNumbers: "Numbering",
      showFullQuran: "Full text of Ayat al-Kursi", footerLabel: "Footer", footerNone: "None",
      adhkarSection: "Adhkar", dragHint: "Drag to reorder. Switch off any you don't want on the card.",
      selectAll: "Select all", selectNone: "Clear", resetOrder: "Reset order",
      tabEdit: "Edit", tabPreview: "Preview", selected: (n, t) => `${n} of ${t} on card`,
      langSwitch: "العربية", times: n => n === 1 ? "once" : `${n}×`, include: "Include on card", drag: "Drag to reorder",
      footerVerse1: "Verse: So remember Me", footerVerse2: "Verse: Call upon Me", footerHadith: "Hadith: the living and the dead",
      emptyCard: "Switch on at least one dhikr to see it here.",
      designSection: "Design", themeLabel: "Colors", accentLabel: "Accent", bgLabel: "Background", resetColors: "Use theme colors",
      fontLabel: "Arabic font", patternLabel: "Pattern", placeFull: "All over", placeFrame: "Frame", placeTop: "Top", placeCorners: "Corners",
      strengthLabel: "Strength", figureSection: "Figure", poseLabel: "Pose", poseDua: "Hands raised", poseStand: "Standing",
      styleLabel: "Style", styleSoft: "Two-tone", styleSil: "Silhouette", skinLabel: "Skin tone", sizeLabel: "Size",
      suggestDhikr: "Suggest a dhikr to add", contactUs: "Contact us", reportProblem: "Report a problem",
      contactTitle: "Contact us", contactSub: "Suggest a dhikr, share an idea or tell us about a problem. We read every message.",
      ctDhikr: "Dhikr", ctIdea: "Idea", ctProblem: "Problem", ctOther: "Other",
      ctMessage: "Your message", ctMessageDhikr: "The dhikr, and its source if you know it", ctName: "Name (optional)", ctEmail: "Email, if you'd like a reply",
      ctSend: "Send", ctSending: "Sending…", ctThanks: "Jazakum Allahu khayran", ctThanksSub: "Your message was sent. If you left an email, we'll reply there.", ctAnother: "Send another",
      ctEmpty: "Please write a message first.", ctCaptcha: "Please complete the check above, then send again.", ctRate: "You've sent a few messages already. Please try again in an hour.",
      ctOffline: "Couldn't send. Check your connection and try again.", ctCheckFailed: "The spam check couldn't load. Turn off any ad blocker for this site, reload, and try again.", ctError: "Something went wrong. Please try again later.",
      shareBtn: "Share", shareTitle: "Share", shareImage: "Share the card image", shareImageSub: "Send it to WhatsApp, Instagram, X or any app on your phone.",
      copyLink: "Copy link", shareWithDesign: "Link opens my design", linkCopiedShort: "Link copied.", shared: "Shared. Jazakum Allahu khayran!",
      savedInstead: "Sharing isn't available here, so the image was saved instead.",
      instaHint: "For Instagram, choose the Square or Story page size, then use “Share the card image”, or save the image and post it from the app.",
      shareText: "I made my own adhkar card. Make yours for free:", pageSquare: "Square", pageStory: "Story", showCredit: "Show aladhkaar.com on the card", showSources: "Sources (hadith references)",
      myCards: "My cards", saveCard: "Save", cardNamePh: "Card name", cardsHint: "Saved on this device. Use a link or file to move a card to another phone or share it.",
      shareLink: "Copy share link", downloadCard: "Download card file", openCardFile: "Open card file", openCard: "Open", deleteCard: "Delete", confirmDelete: "Delete?",
      noCards: "No saved cards yet. Name your card above and press Save.", savedCard: n => `Saved “${n}”.`, updatedCard: n => `Updated “${n}”.`,
      storageFull: "Couldn't save on this device. Try downloading the card file instead.", linkCopied: "Link copied. Anyone who opens it gets this card to edit.",
      linkSelect: "Copy this link:", imported: n => `Opened and saved “${n}”.`, badFile: "That file isn't an adhkar card.",
      opened: n => `Opened “${n}”.`, sharedOpened: "Opened a shared card. Save it under My cards to keep it.", badLink: "This link couldn't be opened.",
      exportBtn: "Save & print", exportTitle: "Save & print", pagePhone: "Phone",
      exPdf: "Save as PDF", exPdfSub: "All pages in one file, print quality.",
      exPng: "Save as image", exPngSub: "One picture per page, for sharing or a phone wallpaper.",
      exPrint: "Print", exPrintSub: "Opens your printer settings. Turn on background graphics.",
      exSummary: (size, n) => `${size} · ${n === 1 ? "1 page" : n + " pages"}`,
      exWorking: (i, n) => `Preparing page ${i} of ${n}…`, exDone: "Done. Check your downloads.", exFail: "Couldn't save. Please try again, or try Print instead.",
      pageLabel: "Page size", textSizeLabel: "Text size", sizeFit: "Fit to pages", fitPagesLabel: "Number of pages", fewer: "Fewer pages", more: "More pages", sizeM: "Medium", sizeL: "Large", sizeXL: "Huge",
      pagesNote: n => n === 1 ? "Fits on 1 page." : `Spread over ${n} pages.`, designsLabel: "Ready-made designs", multicolorLabel: "Colorful verses", placeBottom: "Bottom", titleFontLabel: "Title font",
      figHint: "Drag the figure on the preview to move it to either side.", skinLight: "Light", skinMedium: "Medium", skinDeep: "Deep",
      pageOf: (i, n) => `Page ${i} of ${n}`, languageLabel: "Language"
    },
    ar: {
      appName: "صانع الأذكار", cardSection: "البطاقة", titleLabel: "العنوان", timeLabel: "الوقت",
      modeBoth: "الاثنان", modeMorning: "الصباح", modeEvening: "المساء",
      showTranslation: "الترجمة الإنجليزية", showCounts: "عدد المرات", showNumbers: "الترقيم",
      showFullQuran: "نص آية الكرسي كاملًا", footerLabel: "التذييل", footerNone: "بدون",
      adhkarSection: "الأذكار", dragHint: "اسحب لإعادة الترتيب، وأوقف ما لا تريده في البطاقة.",
      selectAll: "تحديد الكل", selectNone: "إلغاء الكل", resetOrder: "الترتيب الأصلي",
      tabEdit: "تعديل", tabPreview: "معاينة", selected: (n, t) => `${toArDigits(n)} من ${toArDigits(t)} في البطاقة`,
      langSwitch: "English", times: n => n === 1 ? "مرة" : `${toArDigits(n)}×`, include: "إظهار في البطاقة", drag: "اسحب لإعادة الترتيب",
      footerVerse1: "آية: فاذكروني أذكركم", footerVerse2: "آية: ادعوني أستجب لكم", footerHadith: "حديث: مثل الحي والميت",
      emptyCard: "فعّل ذكرًا واحدًا على الأقل ليظهر هنا.",
      designSection: "التصميم", themeLabel: "الألوان", accentLabel: "اللون الرئيسي", bgLabel: "الخلفية", resetColors: "ألوان القالب",
      fontLabel: "الخط العربي", patternLabel: "الزخرفة", placeFull: "كاملة", placeFrame: "إطار", placeTop: "أعلى", placeCorners: "الأركان",
      strengthLabel: "الوضوح", figureSection: "الشخصية", poseLabel: "الوضعية", poseDua: "رافع يديه", poseStand: "واقف",
      styleLabel: "النمط", styleSoft: "لونان", styleSil: "ظل", skinLabel: "لون البشرة", sizeLabel: "الحجم",
      suggestDhikr: "اقترح ذكرًا لإضافته", contactUs: "تواصل معنا", reportProblem: "الإبلاغ عن مشكلة",
      contactTitle: "تواصل معنا", contactSub: "اقترح ذكرًا أو شاركنا فكرة أو أخبرنا عن مشكلة. نقرأ كل رسالة.",
      ctDhikr: "ذكر", ctIdea: "فكرة", ctProblem: "مشكلة", ctOther: "أخرى",
      ctMessage: "رسالتك", ctMessageDhikr: "نص الذكر، ومصدره إن كنت تعرفه", ctName: "الاسم (اختياري)", ctEmail: "بريدك الإلكتروني إن أردت ردًّا",
      ctSend: "إرسال", ctSending: "جارٍ الإرسال…", ctThanks: "جزاكم الله خيرًا", ctThanksSub: "وصلتنا رسالتك. إن تركت بريدك فسنرد عليك هناك.", ctAnother: "إرسال رسالة أخرى",
      ctEmpty: "اكتب رسالتك أولًا.", ctCaptcha: "أكمل خطوة التحقق أعلاه ثم أرسل مرة أخرى.", ctRate: "أرسلت عدة رسائل. حاول مرة أخرى بعد ساعة.",
      ctOffline: "تعذّر الإرسال. تحقق من الاتصال وحاول مرة أخرى.", ctCheckFailed: "تعذّر تحميل خطوة التحقق. أوقف مانع الإعلانات لهذا الموقع، ثم أعد التحميل وحاول مرة أخرى.", ctError: "حدث خطأ. حاول لاحقًا.",
      shareBtn: "مشاركة", shareTitle: "مشاركة", shareImage: "مشاركة صورة البطاقة", shareImageSub: "أرسلها إلى واتساب أو إنستغرام أو X أو أي تطبيق في جوالك.",
      copyLink: "نسخ الرابط", shareWithDesign: "الرابط يفتح تصميمي", linkCopiedShort: "تم نسخ الرابط.", shared: "تمت المشاركة. جزاكم الله خيرًا!",
      savedInstead: "المشاركة غير متاحة هنا، لذلك حُفظت الصورة.",
      instaHint: "لإنستغرام: اختر حجم «مربع» أو «ستوري» ثم «مشاركة صورة البطاقة»، أو احفظ الصورة وانشرها من التطبيق.",
      shareText: "صمّمت بطاقة أذكاري بنفسي، صمّم بطاقتك مجانًا:", pageSquare: "مربع", pageStory: "ستوري", showCredit: "إظهار aladhkaar.com على البطاقة", showSources: "المصادر (تخريج الأحاديث)",
      myCards: "بطاقاتي", saveCard: "حفظ", cardNamePh: "اسم البطاقة", cardsHint: "تُحفظ على هذا الجهاز. استخدم الرابط أو الملف لنقل البطاقة إلى جهاز آخر أو مشاركتها.",
      shareLink: "نسخ رابط المشاركة", downloadCard: "تنزيل ملف البطاقة", openCardFile: "فتح ملف بطاقة", openCard: "فتح", deleteCard: "حذف", confirmDelete: "حذف؟",
      noCards: "لا توجد بطاقات محفوظة بعد. اكتب اسمًا واضغط حفظ.", savedCard: n => `تم حفظ «${n}».`, updatedCard: n => `تم تحديث «${n}».`,
      storageFull: "تعذّر الحفظ على هذا الجهاز. جرّب تنزيل ملف البطاقة.", linkCopied: "تم نسخ الرابط. من يفتحه يحصل على هذه البطاقة لتعديلها.",
      linkSelect: "انسخ هذا الرابط:", imported: n => `تم فتح «${n}» وحفظها.`, badFile: "هذا الملف ليس بطاقة أذكار.",
      opened: n => `تم فتح «${n}».`, sharedOpened: "تم فتح بطاقة مشاركة. احفظها في بطاقاتي للاحتفاظ بها.", badLink: "تعذّر فتح هذا الرابط.",
      exportBtn: "حفظ وطباعة", exportTitle: "حفظ وطباعة", pagePhone: "جوال",
      exPdf: "حفظ PDF", exPdfSub: "كل الصفحات في ملف واحد بجودة الطباعة.",
      exPng: "حفظ صورة", exPngSub: "صورة لكل صفحة، للمشاركة أو خلفية للجوال.",
      exPrint: "طباعة", exPrintSub: "يفتح إعدادات الطابعة. فعّل طباعة الخلفيات.",
      exSummary: (size, n) => `${size} · ${n === 1 ? "صفحة واحدة" : toArDigits(n) + " صفحات"}`,
      exWorking: (i, n) => `تجهيز الصفحة ${toArDigits(i)} من ${toArDigits(n)}…`, exDone: "تم. تحقق من التنزيلات.", exFail: "تعذّر الحفظ. حاول مرة أخرى أو استخدم الطباعة.",
      pageLabel: "حجم الصفحة", textSizeLabel: "حجم الخط", sizeFit: "ملاءمة الصفحات", fitPagesLabel: "عدد الصفحات", fewer: "صفحات أقل", more: "صفحات أكثر", sizeM: "متوسط", sizeL: "كبير", sizeXL: "كبير جدًا",
      pagesNote: n => n === 1 ? "في صفحة واحدة." : `موزعة على ${toArDigits(n)} صفحات.`, designsLabel: "تصاميم جاهزة", multicolorLabel: "أذكار ملوّنة", placeBottom: "أسفل", titleFontLabel: "خط العنوان",
      figHint: "اسحب الشخصية في المعاينة لنقلها إلى أي جانب.", skinLight: "فاتح", skinMedium: "متوسط", skinDeep: "داكن",
      pageOf: (i, n) => `صفحة ${toArDigits(i)} من ${toArDigits(n)}`, languageLabel: "اللغة"
    }
  };
  const EXTRA = window.I18N_EXTRA || {};
  const NAMES = EXTRA.NAMES || {};
  ["ur", "id", "ms", "tr", "fr", "bn"].forEach(l => { if (EXTRA[l]) I18N[l] = EXTRA[l]; });
  // Interface languages. The adhkar on the card always stay in Arabic.
  const LANGS = [
    { id: "en", name: "English" }, { id: "ar", name: "العربية", rtl: true }, { id: "ur", name: "اردو", rtl: true },
    { id: "id", name: "Bahasa Indonesia" }, { id: "ms", name: "Bahasa Melayu" }, { id: "tr", name: "Türkçe" },
    { id: "fr", name: "Français" }, { id: "bn", name: "বাংলা" }
  ].filter(l => I18N[l.id]);
  const isRTL = l => (LANGS.find(x => x.id === l) || {}).rtl === true;
  function pickLang() {
    try { const saved = localStorage.getItem("aladhkaar:lang"); if (saved && I18N[saved]) return saved; } catch (_) {}
    for (const n of navigator.languages || [navigator.language || "en"]) {
      const code = String(n).toLowerCase().split("-")[0];
      if (I18N[code]) return code;
    }
    return "en";
  }
  const FOOTER_KEYS = { "verse-remember": "footerVerse1", "verse-call": "footerVerse2", "hadith-living-dead": "footerHadith" };

  function toArDigits(n) { return String(n).replace(/\d/g, d => "٠١٢٣٤٥٦٧٨٩"[d]); }
  const $ = s => document.querySelector(s);

  /* ---------- State ---------- */
  let DATA = null;
  // Defaults before the default card changed. Older share links only stored what differed from these.
  const LEGACY_DEFAULTS = { off: [], translation: false, sources: false, footer: "none", theme: "ivory", multicolor: false, font: "amiri", titleFont: "same", fitPages: 1,
    pattern: "stars", place: "corners", strength: 24, figSize: 100 };
  const DEFAULT_OFF = [];
  const DEFAULT_ORDER = [7, 6, 17, 1, 4, 5, 2, 19, 3, 21, 8, 18, 12, 11, 10, 16, 9, 23, 14, 15, 13, 20, 22];
  const defaults = () => ({
    lang: pickLang(),
    // The default card (aladhkaar.com/c/fhdqzyx).
    mode: "both", order: DEFAULT_ORDER.filter(id => DATA.adhkar.some(a => a.id === id)), off: DEFAULT_OFF.slice(),
    translation: true, counts: true, numbers: true, fullQuran: false, sources: true,
    footer: "verse-call", title: null, credit: false,
    theme: "pastel", accent: null, bg: null, multicolor: true, font: "scheherazade", titleFont: "messiri", pageSize: "a4", textSize: "fit", fitPages: 2,
    pattern: "none", place: "full", strength: 20,
    figure: "boy", pose: "dua", figStyle: "soft", skin: "light", figSize: 83, figSide: "left", figY: 0.08
  });
  let state;

  function load() {
    let saved = null;
    try { saved = JSON.parse(localStorage.getItem(STORE_KEY) || "null"); } catch (_) {}
    state = Object.assign(defaults(), saved || {});
    fixOrder();
  }
  // keep order valid if the library changes
  function fixOrder() {
    const ids = DATA.adhkar.map(a => a.id);
    state.order = (state.order || []).filter(id => ids.includes(id));
    state.off = (state.off || []).filter(id => ids.includes(id));
    state.order = state.order.filter(id => ids.includes(id)).concat(ids.filter(id => !state.order.includes(id)));
  }
  function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (_) {} }
  function set(patch) { Object.assign(state, patch); save(); render(); }

  const byId = id => DATA.adhkar.find(a => a.id === id);
  const t = k => { const v = (I18N[state.lang] || I18N.en)[k]; return v !== undefined ? v : I18N.en[k]; };
  // Numbers in the reader's digits: Arabic-Indic for Arabic, Bengali for Bengali.
  const num = n => state.lang === "ar" ? toArDigits(n) : state.lang === "bn" ? String(n).replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d]) : String(n);
  // The card itself is Arabic, so default titles are Arabic unless the interface is English.
  const titleLang = () => state.lang === "en" ? "en" : "ar";

  function textFor(a) {
    const v = a.variant && a.variant[state.mode];
    let ar = v ? v.ar : a.ar, en = v ? v.en : a.en, quran = false;
    if (a.full && state.fullQuran) { ar = a.full.ar; en = a.full.en; quran = true; }
    const note = state.mode === "both" && a.combinedNote ? a.combinedNote : null;
    return { ar, en, note, quran };
  }
  function autoTitle() { return DATA.collection.titles[state.mode]; }
  function countLabel(a) {
    if (a.countLabel) return a.countLabel;
    return DATA.countLabels[String(a.count)] || { ar: `${toArDigits(a.count)} مرات`, en: `${a.count} times` };
  }

  /* ---------- UI chrome ---------- */
  function applyLang() {
    const html = document.documentElement;
    html.lang = state.lang; html.dir = isRTL(state.lang) ? "rtl" : "ltr";
    document.title = t("appName");
    document.querySelectorAll("[data-i18n]").forEach(el => { const v = t(el.dataset.i18n); if (typeof v === "string") el.textContent = v; });
    const ls = $("#langSelect");
    if (!ls.options.length) LANGS.forEach(l => { const o = new Option(l.name, l.id); o.lang = l.id; ls.append(o); });
    ls.value = state.lang; ls.setAttribute("aria-label", t("languageLabel"));
    $("#langCode").textContent = state.lang.toUpperCase();

    const sel = $("#footerSelect");
    sel.innerHTML = "";
    sel.append(new Option(t("footerNone"), "none"));
    DATA.extras.forEach(e => sel.append(new Option(t(FOOTER_KEYS[e.id]) || e.id, e.id)));
    sel.value = state.footer;
    buildDesignControls();
  }

  const L = o => o[state.lang] || (NAMES[state.lang] || {})[o.en] || o.en;
  function buildDesignControls() {
    const sw = $("#themeSwatches"); sw.innerHTML = "";
    D.THEMES.forEach(th => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "swatch"; b.setAttribute("role", "radio");
      b.style.setProperty("--sw-bg", th.bg); b.style.setProperty("--sw-ac", th.accent);
      b.title = L(th.name); b.setAttribute("aria-label", L(th.name)); b.dataset.theme = th.id;
      b.addEventListener("click", () => set({ theme: th.id, accent: null, bg: null }));
      sw.append(b);
    });
    const dg = $("#designGallery"); dg.innerHTML = "";
    D.DESIGNS.forEach(d => {
      const tf = D.TITLE_FONTS.find(f => f.id === d.titleFont);
      const pt = D.PATTERNS.find(p => p.id === d.pattern);
      const b = document.createElement("button");
      b.type = "button"; b.className = "design"; b.setAttribute("role", "radio"); b.dataset.design = d.id;
      b.style.cssText = `--d-bg:${d.bg};--d-ink:${d.titleInk || d.ink};--d-ac:${d.accent};--d-atmo:${d.atmo};--d-pat:${pt.make(d.accent)};--d-font:${tf.css}`;
      b.innerHTML = `<span class="design-face"><span class="design-pat"></span><span class="design-word" lang="ar" dir="rtl">أذكار</span><span class="design-rule"></span></span><span class="design-name">${esc(L(d.name))}</span>`;
      b.addEventListener("click", () => set({
        theme: d.id, accent: null, bg: null, font: d.font, titleFont: d.titleFont, pattern: d.pattern, place: d.place,
        strength: d.strength, figure: d.figure, pose: d.pose || state.pose, figStyle: d.figStyle || state.figStyle,
        textSize: d.textSize || state.textSize, multicolor: !!d.inks,
        figSide: d.figSide || state.figSide, footer: d.footer || state.footer
      }));
      dg.append(b);
    });
    const fontOpt = (list, f, sample, key, css) => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "font-opt"; b.setAttribute("role", "radio"); b.dataset.font = f.id;
      b.innerHTML = `<span class="font-sample" lang="ar" dir="rtl"></span><span class="font-name">${esc(L(f.name))}</span>`;
      const sp = b.querySelector(".font-sample");
      sp.textContent = sample; if (css) sp.style.fontFamily = css;
      b.addEventListener("click", () => set({ [key]: f.id }));
      list.append(b);
    };
    const tfl = $("#titleFontList"); tfl.innerHTML = "";
    D.TITLE_FONTS.forEach(f => fontOpt(tfl, f, "أذكار الصباح", "titleFont", f.css || "var(--font-same)"));
    const fl = $("#fontList"); fl.innerHTML = "";
    D.FONTS.forEach(f => fontOpt(fl, f, "سُبْحَانَ اللَّهِ", "font", f.css));
    const pc = $("#patternChips"); pc.innerHTML = "";
    D.PATTERNS.forEach(pt => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "chip"; b.setAttribute("role", "radio"); b.dataset.pattern = pt.id;
      b.innerHTML = `<span class="chip-pat"></span><span>${esc(L(pt.name))}</span>`;
      b.addEventListener("click", () => set({ pattern: pt.id }));
      pc.append(b);
    });
    const fc = $("#figureChips"); fc.innerHTML = "";
    D.FIGURES.forEach(f => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "chip"; b.setAttribute("role", "radio"); b.dataset.figure = f.id;
      b.innerHTML = `<span class="chip-fig">${f.id === "none" ? "" : D.figureSVG(f.id, "stand")}</span><span>${esc(L(f.name))}</span>`;
      b.addEventListener("click", () => set({ figure: f.id }));
      fc.append(b);
    });
    const sk = $("#skinSwatches"); sk.innerHTML = "";
    Object.entries(D.SKIN).forEach(([id, c]) => {
      const b = document.createElement("button");
      const label = t("skin" + id[0].toUpperCase() + id.slice(1));
      b.type = "button"; b.className = "swatch"; b.setAttribute("role", "radio"); b.dataset.skin = id;
      b.style.setProperty("--sw-bg", c); b.title = label; b.setAttribute("aria-label", label);
      b.addEventListener("click", () => set({ skin: id }));
      sk.append(b);
    });
  }

  function currentTheme() {
    const th = D.THEMES.find(x => x.id === state.theme) || D.DESIGNS.find(x => x.id === state.theme) || D.THEMES[0];
    return Object.assign({}, th, { accent: state.accent || th.accent, bg: state.bg || th.bg });
  }

  function renderControls() {
    $("#titleInput").value = state.title ?? autoTitle()[titleLang()];
    $("#titleInput").placeholder = autoTitle()[titleLang()];
    document.querySelectorAll("#modeGroup button").forEach(b => b.setAttribute("aria-checked", String(b.dataset.mode === state.mode)));
    $("#optTranslation").checked = state.translation;
    $("#optCounts").checked = state.counts;
    $("#optNumbers").checked = state.numbers;
    $("#optFullQuran").checked = state.fullQuran;
    $("#optCredit").checked = !!state.credit;
    $("#optSources").checked = !!state.sources;
    $("#footerSelect").value = state.footer;
    const th = currentTheme();
    const check = (sel, attr, val) => document.querySelectorAll(sel).forEach(b => b.setAttribute("aria-checked", String(b.dataset[attr] === val)));
    check("#themeSwatches .swatch", "theme", state.accent || state.bg ? "" : state.theme);
    check("#patternChips .chip", "pattern", state.pattern);
    check("#designGallery .design", "design", state.accent || state.bg ? "" : state.theme);
    check("#pageGroup button", "page", state.pageSize);
    check("#textSizeGroup button", "size", state.textSize);
    if (!$("#fitPagesRow")) return; // page from an older version; a reload fixes it
    $("#fitMinus").setAttribute("aria-label", t("fewer")); $("#fitPlus").setAttribute("aria-label", t("more"));
    check("#titleFontList .font-opt", "font", state.titleFont);
    check("#fontList .font-opt", "font", state.font);
    $("#titleFontList").style.setProperty("--font-same", (D.FONTS.find(f => f.id === state.font) || D.FONTS[0]).css);
    check("#figureChips .chip", "figure", state.figure);
    check("#skinSwatches .swatch", "skin", state.skin);
    check("#placeGroup button", "place", state.place);
    check("#poseGroup button", "pose", state.pose);
    check("#figStyleGroup button", "style", state.figStyle);
    document.querySelectorAll("#patternChips .chip-pat").forEach(el => {
      const pt = D.PATTERNS.find(x => x.id === el.parentElement.dataset.pattern);
      el.style.backgroundImage = pt.make(th.accent);
    });
    $("#accentColor").value = th.accent; $("#bgColor").value = th.bg;
    $("#patternStrength").value = state.strength;
    $("#figSize").value = state.figSize;
    $("#optMulticolor").checked = !!state.multicolor;
    $("#patternOpts").hidden = state.pattern === "none";
    $("#figureOpts").hidden = state.figure === "none";
    $("#skinField").hidden = state.figStyle === "silhouette";
    const on = state.order.length - state.off.length;
    $("#selCount").textContent = t("selected")(on, state.order.length);
  }

  function renderList() {
    const list = $("#dhikrList");
    list.innerHTML = "";
    state.order.forEach(id => {
      const a = byId(id), off = state.off.includes(id);
      const li = document.createElement("li");
      li.className = "dhikr-row" + (off ? " off" : "");
      li.dataset.id = id;
      li.innerHTML = `
        <button type="button" class="grip" aria-label="${t("drag")}"><svg><use href="#grip"/></svg></button>
        <div class="row-text">
          <div class="row-ar" lang="ar"></div>
          <div class="row-meta"><span>${state.lang === "ar" || state.lang === "bn" ? num(a.id) : "#" + a.id}</span>${a.count ? `<span>${t("times")(a.count)}</span>` : ""}${a.source ? `<span class="row-src">${esc(state.lang === "ar" || state.lang === "ur" ? a.source.ar : a.source.en)}</span>` : ""}</div>
        </div>
        <input type="checkbox" class="switch" aria-label="${t("include")}" ${off ? "" : "checked"}>`;
      li.querySelector(".row-ar").textContent = textFor(a).ar;
      li.querySelector(".switch").addEventListener("change", e => {
        const offSet = new Set(state.off);
        e.target.checked ? offSet.delete(id) : offSet.add(id);
        set({ off: [...offSet] });
      });
      list.append(li);
    });
  }

  /* ---------- Pages ---------- */
  const PAGE = { a5: [559, 794], a4: [794, 1123], a3: [1123, 1587], phone: [540, 1170], square: [600, 600], story: [540, 960] };
  const SOCIAL = ["phone", "square", "story"];
  const SITE = "https://aladhkaar.com/";
  const MARK = `<svg class="card-mark" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 2l3.1 6.6L26 6l-2.6 6.9L30 16l-6.6 3.1L26 26l-6.9-2.6L16 30l-3.1-6.6L6 26l2.6-6.9L2 16l6.6-3.1L6 6l6.9 2.6z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="16" cy="16" r="4.2" fill="currentColor"/></svg>`;
  const TEXT = { m: 26, l: 34, xl: 44 };
  let pageW = 794, pageH = 1123, scaleNow = 1;

  function cardTitle() {
    const title = (state.title ?? "").trim() || autoTitle().ar;
    return { title, isLatin: !/[؀-ۿ]/.test(title) };
  }

  function itemHTML(a, n) {
    const x = textFor(a), c = countLabel(a);
    const showCount = state.counts && a.count > 1;
    return `<li class="card-item">
      ${state.numbers ? `<span class="card-num">${toArDigits(n)}</span>` : ""}
      <div>
        <p class="card-ar${x.quran ? " card-quran" : ""}">${esc(x.ar)}</p>
        ${x.note ? `<p class="card-note">${esc(x.note.ar)}</p>` : ""}
        ${state.translation ? `<p class="card-en" lang="en">${esc(x.en)}</p>` : ""}
        ${state.sources && a.source ? `<p class="card-src"><bdi>${esc(a.source.ar)}</bdi>${state.translation ? ` · <bdi lang="en">${esc(a.source.en)}</bdi>` : ""}</p>` : ""}
        ${showCount ? `<span class="card-count">${esc(c.ar)}${state.translation ? ` <span class="en">· ${esc(c.en)}</span>` : ""}</span>` : ""}
      </div>
    </li>`;
  }

  function footHTML() {
    const ex = DATA.extras.find(e => e.id === state.footer);
    return ex ? `
      <footer class="card-foot">
        <p class="card-ar">${ex.type === "quran" ? "﴿" + esc(ex.ar) + "﴾" : "«" + esc(ex.ar) + "»"}</p>
        ${state.translation ? `<p class="card-en" lang="en">${esc(ex.en)}</p>` : ""}
        <div class="card-src">${esc(state.translation ? ex.source.en : ex.source.ar)}</div>
      </footer>` : "";
  }

  function newPage(first) {
    const { title, isLatin } = cardTitle();
    const card = document.createElement("article");
    card.className = "card"; card.dir = "rtl"; card.lang = "ar";
    applyCardDesign(card, first);
    const pat = D.PATTERNS.find(p => p.id === state.pattern) || D.PATTERNS[0];
    const fig = first && D.FIGURES.find(f => f.id === state.figure && f.id !== "none");
    const head = first ? `
      <header class="card-head">
        ${MARK}
        <h1 class="card-title${isLatin ? " latin" : ""}" dir="auto"></h1>
        ${state.translation && !isLatin && !state.title ? `<div class="card-subtitle">${esc(autoTitle().en)}</div>` : ""}
        <div class="card-rule"></div>
      </header>` : `
      <header class="card-runhead"><span class="card-runtitle" dir="auto"></span><span class="card-runrule"></span></header>`;
    card.innerHTML =
      `<div class="card-atmo"></div>` +
      (pat.id !== "none" ? `<div class="card-pat ${state.place}"></div>` : "") +
      (pat.id !== "none" && state.place === "frame" ? `<div class="card-paper"></div>` : "") +
      (fig ? `<div class="card-figure">${D.figureSVG(fig.id, state.pose)}</div>` : "") +
      (state.credit ? `<div class="card-credit" dir="ltr">aladhkaar.com</div>` : "") +
      `<div class="card-inner">${head}<div class="card-body"><ol class="card-list${state.numbers ? "" : " no-num"}"></ol></div></div>`;
    (card.querySelector(".card-title") || card.querySelector(".card-runtitle")).textContent = title;
    const wrap = document.createElement("div");
    wrap.className = "page-wrap";
    wrap.append(card);
    $("#pages").append(wrap);
    if (fig) positionFigure(card);
    return card;
  }

  function paginate(items, foot, fs, cols2) {
    $("#pages").innerHTML = "";
    const listOf = c => c.querySelector(".card-list");
    const over = c => listOf(c).scrollHeight > c.querySelector(".card-body").clientHeight + 1;
    const addFoot = c => c.querySelector(".card-inner").insertAdjacentHTML("beforeend", foot);
    const setup = c => { c.style.setProperty("--fs", fs + "px"); listOf(c).classList.toggle("cols-2", cols2); };
    let card = newPage(true); setup(card);
    items.forEach((a, i) => {
      const tmp = document.createElement("ol");
      tmp.innerHTML = itemHTML(a, i + 1);
      const li = tmp.firstElementChild;
      listOf(card).append(li);
      if (over(card) && listOf(card).children.length > 1) {
        li.remove();
        card = newPage(false); setup(card);
        listOf(card).append(li);
      }
    });
    if (foot) {
      addFoot(card);
      if (over(card)) {
        card.querySelector(".card-foot").remove();
        card = newPage(false); setup(card);
        addFoot(card);
      }
    }
    return $("#pages").children.length;
  }

  let minPagesNeeded = 1;
  function renderCard() {
    const pages = $("#pages");
    pages.innerHTML = "";
    [pageW, pageH] = PAGE[state.pageSize] || PAGE.a4;
    const u = pageW / 794;
    const items = state.order.filter(id => !state.off.includes(id)).map(byId);
    const foot = footHTML();
    let fitN = Math.max(1, Math.min(8, state.fitPages || 1));
    // Never shrink below a readable size: if the list can't fit, use more pages.
    const minFs = 11 * u;
    if (items.length && state.textSize === "fit") {
      const need = Math.min(paginate(items, foot, minFs, true), paginate(items, foot, minFs, false));
      minPagesNeeded = need;
      fitN = Math.min(8, Math.max(fitN, need));
      pages.innerHTML = "";
    }

    if (!items.length) {
      const card = newPage(true);
      card.querySelector(".card-body").innerHTML = `<p class="card-en" style="text-align:center;margin-top:40%">${esc(t("emptyCard"))}</p>`;
      card.querySelector(".card-inner").insertAdjacentHTML("beforeend", foot);
    } else if (state.textSize === "fit" && fitN === 1) {
      const card = newPage(true);
      card.querySelector(".card-list").innerHTML = items.map((a, i) => itemHTML(a, i + 1)).join("");
      card.querySelector(".card-inner").insertAdjacentHTML("beforeend", foot);
      fitCard(card, u);
    } else if (state.textSize === "fit") {
      // Largest text that still fits in the chosen number of pages.
      const search = cols2 => {
        let lo = minFs, hi = 60 * u;
        for (let i = 0; i < 12; i++) {
          const mid = (lo + hi) / 2;
          paginate(items, foot, mid, cols2) <= fitN ? (lo = mid) : (hi = mid);
        }
        return lo;
      };
      const one = search(false);
      let best = { fs: one, cols2: false };
      if (one < 21 * u) {
        const two = search(true);
        if (two > one * 1.12) best = { fs: two, cols2: true };
      }
      paginate(items, foot, Math.floor(best.fs * 10) / 10, best.cols2);
    } else {
      paginate(items, foot, TEXT[state.textSize] * u, state.textSize === "m");
    }
    const wraps = [...pages.children];
    if (wraps.length > 1) wraps.forEach((w, i) => w.insertAdjacentHTML("beforeend",
      `<div class="page-label">${esc(t("pageOf")(i + 1, wraps.length))}</div>`));
    $("#pageCount").textContent = "";
    const shown = state.textSize === "fit" ? Math.max(fitN, wraps.length) : wraps.length;
    if ($("#fitPagesOut")) {
      $("#fitPagesOut").textContent = num(shown);
      $("#fitMinus").disabled = shown <= (state.textSize === "fit" ? Math.max(1, minPagesNeeded) : 1);
      $("#fitPlus").disabled = state.textSize === "fit" ? fitN >= 8 : shown >= 8;
    }
    scaleCard();
  }

  function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }

  function applyCardDesign(card, first) {
    const th = currentTheme();
    const dark = isDark(th.bg);
    const u = pageW / 794;
    const titleF = D.TITLE_FONTS.find(f => f.id === state.titleFont);
    const textF = (D.FONTS.find(f => f.id === state.font) || D.FONTS[0]).css;
    const vars = {
      "--u": u, "--card-bg": th.bg, "--card-accent": th.accent,
      "--card-ink": state.bg ? (dark ? "#f2eee5" : "#1f2421") : th.ink,
      "--card-ink-2": state.bg ? (dark ? "#b7bec5" : "#5f6661") : th.ink2,
      "--card-rule": state.bg ? D.mix(th.bg, dark ? "#ffffff" : "#000000", 0.13) : th.rule,
      "--card-ar-font": textF,
      "--card-title-font": titleF && titleF.css ? titleF.css : textF,
      "--atmo": th.atmo || "none",
      "--card-title-ink": state.bg ? "inherit" : (th.titleInk || "inherit"),
      "--pat-op": state.strength / 100
    };
    const pat = D.PATTERNS.find(p => p.id === state.pattern) || D.PATTERNS[0];
    vars["--pat-img"] = pat.make(th.accent);
    const fc = D.figureColors(th, th.accent, state.figStyle, state.skin);
    Object.entries({ "--fig-robe": fc.robe, "--fig-shade": fc.shade, "--fig-skin": fc.skin, "--fig-hair": fc.hair, "--fig-cloth": fc.cloth })
      .forEach(([k, v]) => vars[k] = v);
    Object.entries(vars).forEach(([k, v]) => card.style.setProperty(k, v));
    card.style.width = pageW + "px"; card.style.height = pageH + "px";
    const fig = D.FIGURES.find(f => f.id === state.figure);
    const on = first && fig && fig.id !== "none";
    const h = (fig && fig.child ? 300 : 380) * state.figSize / 100 * u;
    card.style.setProperty("--fig-w", (on ? h * 100 / 252 : 0) + "px");
    card.dataset.figH = h;
    const inks = th.inks || [th.accent, state.bg ? (dark ? "#f2eee5" : "#1f2421") : th.ink, D.mix(th.accent, dark ? "#ffffff" : "#000000", 0.35), th.ink2];
    inks.forEach((c, i) => card.style.setProperty(`--ink-c${i + 1}`, c));
    card.classList.toggle("multicolor", !!state.multicolor);
    card.classList.toggle("pat-bottom", pat.id !== "none" && state.place === "bottom");
    card.classList.toggle("framed", pat.id !== "none" && state.place === "frame");
    card.classList.toggle("fig-left", !!on && state.figSide === "left");
    card.classList.toggle("fig-right", !!on && state.figSide === "right");
  }
  function isDark(hex) {
    const [r, g, b] = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.5;
  }

  const figEdge = card => (card.classList.contains("framed") ? 56 : 30) * pageW / 794;
  function positionFigure(card) {
    const el = card.querySelector(".card-figure");
    if (!el) return;
    const edge = figEdge(card), h = Number(card.dataset.figH);
    el.style.top = edge + (pageH - 2 * edge - h) * state.figY + "px";
    el.style.left = state.figSide === "left" ? edge + "px" : "";
    el.style.right = state.figSide === "right" ? edge + "px" : "";
    el.onpointerdown = startFigureDrag;
  }

  function startFigureDrag(e) {
    const el = e.currentTarget, card = el.closest(".card");
    e.preventDefault();
    el.setPointerCapture(e.pointerId);
    el.classList.add("dragging");
    const startY = e.clientY, y0 = state.figY;
    const edge = figEdge(card), span = pageH - 2 * edge - Number(card.dataset.figH);
    const rect = card.getBoundingClientRect();
    let side = state.figSide;
    const move = ev => {
      state.figY = Math.min(1, Math.max(0, y0 + (ev.clientY - startY) / scaleNow / span));
      side = ev.clientX < rect.left + rect.width / 2 ? "left" : "right";
      el.style.top = edge + span * state.figY + "px";
      el.style.left = side === "left" ? edge + "px" : "";
      el.style.right = side === "right" ? edge + "px" : "";
    };
    const up = () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointercancel", up);
      el.classList.remove("dragging");
      const changedSide = side !== state.figSide;
      state.figSide = side; save();
      if (changedSide) renderCard();
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);
  }

  // Find the biggest font size that fits one page, trying one and two columns.
  function fitCard(card, u) {
    const body = card.querySelector(".card-body"), list = card.querySelector(".card-list");
    const fits = () => list.scrollHeight <= body.clientHeight;
    const search = () => {
      let lo = 8 * u, hi = 36 * u;
      for (let i = 0; i < 14; i++) {
        const mid = (lo + hi) / 2;
        card.style.setProperty("--fs", mid + "px");
        fits() ? (lo = mid) : (hi = mid);
      }
      return lo;
    };
    list.classList.remove("cols-2");
    const one = search();
    let best = { cols: 1, fs: one };
    if (one < 21 * u) {
      list.classList.add("cols-2");
      const two = search();
      if (two > one * 1.12) best = { cols: 2, fs: two };
    }
    list.classList.toggle("cols-2", best.cols === 2);
    card.style.setProperty("--fs", Math.floor(best.fs * 10) / 10 + "px");
  }

  function scaleCard() {
    const stage = $("#stageInner");
    const cs = getComputedStyle(stage);
    const w = stage.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    const h = stage.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
    if (w <= 0 || h <= 0) return;
    const multi = $("#pages").children.length > 1;
    const s = Math.min(w / pageW, (h - (multi ? 28 : 0)) / pageH, 1.2);
    scaleNow = s;
    document.querySelectorAll(".page-wrap").forEach(wrap => {
      wrap.style.width = pageW * s + "px";
      wrap.style.height = pageH * s + "px";
      wrap.querySelector(".card").style.transform = `scale(${s})`;
    });
  }

  function render() {
    renderControls();
    renderList();
    renderCard();
  }

  /* ---------- Events ---------- */
  function bind() {
    $("#langSelect").addEventListener("change", e => { state.lang = e.target.value; try { localStorage.setItem("aladhkaar:lang", state.lang); } catch (_) {} save(); applyLang(); render(); });
    $("#titleInput").addEventListener("input", e => {
      const v = e.target.value;
      state.title = v.trim() === "" || v === autoTitle()[titleLang()] ? null : v;
      save(); renderCard();
    });
    $("#modeGroup").addEventListener("click", e => { const b = e.target.closest("button"); if (b) set({ mode: b.dataset.mode }); });
    $("#optTranslation").addEventListener("change", e => set({ translation: e.target.checked }));
    $("#optCounts").addEventListener("change", e => set({ counts: e.target.checked }));
    $("#optNumbers").addEventListener("change", e => set({ numbers: e.target.checked }));
    $("#optFullQuran").addEventListener("change", e => set({ fullQuran: e.target.checked }));
    $("#footerSelect").addEventListener("change", e => set({ footer: e.target.value }));
    $("#optMulticolor").addEventListener("change", e => set({ multicolor: e.target.checked }));
    $("#accentColor").addEventListener("input", e => set({ accent: e.target.value }));
    $("#bgColor").addEventListener("input", e => set({ bg: e.target.value }));
    $("#btnColorsReset").addEventListener("click", () => set({ accent: null, bg: null }));
    $("#pageGroup").addEventListener("click", e => { const b = e.target.closest("button"); if (b) set({ pageSize: b.dataset.page }); });
    // The page stepper always works: it switches to "Fit to pages", starting from the pages shown now.
    const shownPages = () => Math.min(8, Math.max(state.textSize === "fit" ? (state.fitPages || 1) : 1, $("#pages").children.length || 1));
    $("#fitMinus").addEventListener("click", () => set({ textSize: "fit", fitPages: Math.max(1, shownPages() - 1) }));
    $("#fitPlus").addEventListener("click", () => set({ textSize: "fit", fitPages: Math.min(8, shownPages() + 1) }));
    $("#textSizeGroup").addEventListener("click", e => { const b = e.target.closest("button"); if (b) set({ textSize: b.dataset.size }); });
    $("#placeGroup").addEventListener("click", e => { const b = e.target.closest("button"); if (b) set({ place: b.dataset.place }); });
    $("#poseGroup").addEventListener("click", e => { const b = e.target.closest("button"); if (b) set({ pose: b.dataset.pose }); });
    $("#figStyleGroup").addEventListener("click", e => { const b = e.target.closest("button"); if (b) set({ figStyle: b.dataset.style }); });
    $("#patternStrength").addEventListener("input", e => { state.strength = Number(e.target.value); save(); document.querySelectorAll(".card").forEach(c => c.style.setProperty("--pat-op", state.strength / 100)); });
    $("#figSize").addEventListener("input", e => { state.figSize = Number(e.target.value); save(); renderCard(); });
    $("#btnAll").addEventListener("click", () => set({ off: [] }));
    $("#btnNone").addEventListener("click", () => set({ off: [...state.order] }));
    $("#btnReset").addEventListener("click", () => set({ order: DATA.adhkar.map(a => a.id) }));

    Sortable.create($("#dhikrList"), {
      handle: ".grip", animation: 160, ghostClass: "sortable-ghost", chosenClass: "sortable-chosen",
      onEnd: () => {
        state.order = [...document.querySelectorAll("#dhikrList .dhikr-row")].map(li => Number(li.dataset.id));
        save(); renderControls(); renderCard();
      }
    });

    document.querySelectorAll(".tab").forEach(b => b.addEventListener("click", () => setView(b.dataset.view)));
    const dlg = $("#exportDialog");
    $("#btnExport").addEventListener("click", () => {
      const n = document.querySelectorAll("#pages .card").length;
      const sizeName = pageSizeName(state.pageSize);
      $("#exportSummary").textContent = t("exSummary")(sizeName, n);
      $("#exportStatus").textContent = "";
      dlg.showModal ? dlg.showModal() : dlg.setAttribute("open", "");
    });
    let busy = false;
    dlg.querySelectorAll("[data-export]").forEach(b => b.addEventListener("click", async () => {
      if (busy) return;
      const kind = b.dataset.export;
      const cards = [...document.querySelectorAll("#pages .card")];
      const opts = {
        cards, w: pageW, h: pageH,
        name: `adhkar-${state.pageSize}`, social: SOCIAL.includes(state.pageSize),
        onProgress: (i, n) => { $("#exportStatus").textContent = t("exWorking")(i, n); }
      };
      if (kind === "print") { dlg.close(); Exporter.print(opts); return; }
      busy = true; dlg.classList.add("busy");
      try {
        await document.fonts.ready;
        await Exporter[kind](opts);
        $("#exportStatus").textContent = t("exDone");
      } catch (err) {
        console.error(err);
        $("#exportStatus").textContent = t("exFail");
      } finally { busy = false; dlg.classList.remove("busy"); }
    }));
    bindShare();
    bindContact();
    $("#optCredit").addEventListener("change", e => set({ credit: e.target.checked }));
    $("#optSources").addEventListener("change", e => set({ sources: e.target.checked }));
    new ResizeObserver(scaleCard).observe($("#stageInner"));
    if (document.fonts) document.fonts.ready.then(() => { renderCard(); scaleCard(); });
  }

  function setView(v) {
    document.body.dataset.view = v;
    document.querySelectorAll(".tab").forEach(b => b.dataset.view === v ? b.setAttribute("aria-current", "page") : b.removeAttribute("aria-current"));
    if (v === "preview") requestAnimationFrame(scaleCard);
    window.scrollTo(0, 0);
  }

  function pageSizeName(p) {
    return { phone: t("pagePhone"), square: t("pageSquare"), story: t("pageStory") }[p] || p.toUpperCase();
  }

  /* ---------- Sharing ---------- */
  const onSite = () => location.protocol.startsWith("http") && !/claude|localhost/.test(location.host);
  const siteBase = () => onSite() ? location.origin + "/" : SITE;
  // Only the settings that differ from the defaults, so links stay short.
  function compactState() {
    const d = defaults(), out = { v: 2 };
    for (const [k, v] of Object.entries(cardState())) if (JSON.stringify(v) !== JSON.stringify(d[k])) out[k] = v;
    return out;
  }
  // Short link (aladhkaar.com/c/abc1234) from the server; falls back to a long link if the server can't be reached.
  const shortCache = new Map();
  function cardLink() {
    const card = compactState(), key = JSON.stringify(card);
    if (Object.keys(card).length <= 1) return Promise.resolve(siteBase());
    const long = siteBase() + "make#card=" + enc(card);
    if (!onSite()) return Promise.resolve(long);
    if (!shortCache.has(key)) {
      shortCache.set(key, fetch("/api/share", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ card }) })
        .then(r => r.ok ? r.json() : null).then(o => o && o.ok ? o.url : long)
        .catch(() => { shortCache.delete(key); return long; }));
    }
    return shortCache.get(key);
  }
  const shareLink = () => $("#optShareDesign").checked ? cardLink() : Promise.resolve(siteBase());
  // Copy a link that may still be loading. ClipboardItem with a promise keeps Safari happy.
  async function copyLink(urlPromise, statusEl, okText, outEl) {
    try {
      if (window.ClipboardItem && navigator.clipboard && navigator.clipboard.write) {
        await navigator.clipboard.write([new ClipboardItem({ "text/plain": urlPromise.then(u => new Blob([u], { type: "text/plain" })) })]);
      } else {
        await navigator.clipboard.writeText(await urlPromise);
      }
      statusEl.textContent = okText;
    } catch (_) {
      outEl.value = await urlPromise; outEl.hidden = false; outEl.select(); statusEl.textContent = t("linkSelect");
    }
  }
  // Contact form: posts to /api/contact (Cloudflare Pages Function).
  function bindContact() {
    const dlg = $("#contactDialog"), form = $("#contactForm");
    const sitekey = (document.querySelector('meta[name="turnstile-sitekey"]') || {}).content || "";
    let type = "idea", widget = null, sending = false;
    const all = sel => [...document.querySelectorAll(sel)];
    const setType = v => {
      type = v;
      all("#contactType [data-type]").forEach(b => b.setAttribute("aria-checked", String(b.dataset.type === v)));
      $("#contactMsgLabel").textContent = t(v === "dhikr" ? "ctMessageDhikr" : "ctMessage");
      $("#contactMsg").dir = v === "dhikr" ? "rtl" : "auto";
    };
    let tsToken = "", tsFailed = false;
    const loadTurnstile = () => {
      if (!sitekey || widget !== null) return;
      widget = false;
      window.onTurnstileLoad = () => {
        try {
          widget = turnstile.render("#turnstileBox", {
            sitekey, theme: "auto", size: "flexible",
            callback: tok => { tsToken = tok; tsFailed = false; },
            "expired-callback": () => { tsToken = ""; },
            "error-callback": () => { tsToken = ""; tsFailed = true; }
          });
        } catch (err) { console.error(err); tsFailed = true; }
      };
      const sc = document.createElement("script");
      sc.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=onTurnstileLoad";
      sc.async = true; sc.onerror = () => { tsFailed = true; };
      document.head.append(sc);
    };
    // The check can take a few seconds (and may be invisible), so wait for it before giving up.
    const waitToken = async () => {
      for (let i = 0; i < 40 && !tsToken && !tsFailed; i++) await new Promise(r => setTimeout(r, 250));
      return tsToken;
    };
    const reset = () => {
      form.reset(); $("#contactStatus").textContent = "";
      $("#contactDone").hidden = true; form.querySelector(".contact-body").hidden = false;
      if (widget && window.turnstile) { turnstile.reset(widget); tsToken = ""; }
    };
    const open = v => {
      if (!$("#contactDone").hidden) reset();
      setType(v || "idea"); $("#contactStatus").textContent = "";
      dlg.showModal ? dlg.showModal() : dlg.setAttribute("open", "");
      loadTurnstile();
      setTimeout(() => $("#contactMsg").focus(), 50);
    };
    all("[data-contact]").forEach(b => b.addEventListener("click", () => open(b.dataset.contact)));
    // Links from the home page: /make#suggest and /make#contact open this form.
    if (location.hash === "#suggest" || location.hash === "#contact") {
      const v = location.hash === "#suggest" ? "dhikr" : "idea";
      history.replaceState(null, "", location.pathname + location.search);
      setTimeout(() => open(v), 300);
    }
    all("#contactType [data-type]").forEach(b => b.addEventListener("click", () => setType(b.dataset.type)));
    $("#contactClose").addEventListener("click", () => dlg.close());
    $("#contactAnother").addEventListener("click", () => { reset(); setType(type); $("#contactMsg").focus(); });
    form.addEventListener("submit", async e => {
      e.preventDefault();
      if (sending) return;
      const status = $("#contactStatus");
      const message = $("#contactMsg").value.trim();
      if (message.length < 3) { status.textContent = t("ctEmpty"); $("#contactMsg").focus(); return; }
      let token = "";
      if (sitekey) {
        status.textContent = t("ctSending");
        token = await waitToken();
        if (!token) { status.textContent = t(tsFailed ? "ctCheckFailed" : "ctCaptcha"); return; }
      }
      sending = true; $("#contactSend").disabled = true; status.textContent = t("ctSending");
      try {
        const res = await fetch("/api/contact", {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type, message, name: $("#contactName").value, email: $("#contactEmail").value,
            website: $("#contactWebsite").value, lang: state.lang, token })
        });
        const out = await res.json().catch(() => ({}));
        if (res.ok && out.ok) {
          form.querySelector(".contact-body").hidden = true; $("#contactDone").hidden = false; status.textContent = "";
        } else {
          status.textContent = t(out.error === "captcha" ? "ctCaptcha" : out.error === "rate" ? "ctRate" : out.error === "empty" ? "ctEmpty" : "ctError");
          if (widget && window.turnstile) { turnstile.reset(widget); tsToken = ""; }
        }
      } catch (_) {
        status.textContent = t("ctOffline");
      } finally {
        sending = false; $("#contactSend").disabled = false;
      }
    });
  }

  function bindShare() {
    const dlg = $("#shareDialog");
    const canShareFiles = (() => {
      try { return !!(navigator.canShare && navigator.canShare({ files: [new File([""], "x.png", { type: "image/png" })] })); } catch (_) { return false; }
    })();
    let linkSeq = 0;
    const refreshLinks = async () => {
      const seq = ++linkSeq;
      const url = await shareLink(), text = t("shareText");
      if (seq !== linkSeq) return;
      const enc2 = encodeURIComponent;
      const links = {
        whatsapp: `https://wa.me/?text=${enc2(text + "\n" + url)}`,
        x: `https://twitter.com/intent/tweet?text=${enc2(text)}&url=${enc2(url)}`,
        telegram: `https://t.me/share/url?url=${enc2(url)}&text=${enc2(text)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${enc2(url)}`
      };
      document.querySelectorAll("#socialRow a.social").forEach(a => { a.href = links[a.dataset.net]; });
    };
    $("#btnShare").addEventListener("click", () => {
      $("#btnShareImage").hidden = !canShareFiles;
      $("#shareStatus").textContent = ""; $("#shareLinkOut").hidden = true;
      refreshLinks();
      dlg.showModal ? dlg.showModal() : dlg.setAttribute("open", "");
    });
    $("#shareClose").addEventListener("click", () => dlg.close());
    $("#optShareDesign").addEventListener("change", refreshLinks);
    $("#btnCopyShare").addEventListener("click", () => copyLink(shareLink(), $("#shareStatus"), t("linkCopiedShort"), $("#shareLinkOut")));
    let busy = false;
    $("#btnShareImage").addEventListener("click", async () => {
      if (busy) return; busy = true; dlg.classList.add("busy");
      try {
        await document.fonts.ready;
        const cards = [...document.querySelectorAll("#pages .card")];
        const res = await Exporter.shareImage({
          cards, w: pageW, h: pageH, name: `adhkar-${state.pageSize}`, social: SOCIAL.includes(state.pageSize),
          onProgress: (i, n) => { $("#shareStatus").textContent = t("exWorking")(i, n); }
        }, t("shareText"), await shareLink());
        if (res.ok) $("#shareStatus").textContent = res.aborted ? "" : t("shared");
        else { for (const f of res.files) Exporter.download(f, f.name); $("#shareStatus").textContent = t("savedInstead"); }
      } catch (err) { console.error(err); $("#shareStatus").textContent = t("exFail"); }
      finally { busy = false; dlg.classList.remove("busy"); }
    });
  }

  /* ---------- My cards: saved designs, share links and card files ---------- */
  const CARDS_KEY = "adhkar-maker:cards";
  const cardState = () => { const { lang, ...rest } = state; return JSON.parse(JSON.stringify(rest)); };
  const readCards = () => { try { return JSON.parse(localStorage.getItem(CARDS_KEY) || "[]"); } catch (_) { return []; } };
  const writeCards = list => { try { localStorage.setItem(CARDS_KEY, JSON.stringify(list)); return true; } catch (_) { return false; } };
  const enc = obj => btoa(unescape(encodeURIComponent(JSON.stringify(obj)))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  const dec = str => JSON.parse(decodeURIComponent(escape(atob(str.replace(/-/g, "+").replace(/_/g, "/")))));
  let currentName = null;
  const cardDisplayName = s => (s.title || "").trim() || DATA.collection.titles[s.mode || "both"][titleLang()];

  function applyCard(s) {
    const lang = state.lang;
    if (!s.v) s = Object.assign({ order: DATA.adhkar.map(a => a.id) }, LEGACY_DEFAULTS, s);
    state = Object.assign(defaults(), s, { lang });
    fixOrder(); save(); applyLang(); render();
  }

  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg; el.hidden = false;
    clearTimeout(toast.t); toast.t = setTimeout(() => { el.hidden = true; }, 3200);
  }

  function themeFor(s) {
    const th = D.THEMES.find(x => x.id === s.theme) || D.DESIGNS.find(x => x.id === s.theme) || D.THEMES[0];
    return { bg: s.bg || th.bg, accent: s.accent || th.accent, atmo: s.bg ? "none" : (th.atmo || "none") };
  }

  function renderCardList() {
    const list = $("#cardList"), cards = readCards();
    list.innerHTML = "";
    if (!cards.length) { list.innerHTML = `<li class="lib-empty">${esc(t("noCards"))}</li>`; return; }
    const fmt = new Intl.DateTimeFormat(state.lang, { day: "numeric", month: "short", hour: "numeric", minute: "2-digit" });
    cards.slice().sort((a, b) => b.saved - a.saved).forEach(c => {
      const th = themeFor(c.card);
      const li = document.createElement("li");
      li.className = "lib-item";
      li.innerHTML = `
        <span class="lib-thumb" style="--t-bg:${th.bg};--t-ac:${th.accent};--t-atmo:${th.atmo}"><span></span></span>
        <span class="lib-text"><strong dir="auto"></strong><span>${esc(fmt.format(c.saved))} · ${esc((c.card.pageSize || "a4") === "phone" ? t("pagePhone") : (c.card.pageSize || "a4").toUpperCase())}</span></span>
        <button type="button" class="btn-chip lib-open">${esc(t("openCard"))}</button>
        <button type="button" class="lib-del" aria-label="${esc(t("deleteCard"))}">×</button>`;
      li.querySelector("strong").textContent = c.name;
      li.querySelector(".lib-open").addEventListener("click", () => {
        applyCard(c.card); currentName = c.name; $("#cardsDialog").close(); toast(t("opened")(c.name));
      });
      const del = li.querySelector(".lib-del");
      del.addEventListener("click", () => {
        if (!del.classList.contains("confirm")) { del.classList.add("confirm"); del.textContent = t("confirmDelete"); return; }
        writeCards(readCards().filter(x => x.id !== c.id)); renderCardList();
      });
      list.append(li);
    });
  }

  function bindCards() {
    const dlg = $("#cardsDialog");
    $("#btnCards").addEventListener("click", () => {
      $("#cardName").value = currentName || cardDisplayName(state);
      $("#cardName").placeholder = t("cardNamePh");
      $("#cardsStatus").textContent = ""; $("#linkOut").hidden = true;
      renderCardList();
      dlg.showModal ? dlg.showModal() : dlg.setAttribute("open", "");
    });
    $("#cardsClose").addEventListener("click", () => dlg.close());
    $("#saveCardForm").addEventListener("submit", e => {
      e.preventDefault();
      const name = $("#cardName").value.trim() || cardDisplayName(state);
      const cards = readCards();
      currentName = name;
      const existing = cards.find(c => c.name === name);
      if (existing) { existing.card = cardState(); existing.saved = Date.now(); }
      else cards.push({ id: String(Date.now()), name, saved: Date.now(), card: cardState() });
      $("#cardsStatus").textContent = writeCards(cards) ? t(existing ? "updatedCard" : "savedCard")(name) : t("storageFull");
      renderCardList();
    });
    $("#btnShareLink").addEventListener("click", () => copyLink(cardLink(), $("#cardsStatus"), t("linkCopied"), $("#linkOut")));
    $("#btnDownloadCard").addEventListener("click", () => {
      const name = $("#cardName").value.trim() || cardDisplayName(state);
      const blob = new Blob([JSON.stringify({ app: "adhkar-maker", version: 1, name, card: cardState() }, null, 2)], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = (name.replace(/[\\/:*?"<>|]+/g, "").trim() || "adhkar-card") + ".adhkar.json";
      document.body.append(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 30000);
    });
    $("#cardFile").addEventListener("change", async e => {
      const f = e.target.files[0]; e.target.value = "";
      if (!f) return;
      try {
        const data = JSON.parse(await f.text());
        if (data.app !== "adhkar-maker" || !data.card) throw new Error("not a card");
        const name = data.name || f.name.replace(/\.adhkar\.json$|\.json$/i, "");
        const cards = readCards();
        cards.push({ id: String(Date.now()), name, saved: Date.now(), card: data.card });
        writeCards(cards);
        applyCard(data.card); currentName = name; renderCardList();
        $("#cardsStatus").textContent = t("imported")(name);
      } catch (_) { $("#cardsStatus").textContent = t("badFile"); }
    });
  }

  // A shared link opens the card it carries.
  function openSharedCard() {
    if (location.hash === "#missing") { toast(t("badLink")); history.replaceState(null, "", location.pathname + location.search); return; }
    const m = location.hash.match(/^#card=([\w-]+)/);
    if (!m) return;
    try { applyCard(dec(m[1])); toast(t("sharedOpened")); } catch (_) { toast(t("badLink")); }
    history.replaceState(null, "", location.pathname + location.search);
  }

  /* ---------- Boot ---------- */
  async function boot() {
    const res = await fetch("data/adhkar.json");
    DATA = await res.json();
    load();
    applyLang();
    bind();
    bindCards();
    setView("edit");
    document.body.classList.remove("booting");
    render();
    openSharedCard();
    if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    }
  }
  boot();
})();
