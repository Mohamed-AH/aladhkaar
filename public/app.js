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
      modeBoth: "كلاهما", modeMorning: "الصباح", modeEvening: "المساء",
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
      strengthLabel: "الشدة", figureSection: "الشخصية", poseLabel: "الوضعية", poseDua: "رافع يديه", poseStand: "واقف",
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
      exSummary: (size, n) => `${size} · ${n === 1 ? "صفحة واحدة" : n === 2 ? "صفحتان" : toArDigits(n) + (n <= 10 ? " صفحات" : " صفحة")}`,
      exWorking: (i, n) => `تجهيز الصفحة ${toArDigits(i)} من ${toArDigits(n)}…`, exDone: "تم. تحقق من التنزيلات.", exFail: "تعذّر الحفظ. حاول مرة أخرى أو استخدم الطباعة.",
      pageLabel: "حجم الصفحة", textSizeLabel: "حجم الخط", sizeFit: "ملاءمة الصفحات", fitPagesLabel: "عدد الصفحات", fewer: "صفحات أقل", more: "صفحات أكثر", sizeM: "متوسط", sizeL: "كبير", sizeXL: "كبير جدًا",
      pagesNote: n => n === 1 ? "في صفحة واحدة." : n === 2 ? "موزعة على صفحتين." : `موزعة على ${toArDigits(n)} ${n <= 10 ? "صفحات" : "صفحة"}.`, designsLabel: "تصاميم جاهزة", multicolorLabel: "أذكار ملوّنة", placeBottom: "أسفل", titleFontLabel: "خط العنوان",
      figHint: "اسحب الشخصية في المعاينة لنقلها إلى أي جانب.", skinLight: "فاتح", skinMedium: "متوسط", skinDeep: "داكن",
      pageOf: (i, n) => `صفحة ${toArDigits(i)} من ${toArDigits(n)}`, languageLabel: "اللغة"
    }
  };
  const EXTRA = window.I18N_EXTRA || {};
  const NAMES = EXTRA.NAMES || {};
  ["ur", "id", "ms", "tr", "fr", "bn"].forEach(l => { if (EXTRA[l]) I18N[l] = EXTRA[l]; });

  // Labels added after the first translations (drafts for ur, id, ms, tr, fr, bn: native review pending).
  const ADD = {
    en: { close: "Close", views: "Views", aboutLink: "About and references", moved: (i, n) => `Position ${i} of ${n}`,
      ctPrivacy: "We keep your message, name, email and country only to reply, and delete messages after 12 months." },
    ar: { close: "إغلاق", views: "طريقة العرض", aboutLink: "عن الموقع والمراجع", moved: (i, n) => `الموضع ${toArDigits(i)} من ${toArDigits(n)}`,
      ctPrivacy: "نحتفظ برسالتك واسمك وبريدك ودولتك للرد عليك فقط، ونحذف الرسائل بعد ١٢ شهرًا." },
    ur: { close: "بند کریں", views: "منظر", aboutLink: "تعارف اور حوالہ جات", moved: (i, n) => `مقام ${i} از ${n}`,
      ctPrivacy: "ہم آپ کا پیغام، نام، ای میل اور ملک صرف جواب دینے کے لیے رکھتے ہیں، اور پیغامات 12 ماہ بعد حذف کر دیتے ہیں۔" },
    id: { close: "Tutup", views: "Tampilan", aboutLink: "Tentang dan rujukan", moved: (i, n) => `Posisi ${i} dari ${n}`,
      ctPrivacy: "Kami menyimpan pesan, nama, email, dan negara Anda hanya untuk membalas, dan menghapus pesan setelah 12 bulan." },
    ms: { close: "Tutup", views: "Paparan", aboutLink: "Perihal dan rujukan", moved: (i, n) => `Kedudukan ${i} daripada ${n}`,
      ctPrivacy: "Kami menyimpan mesej, nama, e-mel dan negara anda hanya untuk membalas, dan memadam mesej selepas 12 bulan." },
    tr: { close: "Kapat", views: "Görünüm", aboutLink: "Hakkında ve kaynaklar", moved: (i, n) => `Sıra ${i} / ${n}`,
      ctPrivacy: "Mesajınızı, adınızı, e-postanızı ve ülkenizi yalnızca yanıt vermek için saklarız; mesajlar 12 ay sonra silinir." },
    fr: { close: "Fermer", views: "Affichage", aboutLink: "À propos et références", moved: (i, n) => `Position ${i} sur ${n}`,
      ctPrivacy: "Nous gardons votre message, votre nom, votre e-mail et votre pays uniquement pour vous répondre, et supprimons les messages après 12 mois." },
    bn: { close: "বন্ধ করুন", views: "ভিউ", aboutLink: "পরিচিতি ও তথ্যসূত্র", moved: (i, n) => `অবস্থান ${i} / ${n}`,
      ctPrivacy: "আমরা আপনার বার্তা, নাম, ইমেইল ও দেশ শুধু উত্তর দেওয়ার জন্য রাখি, এবং ১২ মাস পরে বার্তা মুছে ফেলি।" }
  };
  Object.keys(ADD).forEach(l => { if (I18N[l]) Object.assign(I18N[l], ADD[l]); });

  // Columns and borders (drafts for ur, id, ms, tr, fr, bn: native review pending).
  const ADD2 = {
    en: { colsLabel: "Columns", colsAuto: "Auto", colRuleLabel: "Line between columns", cols3Off: "3 columns needs A4 or A3, so this page uses 2.", borderLabel: "Border", borderColorLabel: "Border color", borderAccent: "Use accent color", borderWeightLabel: "Thickness", weightThin: "Thin", weightMedium: "Medium", weightBold: "Bold", borderGapLabel: "Distance from edge" },
    ar: { colsLabel: "الأعمدة", colsAuto: "تلقائي", colRuleLabel: "خط بين الأعمدة", cols3Off: "ثلاثة أعمدة تحتاج حجم A4 أو A3، لذلك تُستخدم هنا عمودان.", borderLabel: "الإطار", borderColorLabel: "لون الإطار", borderAccent: "اللون الرئيسي", borderWeightLabel: "السُّمك", weightThin: "رفيع", weightMedium: "متوسط", weightBold: "عريض", borderGapLabel: "البعد عن الحافة" },
    ur: { colsLabel: "کالم", colsAuto: "خودکار", colRuleLabel: "کالموں کے درمیان لکیر", cols3Off: "تین کالم کے لیے A4 یا A3 چاہیے، اس لیے یہاں دو کالم ہیں۔", borderLabel: "حاشیہ", borderColorLabel: "حاشیے کا رنگ", borderAccent: "مرکزی رنگ استعمال کریں", borderWeightLabel: "موٹائی", weightThin: "باریک", weightMedium: "درمیانی", weightBold: "موٹا", borderGapLabel: "کنارے سے فاصلہ" },
    id: { colsLabel: "Kolom", colsAuto: "Otomatis", colRuleLabel: "Garis antarkolom", cols3Off: "3 kolom perlu A4 atau A3, jadi halaman ini memakai 2.", borderLabel: "Bingkai", borderColorLabel: "Warna bingkai", borderAccent: "Pakai warna aksen", borderWeightLabel: "Ketebalan", weightThin: "Tipis", weightMedium: "Sedang", weightBold: "Tebal", borderGapLabel: "Jarak dari tepi" },
    ms: { colsLabel: "Lajur", colsAuto: "Auto", colRuleLabel: "Garisan antara lajur", cols3Off: "3 lajur memerlukan A4 atau A3, jadi halaman ini menggunakan 2.", borderLabel: "Bingkai", borderColorLabel: "Warna bingkai", borderAccent: "Guna warna aksen", borderWeightLabel: "Ketebalan", weightThin: "Nipis", weightMedium: "Sederhana", weightBold: "Tebal", borderGapLabel: "Jarak dari tepi" },
    tr: { colsLabel: "Sütunlar", colsAuto: "Otomatik", colRuleLabel: "Sütunlar arasında çizgi", cols3Off: "3 sütun için A4 veya A3 gerekir, bu sayfada 2 sütun kullanılıyor.", borderLabel: "Çerçeve", borderColorLabel: "Çerçeve rengi", borderAccent: "Vurgu rengini kullan", borderWeightLabel: "Kalınlık", weightThin: "İnce", weightMedium: "Orta", weightBold: "Kalın", borderGapLabel: "Kenara uzaklık" },
    fr: { colsLabel: "Colonnes", colsAuto: "Auto", colRuleLabel: "Trait entre les colonnes", cols3Off: "3 colonnes demandent un A4 ou un A3 : cette page en utilise 2.", borderLabel: "Bordure", borderColorLabel: "Couleur de la bordure", borderAccent: "Couleur d’accent", borderWeightLabel: "Épaisseur", weightThin: "Fine", weightMedium: "Moyenne", weightBold: "Épaisse", borderGapLabel: "Distance du bord" },
    bn: { colsLabel: "কলাম", colsAuto: "স্বয়ংক্রিয়", colRuleLabel: "কলামের মাঝে রেখা", cols3Off: "৩ কলামের জন্য A4 বা A3 লাগে, তাই এই পাতায় ২টি কলাম।", borderLabel: "বর্ডার", borderColorLabel: "বর্ডারের রং", borderAccent: "অ্যাকসেন্ট রং ব্যবহার করুন", borderWeightLabel: "পুরুত্ব", weightThin: "পাতলা", weightMedium: "মাঝারি", weightBold: "মোটা", borderGapLabel: "কিনারা থেকে দূরত্ব" }
  };
  Object.keys(ADD2).forEach(l => { if (I18N[l]) Object.assign(I18N[l], ADD2[l]); });
  // Choose a design first, then the quick editor (drafts for ur, id, ms, tr, fr, bn: native review pending).
  const ADD3 = {
    en: { startTitle: "Choose a design", startSub: "Pick a starting point. You can change colors, text and everything else next.", continueCard: "Continue my card", continueSub: "Pick up where you left off", changeDesign: "Change design", moreOptions: "More options", moreOptionsSub: "Fonts, patterns, borders, figure, columns and more", fewerOptions: "Fewer options" },
    ar: { startTitle: "اختر تصميمًا", startSub: "اختر نقطة البداية، ثم غيّر الألوان والنص وكل شيء كما تحب.", continueCard: "متابعة بطاقتي", continueSub: "أكمل من حيث توقفت", changeDesign: "تغيير التصميم", moreOptions: "خيارات أكثر", moreOptionsSub: "الخطوط والزخارف والإطارات والشخصية والأعمدة وغيرها", fewerOptions: "خيارات أقل" },
    ur: { startTitle: "ڈیزائن منتخب کریں", startSub: "شروعات کے لیے ایک ڈیزائن چنیں۔ اس کے بعد رنگ، متن اور سب کچھ بدل سکتے ہیں۔", continueCard: "اپنا کارڈ جاری رکھیں", continueSub: "جہاں چھوڑا تھا وہیں سے", changeDesign: "ڈیزائن بدلیں", moreOptions: "مزید اختیارات", moreOptionsSub: "فونٹ، نقش، حاشیے، شکل، کالم اور مزید", fewerOptions: "کم اختیارات" },
    id: { startTitle: "Pilih desain", startSub: "Pilih titik awal. Setelah itu warna, teks, dan lainnya bisa diubah.", continueCard: "Lanjutkan kartu saya", continueSub: "Teruskan dari terakhir kali", changeDesign: "Ganti desain", moreOptions: "Opsi lainnya", moreOptionsSub: "Huruf, pola, bingkai, figur, kolom, dan lainnya", fewerOptions: "Opsi lebih sedikit" },
    ms: { startTitle: "Pilih reka bentuk", startSub: "Pilih titik mula. Selepas itu warna, teks dan lain-lain boleh diubah.", continueCard: "Teruskan kad saya", continueSub: "Sambung dari tempat anda berhenti", changeDesign: "Tukar reka bentuk", moreOptions: "Lagi pilihan", moreOptionsSub: "Fon, corak, bingkai, figura, lajur dan lain-lain", fewerOptions: "Kurang pilihan" },
    tr: { startTitle: "Bir tasarım seçin", startSub: "Bir başlangıç seçin. Renkleri, metni ve her şeyi sonra değiştirebilirsiniz.", continueCard: "Kartıma devam et", continueSub: "Kaldığınız yerden devam edin", changeDesign: "Tasarımı değiştir", moreOptions: "Daha fazla seçenek", moreOptionsSub: "Yazı tipleri, desenler, çerçeveler, figür, sütunlar ve daha fazlası", fewerOptions: "Daha az seçenek" },
    fr: { startTitle: "Choisissez un modèle", startSub: "Choisissez un point de départ. Vous pourrez ensuite changer les couleurs, le texte et tout le reste.", continueCard: "Reprendre ma carte", continueSub: "Là où vous vous étiez arrêté", changeDesign: "Changer de modèle", moreOptions: "Plus d’options", moreOptionsSub: "Polices, motifs, bordures, personnage, colonnes et plus", fewerOptions: "Moins d’options" },
    bn: { startTitle: "একটি ডিজাইন বেছে নিন", startSub: "শুরু করার জন্য একটি বেছে নিন। পরে রং, লেখা ও সবকিছু বদলাতে পারবেন।", continueCard: "আমার কার্ড চালিয়ে যান", continueSub: "যেখানে থেমেছিলেন সেখান থেকে", changeDesign: "ডিজাইন বদলান", moreOptions: "আরও অপশন", moreOptionsSub: "ফন্ট, নকশা, বর্ডার, ফিগার, কলাম ও আরও", fewerOptions: "কম অপশন" }
  };
  Object.keys(ADD3).forEach(l => { if (I18N[l]) Object.assign(I18N[l], ADD3[l]); });
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
    figure: "boy", pose: "dua", figStyle: "soft", skin: "light", figSize: 83, figSide: "left", figY: 0.08,
    cols: "auto", colRule: true, border: "none", borderColor: null, borderWeight: "medium", borderGap: 26
  });
  let state;

  function load() {
    let saved = null;
    try { saved = JSON.parse(localStorage.getItem(STORE_KEY) || "null"); } catch (_) {}
    hasSaved = !!saved;
    state = Object.assign(defaults(), clean(saved));
    fixOrder();
  }
  // keep order valid if the library changes
  function fixOrder() {
    const ids = DATA.adhkar.map(a => a.id);
    state.order = (state.order || []).filter(id => ids.includes(id));
    state.off = (state.off || []).filter(id => ids.includes(id));
    state.order = state.order.filter(id => ids.includes(id)).concat(ids.filter(id => !state.order.includes(id)));
  }

  // Shared links, card files and saved state come from outside: keep only known keys with valid values.
  function clean(s) {
    if (!s || typeof s !== "object") return {};
    const bool = v => typeof v === "boolean";
    const inList = list => v => list.includes(v);
    const numIn = (lo, hi) => v => typeof v === "number" && isFinite(v) && v >= lo && v <= hi;
    const ids = list => list.map(x => x.id);
    const hex = v => v === null || (typeof v === "string" && /^#[0-9a-f]{6}$/i.test(v));
    const intArr = v => Array.isArray(v) && v.length <= 500 && v.every(Number.isInteger);
    const rules = {
      v: numIn(1, 9), lang: v => typeof v === "string" && !!I18N[v],
      mode: inList(["both", "morning", "evening"]), order: intArr, off: intArr,
      translation: bool, counts: bool, numbers: bool, fullQuran: bool, sources: bool, credit: bool, multicolor: bool,
      footer: v => v === "none" || DATA.extras.some(e => e.id === v),
      title: v => v === null || (typeof v === "string" && v.length <= 120),
      theme: inList(ids(D.THEMES).concat(ids(D.DESIGNS))), accent: hex, bg: hex,
      font: inList(ids(D.FONTS)), titleFont: inList(ids(D.TITLE_FONTS)),
      pageSize: v => typeof v === "string" && Object.prototype.hasOwnProperty.call(PAGE, v),
      textSize: inList(["fit", "m", "l", "xl"]), fitPages: v => Number.isInteger(v) && v >= 1 && v <= 8,
      pattern: inList(ids(D.PATTERNS)), place: inList(["full", "frame", "top", "bottom", "corners"]), strength: numIn(0, 100),
      figure: inList(ids(D.FIGURES)), pose: inList(["dua", "stand"]), figStyle: inList(["soft", "silhouette"]),
      skin: v => typeof v === "string" && Object.prototype.hasOwnProperty.call(D.SKIN, v),
      figSize: numIn(40, 160), figSide: inList(["left", "right"]), figY: numIn(0, 1),
      cols: inList(["auto", "1", "2", "3"]), colRule: bool, border: inList(ids(D.BORDERS)), borderColor: hex,
      borderWeight: v => typeof v === "string" && Object.prototype.hasOwnProperty.call(D.WEIGHTS, v), borderGap: numIn(10, 70)
    };
    const out = {};
    for (const [k, ok] of Object.entries(rules)) if (k in s && ok(s[k])) out[k] = s[k];
    return out;
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
    document.querySelectorAll("[data-i18n-aria]").forEach(el => { const v = t(el.dataset.i18nAria); if (typeof v === "string") el.setAttribute("aria-label", v); });
    $("#langCode").textContent = state.lang.toUpperCase();

    const sel = $("#footerSelect");
    sel.innerHTML = "";
    sel.append(new Option(t("footerNone"), "none"));
    DATA.extras.forEach(e => sel.append(new Option(t(FOOTER_KEYS[e.id]) || e.id, e.id)));
    sel.value = state.footer;
    buildDesignControls();
  }

  const L = o => o[state.lang] || (NAMES[state.lang] || {})[o.en] || o.en;
  const designPatch = d => ({
    theme: d.id, accent: null, bg: null, font: d.font, titleFont: d.titleFont, pattern: d.pattern, place: d.place,
    strength: d.strength, figure: d.figure, pose: d.pose || state.pose, figStyle: d.figStyle || state.figStyle,
    textSize: d.textSize || state.textSize, multicolor: !!d.inks,
    figSide: d.figSide || state.figSide, footer: d.footer || state.footer,
    border: d.border || "none", borderColor: null, borderWeight: d.borderWeight || "medium", borderGap: d.borderGap || 26
  });

  /* ---------- Step 1: choose a design ---------- */
  let hasSaved = false;
  function buildStart() {
    startBuilt = true;
    const grid = $("#startGrid"); grid.innerHTML = "";
    if (hasSaved) {
      const th = currentTheme();
      const b = document.createElement("button");
      b.type = "button"; b.className = "tpl tpl-cont"; b.setAttribute("role", "listitem");
      b.style.cssText = `--c-bg:${th.bg};--c-ac:${th.accent};--c-ink:${th.ink || "inherit"};--c-ink2:${th.ink2 || "inherit"}`;
      b.innerHTML = `<span class="tpl-face"><span class="tpl-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h4L19 9l-4-4L4 16z M13.5 6.5l4 4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg></span><strong>${esc(t("continueCard"))}</strong><small>${esc(t("continueSub"))}</small></span><span class="tpl-name">${esc(t("continueCard"))}</span>`;
      b.addEventListener("click", () => showStep("edit"));
      grid.append(b);
    }
    D.DESIGNS.forEach(d => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "tpl"; b.setAttribute("role", "listitem"); b.dataset.design = d.id;
      b.innerHTML = `<span class="tpl-face"><img src="templates/${d.id}.webp?v=19" width="480" height="679" alt="" decoding="async" loading="lazy"></span><span class="tpl-name">${esc(L(d.name))}</span>`;
      b.addEventListener("click", () => {
        hasSaved = true;
        Object.assign(state, designPatch(d)); save();
        renderControls(); renderList();
        cardDirty = true; showStep("edit");
      });
      grid.append(b);
    });
  }
  // The card is drawn only while the editor is on screen (it can't be measured while hidden).
  let cardDrawn = false, cardDirty = false;
  function showStep(step) {
    if (step === "start") buildStart();
    document.body.dataset.step = step;
    window.scrollTo(0, 0);
    if (step === "edit") {
      setView("edit");
      if (!cardDrawn || cardDirty) {
        const first = !cardDrawn;
        cardDrawn = true; cardDirty = false;
        if (first) enableDrag();
        // Show the loading circle while the design's fonts arrive (a few seconds at most), then draw once.
        const draw = () => { renderCard(); if (first) startPreviews(); };
        if (cardFontsReady()) draw();
        else { $("#pages").innerHTML = ""; Promise.race([loadCardFonts(), new Promise(ok => setTimeout(ok, 2500))]).then(draw); }
      } else requestAnimationFrame(scaleCard);
    }
  }

  /* ---------- Step 2: quick editor, or every option ---------- */
  const MODE_KEY = "aladhkaar:editMode";
  function setMode(full, remember) {
    if (full && !fullBuilt) { buildFullControls(); renderControls(); }
    document.body.classList.toggle("quick", !full);
    const btn = $("#btnMore");
    btn.setAttribute("aria-expanded", String(full));
    $("#moreLabel").textContent = t(full ? "fewerOptions" : "moreOptions");
    $("#moreLabel").dataset.i18n = full ? "fewerOptions" : "moreOptions";
    if (remember) try { localStorage.setItem(MODE_KEY, full ? "full" : "quick"); } catch (_) {}
  }
  // Font previews download their font only when scrolled near, not all at once on opening.
  // They also wait until the card is drawn, so they don't slow down the card's own fonts.
  let nearObserver = null, nearQueue = [];
  function startPreviews() { const q = nearQueue; nearQueue = null; q.forEach(([el, fn]) => whenNear(el, fn)); }
  function whenNear(el, fn) {
    if (nearQueue) { nearQueue.push([el, fn]); return; }
    if (!("IntersectionObserver" in window)) { fn(); return; }
    nearObserver = nearObserver || new IntersectionObserver(entries => entries.forEach(e => {
      if (!e.isIntersecting) return;
      nearObserver.unobserve(e.target);
      const f = e.target._near; delete e.target._near; if (f) f();
    }), { rootMargin: "400px" });
    el._near = fn; nearObserver.observe(el);
  }

  /* Card fonts. The pages are measured, so the card's fonts must be loaded first;
     otherwise the layout is worked out with a stand-in font and has to be redone. */
  const AR_SAMPLE = "بسم الله الرحمن الرحيم", LAT_SAMPLE = "Aa 123";
  function cardFontSpecs() {
    const text = (D.FONTS.find(f => f.id === state.font) || D.FONTS[0]).css;
    const tf = D.TITLE_FONTS.find(f => f.id === state.titleFont);
    const title = tf && tf.css ? tf.css : text;
    const en = '"IBM Plex Sans Arabic"';
    return [["400 20px " + text, AR_SAMPLE], ["700 20px " + title, AR_SAMPLE], ["700 20px " + title, LAT_SAMPLE],
      ["300 20px " + en, LAT_SAMPLE], ["500 20px " + en, LAT_SAMPLE], ["400 20px " + en, LAT_SAMPLE]];
  }
  const cardFontsReady = () => !document.fonts || cardFontSpecs().every(([f, x]) => { try { return document.fonts.check(f, x); } catch (_) { return true; } });
  const loadCardFonts = () => !document.fonts ? Promise.resolve()
    : Promise.all(cardFontSpecs().map(([f, x]) => document.fonts.load(f, x).catch(() => {})));
  let fontWait = null;
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
    if (fullBuilt) buildFullControls();
    if (startBuilt) buildStart();
  }
  // The full set of design controls is built the first time "More options" opens.
  let fullBuilt = false, startBuilt = false;
  function buildFullControls() {
    fullBuilt = true;
    const dg = $("#designGallery"); dg.innerHTML = "";
    D.DESIGNS.forEach(d => {
      const tf = D.TITLE_FONTS.find(f => f.id === d.titleFont);
      const pt = D.PATTERNS.find(p => p.id === d.pattern);
      const b = document.createElement("button");
      b.type = "button"; b.className = "design"; b.setAttribute("role", "radio"); b.dataset.design = d.id;
      b.style.cssText = `--d-bg:${d.bg};--d-ink:${d.titleInk || d.ink};--d-ac:${d.accent};--d-atmo:${d.atmo};--d-pat:${pt.make(d.accent)}`;
      whenNear(b, () => b.style.setProperty("--d-font", tf.css));
      b.innerHTML = `<span class="design-face"><span class="design-pat"></span><span class="design-word" lang="ar" dir="rtl">أذكار</span><span class="design-rule"></span></span><span class="design-name">${esc(L(d.name))}</span>`;
      b.addEventListener("click", () => set(designPatch(d)));
      dg.append(b);
    });
    const fontOpt = (list, f, sample, key, css) => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "font-opt"; b.setAttribute("role", "radio"); b.dataset.font = f.id;
      b.innerHTML = `<span class="font-sample" lang="ar" dir="rtl"></span><span class="font-name">${esc(L(f.name))}</span>`;
      const sp = b.querySelector(".font-sample");
      sp.textContent = sample; if (css) whenNear(b, () => { sp.style.fontFamily = css; });
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
    const bc = $("#borderChips"); bc.innerHTML = "";
    D.BORDERS.forEach(bd => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "chip"; b.setAttribute("role", "radio"); b.dataset.border = bd.id;
      b.innerHTML = `<span class="chip-border"></span><span>${esc(L(bd.name))}</span>`;
      b.addEventListener("click", () => set({ border: bd.id }));
      bc.append(b);
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
    // The adhkar list uses the card's own font, so no second Arabic font has to download.
    $("#dhikrList").style.setProperty("--card-ar-font", (D.FONTS.find(f => f.id === state.font) || D.FONTS[0]).css);
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
    check("#colsGroup button", "cols", state.cols);
    const narrow = maxCols() < 3;
    $('#colsGroup [data-cols="3"]').disabled = narrow;
    $("#colsNote").textContent = narrow && state.cols === "3" ? t("cols3Off") : "";
    $("#optColRule").checked = !!state.colRule;
    $("#colRuleRow").hidden = state.cols === "1";
    check("#borderChips .chip", "border", state.border);
    const bcol = state.borderColor || th.accent;
    document.querySelectorAll("#borderChips .chip-border").forEach(el => {
      const id = el.parentElement.dataset.border;
      const bd = D.borderSVG(id, { w: 794, h: 1123, u: 1, color: bcol, weight: state.borderWeight, gap: 18 });
      // Show a close-up of the corner (the top of the arch for the mihrab).
      const vb = id === "mihrab" ? "322 0 150 96" : "0 0 150 96";
      el.innerHTML = bd ? bd.svg.replace(/ width="[\d.]+" height="[\d.]+" viewBox="[^"]+"/, ` viewBox="${vb}" preserveAspectRatio="xMidYMin slice"`) : "";
    });
    $("#borderOpts").hidden = state.border === "none";
    $("#borderColor").value = bcol;
    check("#borderWeightGroup button", "weight", state.borderWeight);
    $("#borderGap").value = state.borderGap;
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
        <button type="button" class="grip" aria-label="${esc(t("drag"))}" aria-keyshortcuts="ArrowUp ArrowDown"><svg><use href="#grip"/></svg></button>
        <div class="row-text">
          <div class="row-ar" lang="ar"></div>
          <div class="row-meta"><span>${state.lang === "ar" || state.lang === "bn" ? num(a.id) : "#" + a.id}</span>${a.count ? `<span>${t("times")(a.count)}</span>` : ""}${a.times ? `<span class="row-time">${esc(t(a.times === "morning" ? "modeMorning" : "modeEvening"))}</span>` : ""}${a.source ? `<span class="row-src">${esc(state.lang === "ar" || state.lang === "ur" ? a.source.ar : a.source.en)}</span>` : ""}</div>
        </div>
        <input type="checkbox" class="switch" aria-label="${t("include")}" ${off ? "" : "checked"}>`;
      li.querySelector(".row-ar").textContent = textFor(a).ar;
      li.querySelector(".grip").addEventListener("keydown", e => {
        if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
        e.preventDefault(); moveDhikr(id, e.key === "ArrowUp" ? -1 : 1);
      });
      li.querySelector(".switch").addEventListener("change", e => {
        const offSet = new Set(state.off);
        e.target.checked ? offSet.delete(id) : offSet.add(id);
        set({ off: [...offSet] });
      });
      list.append(li);
    });
  }


  // Keyboard reorder: arrow keys on the grip move the dhikr up or down.
  function moveDhikr(id, d) {
    const i = state.order.indexOf(id), j = i + d;
    if (i < 0 || j < 0 || j >= state.order.length) return;
    const order = state.order.slice();
    [order[i], order[j]] = [order[j], order[i]];
    state.order = order; save();
    renderControls(); renderList(); renderCard();
    const g = document.querySelector(`#dhikrList [data-id="${id}"] .grip`);
    if (g) g.focus();
    const live = $("#srLive");
    if (live) live.textContent = t("moved")(num(j + 1), num(order.length));
  }

  /* ---------- Pages ---------- */
  const PAGE = { a5: [559, 794], a4: [794, 1123], a3: [1123, 1587], phone: [540, 1170], square: [600, 600], story: [540, 960] };
  const SOCIAL = ["phone", "square", "story"];
  const SITE = "https://aladhkaar.com/";
  const MARK = `<svg class="card-mark" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 2l3.1 6.6L26 6l-2.6 6.9L30 16l-6.6 3.1L26 26l-6.9-2.6L16 30l-3.1-6.6L6 26l2.6-6.9L2 16l6.6-3.1L6 6l6.9 2.6z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="16" cy="16" r="4.2" fill="currentColor"/></svg>`;
  const TEXT = { m: 26, l: 34, xl: 44 };
  let pageW = 794, pageH = 1123, scaleNow = 1;

  // Columns: "auto" lets the card choose 1 or 2. Three columns only on pages wide enough for them.
  const maxCols = () => ["a4", "a3"].includes(state.pageSize) ? 3 : 2;
  const pickedCols = () => state.cols === "auto" ? 0 : Math.min(Number(state.cols), maxCols());
  function setCols(list, n) { list.classList.toggle("cols-2", n === 2); list.classList.toggle("cols-3", n === 3); }

  // The border is drawn once per render and shared by every page.
  let borderCache = { key: "", val: null };
  function borderFor() {
    if (!state.border || state.border === "none") return null;
    const opts = { w: pageW, h: pageH, u: pageW / 794, color: state.borderColor || currentTheme().accent, weight: state.borderWeight, gap: state.borderGap };
    const key = state.border + JSON.stringify(opts);
    if (borderCache.key !== key) borderCache = { key, val: D.borderSVG(state.border, opts) };
    return borderCache.val;
  }

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

  function newPage(first, into) {
    const { title, isLatin } = cardTitle();
    const card = document.createElement("article");
    card.className = "card"; card.dir = "rtl"; card.lang = "ar";
    applyCardDesign(card, first);
    const pat = D.PATTERNS.find(p => p.id === state.pattern) || D.PATTERNS[0];
    const fig = first && D.FIGURES.find(f => f.id === state.figure && f.id !== "none");
    const bd = borderFor();
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
      (bd ? `<div class="card-border">${bd.svg}</div>` : "") +
      (fig ? `<div class="card-figure">${D.figureSVG(fig.id, state.pose)}</div>` : "") +
      (state.credit ? `<div class="card-credit" dir="ltr">aladhkaar.com</div>` : "") +
      `<div class="card-inner">${head}<div class="card-body"><ol class="card-list${state.numbers ? "" : " no-num"}${state.colRule ? " col-rule" : ""}"></ol></div></div>`;
    (card.querySelector(".card-title") || card.querySelector(".card-runtitle")).textContent = title;
    if (into) { into.append(card); return card; }
    const wrap = document.createElement("div");
    wrap.className = "page-wrap";
    wrap.append(card);
    $("#pages").append(wrap);
    if (fig) positionFigure(card);
    return card;
  }

  /* Fast layout. Laying out the real pages once per dhikr and per tried text size was the slowest
     part of the editor. Instead, hidden "probe" pages hold every dhikr at once: one layout gives the
     height of each dhikr and the room on a page, and the pages are worked out from those numbers.
     The pages that are finally drawn are checked for overflow; if a page does not fit, the exact
     (slow) method runs instead, so nothing is ever cut off. */
  const listOf = c => c.querySelector(".card-list");
  const bodyOf = c => c.querySelector(".card-body");
  const overflows = c => listOf(c).scrollHeight > bodyOf(c).clientHeight + 1;
  function setupPage(card, fs, cols) { card.style.setProperty("--fs", fs + "px"); setCols(listOf(card), cols); }

  function makeProbe(items, foot) {
    const host = document.createElement("div");
    host.className = "page-probe"; host.setAttribute("aria-hidden", "true");
    $("#pages").parentElement.append(host);
    const listHTML = items.map((a, i) => itemHTML(a, i + 1)).join("");
    const make = (first, withItems) => {
      const c = newPage(first, host);
      if (withItems) listOf(c).innerHTML = listHTML;
      if (foot) c.querySelector(".card-inner").insertAdjacentHTML("beforeend", foot);
      return c;
    };
    // a: first page, b: later pages (no figure, short running head). Only a figure changes the width.
    const a = make(true, true);
    const b = make(false, D.FIGURES.some(f => f.id === state.figure && f.id !== "none"));
    const cache = new Map();
    const rect = el => el.getBoundingClientRect().height;
    const outer = el => { const cs = getComputedStyle(el); return rect(el) + parseFloat(cs.marginTop) + parseFloat(cs.marginBottom); };
    function measure(fs, cols) {
      const key = fs + "|" + cols;
      if (cache.has(key)) return cache.get(key);
      [a, b].forEach(c => setupPage(c, fs, cols));
      const heights = c => {
        const lis = [...listOf(c).children];
        if (!lis.length) return null;
        const hs = lis.map(rect);
        hs[hs.length - 1] += line; // the last dhikr has no bottom line; give it one like the rest
        return hs;
      };
      const line = parseFloat(getComputedStyle(listOf(a).firstElementChild).borderBottomWidth) || 0;
      const room = c => {
        const f = c.querySelector(".card-foot");
        const withFoot = bodyOf(c).clientHeight;
        return { full: f ? withFoot + outer(f) : withFoot, foot: withFoot };
      };
      const hA = heights(a);
      const m = { line, hA, hB: heights(b) || hA, rA: room(a), rB: room(b) };
      cache.set(key, m);
      return m;
    }
    // Do these dhikr fit in a page body of height H, in this many columns?
    function fits(hs, line, H, cols) {
      const lim = H + 1;
      if (cols === 1) return hs.reduce((x, y) => x + y, 0) - line <= lim;
      let used = 1, cur = 0;
      for (let i = 0; i < hs.length; i++) {
        const h = i === hs.length - 1 ? hs[i] - line : hs[i];
        if (h > lim) return false;
        if (cur > 0 && cur + h > lim) { used++; cur = h; } else cur += h;
      }
      return used <= cols;
    }
    // Same rules as the exact method: fill each page in order, at least one dhikr per page, footer last.
    const plan = (fs, cols) => planFrom(measure(fs, cols), cols);
    function planFrom(m, cols) {
      const pagesOut = [];
      let cur = [];
      const hOf = (i, first) => (first ? m.hA : m.hB)[i];
      for (let i = 0; i < items.length; i++) {
        const first = pagesOut.length === 0;
        const next = cur.concat(i);
        if (cur.length && !fits(next.map(j => hOf(j, first)), m.line, (first ? m.rA : m.rB).full, cols)) {
          pagesOut.push(cur); cur = [i];
        } else cur = next;
      }
      let footPage = false;
      if (foot) {
        const first = pagesOut.length === 0;
        if (!fits(cur.map(j => hOf(j, first)), m.line, (first ? m.rA : m.rB).foot, cols)) footPage = true;
      }
      pagesOut.push(cur);
      if (footPage) pagesOut.push([]);
      return { pages: pagesOut, footPage };
    }
    // Guess the largest size that fits, from two measured sizes: each dhikr's height, and the room
    // on a page, are followed from one size to the other, so few sizes have to be laid out.
    const guesses = new Map();
    function guess(fs0, cols, maxPages) {
      const k = fs0 + "|" + cols + "|" + maxPages;
      if (!guesses.has(k)) guesses.set(k, guessNow(fs0, cols, maxPages));
      return guesses.get(k);
    }
    function guessNow(fs0, cols, maxPages) {
      const at = model => {
        let lo = fs0, hi = fs0 * 6;
        if (planFrom(model(lo), cols).pages.length > maxPages) return 0;
        for (let i = 0; i < 30; i++) { const mid = (lo + hi) / 2; planFrom(model(mid), cols).pages.length <= maxPages ? (lo = mid) : (hi = mid); }
        return lo;
      };
      const m0 = measure(fs0, cols);
      // First guess: heights grow with the square of the size.
      const sq = fs => { const k = (fs / fs0) ** 2; return { line: m0.line, hA: m0.hA.map(h => h * k), hB: m0.hB.map(h => h * k), rA: m0.rA, rB: m0.rB }; };
      const g1 = at(sq);
      if (!g1 || Math.abs(g1 - fs0) < 0.05) return g1;
      const m1 = measure(g1, cols), L = Math.log(g1 / fs0);
      const grow = (a, b, fs) => { const p = a > 0 && b > 0 ? Math.log(b / a) / L : 2; return b * (fs / g1) ** p; };
      const lin = (a, b, fs) => b + (b - a) * (fs - g1) / (g1 - fs0);
      const room = (a, b, fs) => ({ full: lin(a.full, b.full, fs), foot: lin(a.foot, b.foot, fs) });
      return at(fs => ({ line: m1.line, hA: m1.hA.map((h, i) => grow(m0.hA[i], h, fs)), hB: m1.hB.map((h, i) => grow(m0.hB[i], h, fs)),
        rA: room(m0.rA, m1.rA, fs), rB: room(m0.rB, m1.rB, fs) }));
    }
    return {
      count: (fs, cols) => plan(fs, cols).pages.length,
      guess,
      plan,
      remove: () => host.remove()
    };
  }

  // Draw the pages from a plan, then check them. Returns false if any page overflows.
  function drawPlan(items, foot, fs, cols, pl) {
    $("#pages").innerHTML = "";
    const cards = pl.pages.map((idx, p) => {
      const card = newPage(p === 0); setupPage(card, fs, cols);
      listOf(card).innerHTML = idx.map(i => itemHTML(items[i], i + 1)).join("");
      return card;
    });
    if (foot) cards[cards.length - 1].querySelector(".card-inner").insertAdjacentHTML("beforeend", foot);
    return !cards.some(c => listOf(c).children.length > 1 && overflows(c))
      && !(pl.footPage && overflows(cards[cards.length - 1]));
  }

  function paginate(items, foot, fs, cols) {
    $("#pages").innerHTML = "";
    const over = overflows;
    const addFoot = c => c.querySelector(".card-inner").insertAdjacentHTML("beforeend", foot);
    const setup = c => setupPage(c, fs, cols);
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

  let minPagesNeeded = 1, layoutMemo = null, titleTimer = 0;
  function renderCard() {
    if (!cardDrawn || document.body.dataset.step === "start") { cardDirty = true; return; }
    if (!cardFontsReady()) {
      const key = JSON.stringify(cardFontSpecs());
      if (!fontWait || fontWait.key !== key) {
        fontWait = { key };
        loadCardFonts().then(() => { if (fontWait && fontWait.key === key) { fontWait = null; renderCard(); } });
      }
    }
    const pages = $("#pages");
    pages.innerHTML = "";
    [pageW, pageH] = PAGE[state.pageSize] || PAGE.a4;
    const u = pageW / 794;
    // A dhikr tied to one time of day stays off the other single-time card.
    const items = state.order.filter(id => !state.off.includes(id)).map(byId)
      .filter(a => !a.times || state.mode === "both" || a.times === state.mode);
    const foot = footHTML();
    let fitN = Math.max(1, Math.min(8, state.fitPages || 1));
    // Never shrink below a readable size: if the list can't fit, use more pages.
    const minFs = 11 * u;
    const fixed = pickedCols();
    // Changes that don't move the text (colors, patterns, the figure's place) reuse the last layout.
    const memoKey = items.length ? JSON.stringify([items.map((a, i) => itemHTML(a, i + 1)).join(""), foot, state.pageSize, state.textSize,
      fitN, fixed, cardTitle().title, state.title == null, state.mode, state.lang, state.font, state.titleFont, state.figure, state.figSize,
      state.pattern === "none" ? "" : state.place, state.border, state.borderWeight, state.borderGap]) : "";
    const memo = layoutMemo && layoutMemo.key === memoKey ? layoutMemo : null;
    if (memo) {
      minPagesNeeded = memo.need; fitN = memo.fitN;
      if (!drawPlan(items, foot, memo.fs, memo.cols, memo.plan)) layoutMemo = null;
    }
    const probe = items.length && !(memo && layoutMemo) ? makeProbe(items, foot) : null;
    if (memo && layoutMemo) { /* drawn from the last layout */ }
    else try {
      layoutMemo = null;
      if (items.length && state.textSize === "fit") {
        const need = fixed ? probe.count(minFs, fixed) : Math.min(probe.count(minFs, 2), probe.count(minFs, 1));
        minPagesNeeded = need;
        fitN = Math.min(8, Math.max(fitN, need));
      }
      // Largest text size (to 0.1px) that keeps the card within maxPages. A first guess from the
      // measured heights narrows the range, so only a few sizes have to be laid out.
      const search = (cols, lo, hi, maxPages) => {
        const ok = fs => probe.count(fs, cols) <= maxPages;
        let good = lo, bad = hi;
        const g = probe.guess(minFs, cols, maxPages);
        if (g > lo && g < hi) {
          let step = g * 0.01, x = Math.max(lo, g - step);
          if (ok(x)) {
            good = x;
            let y = Math.min(hi, g + step);
            while (y < hi && ok(y)) { good = y; step *= 2; y = Math.min(hi, y + step); }
            if (y < hi) bad = y;
          } else {
            bad = x;
            let y = x - step;
            while (y > lo && !ok(y)) { bad = y; step *= 2; y -= step; }
            if (y > lo) good = y;
          }
        }
        if (good === lo && !ok(lo)) return lo;
        while (bad - good > 0.1) { const mid = (good + bad) / 2; ok(mid) ? (good = mid) : (bad = mid); }
        const top = Math.floor(bad * 10) / 10;
        return top > good && ok(top) ? top : good;
      };
      const best = (lo, hi, maxPages) => {
        if (fixed) return { fs: search(fixed, lo, hi, maxPages), cols: fixed };
        // When the guesses are far apart, the choice between one and two columns is already clear.
        const g1 = probe.guess(minFs, 1, maxPages), g2 = probe.guess(minFs, 2, maxPages);
        if (g1 > 21 * u * 1.06 || (g1 && g2 < g1 * 1.12 * 0.92)) return { fs: search(1, lo, hi, maxPages), cols: 1 };
        if (g1 < 21 * u * 0.94 && g2 > g1 * 1.12 * 1.08) return { fs: search(2, lo, hi, maxPages), cols: 2 };
        const one = search(1, lo, hi, maxPages);
        let b = { fs: one, cols: 1 };
        if (one < 21 * u) {
          const two = search(2, lo, hi, maxPages);
          if (two > one * 1.12) b = { fs: two, cols: 2 };
        }
        return b;
      };
      const draw = (fs, cols, exact) => {
        const pl = probe.plan(fs, cols);
        if (!drawPlan(items, foot, fs, cols, pl)) { exact(); return; }
        if (cardFontsReady()) layoutMemo = { key: memoKey, need: minPagesNeeded, fitN, fs, cols, plan: pl };
      };

      if (!items.length) {
        const card = newPage(true);
        card.querySelector(".card-body").innerHTML = `<p class="card-en" style="text-align:center;margin-top:40%">${esc(t("emptyCard"))}</p>`;
        card.querySelector(".card-inner").insertAdjacentHTML("beforeend", foot);
      } else if (state.textSize === "fit" && fitN === 1) {
        const b = best(8 * u, 36 * u, 1);
        const fs = Math.floor(b.fs * 10) / 10;
        draw(fs, b.cols, () => {
          $("#pages").innerHTML = "";
          const card = newPage(true);
          listOf(card).innerHTML = items.map((a, i) => itemHTML(a, i + 1)).join("");
          card.querySelector(".card-inner").insertAdjacentHTML("beforeend", foot);
          fitCard(card, u, fixed);
        });
      } else if (state.textSize === "fit") {
        const b = best(minFs, 60 * u, fitN);
        const fs = Math.floor(b.fs * 10) / 10;
        draw(fs, b.cols, () => paginate(items, foot, fs, b.cols));
      } else {
        const fs = TEXT[state.textSize] * u, cols = fixed || (state.textSize === "m" ? 2 : 1);
        draw(fs, cols, () => paginate(items, foot, fs, cols));
      }
    } finally { if (probe) probe.remove(); }
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
    // Space around the text: wider for the frame pattern, and always clear of the border.
    const framed = pat.id !== "none" && state.place === "frame";
    let [pt, ps, pb] = (framed ? [92, 90, 80] : [72, 68, 60]).map(v => v * u);
    if (pat.id !== "none" && state.place === "bottom") pb = 112 * u;
    let edge = (framed ? 56 : 30) * u, figTop = edge, figBot = edge;
    const bd = borderFor();
    if (bd) {
      pt = Math.max(pt, bd.reach.t + 28 * u); ps = Math.max(ps, bd.reach.s + 26 * u); pb = Math.max(pb, bd.reach.b + 24 * u);
      edge = Math.max(edge, bd.reach.s + 12 * u);
      figTop = Math.max(edge, bd.reach.t + 12 * u); figBot = Math.max(edge, bd.reach.b + 12 * u);
    }
    card.style.setProperty("--pad-t", pt + "px"); card.style.setProperty("--pad-s", ps + "px"); card.style.setProperty("--pad-b", pb + "px");
    card.style.setProperty("--fig-pad", `calc(var(--fig-w) + ${edge + (framed ? 6 : 10) * u}px)`);
    card.classList.toggle("bordered", !!bd);
    Object.assign(card.dataset, { edge, figTop, figBot });
  }
  function isDark(hex) {
    const [r, g, b] = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.5;
  }

  const figEdge = card => Number(card.dataset.edge);
  const figSpan = card => pageH - Number(card.dataset.figTop) - Number(card.dataset.figBot) - Number(card.dataset.figH);
  function positionFigure(card) {
    const el = card.querySelector(".card-figure");
    if (!el) return;
    const edge = figEdge(card);
    el.style.top = Number(card.dataset.figTop) + figSpan(card) * state.figY + "px";
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
    const edge = figEdge(card), top = Number(card.dataset.figTop), span = figSpan(card);
    const rect = card.getBoundingClientRect();
    let side = state.figSide;
    const move = ev => {
      state.figY = Math.min(1, Math.max(0, y0 + (ev.clientY - startY) / scaleNow / span));
      side = ev.clientX < rect.left + rect.width / 2 ? "left" : "right";
      el.style.top = top + span * state.figY + "px";
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
  function fitCard(card, u, fixed) {
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
    let best;
    if (fixed) { setCols(list, fixed); best = { cols: fixed, fs: search() }; }
    else {
      setCols(list, 1);
      const one = search();
      best = { cols: 1, fs: one };
      if (one < 21 * u) {
        setCols(list, 2);
        const two = search();
        if (two > one * 1.12) best = { cols: 2, fs: two };
      }
    }
    setCols(list, best.cols);
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
    $("#btnChangeDesign").addEventListener("click", () => showStep("start"));
    $("#btnMore").addEventListener("click", () => {
      const full = document.body.classList.contains("quick");
      setMode(full, true);
      if (full) requestAnimationFrame(() => $("#btnMore").scrollIntoView({ behavior: "smooth", block: "start" }));
    });
    $("#langSelect").addEventListener("change", e => { state.lang = e.target.value; try { localStorage.setItem("aladhkaar:lang", state.lang); } catch (_) {} save(); applyLang(); render(); });
    $("#titleInput").addEventListener("input", e => {
      const v = e.target.value;
      state.title = v.trim() === "" || v === autoTitle()[titleLang()] ? null : v;
      save();
      clearTimeout(titleTimer); titleTimer = setTimeout(renderCard, 150);
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
    $("#colsGroup").addEventListener("click", e => { const b = e.target.closest("button"); if (b && !b.disabled) set({ cols: b.dataset.cols }); });
    $("#optColRule").addEventListener("change", e => set({ colRule: e.target.checked }));
    $("#borderColor").addEventListener("input", e => set({ borderColor: e.target.value }));
    $("#btnBorderAccent").addEventListener("click", () => set({ borderColor: null }));
    $("#borderWeightGroup").addEventListener("click", e => { const b = e.target.closest("button"); if (b) set({ borderWeight: b.dataset.weight }); });
    $("#borderGap").addEventListener("input", e => { state.borderGap = Number(e.target.value); save(); renderCard(); });
    $("#btnAll").addEventListener("click", () => set({ off: [] }));
    $("#btnNone").addEventListener("click", () => set({ off: [...state.order] }));
    $("#btnReset").addEventListener("click", () => set({ order: DATA.adhkar.map(a => a.id) }));


    document.querySelectorAll(".tab").forEach(b => b.addEventListener("click", () => setView(b.dataset.view)));
    const dlg = $("#exportDialog");
    $("#btnExport").addEventListener("click", () => {
      const n = document.querySelectorAll("#pages .card").length;
      const sizeName = pageSizeName(state.pageSize);
      $("#exportSummary").textContent = t("exSummary")(sizeName, n);
      $("#exportStatus").textContent = "";
      Exporter.preload(true);
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
  }

  // Drag to reorder: the drag library loads after the card is on screen.
  function enableDrag() {
    Exporter.loadScript("vendor/Sortable.min.js").then(() => Sortable.create($("#dhikrList"), {
      handle: ".grip", animation: 160, ghostClass: "sortable-ghost", chosenClass: "sortable-chosen",
      onEnd: () => {
        state.order = [...document.querySelectorAll("#dhikrList .dhikr-row")].map(li => Number(li.dataset.id));
        save(); renderControls(); renderCard();
      }
    })).catch(() => {});
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
      Exporter.preload(false);
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

  function applyCardState(s) {
    const lang = state.lang;
    if (!s.v) s = Object.assign({ order: DATA.adhkar.map(a => a.id) }, LEGACY_DEFAULTS, s);
    state = Object.assign(defaults(), clean(s), { lang });
    fixOrder(); save(); applyLang(); renderControls(); renderList();
    hasSaved = true;
  }
  function applyCard(s) {
    const lang = state.lang;
    if (!s.v) s = Object.assign({ order: DATA.adhkar.map(a => a.id) }, LEGACY_DEFAULTS, s);
    state = Object.assign(defaults(), clean(s), { lang });
    fixOrder(); save(); applyLang(); render();
    hasSaved = true;
    showStep("edit");
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
    let full = false;
    try { full = localStorage.getItem(MODE_KEY) === "full"; } catch (_) {}
    setMode(full, false);
    renderControls(); renderList();
    // A shared card or link opens straight in the editor; otherwise people choose a design first.
    const direct = /^#(card=|edit)/.test(location.hash);
    if (!direct) { showStep("start"); openSharedCard(); }
    document.body.classList.remove("booting");
    // For a returning visitor the card's fonts start loading now, so "Continue" draws the card at once.
    // A first-time visitor will pick a design first, so the pictures of the designs come first.
    const fontsIn = direct || hasSaved ? Promise.race([loadCardFonts(), new Promise(ok => setTimeout(ok, 2500))]) : null;
    if (direct) {
      if (location.hash === "#edit") history.replaceState(null, "", location.pathname + location.search);
      else { const m = location.hash.match(/^#card=([\w-]+)/); try { applyCardState(dec(m[1])); toast(t("sharedOpened")); } catch (_) { toast(t("badLink")); } history.replaceState(null, "", location.pathname + location.search); }
      await fontsIn;
      showStep("edit");
    }
    if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    }
  }
  boot();
})();
