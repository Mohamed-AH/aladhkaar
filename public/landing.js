/* Landing page: language, rotating texts, "continue your card". */
(function () {
  "use strict";
  const LANG_KEY = "aladhkaar:lang";
  const RTL = ["ar", "ur"];

  const T = {
    en: {
      title: "Adhkar Maker · Morning and evening adhkar card",
      appName: "Adhkar Maker", makeCard: "Make a card", heroEyebrow: "Morning & evening adhkar",
      heroLede: "The adhkar of the morning and evening from the Quran and Sunnah, each with its reference, on a card you print and keep where you will see it.",
      getPdf: "Get the ready card (PDF)", makeOwn: "Make your own", inProgress: "You have a card in progress.", continueCard: "Continue your card",
      alsoImages: "Also as images:", page1: "page 1", page2: "page 2", free: "Free, no sign-up.",
      tag: "23 adhkar · A4 · 2 pages · with references", previewAlt: "The ready morning and evening adhkar card",
      howEyebrow: "How it works", howTitle: "A card on the wall, a habit in the heart",
      s1h: "Choose your card", s1p: "Take the ready card, or open the maker to pick which adhkar to include, their order, colours and size.",
      s2h: "Print it or keep it on your phone", s2p: "Save as PDF or image. Put it where you pray, by the bed, or on the fridge for the family.",
      s3h: "Read it at its time", s3p: "Morning after Fajr, evening after ʿAsr. The card stays the same, so the words soon become yours.",
      whyEyebrow: "Why the morning and evening adhkar", whyTitle: "Commanded by Allah, kept by His Messenger", another: "Show other texts",
      kQuran: "Qurʾān", kHadith: "Hadith", kSalaf: "From the Salaf",
      habitEyebrow: "Make it a habit",
      t1b: "Tie it to a prayer you already pray", t1s: "Sit after Fajr and after ʿAsr before you reach for your phone.",
      t2b: "Start with what you can keep", t2s: "Make a short card with a few adhkar, then add more once it holds. The maker lets you switch any off.",
      t3b: "Keep it in sight", t3s: "A printed card where you pray is a reminder that needs no notification.",
      t4b: "Read together", t4s: "Reading aloud with the family helps everyone learn the words.",
      morning: "Morning: after Fajr, before sunrise.", evening: "Evening: after ʿAsr, before sunset.",
      famEyebrow: "For families and children", famTitle: "Let the little ones grow up with these words",
      famLede: "Add a child figure making duʿāʾ, choose soft colours and bigger text, and put the card in their room. Children learn by hearing, so read it with them.",
      famBtn: "Design a card for your child",
      srcEyebrow: "Our sources", srcTitle: "References",
      srcLede: "Following the way of scholars such as Ibn Kathīr, we give the reference for each text so you can look it up and check it yourself. Where we cite a grading, we name the scholar who gave it. If you find a mistake, please tell us.",
      srcTr: "Translations of the meanings: Quran from Saheeh International; hadith and the words of the Salaf in English.",
      endTitle: "Start tomorrow morning", endLede: "Print the card tonight, keep it where you pray, and read it after Fajr.", getCard: "Get the ready card",
      fMaker: "Card maker", fSuggest: "Suggest a dhikr", fContact: "Contact"
    },
    ar: {
      title: "صانع الأذكار · بطاقة أذكار الصباح والمساء",
      appName: "صانع الأذكار", makeCard: "صمّم بطاقة", heroEyebrow: "أذكار الصباح والمساء",
      heroLede: "أذكار الصباح والمساء من القرآن والسنة، كل ذكر مع مصدره، في بطاقة تطبعها وتضعها حيث تراها.",
      getPdf: "حمّل البطاقة الجاهزة (PDF)", makeOwn: "صمّم بطاقتك", inProgress: "لديك بطاقة لم تكملها.", continueCard: "أكمل بطاقتك",
      alsoImages: "أو كصور:", page1: "الصفحة ١", page2: "الصفحة ٢", free: "مجانًا، بلا تسجيل.",
      tag: "٢٣ ذكرًا · A4 · صفحتان · مع المصادر", previewAlt: "بطاقة أذكار الصباح والمساء الجاهزة",
      howEyebrow: "كيف تعمل", howTitle: "بطاقة على الجدار، وعادة في القلب",
      s1h: "اختر بطاقتك", s1p: "خذ البطاقة الجاهزة، أو افتح المصمّم واختر الأذكار وترتيبها وألوانها وحجمها.",
      s2h: "اطبعها أو احفظها في هاتفك", s2p: "احفظها PDF أو صورة، وضعها في مكان صلاتك أو بجانب السرير أو على الثلاجة لأهل البيت.",
      s3h: "اقرأها في وقتها", s3p: "الصباح بعد الفجر، والمساء بعد العصر. البطاقة لا تتغير، فتحفظ الكلمات مع الأيام.",
      whyEyebrow: "لماذا أذكار الصباح والمساء", whyTitle: "أمر بها الله، وحافظ عليها رسوله", another: "نصوص أخرى",
      kQuran: "القرآن الكريم", kHadith: "الحديث النبوي", kSalaf: "من أقوال السلف",
      habitEyebrow: "اجعلها عادة",
      t1b: "اربطها بصلاة تصليها", t1s: "اجلس بعد الفجر وبعد العصر قبل أن تمسك هاتفك.",
      t2b: "ابدأ بما تستطيع المداومة عليه", t2s: "اصنع بطاقة قصيرة ببعض الأذكار، ثم زد عليها إذا ثبتّ. يمكنك في المصمّم إخفاء ما شئت.",
      t3b: "اجعلها أمام عينك", t3s: "بطاقة مطبوعة في مكان صلاتك تذكّرك دون أي إشعار.",
      t4b: "اقرؤوها معًا", t4s: "القراءة بصوتٍ مسموع مع الأهل تعين الجميع على حفظ الكلمات.",
      morning: "الصباح: بعد الفجر وقبل طلوع الشمس.", evening: "المساء: بعد العصر وقبل غروب الشمس.",
      famEyebrow: "للأسرة والأطفال", famTitle: "ليكبر الصغار على هذه الكلمات",
      famLede: "أضف رسم طفل يدعو، واختر ألوانًا هادئة وخطًا أكبر، وضع البطاقة في غرفته. الأطفال يتعلمون بالسماع، فاقرأها معهم.",
      famBtn: "صمّم بطاقة لطفلك",
      srcEyebrow: "مصادرنا", srcTitle: "المراجع",
      srcLede: "على طريقة أهل العلم كابن كثير، نذكر مصدر كل نص لتراجعه وتتحقق منه بنفسك. وإذا نقلنا حكمًا على حديث ذكرنا من قاله. وإن وجدت خطأ فأخبرنا.",
      srcTr: "",
      endTitle: "ابدأ من صباح الغد", endLede: "اطبع البطاقة الليلة، وضعها في مكان صلاتك، واقرأها بعد الفجر.", getCard: "حمّل البطاقة الجاهزة",
      fMaker: "مصمّم البطاقات", fSuggest: "اقترح ذكرًا", fContact: "تواصل معنا"
    },
    ur: {
      title: "اذکار کارڈ ساز · صبح و شام کے اذکار کا کارڈ",
      appName: "اذکار کارڈ ساز", makeCard: "کارڈ بنائیں", heroEyebrow: "صبح و شام کے اذکار",
      heroLede: "قرآن و سنت سے صبح و شام کے اذکار، ہر ذکر اپنے حوالے کے ساتھ، ایک کارڈ پر جسے آپ پرنٹ کر کے ایسی جگہ رکھیں جہاں نظر پڑے۔",
      getPdf: "تیار کارڈ لیں (PDF)", makeOwn: "اپنا کارڈ بنائیں", inProgress: "آپ کا ایک کارڈ ادھورا ہے۔", continueCard: "اپنا کارڈ مکمل کریں",
      alsoImages: "تصویروں کی صورت میں بھی:", page1: "صفحہ ۱", page2: "صفحہ ۲", free: "مفت، بغیر رجسٹریشن۔",
      tag: "۲۳ اذکار · A4 · ۲ صفحات · حوالوں کے ساتھ", previewAlt: "صبح و شام کے اذکار کا تیار کارڈ",
      howEyebrow: "طریقہ", howTitle: "دیوار پر ایک کارڈ، دل میں ایک عادت",
      s1h: "اپنا کارڈ چنیں", s1p: "تیار کارڈ لیں، یا کارڈ ساز کھول کر اذکار، ان کی ترتیب، رنگ اور سائز چنیں۔",
      s2h: "پرنٹ کریں یا فون میں رکھیں", s2p: "PDF یا تصویر محفوظ کریں۔ نماز کی جگہ، بستر کے پاس یا گھر والوں کے لیے فریج پر لگائیں۔",
      s3h: "وقت پر پڑھیں", s3p: "صبح فجر کے بعد، شام عصر کے بعد۔ کارڈ وہی رہتا ہے، اس لیے الفاظ جلد یاد ہو جاتے ہیں۔",
      whyEyebrow: "صبح و شام کے اذکار کیوں", whyTitle: "اللہ نے حکم دیا، اور اس کے رسول نے پابندی کی", another: "دوسری عبارتیں دکھائیں",
      kQuran: "قرآن کریم", kHadith: "حدیث نبوی", kSalaf: "اقوال سلف",
      habitEyebrow: "اسے عادت بنائیں",
      t1b: "اسے اس نماز سے جوڑیں جو آپ پڑھتے ہیں", t1s: "فجر اور عصر کے بعد فون اٹھانے سے پہلے بیٹھ جائیں۔",
      t2b: "اتنے سے شروع کریں جتنا نبھا سکیں", t2s: "چند اذکار کا مختصر کارڈ بنائیں، جم جائے تو اور شامل کریں۔ کارڈ ساز میں کوئی بھی ذکر ہٹا سکتے ہیں۔",
      t3b: "نظر کے سامنے رکھیں", t3s: "نماز کی جگہ پر پرنٹ شدہ کارڈ ایسی یاد دہانی ہے جسے کسی نوٹیفکیشن کی ضرورت نہیں۔",
      t4b: "مل کر پڑھیں", t4s: "گھر والوں کے ساتھ بلند آواز سے پڑھنے سے سب کو الفاظ یاد ہو جاتے ہیں۔",
      morning: "صبح: فجر کے بعد، طلوع آفتاب سے پہلے۔", evening: "شام: عصر کے بعد، غروب آفتاب سے پہلے۔",
      famEyebrow: "گھرانوں اور بچوں کے لیے", famTitle: "چھوٹے ان الفاظ کے ساتھ بڑے ہوں",
      famLede: "دعا کرتے بچے کی تصویر شامل کریں، ہلکے رنگ اور بڑا خط چنیں، اور کارڈ ان کے کمرے میں لگائیں۔ بچے سن کر سیکھتے ہیں، اس لیے ان کے ساتھ پڑھیں۔",
      famBtn: "اپنے بچے کے لیے کارڈ بنائیں",
      srcEyebrow: "ہمارے مآخذ", srcTitle: "حوالہ جات",
      srcLede: "ابن کثیر جیسے اہل علم کے طریقے پر ہم ہر عبارت کا حوالہ دیتے ہیں تاکہ آپ خود دیکھ کر تحقیق کر سکیں۔ جہاں کسی حدیث کا حکم نقل کریں، وہاں اس عالم کا نام دیتے ہیں۔ کوئی غلطی ملے تو ہمیں بتائیں۔",
      srcTr: "معانی کا ترجمہ: قرآن مولانا محمد جوناگڑھی (Quran.com سے)؛ احادیث اور اقوالِ سلف انگریزی میں۔",
      endTitle: "کل صبح سے شروع کریں", endLede: "آج رات کارڈ پرنٹ کریں، نماز کی جگہ رکھیں، اور فجر کے بعد پڑھیں۔", getCard: "تیار کارڈ لیں",
      fMaker: "کارڈ ساز", fSuggest: "ذکر تجویز کریں", fContact: "رابطہ"
    },
    id: {
      title: "Pembuat Kartu Dzikir · Kartu dzikir pagi dan petang",
      appName: "Pembuat Kartu Dzikir", makeCard: "Buat kartu", heroEyebrow: "Dzikir pagi & petang",
      heroLede: "Dzikir pagi dan petang dari Al-Qur'an dan Sunnah, masing-masing dengan rujukannya, dalam kartu yang Anda cetak dan letakkan di tempat yang terlihat.",
      getPdf: "Ambil kartu siap pakai (PDF)", makeOwn: "Buat sendiri", inProgress: "Anda punya kartu yang belum selesai.", continueCard: "Lanjutkan kartu Anda",
      alsoImages: "Juga sebagai gambar:", page1: "halaman 1", page2: "halaman 2", free: "Gratis, tanpa daftar.",
      tag: "23 dzikir · A4 · 2 halaman · dengan rujukan", previewAlt: "Kartu dzikir pagi dan petang siap pakai",
      howEyebrow: "Cara kerjanya", howTitle: "Kartu di dinding, kebiasaan di hati",
      s1h: "Pilih kartu Anda", s1p: "Ambil kartu siap pakai, atau buka pembuat kartu untuk memilih dzikir, urutan, warna, dan ukurannya.",
      s2h: "Cetak atau simpan di ponsel", s2p: "Simpan sebagai PDF atau gambar. Letakkan di tempat shalat, dekat tempat tidur, atau di kulkas untuk keluarga.",
      s3h: "Baca pada waktunya", s3p: "Pagi setelah Subuh, petang setelah Ashar. Kartunya tetap sama, sehingga kata-katanya cepat melekat.",
      whyEyebrow: "Mengapa dzikir pagi dan petang", whyTitle: "Diperintahkan Allah, dijaga oleh Rasul-Nya", another: "Tampilkan teks lain",
      kQuran: "Al-Qur'an", kHadith: "Hadits", kSalaf: "Perkataan Salaf",
      habitEyebrow: "Jadikan kebiasaan",
      t1b: "Kaitkan dengan shalat yang sudah Anda kerjakan", t1s: "Duduklah setelah Subuh dan Ashar sebelum meraih ponsel.",
      t2b: "Mulai dari yang bisa Anda jaga", t2s: "Buat kartu pendek berisi beberapa dzikir, lalu tambah setelah rutin. Anda bisa mematikan dzikir mana pun di pembuat kartu.",
      t3b: "Letakkan di depan mata", t3s: "Kartu tercetak di tempat shalat adalah pengingat tanpa notifikasi.",
      t4b: "Baca bersama", t4s: "Membaca dengan suara lantang bersama keluarga membantu semua menghafal.",
      morning: "Pagi: setelah Subuh, sebelum matahari terbit.", evening: "Petang: setelah Ashar, sebelum matahari terbenam.",
      famEyebrow: "Untuk keluarga dan anak", famTitle: "Biarkan si kecil tumbuh bersama kalimat ini",
      famLede: "Tambahkan gambar anak yang sedang berdoa, pilih warna lembut dan huruf lebih besar, lalu tempel kartu di kamarnya. Anak belajar dengan mendengar, maka bacalah bersamanya.",
      famBtn: "Buat kartu untuk anak Anda",
      srcEyebrow: "Sumber kami", srcTitle: "Rujukan",
      srcLede: "Mengikuti cara para ulama seperti Ibnu Katsir, kami mencantumkan rujukan setiap teks agar Anda dapat memeriksanya sendiri. Jika kami menukil penilaian hadits, kami sebutkan ulama yang menilainya. Jika menemukan kesalahan, mohon kabari kami.",
      srcTr: "Terjemahan makna: Al-Qur'an dari King Fahad Quran Complex (via Quran.com); hadits dan perkataan Salaf dalam bahasa Inggris.",
      endTitle: "Mulai besok pagi", endLede: "Cetak kartunya malam ini, letakkan di tempat shalat, dan baca setelah Subuh.", getCard: "Ambil kartu siap pakai",
      fMaker: "Pembuat kartu", fSuggest: "Usulkan dzikir", fContact: "Kontak"
    },
    ms: {
      title: "Pembuat Kad Zikir · Kad zikir pagi dan petang",
      appName: "Pembuat Kad Zikir", makeCard: "Buat kad", heroEyebrow: "Zikir pagi & petang",
      heroLede: "Zikir pagi dan petang daripada al-Quran dan Sunnah, setiap satu dengan rujukannya, pada kad yang anda cetak dan letak di tempat yang kelihatan.",
      getPdf: "Dapatkan kad sedia (PDF)", makeOwn: "Buat sendiri", inProgress: "Anda ada kad yang belum siap.", continueCard: "Sambung kad anda",
      alsoImages: "Juga sebagai gambar:", page1: "halaman 1", page2: "halaman 2", free: "Percuma, tanpa daftar.",
      tag: "23 zikir · A4 · 2 halaman · dengan rujukan", previewAlt: "Kad zikir pagi dan petang yang sedia",
      howEyebrow: "Cara ia berfungsi", howTitle: "Kad di dinding, amalan di hati",
      s1h: "Pilih kad anda", s1p: "Ambil kad sedia, atau buka pembuat kad untuk memilih zikir, susunan, warna dan saiznya.",
      s2h: "Cetak atau simpan dalam telefon", s2p: "Simpan sebagai PDF atau gambar. Letakkan di tempat solat, tepi katil, atau pada peti sejuk untuk keluarga.",
      s3h: "Baca pada waktunya", s3p: "Pagi selepas Subuh, petang selepas Asar. Kadnya kekal sama, jadi lafaznya cepat melekat.",
      whyEyebrow: "Mengapa zikir pagi dan petang", whyTitle: "Diperintah oleh Allah, dijaga oleh Rasul-Nya", another: "Tunjuk teks lain",
      kQuran: "Al-Quran", kHadith: "Hadis", kSalaf: "Kata-kata Salaf",
      habitEyebrow: "Jadikan amalan",
      t1b: "Kaitkan dengan solat yang sudah anda dirikan", t1s: "Duduk selepas Subuh dan Asar sebelum mencapai telefon.",
      t2b: "Mula dengan yang mampu diteruskan", t2s: "Buat kad pendek dengan beberapa zikir, kemudian tambah apabila sudah tetap. Pembuat kad membolehkan anda menutup mana-mana zikir.",
      t3b: "Letak di depan mata", t3s: "Kad bercetak di tempat solat ialah peringatan tanpa notifikasi.",
      t4b: "Baca bersama", t4s: "Membaca dengan suara lantang bersama keluarga membantu semua menghafal.",
      morning: "Pagi: selepas Subuh, sebelum matahari terbit.", evening: "Petang: selepas Asar, sebelum matahari terbenam.",
      famEyebrow: "Untuk keluarga dan kanak-kanak", famTitle: "Biar si kecil membesar bersama kalimah ini",
      famLede: "Tambah gambar kanak-kanak sedang berdoa, pilih warna lembut dan tulisan lebih besar, dan letak kad di biliknya. Kanak-kanak belajar dengan mendengar, jadi bacalah bersamanya.",
      famBtn: "Reka kad untuk anak anda",
      srcEyebrow: "Sumber kami", srcTitle: "Rujukan",
      srcLede: "Mengikut cara ulama seperti Ibnu Kathir, kami menyertakan rujukan setiap teks supaya anda boleh menyemaknya sendiri. Jika kami menukil hukum hadis, kami sebut ulama yang menilainya. Jika terdapat kesilapan, sila maklumkan kami.",
      srcTr: "Terjemahan makna: al-Quran oleh Abdullah Muhammad Basmeih (melalui Quran.com); hadis dan kata-kata Salaf dalam bahasa Inggeris.",
      endTitle: "Mula esok pagi", endLede: "Cetak kad malam ini, letak di tempat solat, dan baca selepas Subuh.", getCard: "Dapatkan kad sedia",
      fMaker: "Pembuat kad", fSuggest: "Cadangkan zikir", fContact: "Hubungi"
    },
    tr: {
      title: "Zikir Kartı Hazırla · Sabah ve akşam zikirleri kartı",
      appName: "Zikir Kartı Hazırla", makeCard: "Kart hazırla", heroEyebrow: "Sabah ve akşam zikirleri",
      heroLede: "Kur'an ve Sünnet'ten sabah ve akşam zikirleri, her biri kaynağıyla birlikte, yazdırıp göreceğiniz bir yere koyacağınız bir kartta.",
      getPdf: "Hazır kartı indir (PDF)", makeOwn: "Kendiniz hazırlayın", inProgress: "Yarım kalmış bir kartınız var.", continueCard: "Kartınıza devam edin",
      alsoImages: "Resim olarak da:", page1: "sayfa 1", page2: "sayfa 2", free: "Ücretsiz, kayıt yok.",
      tag: "23 zikir · A4 · 2 sayfa · kaynaklarıyla", previewAlt: "Hazır sabah ve akşam zikirleri kartı",
      howEyebrow: "Nasıl çalışır", howTitle: "Duvarda bir kart, kalpte bir alışkanlık",
      s1h: "Kartınızı seçin", s1p: "Hazır kartı alın ya da hangi zikirlerin, hangi sırayla, hangi renk ve boyutta olacağını seçmek için kart hazırlayıcıyı açın.",
      s2h: "Yazdırın veya telefonda tutun", s2p: "PDF ya da resim olarak kaydedin. Namaz kıldığınız yere, yatağın yanına veya aile için buzdolabına koyun.",
      s3h: "Vaktinde okuyun", s3p: "Sabah Fecir'den sonra, akşam İkindi'den sonra. Kart hep aynı kalır, böylece sözler kısa sürede sizin olur.",
      whyEyebrow: "Neden sabah ve akşam zikirleri", whyTitle: "Allah emretti, Resûlü devam etti", another: "Başka metinler göster",
      kQuran: "Kur'an", kHadith: "Hadis", kSalaf: "Selef'in sözleri",
      habitEyebrow: "Alışkanlık edinin",
      t1b: "Zaten kıldığınız bir namaza bağlayın", t1s: "Fecir ve İkindi'den sonra telefona uzanmadan önce oturun.",
      t2b: "Sürdürebileceğiniz kadarla başlayın", t2s: "Birkaç zikirlik kısa bir kart hazırlayın, oturunca ekleyin. Hazırlayıcıda istediğinizi kapatabilirsiniz.",
      t3b: "Göz önünde tutun", t3s: "Namaz yerinizdeki basılı kart, bildirime ihtiyaç duymayan bir hatırlatıcıdır.",
      t4b: "Birlikte okuyun", t4s: "Aileyle sesli okumak herkesin sözleri öğrenmesine yardım eder.",
      morning: "Sabah: Fecir'den sonra, güneş doğmadan önce.", evening: "Akşam: İkindi'den sonra, güneş batmadan önce.",
      famEyebrow: "Aileler ve çocuklar için", famTitle: "Küçükler bu sözlerle büyüsün",
      famLede: "Dua eden bir çocuk figürü ekleyin, yumuşak renkler ve daha büyük yazı seçin, kartı odasına asın. Çocuklar duyarak öğrenir, onlarla birlikte okuyun.",
      famBtn: "Çocuğunuz için kart hazırlayın",
      srcEyebrow: "Kaynaklarımız", srcTitle: "Kaynaklar",
      srcLede: "İbn Kesîr gibi âlimlerin yolunu izleyerek her metnin kaynağını veriyoruz; böylece kendiniz bakıp kontrol edebilirsiniz. Bir hadis hükmü aktardığımızda o hükmü veren âlimi belirtiyoruz. Bir hata görürseniz lütfen bize bildirin.",
      srcTr: "Anlam çevirileri: Kur'an, Dar Al-Salam Center (Quran.com üzerinden); hadisler ve Selef'in sözleri İngilizce.",
      endTitle: "Yarın sabah başlayın", endLede: "Kartı bu gece yazdırın, namaz yerinize koyun ve Fecir'den sonra okuyun.", getCard: "Hazır kartı indir",
      fMaker: "Kart hazırlayıcı", fSuggest: "Zikir önerin", fContact: "İletişim"
    },
    fr: {
      title: "Créateur d'adhkar · Carte des adhkar du matin et du soir",
      appName: "Créateur d'adhkar", makeCard: "Créer une carte", heroEyebrow: "Adhkar du matin et du soir",
      heroLede: "Les adhkar du matin et du soir tirés du Coran et de la Sunna, chacun avec sa référence, sur une carte à imprimer et à garder là où vous la verrez.",
      getPdf: "Télécharger la carte prête (PDF)", makeOwn: "Créer la vôtre", inProgress: "Vous avez une carte en cours.", continueCard: "Reprendre votre carte",
      alsoImages: "Aussi en images :", page1: "page 1", page2: "page 2", free: "Gratuit, sans inscription.",
      tag: "23 adhkar · A4 · 2 pages · avec références", previewAlt: "La carte prête des adhkar du matin et du soir",
      howEyebrow: "Comment ça marche", howTitle: "Une carte au mur, une habitude au cœur",
      s1h: "Choisissez votre carte", s1p: "Prenez la carte prête, ou ouvrez le créateur pour choisir les adhkar, leur ordre, les couleurs et la taille.",
      s2h: "Imprimez-la ou gardez-la sur votre téléphone", s2p: "Enregistrez en PDF ou en image. Placez-la là où vous priez, près du lit, ou sur le frigo pour la famille.",
      s3h: "Lisez-la à son heure", s3p: "Le matin après Fajr, le soir après ʿAsr. La carte reste la même, et les mots deviennent vite les vôtres.",
      whyEyebrow: "Pourquoi les adhkar du matin et du soir", whyTitle: "Ordonnés par Allah, observés par Son Messager", another: "Voir d'autres textes",
      kQuran: "Coran", kHadith: "Hadith", kSalaf: "Paroles des Salaf",
      habitEyebrow: "En faire une habitude",
      t1b: "Liez-les à une prière que vous faites déjà", t1s: "Restez assis après Fajr et après ʿAsr avant de prendre votre téléphone.",
      t2b: "Commencez par ce que vous pouvez tenir", t2s: "Faites une carte courte avec quelques adhkar, puis ajoutez-en quand c'est acquis. Le créateur permet d'en masquer.",
      t3b: "Gardez-la sous les yeux", t3s: "Une carte imprimée là où vous priez est un rappel sans notification.",
      t4b: "Lisez ensemble", t4s: "Lire à voix haute en famille aide chacun à apprendre les mots.",
      morning: "Matin : après Fajr, avant le lever du soleil.", evening: "Soir : après ʿAsr, avant le coucher du soleil.",
      famEyebrow: "Pour les familles et les enfants", famTitle: "Que les petits grandissent avec ces paroles",
      famLede: "Ajoutez un enfant qui fait duʿāʾ, choisissez des couleurs douces et un texte plus grand, et mettez la carte dans sa chambre. Les enfants apprennent en écoutant : lisez-la avec eux.",
      famBtn: "Créer une carte pour votre enfant",
      srcEyebrow: "Nos sources", srcTitle: "Références",
      srcLede: "Suivant la voie de savants comme Ibn Kathîr, nous donnons la référence de chaque texte pour que vous puissiez la vérifier vous-même. Quand nous citons un jugement sur un hadith, nous nommons le savant qui l'a donné. Si vous trouvez une erreur, dites-le-nous.",
      srcTr: "Traduction des sens : le Coran selon Rashid Maash (via Quran.com) ; les hadiths et les paroles des Salaf en anglais.",
      endTitle: "Commencez demain matin", endLede: "Imprimez la carte ce soir, placez-la là où vous priez, et lisez-la après Fajr.", getCard: "Télécharger la carte prête",
      fMaker: "Créateur de cartes", fSuggest: "Proposer un dhikr", fContact: "Contact"
    },
    bn: {
      title: "জিকির কার্ড মেকার · সকাল-সন্ধ্যার জিকির কার্ড",
      appName: "জিকির কার্ড মেকার", makeCard: "কার্ড বানান", heroEyebrow: "সকাল ও সন্ধ্যার জিকির",
      heroLede: "কুরআন ও সুন্নাহ থেকে সকাল-সন্ধ্যার জিকির, প্রতিটি তার সূত্রসহ, এমন একটি কার্ডে যা আপনি ছাপিয়ে চোখের সামনে রাখবেন।",
      getPdf: "তৈরি কার্ড নিন (PDF)", makeOwn: "নিজে বানান", inProgress: "আপনার একটি কার্ড অসম্পূর্ণ আছে।", continueCard: "কার্ডটি চালিয়ে যান",
      alsoImages: "ছবি হিসেবেও:", page1: "পৃষ্ঠা ১", page2: "পৃষ্ঠা ২", free: "বিনামূল্যে, নিবন্ধন ছাড়া।",
      tag: "২৩টি জিকির · A4 · ২ পৃষ্ঠা · সূত্রসহ", previewAlt: "সকাল-সন্ধ্যার জিকিরের তৈরি কার্ড",
      howEyebrow: "যেভাবে কাজ করে", howTitle: "দেয়ালে একটি কার্ড, হৃদয়ে একটি অভ্যাস",
      s1h: "আপনার কার্ড বেছে নিন", s1p: "তৈরি কার্ডটি নিন, অথবা মেকার খুলে জিকির, তাদের ক্রম, রং ও মাপ বেছে নিন।",
      s2h: "ছাপান বা ফোনে রাখুন", s2p: "PDF বা ছবি হিসেবে সংরক্ষণ করুন। নামাজের জায়গায়, বিছানার পাশে বা পরিবারের জন্য ফ্রিজে লাগান।",
      s3h: "সময়মতো পড়ুন", s3p: "সকালে ফজরের পর, সন্ধ্যায় আসরের পর। কার্ড একই থাকে, তাই শব্দগুলো দ্রুত মুখস্থ হয়।",
      whyEyebrow: "কেন সকাল-সন্ধ্যার জিকির", whyTitle: "আল্লাহ আদেশ করেছেন, তাঁর রাসূল নিয়মিত করেছেন", another: "অন্য লেখা দেখান",
      kQuran: "কুরআন", kHadith: "হাদিস", kSalaf: "সালাফের বাণী",
      habitEyebrow: "অভ্যাসে পরিণত করুন",
      t1b: "যে নামাজ পড়েন তার সাথে জুড়ে দিন", t1s: "ফজর ও আসরের পর ফোন হাতে নেওয়ার আগে বসে পড়ুন।",
      t2b: "যতটুকু ধরে রাখতে পারবেন ততটুকু দিয়ে শুরু করুন", t2s: "কয়েকটি জিকির দিয়ে ছোট কার্ড বানান, অভ্যাস হলে আরও যোগ করুন। মেকারে যেকোনোটি বন্ধ রাখা যায়।",
      t3b: "চোখের সামনে রাখুন", t3s: "নামাজের জায়গায় ছাপানো কার্ড এমন এক স্মরণ যার কোনো নোটিফিকেশন লাগে না।",
      t4b: "একসাথে পড়ুন", t4s: "পরিবারের সাথে জোরে পড়লে সবার শব্দগুলো শিখতে সুবিধা হয়।",
      morning: "সকাল: ফজরের পর, সূর্যোদয়ের আগে।", evening: "সন্ধ্যা: আসরের পর, সূর্যাস্তের আগে।",
      famEyebrow: "পরিবার ও শিশুদের জন্য", famTitle: "ছোটরা বড় হোক এই কথাগুলো নিয়ে",
      famLede: "দোয়া করা শিশুর ছবি যোগ করুন, নরম রং ও বড় লেখা বাছুন, আর কার্ডটি তার ঘরে রাখুন। শিশুরা শুনে শেখে, তাই তাদের সাথে পড়ুন।",
      famBtn: "আপনার শিশুর জন্য কার্ড বানান",
      srcEyebrow: "আমাদের সূত্র", srcTitle: "সূত্রসমূহ",
      srcLede: "ইবনে কাসিরের মতো আলেমদের পদ্ধতি অনুসরণ করে আমরা প্রতিটি লেখার সূত্র দিই, যাতে আপনি নিজে দেখে যাচাই করতে পারেন। কোনো হাদিসের মান উল্লেখ করলে যে আলেম তা বলেছেন তাঁর নাম দিই। ভুল পেলে আমাদের জানান।",
      srcTr: "অর্থের অনুবাদ: কুরআন ড. আবু বকর মুহাম্মাদ যাকারিয়া (Quran.com থেকে); হাদিস ও সালাফের বাণী ইংরেজিতে।",
      endTitle: "আগামীকাল সকাল থেকে শুরু করুন", endLede: "আজ রাতে কার্ড ছাপান, নামাজের জায়গায় রাখুন, আর ফজরের পর পড়ুন।", getCard: "তৈরি কার্ড নিন",
      fMaker: "কার্ড মেকার", fSuggest: "জিকির প্রস্তাব করুন", fContact: "যোগাযোগ"
    }
  };

  // Quran meanings in each language, from Quran.com: ur Junagarhi (54), id King Fahad Complex (134),
  // ms Basmeih (39), tr Dar Al-Salam Center (210), fr Rashid Maash (779), bn Dr. Abu Bakr Zakaria (213).
  // Only the part of each ayah shown on the page. English uses the text in the HTML (Saheeh International).
  const QT = {
 "ur": {
  "2:152": "اس لئے تم میرا ذکر کرو، میں بھی تمہیں یاد کروں گا۔",
  "33:41-42": "مسلمانو! اللہ تعالیٰ کا ذکر بہت زیاده کرو۔ اور صبح وشام اس کی پاکیزگی بیان کرو۔",
  "50:39": "اپنے رب کی تسبیح تعریف کے ساتھ بیان کریں سورج نکلنے سے پہلے بھی اور سورج غروب ہونے سے پہلے بھی۔",
  "13:28": "یاد رکھو اللہ کے ذکر سے ہی دلوں کو تسلی حاصل ہوتی ہے۔",
  "66:6": "اے ایمان والو! تم اپنے آپ کو اور اپنے گھر والوں کو اس آگ سے بچاؤ۔"
 },
 "id": {
  "2:152": "Karena itu, ingatlah kamu kepada-Ku niscaya Aku ingat (pula) kepadamu.",
  "33:41-42": "Hai orang-orang yang beriman, berzikirlah (dengan menyebut nama) Allah; zikir yang sebanyak-banyaknya. Dan bertasbihlah kepada-Nya pada waktu pagi dan petang.",
  "50:39": "Bertasbihlah sambil memuji Tuhan-mu, sebelum terbit matahari dan sebelum terbenam(nya).",
  "13:28": "Ingatlah, hanya dengan mengingati Allah-lah hati menjadi tenteram.",
  "66:6": "Hai orang-orang yang beriman, peliharalah dirimu dan keluargamu dari api neraka."
 },
 "ms": {
  "2:152": "Oleh itu ingatlah kamu kepadaKu (dengan mematuhi hukum dan undang-undangKu), supaya Aku membalas kamu dengan kebaikan.",
  "33:41-42": "Wahai orang-orang yang beriman, (untuk bersyukur kepada Allah) ingatlah serta sebutlah nama Allah dengan ingatan serta sebutan yang sebanyak-banyaknya; dan bertasbihlah kamu kepadaNya pada waktu pagi dan petang.",
  "50:39": "Bertasbihlah sambil memuji Tuhanmu (terutama) sebelum terbit matahari dan sebelum matahari terbenam.",
  "13:28": "Ketahuilah dengan \"zikrullah\" itu, tenang tenteramlah hati manusia.",
  "66:6": "Wahai orang-orang yang beriman! Peliharalah diri kamu dan keluarga kamu dari neraka."
 },
 "tr": {
  "2:152": "O halde yalnız beni anın ki, ben de sizi anayım.",
  "33:41-42": "Ey iman edenler! Allah’ı çok çok zikredin. O’nu, sabah ve akşam tesbih edin.",
  "50:39": "Güneş doğmadan önce ve batmadan önce Rabbini hamdederek tesbih et!",
  "13:28": "Bilesiniz ki, kalpler ancak Allah'ı zikretmekle huzur bulur.",
  "66:6": "Ey iman edenler! Kendinizi ve ailelerinizi yakıtı insanlar ve taşlar olan ateşten koruyun."
 },
 "fr": {
  "2:152": "Souvenez-vous donc de Moi, Je me souviendrai de vous.",
  "33:41-42": "Vous qui croyez ! Invoquez fréquemment le nom d’Allah. Célébrez Sa sainteté et Sa gloire matin et soir.",
  "50:39": "Célèbre, par les louanges, la gloire de ton Seigneur avant le lever du soleil et avant son coucher.",
  "13:28": "C’est en effet dans l’évocation d’Allah que les cœurs trouvent véritablement la paix.",
  "66:6": "Vous qui croyez ! Préservez-vous, ainsi que vos familles, d'un feu alimenté par les hommes et les pierres."
 },
 "bn": {
  "2:152": "কাজেই তোমরা আমাকে স্মরণ করো, আমিও তোমাদেরকে স্মরণ করব।",
  "33:41-42": "হে ঈমানদারগণ! তোমরা আল্লাহ্‌কে অধিক স্মরণ কর, এবং সকাল-সন্ধ্যায় আল্লাহর পবিত্ৰতা ও মহিমা ঘোষণা কর।",
  "50:39": "আপনার রবের সপ্ৰশংস পবিত্রতা ও মহিমা ঘোষণা করুন সূর্যোদয়ের আগে ও সূর্যাস্তের আগে।",
  "13:28": "জেনে রাখ, আল্লাহ্‌র স্মরণেই মন প্রশান্ত হয়।",
  "66:6": "হে ইমানদারগণ! তোমরা নিজেদেরকে এবং তোমাদের পরিবার-পরিজনকে রক্ষা কর আগুন থেকে।"
 }
};
  const quranText = key => (QT[lang] && QT[lang][key]) || null;

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (_) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (_) {} }
  };
  function pickLang() {
    const saved = store.get(LANG_KEY);
    if (saved && T[saved]) return saved;
    for (const n of navigator.languages || [navigator.language || "en"]) {
      const c = String(n).toLowerCase().split("-")[0];
      if (T[c]) return c;
    }
    return "en";
  }
  let lang = pickLang();
  const t = k => (T[lang] && T[lang][k] !== undefined ? T[lang][k] : T.en[k]);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const digits = s => lang === "ar" ? String(s).replace(/\d/g, d => "٠١٢٣٤٥٦٧٨٩"[d]) : lang === "ur" ? String(s).replace(/\d/g, d => "۰۱۲۳۴۵۶۷۸۹"[d]) : lang === "bn" ? String(s).replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d]) : String(s);
  // Arabic and Urdu readers get the references in Arabic.
  const useAr = () => lang === "ar" || lang === "ur";
  const AR_KIND = { quran: "القرآن الكريم", hadith: "الحديث النبوي", salaf: "من أقوال السلف" };
  const kindHTML = k => `${esc(t({ quran: "kQuran", hadith: "kHadith", salaf: "kSalaf" }[k]))}${RTL.includes(lang) ? "" : ` <span lang="ar">${AR_KIND[k]}</span>`}`;

  function applyLang() {
    const root = document.documentElement;
    root.lang = lang; root.dir = RTL.includes(lang) ? "rtl" : "ltr";
    document.title = t("title");
    document.querySelectorAll("[data-t]").forEach(el => { el.textContent = t(el.dataset.t); });
    document.querySelectorAll("[data-t-alt]").forEach(el => { el.alt = t(el.dataset.tAlt); });
    document.querySelectorAll("[data-kind]").forEach(el => { el.innerHTML = kindHTML(el.dataset.kind); });
    document.querySelectorAll("[data-num]").forEach(el => { el.textContent = digits(el.dataset.num); });
    document.querySelectorAll("[data-ar]").forEach(el => {
      if (!el.dataset.en) el.dataset.en = el.textContent;
      el.textContent = useAr() ? el.dataset.ar : el.dataset.en;
    });
    document.querySelectorAll("[data-q]").forEach(el => {
      if (!el.dataset.en) el.dataset.en = el.textContent;
      el.textContent = quranText(el.dataset.q) || el.dataset.en;
    });
    
    // Arabic gets the ready card without English; every other language gets Arabic + English.
    document.querySelectorAll("[data-ar-href]").forEach(el => {
      if (!el.dataset.enHref) el.dataset.enHref = el.getAttribute("href");
      el.setAttribute("href", lang === "ar" ? el.dataset.arHref : el.dataset.enHref);
    });
    document.querySelectorAll("[data-ar-src]").forEach(el => {
      if (!el.dataset.enSrc) el.dataset.enSrc = el.getAttribute("src");
      el.setAttribute("src", lang === "ar" ? el.dataset.arSrc : el.dataset.enSrc);
    });
    document.getElementById("lang").value = lang;
    document.getElementById("langCode").textContent = lang.toUpperCase();
    fill();
  }

  // Rotating texts: one from the Quran or Sunnah, one from the Salaf. A new pair each day.
  const slots = [...document.querySelectorAll(".proof.rot")];
  let data = null, step = Math.floor(Date.now() / 864e5);
  function fill() {
    if (!data) return;
    slots.forEach(el => {
      const pool = data[el.dataset.pool], q = pool[step % pool.length];
      const who = useAr() ? q.who.ar : q.who.en, ref = useAr() ? q.ref.ar : q.ref.en;
      el.className = "proof rot k-" + q.kind;
      el.innerHTML = `<span class="kind">${kindHTML(q.kind)}</span>` +
        (q.kind === "quran" ? "" : `<span class="who">${esc(who)}</span>`) +
        `<div class="ar" lang="ar">${esc(q.ar)}</div><p class="en">${esc((q.verse && quranText(q.verse)) || q.en)}</p><span class="ref">${esc(ref)}</span>`;
    });
  }
  fetch("data/quotes.json").then(r => r.json()).then(d => { data = d; fill(); }).catch(() => slots.forEach(el => { el.hidden = true; }));
  document.getElementById("another").addEventListener("click", () => {
    if (!data) return;
    step++;
    slots.forEach(el => el.classList.add("fade"));
    setTimeout(() => { fill(); slots.forEach(el => el.classList.remove("fade")); }, 250);
  });

  document.getElementById("lang").addEventListener("change", e => { lang = e.target.value; store.set(LANG_KEY, lang); applyLang(); });
  if (store.get("adhkar-maker:v1")) document.getElementById("continue").hidden = false;
  applyLang();

  if ("serviceWorker" in navigator && location.protocol === "https:") navigator.serviceWorker.register("sw.js").catch(() => {});
})();
