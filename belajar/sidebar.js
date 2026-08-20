(function () {
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".sidebar-overlay");
    const toggleBtn = document.querySelector(".mobile-menu");

    document.querySelectorAll(".menu-item").forEach(function (el, i) {
        el.style.setProperty("--i", i);
    });

    function openSidebar() {
        sidebar?.classList.add("open");
        overlay?.classList.add("visible");
        document.body.style.overflow = "hidden";
    }

    function closeSidebar() {
        sidebar?.classList.remove("open");
        overlay?.classList.remove("visible");
        document.body.style.overflow = "";
    }

    function toggleSidebar() {
        if (sidebar?.classList.contains("open")) {
            closeSidebar();
        } else {
            openSidebar();
        }
    }

    toggleBtn?.addEventListener("click", toggleSidebar);
    overlay?.addEventListener("click", closeSidebar);

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            closeSidebar();
        }
    });

    sidebar?.querySelectorAll(".menu-item").forEach(function (link) {
        link.addEventListener("click", function () {
            if (window.innerWidth <= 750) {
                closeSidebar();
            }
        });
    });

    var detailData = {
        "kanji.html": {
            title: "Materi Kanji N5 lengkap",
            description: "Kanji dasar N5 dengan cara baca, Hiragana, dan arti dalam Bahasa Indonesia.",
            rows: [
                ["一", "ichi / hitotsu", "いち / ひとつ", "satu"], ["二", "ni / futatsu", "に / ふたつ", "dua"], ["三", "san / mittsu", "さん / みっつ", "tiga"],
                ["四", "shi / yon", "し / よん", "empat"], ["五", "go / itsutsu", "ご / いつつ", "lima"], ["六", "roku / muttsu", "ろく / むっつ", "enam"],
                ["七", "shichi / nana", "しち / なな", "tujuh"], ["八", "hachi / yattsu", "はち / やっつ", "delapan"], ["九", "kyuu / kokonotsu", "きゅう / ここのつ", "sembilan"],
                ["十", "juu / too", "じゅう / とお", "sepuluh"], ["百", "hyaku", "ひゃく", "seratus"], ["千", "sen", "せん", "seribu"],
                ["万", "man", "まん", "sepuluh ribu"], ["円", "en", "えん", "yen / lingkaran"], ["日", "nichi / hi", "にち / ひ", "hari / matahari"],
                ["月", "getsu / tsuki", "げつ / つき", "bulan"], ["火", "ka / hi", "か / ひ", "api"], ["水", "sui / mizu", "すい / みず", "air"],
                ["木", "moku / ki", "もく / き", "pohon / kayu"], ["金", "kin / kane", "きん / かね", "emas / uang"], ["土", "do / tsuchi", "ど / つち", "tanah"],
                ["年", "nen / toshi", "ねん / とし", "tahun"], ["時", "ji / toki", "じ / とき", "jam / waktu"], ["分", "fun / bun / wakaru", "ふん / ぶん / わかる", "menit / bagian / mengerti"],
                ["半", "han", "はん", "setengah"], ["今", "kon / ima", "こん / いま", "sekarang"], ["毎", "mai", "まい", "setiap"],
                ["週", "shuu", "しゅう", "minggu"], ["前", "zen / mae", "ぜん / まえ", "sebelum / depan"], ["後", "go / ato / ushiro", "ご / あと / うしろ", "sesudah / belakang"],
                ["午", "go", "ご", "siang"], ["朝", "chou / asa", "ちょう / あさ", "pagi"], ["昼", "chuu / hiru", "ちゅう / ひる", "siang"],
                ["夜", "ya / yoru", "や / よる", "malam"], ["先", "sen / saki", "せん / さき", "lebih dulu"], ["来", "rai / kuru", "らい / くる", "datang"],
                ["行", "kou / iku", "こう / いく", "pergi"], ["帰", "ki / kaeru", "き / かえる", "pulang"], ["出", "shutsu / deru", "しゅつ / でる", "keluar"],
                ["入", "nyuu / hairu", "にゅう / はいる", "masuk"], ["立", "ritsu / tatsu", "りつ / たつ", "berdiri"], ["休", "kyuu / yasumu", "きゅう / やすむ", "istirahat"],
                ["見", "ken / miru", "けん / みる", "melihat"], ["聞", "bun / kiku", "ぶん / きく", "mendengar / bertanya"], ["読", "doku / yomu", "どく / よむ", "membaca"],
                ["書", "sho / kaku", "しょ / かく", "menulis"], ["話", "wa / hanasu", "わ / はなす", "berbicara"], ["言", "gen / iu", "げん / いう", "berkata"],
                ["食", "shoku / taberu", "しょく / たべる", "makan"], ["飲", "in / nomu", "いん / のむ", "minum"], ["買", "bai / kau", "ばい / かう", "membeli"],
                ["使", "shi / tsukau", "し / つかう", "menggunakan"], ["作", "saku / tsukuru", "さく / つくる", "membuat"], ["来", "rai / kuru", "らい / くる", "datang"],
                ["会", "kai / au", "かい / あう", "bertemu"], ["思", "shi / omou", "し / おもう", "berpikir"], ["知", "chi / shiru", "ち / しる", "tahu"],
                ["分", "bun / wakaru", "ぶん / わかる", "mengerti / membagi"], ["教", "kyou / oshieru", "きょう / おしえる", "mengajar"], ["習", "shuu / narau", "しゅう / ならう", "belajar"],
                ["学", "gaku / manabu", "がく / まなぶ", "belajar / ilmu"], ["校", "kou", "こう", "sekolah"], ["生", "sei / nama", "せい / なま", "hidup / lahir"],
                ["名", "mei / na", "めい / な", "nama"], ["字", "ji / aza", "じ / あざ", "huruf / karakter"], ["文", "bun / mon", "ぶん / もん", "kalimat / tulisan"],
                ["語", "go / kataru", "ご / かたる", "bahasa / kata"], ["漢", "kan", "かん", "Kanji / Tiongkok"], ["国", "koku / kuni", "こく / くに", "negara"],
                ["外", "gai / soto", "がい / そと", "luar"], ["中", "chuu / naka", "ちゅう / なか", "tengah / dalam"], ["上", "jou / ue", "じょう / うえ", "atas"],
                ["下", "ka / shita", "か / した", "bawah"], ["右", "yuu / migi", "ゆう / みぎ", "kanan"], ["左", "sa / hidari", "さ / ひだり", "kiri"],
                ["東", "tou / higashi", "とう / ひがし", "timur"], ["西", "sei / nishi", "せい / にし", "barat"], ["南", "nan / minami", "なん / みなみ", "selatan"],
                ["北", "hoku / kita", "ほく / きた", "utara"], ["近", "kin / chikai", "きん / ちかい", "dekat"], ["遠", "en / tooi", "えん / とおい", "jauh"],
                ["高", "kou / takai", "こう / たかい", "tinggi / mahal"], ["安", "an / yasui", "あん / やすい", "murah / tenang"], ["大", "dai / ookii", "だい / おおきい", "besar"],
                ["小", "shou / chiisai", "しょう / ちいさい", "kecil"], ["長", "chou / nagai", "ちょう / ながい", "panjang"], ["短", "tan / mijikai", "たん / みじかい", "pendek"],
                ["新", "shin / atarashii", "しん / あたらしい", "baru"], ["古", "ko / furui", "こ / ふるい", "lama / tua"], ["多", "ta / ooi", "た / おおい", "banyak"],
                ["少", "shou / sukunai", "しょう / すくない", "sedikit"], ["良", "ryou / ii", "りょう / いい", "baik"], ["悪", "aku / warui", "あく / わるい", "buruk"],
                ["白", "haku / shiroi", "はく / しろい", "putih"], ["赤", "seki / akai", "せき / あかい", "merah"], ["青", "sei / aoi", "せい / あおい", "biru"],
                ["天", "ten", "てん", "langit"], ["気", "ki / ke", "き / け", "udara / perasaan"], ["雨", "u / ame", "う / あめ", "hujan"],
                ["電", "den", "でん", "listrik"], ["車", "sha / kuruma", "しゃ / くるま", "kendaraan / mobil"], ["駅", "eki", "えき", "stasiun"],
                ["道", "dou / michi", "どう / みち", "jalan"], ["店", "ten / mise", "てん / みせ", "toko"], ["家", "ka / ie", "か / いえ", "rumah"],
                ["室", "shitsu / muro", "しつ / むろ", "ruangan"], ["公", "kou", "こう", "umum"], ["園", "en", "えん", "taman"],
                ["病", "byou", "びょう", "sakit"], ["院", "in", "いん", "institusi / rumah sakit"], ["銀", "gin", "ぎん", "perak / bank"],
                ["魚", "gyo / sakana", "ぎょ / さかな", "ikan"], ["鳥", "chou / tori", "ちょう / とり", "burung"], ["犬", "ken / inu", "けん / いぬ", "anjing"],
                ["猫", "byou / neko", "びょう / ねこ", "kucing"], ["花", "ka / hana", "か / はな", "bunga"], ["山", "san / yama", "さん / やま", "gunung"],
                ["川", "sen / kawa", "せん / かわ", "sungai"], ["海", "kai / umi", "かい / うみ", "laut"], ["人", "jin / hito", "じん / ひと", "orang"],
                ["男", "dan / otoko", "だん / おとこ", "laki-laki"], ["女", "jo / onna", "じょ / おんな", "perempuan"], ["子", "shi / ko", "し / こ", "anak"],
                ["父", "fu / chichi", "ふ / ちち", "ayah"], ["母", "bo / haha", "ぼ / はは", "ibu"], ["友", "yuu / tomo", "ゆう / とも", "teman"],
                ["名", "mei / na", "めい / な", "nama"], ["体", "tai / karada", "たい / からだ", "tubuh"], ["目", "moku / me", "もく / め", "mata"],
                ["耳", "ji / mimi", "じ / みみ", "telinga"], ["手", "shu / te", "しゅ / て", "tangan"], ["足", "soku / ashi", "そく / あし", "kaki"],
                ["力", "ryoku / chikara", "りょく / ちから", "kekuatan"], ["心", "shin / kokoro", "しん / こころ", "hati / pikiran"], ["何", "ka / nani", "か / なに", "apa"],
                ["才", "sai", "さい", "usia / bakat"], ["歳", "sai", "さい", "tahun usia"], ["間", "kan / aida", "かん / あいだ", "waktu / antara"],
                ["休", "kyuu / yasumu", "きゅう / やすむ", "istirahat"], ["曜", "you", "よう", "hari dalam minggu"], ["晴", "sei / hareru", "せい / はれる", "cerah"]
            ]
        },
        "Angka.html": {
            title: "Rincian angka Jepang",
            description: "Teks angka, cara baca, Hiragana, dan arti dalam Bahasa Indonesia.",
            rows: [
                ["一", "ichi", "いち", "satu"], ["二", "ni", "に", "dua"], ["三", "san", "さん", "tiga"],
                ["四", "yon", "よん", "empat"], ["五", "go", "ご", "lima"], ["六", "roku", "ろく", "enam"],
                ["七", "nana", "なな", "tujuh"], ["八", "hachi", "はち", "delapan"], ["九", "kyuu", "きゅう", "sembilan"],
                ["十", "juu", "じゅう", "sepuluh"], ["百", "hyaku", "ひゃく", "seratus"], ["千", "sen", "せん", "seribu"],
                ["万", "man", "まん", "sepuluh ribu"], ["零", "rei", "れい", "nol"]
            ]
        },
        "Kosakata.html": {
            title: "Rincian kosakata sehari-hari",
            description: "Teks Jepang, cara baca, Hiragana, dan arti dalam Bahasa Indonesia.",
            rows: [
                ["人", "hito", "ひと", "orang"], ["友達", "tomodachi", "ともだち", "teman"],
                ["先生", "sensei", "せんせい", "guru"], ["学生", "gakusei", "がくせい", "pelajar"],
                ["家族", "kazoku", "かぞく", "keluarga"], ["食べる", "taberu", "たべる", "makan"],
                ["飲む", "nomu", "のむ", "minum"], ["見る", "miru", "みる", "melihat"],
                ["行く", "iku", "いく", "pergi"], ["来る", "kuru", "くる", "datang"],
                ["おはよう", "ohayou", "おはよう", "selamat pagi"], ["ありがとう", "arigatou", "ありがとう", "terima kasih"],
                ["すみません", "sumimasen", "すみません", "permisi / maaf"], ["またね", "mata ne", "またね", "sampai jumpa"]
            ]
        },
        "Waktu.html": {
            title: "Rincian waktu dan tanggal",
            description: "Teks Jepang, cara baca, Hiragana, dan arti dalam Bahasa Indonesia.",
            rows: [
                ["今日", "kyou", "きょう", "hari ini"], ["明日", "ashita", "あした", "besok"],
                ["昨日", "kinou", "きのう", "kemarin"], ["朝", "asa", "あさ", "pagi"],
                ["昼", "hiru", "ひる", "siang"], ["夜", "yoru", "よる", "malam"],
                ["時間", "jikan", "じかん", "waktu / jam"], ["半", "han", "はん", "setengah"],
                ["月曜日", "getsuyoubi", "げつようび", "Senin"], ["火曜日", "kayoubi", "かようび", "Selasa"],
                ["水曜日", "suiyoubi", "すいようび", "Rabu"], ["木曜日", "mokuyoubi", "もくようび", "Kamis"],
                ["金曜日", "kin youbi", "きんようび", "Jumat"], ["土曜日", "doyoubi", "どようび", "Sabtu"],
                ["日曜日", "nichiyoubi", "にちようび", "Minggu"]
            ]
        }
    };

    var vocabCategories = {
        "Ucapan": [
            ["おはようございます", "ohayou gozaimasu", "おはようございます", "selamat pagi (sopan)"],
            ["おはよう", "ohayou", "おはよう", "selamat pagi (akrab)"],
            ["こんにちは", "konnichiwa", "こんにちは", "halo / selamat siang"],
            ["こんばんは", "konbanwa", "こんばんは", "selamat malam"],
            ["おやすみなさい", "oyasuminasai", "おやすみなさい", "selamat tidur (sopan)"],
            ["おやすみ", "oyasumi", "おやすみ", "selamat tidur (akrab)"],
            ["さようなら", "sayounara", "さようなら", "selamat tinggal"],
            ["また明日", "mata ashita", "またあした", "sampai besok"],
            ["また来週", "mata raishuu", "またらいしゅう", "sampai minggu depan"],
            ["また今度", "mata kondo", "またこんど", "sampai lain kali"],
            ["また後で", "mata ato de", "またあとで", "sampai nanti"],
            ["じゃあまた", "jaa mata", "じゃあまた", "sampai jumpa lagi"],
            ["じゃあね", "jaa ne", "じゃあね", "dadah / sampai jumpa (akrab)"],
            ["バイバイ", "bai bai", "ばいばい", "dadah"],
            ["ありがとう", "arigatou", "ありがとう", "terima kasih (akrab)"],
            ["ありがとうございます", "arigatou gozaimasu", "ありがとうございます", "terima kasih (sopan)"],
            ["どうもありがとう", "doumo arigatou", "どうもありがとう", "terima kasih banyak"],
            ["どうもありがとうございます", "doumo arigatou gozaimasu", "どうもありがとうございます", "terima kasih banyak (sopan)"],
            ["どういたしまして", "dou itashimashite", "どういたしまして", "sama-sama"],
            ["こちらこそ", "kochira koso", "こちらこそ", "saya juga / sama-sama"],
            ["すみません", "sumimasen", "すみません", "permisi / maaf (sopan)"],
            ["すまない", "sumanai", "すまない", "maaf (kasual)"],
            ["ごめんなさい", "gomennasai", "ごめんなさい", "saya minta maaf"],
            ["ごめん", "gomen", "ごめん", "maaf (akrab)"],
            ["失礼します", "shitsurei shimasu", "しつれいします", "permisi / mohon pamit"],
            ["お先に失礼します", "osaki ni shitsurei shimasu", "おさきにしつれいします", "saya pamit lebih dulu"],
            ["よろしくお願いします", "yoroshiku onegaishimasu", "よろしくおねがいします", "mohon kerja samanya"],
            ["どうぞよろしく", "douzo yoroshiku", "どうぞよろしく", "mohon bantuannya / salam kenal"],
            ["はじめまして", "hajimemashite", "はじめまして", "salam kenal"],
            ["よろしく", "yoroshiku", "よろしく", "mohon bantuannya (akrab)"],
            ["お元気ですか", "ogenki desu ka", "おげんきですか", "apa kabar?"],
            ["元気です", "genki desu", "げんきです", "saya baik-baik saja"],
            ["元気でしたか", "genki deshita ka", "げんきでしたか", "bagaimana kabarmu?"],
            ["お久しぶりです", "ohisashiburi desu", "おひさしぶりです", "lama tidak bertemu"],
            ["久しぶり", "hisashiburi", "ひさしぶり", "lama tidak bertemu (akrab)"],
            ["行ってきます", "ittekimasu", "いってきます", "saya pergi dulu, nanti kembali"],
            ["行ってらっしゃい", "itterasshai", "いってらっしゃい", "hati-hati di jalan"],
            ["ただいま", "tadaima", "ただいま", "saya pulang"],
            ["お帰りなさい", "okaerinasai", "おかえりなさい", "selamat datang kembali"],
            ["いただきます", "itadakimasu", "いただきます", "selamat makan (sebelum makan)"],
            ["ごちそうさまでした", "gochisousama deshita", "ごちそうさまでした", "terima kasih atas makanannya"],
            ["気をつけて", "ki o tsukete", "きをつけて", "hati-hati"],
            ["頑張って", "ganbatte", "がんばって", "semangat / berusahalah"],
            ["頑張ります", "ganbarimasu", "がんばります", "saya akan berusaha"],
            ["おめでとうございます", "omedetou gozaimasu", "おめでとうございます", "selamat (atas keberhasilan)"],
            ["お誕生日おめでとう", "otanjoubi omedetou", "おたんじょうびおめでとう", "selamat ulang tahun"],
            ["良い一日を", "yoi ichinichi o", "よいいちにちを", "semoga harimu menyenangkan"],
            ["良い週末を", "yoi shuumatsu o", "よいしゅうまつを", "selamat menikmati akhir pekan"],
            ["お願いします", "onegaishimasu", "おねがいします", "tolong / mohon"],
            ["どうぞ", "douzo", "どうぞ", "silakan"],
            ["どうも", "doumo", "どうも", "terima kasih / halo (ringkas)"],
            ["はい", "hai", "はい", "ya / baik"],
            ["いいえ", "iie", "いいえ", "tidak"],
            ["わかりました", "wakarimashita", "わかりました", "saya mengerti"],
            ["わかりません", "wakarimasen", "わかりません", "saya tidak mengerti"],
            ["そうですか", "sou desu ka", "そうですか", "oh begitu?"],
            ["そうですね", "sou desu ne", "そうですね", "iya ya / benar juga"],
            ["本当ですか", "hontou desu ka", "ほんとうですか", "benarkah?"],
            ["大丈夫です", "daijoubu desu", "だいじょうぶです", "tidak apa-apa / saya baik-baik saja"]
        ],
        "Waktu": [
            ["今日", "kyou", "きょう", "hari ini"], ["明日", "ashita", "あした", "besok"], ["昨日", "kinou", "きのう", "kemarin"],
            ["朝", "asa", "あさ", "pagi"], ["昼", "hiru", "ひる", "siang"], ["夕方", "yuugata", "ゆうがた", "sore"],
            ["夜", "yoru", "よる", "malam"], ["今", "ima", "いま", "sekarang"], ["毎日", "mainichi", "まいにち", "setiap hari"],
            ["毎朝", "maiasa", "まいあさ", "setiap pagi"], ["毎晩", "maiban", "まいばん", "setiap malam"], ["週末", "shuumatsu", "しゅうまつ", "akhir pekan"]
        ],
        "Jam": [
            ["一時", "ichi ji", "いちじ", "jam satu"], ["二時", "ni ji", "にじ", "jam dua"], ["三時", "san ji", "さんじ", "jam tiga"],
            ["七時", "shichi ji", "しちじ", "jam tujuh"], ["九時半", "kyuu ji han", "くじはん", "jam setengah sepuluh"],
            ["午前", "gozen", "ごぜん", "sebelum siang / AM"], ["午後", "gogo", "ごご", "setelah siang / PM"],
            ["何時ですか", "nan ji desu ka", "なんじですか", "jam berapa?"], ["今何時ですか", "ima nan ji desu ka", "いまなんじですか", "sekarang jam berapa?"],
            ["一分", "ippun", "いっぷん", "satu menit"], ["十分", "juppun", "じゅっぷん", "sepuluh menit"], ["半", "han", "はん", "setengah"]
        ],
        "Nama Benda": [
            ["本", "hon", "ほん", "buku"], ["辞書", "jisho", "じしょ", "kamus"], ["新聞", "shinbun", "しんぶん", "koran"],
            ["鉛筆", "enpitsu", "えんぴつ", "pensil"], ["机", "tsukue", "つくえ", "meja"], ["椅子", "isu", "いす", "kursi"],
            ["時計", "tokei", "とけい", "jam / arloji"], ["鞄", "kaban", "かばん", "tas"], ["傘", "kasa", "かさ", "payung"],
            ["電話", "denwa", "でんわ", "telepon"], ["写真", "shashin", "しゃしん", "foto"], ["鍵", "kagi", "かぎ", "kunci"],
            ["お金", "okane", "おかね", "uang"], ["車", "kuruma", "くるま", "mobil"], ["自転車", "jitensha", "じてんしゃ", "sepeda"],
            ["服", "fuku", "ふく", "pakaian"], ["靴", "kutsu", "くつ", "sepatu"], ["帽子", "boushi", "ぼうし", "topi"]
        ],
        "Nama Tempat": [
            ["家", "ie", "いえ", "rumah"], ["学校", "gakkou", "がっこう", "sekolah"], ["駅", "eki", "えき", "stasiun"],
            ["病院", "byouin", "びょういん", "rumah sakit"], ["銀行", "ginkou", "ぎんこう", "bank"], ["郵便局", "yuubinkyoku", "ゆうびんきょく", "kantor pos"],
            ["店", "mise", "みせ", "toko"], ["会社", "kaisha", "かいしゃ", "perusahaan"], ["公園", "kouen", "こうえん", "taman"],
            ["図書館", "toshokan", "としょかん", "perpustakaan"], ["レストラン", "resutoran", "れすとらん", "restoran"],
            ["スーパー", "suupaa", "すーぱー", "supermarket"], ["ホテル", "hoteru", "ほてる", "hotel"], ["町", "machi", "まち", "kota kecil / lingkungan"]
        ],
        "Keluarga": [
            ["家族", "kazoku", "かぞく", "keluarga"], ["父", "chichi", "ちち", "ayah saya"], ["お父さん", "otousan", "おとうさん", "ayah"],
            ["母", "haha", "はは", "ibu saya"], ["お母さん", "okaasan", "おかあさん", "ibu"], ["兄", "ani", "あに", "kakak laki-laki saya"],
            ["お兄さん", "oniisan", "おにいさん", "kakak laki-laki"], ["姉", "ane", "あね", "kakak perempuan saya"], ["お姉さん", "oneesan", "おねえさん", "kakak perempuan"],
            ["弟", "otouto", "おとうと", "adik laki-laki"], ["妹", "imouto", "いもうと", "adik perempuan"], ["子供", "kodomo", "こども", "anak"]
        ],
        "Sekolah": [
            ["先生", "sensei", "せんせい", "guru"], ["学生", "gakusei", "がくせい", "pelajar"], ["友達", "tomodachi", "ともだち", "teman"],
            ["教室", "kyoushitsu", "きょうしつ", "ruang kelas"], ["勉強", "benkyou", "べんきょう", "belajar"], ["宿題", "shukudai", "しゅくだい", "pekerjaan rumah"],
            ["試験", "shiken", "しけん", "ujian"], ["質問", "shitsumon", "しつもん", "pertanyaan"], ["答え", "kotae", "こたえ", "jawaban"],
            ["名前", "namae", "なまえ", "nama"], ["日本語", "nihongo", "にほんご", "bahasa Jepang"], ["英語", "eigo", "えいご", "bahasa Inggris"]
        ],
        "Aktivitas": [
            ["食べる", "taberu", "たべる", "makan"], ["飲む", "nomu", "のむ", "minum"], ["見る", "miru", "みる", "melihat"],
            ["聞く", "kiku", "きく", "mendengar / bertanya"], ["読む", "yomu", "よむ", "membaca"], ["書く", "kaku", "かく", "menulis"],
            ["話す", "hanasu", "はなす", "berbicara"], ["行く", "iku", "いく", "pergi"], ["来る", "kuru", "くる", "datang"],
            ["帰る", "kaeru", "かえる", "pulang"], ["買う", "kau", "かう", "membeli"], ["使う", "tsukau", "つかう", "menggunakan"],
            ["起きる", "okiru", "おきる", "bangun"], ["寝る", "neru", "ねる", "tidur"], ["働く", "hataraku", "はたらく", "bekerja"]
        ],
        "Sifat": [
            ["大きい", "ookii", "おおきい", "besar"], ["小さい", "chiisai", "ちいさい", "kecil"], ["新しい", "atarashii", "あたらしい", "baru"],
            ["古い", "furui", "ふるい", "lama / tua"], ["高い", "takai", "たかい", "tinggi / mahal"], ["安い", "yasui", "やすい", "murah"],
            ["暑い", "atsui", "あつい", "panas (cuaca)"], ["寒い", "samui", "さむい", "dingin"], ["良い", "ii", "いい", "baik"],
            ["悪い", "warui", "わるい", "buruk"], ["面白い", "omoshiroi", "おもしろい", "menarik"], ["楽しい", "tanoshii", "たのしい", "menyenangkan"]
        ],
        "Alam": [
            ["天気", "tenki", "てんき", "cuaca"], ["雨", "ame", "あめ", "hujan"], ["雪", "yuki", "ゆき", "salju"],
            ["風", "kaze", "かぜ", "angin"], ["空", "sora", "そら", "langit"], ["山", "yama", "やま", "gunung"],
            ["川", "kawa", "かわ", "sungai"], ["海", "umi", "うみ", "laut"], ["花", "hana", "はな", "bunga"],
            ["木", "ki", "き", "pohon"], ["犬", "inu", "いぬ", "anjing"], ["猫", "neko", "ねこ", "kucing"]
        ],
        "Transportasi": [
            ["電車", "densha", "でんしゃ", "kereta listrik"], ["新幹線", "shinkansen", "しんかんせん", "kereta cepat"],
            ["地下鉄", "chikatetsu", "ちかてつ", "kereta bawah tanah"], ["飛行機", "hikouki", "ひこうき", "pesawat"],
            ["船", "fune", "ふね", "kapal"], ["自動車", "jidousha", "じどうしゃ", "kendaraan / mobil"],
            ["自転車", "jitensha", "じてんしゃ", "sepeda"], ["バス", "basu", "ばす", "bus"],
            ["タクシー", "takushii", "たくしー", "taksi"], ["切符", "kippu", "きっぷ", "tiket"],
            ["駅", "eki", "えき", "stasiun"], ["乗る", "noru", "のる", "naik kendaraan"]
        ],
        "Makanan dan Minuman": [
            ["ご飯", "gohan", "ごはん", "nasi / makanan"], ["朝ご飯", "asagohan", "あさごはん", "sarapan"],
            ["昼ご飯", "hirugohan", "ひるごはん", "makan siang"], ["晩ご飯", "bangohan", "ばんごはん", "makan malam"],
            ["水", "mizu", "みず", "air"], ["お茶", "ocha", "おちゃ", "teh"], ["牛乳", "gyuunyuu", "ぎゅうにゅう", "susu"],
            ["肉", "niku", "にく", "daging"], ["魚", "sakana", "さかな", "ikan"], ["野菜", "yasai", "やさい", "sayuran"],
            ["果物", "kudamono", "くだもの", "buah-buahan"], ["卵", "tamago", "たまご", "telur"],
            ["パン", "pan", "ぱん", "roti"], ["りんご", "ringo", "りんご", "apel"], ["おいしい", "oishii", "おいしい", "lezat"]
        ],
        "Tubuh": [
            ["体", "karada", "からだ", "tubuh"], ["頭", "atama", "あたま", "kepala"], ["顔", "kao", "かお", "wajah"],
            ["目", "me", "め", "mata"], ["耳", "mimi", "みみ", "telinga"], ["口", "kuchi", "くち", "mulut"],
            ["鼻", "hana", "はな", "hidung"], ["手", "te", "て", "tangan"], ["足", "ashi", "あし", "kaki"],
            ["指", "yubi", "ゆび", "jari"], ["歯", "ha", "は", "gigi"], ["お腹", "onaka", "おなか", "perut"],
            ["病気", "byouki", "びょうき", "sakit / penyakit"], ["元気", "genki", "げんき", "sehat / bersemangat"]
        ],
        "Warna": [
            ["色", "iro", "いろ", "warna"], ["赤", "aka", "あか", "merah"], ["青", "ao", "あお", "biru"],
            ["白", "shiro", "しろ", "putih"], ["黒", "kuro", "くろ", "hitam"], ["黄色", "kiiro", "きいろ", "kuning"],
            ["緑", "midori", "みどり", "hijau"], ["茶色", "chairo", "ちゃいろ", "cokelat"], ["紫", "murasaki", "むらさき", "ungu"],
            ["明るい", "akarui", "あかるい", "terang"], ["暗い", "kurai", "くらい", "gelap"], ["白い", "shiroi", "しろい", "berwarna putih"]
        ],
        "Kata Tanya": [
            ["何", "nani", "なに", "apa"], ["誰", "dare", "だれ", "siapa"], ["どこ", "doko", "どこ", "di mana"],
            ["いつ", "itsu", "いつ", "kapan"], ["どうして", "doushite", "どうして", "mengapa"], ["どう", "dou", "どう", "bagaimana"],
            ["どれ", "dore", "どれ", "yang mana"], ["どの", "dono", "どの", "yang mana (diikuti benda)"],
            ["いくら", "ikura", "いくら", "berapa harga"], ["いくつ", "ikutsu", "いくつ", "berapa jumlah / umur"],
            ["どんな", "donna", "どんな", "seperti apa"], ["なぜ", "naze", "なぜ", "mengapa"]
        ],
        "Posisi": [
            ["上", "ue", "うえ", "atas"], ["下", "shita", "した", "bawah"], ["中", "naka", "なか", "dalam"],
            ["外", "soto", "そと", "luar"], ["前", "mae", "まえ", "depan / sebelum"], ["後ろ", "ushiro", "うしろ", "belakang"],
            ["右", "migi", "みぎ", "kanan"], ["左", "hidari", "ひだり", "kiri"], ["隣", "tonari", "となり", "sebelah"],
            ["近く", "chikaku", "ちかく", "dekat"], ["遠い", "tooi", "とおい", "jauh"], ["横", "yoko", "よこ", "samping"]
        ],
        "Perasaan": [
            ["好き", "suki", "すき", "suka"], ["嫌い", "kirai", "きらい", "tidak suka / benci"], ["欲しい", "hoshii", "ほしい", "ingin"],
            ["楽しい", "tanoshii", "たのしい", "menyenangkan"], ["嬉しい", "ureshii", "うれしい", "senang"], ["悲しい", "kanashii", "かなしい", "sedih"],
            ["怖い", "kowai", "こわい", "takut"], ["忙しい", "isogashii", "いそがしい", "sibuk"], ["暇", "hima", "ひま", "senggang"],
            ["大丈夫", "daijoubu", "だいじょうぶ", "tidak apa-apa"], ["上手", "jouzu", "じょうず", "pandai"], ["下手", "heta", "へた", "kurang pandai"]
        ]
    };

    vocabCategories["Waktu"] = vocabCategories["Waktu"].concat([
        ["一昨日", "ototoi", "おととい", "kemarin lusa"], ["明後日", "asatte", "あさって", "lusa"],
        ["先週", "senshuu", "せんしゅう", "minggu lalu"], ["今週", "konshuu", "こんしゅう", "minggu ini"],
        ["来週", "raishuu", "らいしゅう", "minggu depan"], ["先月", "sengetsu", "せんげつ", "bulan lalu"],
        ["今月", "kongetsu", "こんげつ", "bulan ini"], ["来月", "raigetsu", "らいげつ", "bulan depan"],
        ["去年", "kyonen", "きょねん", "tahun lalu"], ["今年", "kotoshi", "ことし", "tahun ini"],
        ["来年", "rainen", "らいねん", "tahun depan"], ["春", "haru", "はる", "musim semi"],
        ["夏", "natsu", "なつ", "musim panas"], ["秋", "aki", "あき", "musim gugur"], ["冬", "fuyu", "ふゆ", "musim dingin"]
    ]);

    vocabCategories["Jam"] = vocabCategories["Jam"].concat([
        ["四時", "yo ji", "よじ", "jam empat"], ["五時", "go ji", "ごじ", "jam lima"], ["六時", "roku ji", "ろくじ", "jam enam"],
        ["八時", "hachi ji", "はちじ", "jam delapan"], ["十時", "juu ji", "じゅうじ", "jam sepuluh"], ["十二時", "juu ni ji", "じゅうにじ", "jam dua belas"],
        ["一時半", "ichi ji han", "いちじはん", "jam setengah dua"], ["三十分", "sanjuppun", "さんじゅっぷん", "tiga puluh menit"],
        ["午前八時", "gozen hachi ji", "ごぜんはちじ", "jam delapan pagi"], ["午後三時", "gogo san ji", "ごごさんじ", "jam tiga sore"],
        ["時間がありません", "jikan ga arimasen", "じかんがありません", "tidak punya waktu"], ["何分ですか", "nanpun desu ka", "なんぷんですか", "berapa menit?"]
    ]);

    vocabCategories["Nama Benda"] = vocabCategories["Nama Benda"].concat([
        ["窓", "mado", "まど", "jendela"], ["ドア", "doa", "どあ", "pintu"], ["部屋", "heya", "へや", "kamar"],
        ["台所", "daidokoro", "だいどころ", "dapur"], ["冷蔵庫", "reizouko", "れいぞうこ", "kulkas"], ["テレビ", "terebi", "てれび", "televisi"],
        ["ラジオ", "rajio", "らじお", "radio"], ["電気", "denki", "でんき", "listrik / lampu"], ["写真", "shashin", "しゃしん", "foto"],
        ["手紙", "tegami", "てがみ", "surat"], ["切手", "kitte", "きって", "perangko"], ["荷物", "nimotsu", "にもつ", "barang bawaan"],
        ["箸", "hashi", "はし", "sumpit"], ["皿", "sara", "さら", "piring"], ["コップ", "koppu", "こっぷ", "gelas"]
    ]);

    vocabCategories["Nama Tempat"] = vocabCategories["Nama Tempat"].concat([
        ["大学", "daigaku", "だいがく", "universitas"], ["会社", "kaisha", "かいしゃ", "kantor / perusahaan"], ["大使館", "taishikan", "たいしかん", "kedutaan"],
        ["空港", "kuukou", "くうこう", "bandara"], ["道", "michi", "みち", "jalan"], ["交番", "kouban", "こうばん", "pos polisi"],
        ["映画館", "eigakan", "えいがかん", "bioskop"], ["喫茶店", "kissaten", "きっさてん", "kedai kopi"], ["食堂", "shokudou", "しょくどう", "kantin"],
        ["入口", "iriguchi", "いりぐち", "pintu masuk"], ["出口", "deguchi", "でぐち", "pintu keluar"], ["外国", "gaikoku", "がいこく", "luar negeri"]
    ]);

    vocabCategories["Keluarga"] = vocabCategories["Keluarga"].concat([
        ["祖父", "sofu", "そふ", "kakek saya"], ["お祖父さん", "ojiisan", "おじいさん", "kakek"], ["祖母", "sobo", "そぼ", "nenek saya"],
        ["お祖母さん", "obaasan", "おばあさん", "nenek"], ["夫", "otto", "おっと", "suami saya"], ["ご主人", "goshujin", "ごしゅじん", "suami"],
        ["妻", "tsuma", "つま", "istri saya"], ["奥さん", "okusan", "おくさん", "istri"], ["息子", "musuko", "むすこ", "anak laki-laki"],
        ["娘", "musume", "むすめ", "anak perempuan"], ["兄弟", "kyoudai", "きょうだい", "saudara kandung"], ["おじさん", "ojisan", "おじさん", "paman"],
        ["おばさん", "obasan", "おばさん", "bibi"]
    ]);

    vocabCategories["Sekolah"] = vocabCategories["Sekolah"].concat([
        ["教科書", "kyoukasho", "きょうかしょ", "buku pelajaran"], ["ノート", "nooto", "のーと", "buku catatan"], ["鉛筆", "enpitsu", "えんぴつ", "pensil"],
        ["消しゴム", "keshigomu", "けしごむ", "penghapus"], ["黒板", "kokuban", "こくばん", "papan tulis"], ["字", "ji", "じ", "huruf / tulisan"],
        ["文", "bun", "ぶん", "kalimat"], ["漢字", "kanji", "かんじ", "Kanji"], ["ひらがな", "hiragana", "ひらがな", "Hiragana"],
        ["カタカナ", "katakana", "カタカナ", "Katakana"], ["授業", "jugyou", "じゅぎょう", "pelajaran"], ["休み", "yasumi", "やすみ", "libur / istirahat"],
        ["練習", "renshuu", "れんしゅう", "latihan"]
    ]);

    vocabCategories["Aktivitas"] = vocabCategories["Aktivitas"].concat([
        ["洗う", "arau", "あらう", "mencuci"], ["作る", "tsukuru", "つくる", "membuat"], ["売る", "uru", "うる", "menjual"],
        ["持つ", "motsu", "もつ", "membawa / memiliki"], ["待つ", "matsu", "まつ", "menunggu"], ["会う", "au", "あう", "bertemu"],
        ["住む", "sumu", "すむ", "tinggal"], ["知る", "shiru", "しる", "mengetahui"], ["思う", "omou", "おもう", "berpikir"],
        ["分かる", "wakaru", "わかる", "mengerti"], ["教える", "oshieru", "おしえる", "mengajar / memberi tahu"], ["習う", "narau", "ならう", "belajar dari seseorang"],
        ["遊ぶ", "asobu", "あそぶ", "bermain"], ["泳ぐ", "oyogu", "およぐ", "berenang"], ["走る", "hashiru", "はしる", "berlari"]
    ]);

    vocabCategories["Sifat"] = vocabCategories["Sifat"].concat([
        ["長い", "nagai", "ながい", "panjang"], ["短い", "mijikai", "みじかい", "pendek"], ["重い", "omoi", "おもい", "berat"],
        ["軽い", "karui", "かるい", "ringan"], ["早い", "hayai", "はやい", "cepat / awal"], ["遅い", "osoi", "おそい", "lambat / terlambat"],
        ["多い", "ooi", "おおい", "banyak"], ["少ない", "sukunai", "すくない", "sedikit"], ["近い", "chikai", "ちかい", "dekat"],
        ["難しい", "muzukashii", "むずかしい", "sulit"], ["易しい", "yasashii", "やさしい", "mudah"], ["忙しい", "isogashii", "いそがしい", "sibuk"],
        ["静か", "shizuka", "しずか", "tenang"], ["賑やか", "nigiyaka", "にぎやか", "ramai"], ["きれい", "kirei", "きれい", "indah / bersih"]
    ]);

    vocabCategories["Alam"] = vocabCategories["Alam"].concat([
        ["天気", "tenki", "てんき", "cuaca"], ["晴れ", "hare", "はれ", "cerah"], ["曇り", "kumori", "くもり", "berawan"],
        ["雨", "ame", "あめ", "hujan"], ["雪", "yuki", "ゆき", "salju"], ["風", "kaze", "かぜ", "angin"],
        ["空", "sora", "そら", "langit"], ["星", "hoshi", "ほし", "bintang"], ["月", "tsuki", "つき", "bulan"],
        ["太陽", "taiyou", "たいよう", "matahari"], ["池", "ike", "いけ", "kolam"], ["森", "mori", "もり", "hutan"],
        ["花", "hana", "はな", "bunga"], ["鳥", "tori", "とり", "burung"], ["魚", "sakana", "さかな", "ikan"]
    ]);

    vocabCategories["Transportasi"] = vocabCategories["Transportasi"].concat([
        ["駅前", "ekimae", "えきまえ", "depan stasiun"], ["電車", "densha", "でんしゃ", "kereta listrik"], ["電車に乗る", "densha ni noru", "でんしゃにのる", "naik kereta"],
        ["電車を降りる", "densha o oriru", "でんしゃをおりる", "turun dari kereta"], ["歩く", "aruku", "あるく", "berjalan kaki"], ["止まる", "tomaru", "とまる", "berhenti"],
        ["出発", "shuppatsu", "しゅっぱつ", "keberangkatan"], ["到着", "touchaku", "とうちゃく", "kedatangan"], ["入口", "iriguchi", "いりぐち", "pintu masuk"],
        ["出口", "deguchi", "でぐち", "pintu keluar"], ["右側", "migigawa", "みぎがわ", "sisi kanan"], ["左側", "hidarigawa", "ひだりがわ", "sisi kiri"]
    ]);

    vocabCategories["Makanan dan Minuman"] = vocabCategories["Makanan dan Minuman"].concat([
        ["料理", "ryouri", "りょうり", "masakan"], ["食べ物", "tabemono", "たべもの", "makanan"], ["飲み物", "nomimono", "のみもの", "minuman"],
        ["お肉", "oniku", "おにく", "daging"], ["豚肉", "butaniku", "ぶたにく", "daging babi"], ["牛肉", "gyuuniku", "ぎゅうにく", "daging sapi"],
        ["鶏肉", "toriniku", "とりにく", "daging ayam"], ["米", "kome", "こめ", "beras"], ["塩", "shio", "しお", "garam"],
        ["砂糖", "satou", "さとう", "gula"], ["醤油", "shouyu", "しょうゆ", "kecap asin"], ["朝食", "choushoku", "ちょうしょく", "sarapan"],
        ["昼食", "chuushoku", "ちゅうしょく", "makan siang"], ["夕食", "yuushoku", "ゆうしょく", "makan malam"], ["注文", "chuumon", "ちゅうもん", "pesanan"]
    ]);

    vocabCategories["Tubuh"] = vocabCategories["Tubuh"].concat([
        ["髪", "kami", "かみ", "rambut"], ["首", "kubi", "くび", "leher"], ["肩", "kata", "かた", "bahu"],
        ["背中", "senaka", "せなか", "punggung"], ["胸", "mune", "むね", "dada"], ["腕", "ude", "うで", "lengan"],
        ["指", "yubi", "ゆび", "jari"], ["膝", "hiza", "ひざ", "lutut"], ["心", "kokoro", "こころ", "hati / perasaan"],
        ["声", "koe", "こえ", "suara"], ["熱", "netsu", "ねつ", "demam"], ["薬", "kusuri", "くすり", "obat"],
        ["痛い", "itai", "いたい", "sakit"], ["疲れる", "tsukareru", "つかれる", "lelah"], ["休む", "yasumu", "やすむ", "beristirahat"]
    ]);

    vocabCategories["Warna"] = vocabCategories["Warna"].concat([
        ["赤い", "akai", "あかい", "berwarna merah"], ["青い", "aoi", "あおい", "berwarna biru"], ["白い", "shiroi", "しろい", "berwarna putih"],
        ["黒い", "kuroi", "くろい", "berwarna hitam"], ["黄色い", "kiiroi", "きいろい", "berwarna kuning"], ["緑色", "midoriiro", "みどりいろ", "warna hijau"],
        ["茶色", "chairo", "ちゃいろ", "warna cokelat"], ["ピンク", "pinku", "ぴんく", "merah muda"], ["オレンジ", "orenji", "おれんじ", "oranye"],
        ["明るい色", "akarui iro", "あかるいいろ", "warna terang"], ["暗い色", "kurai iro", "くらいいろ", "warna gelap"], ["何色", "nani iro", "なにいろ", "warna apa"]
    ]);

    vocabCategories["Kata Tanya"] = vocabCategories["Kata Tanya"].concat([
        ["何ですか", "nan desu ka", "なんですか", "apa?"], ["これは何ですか", "kore wa nan desu ka", "これはなんですか", "ini apa?"],
        ["あの人は誰ですか", "ano hito wa dare desu ka", "あのひとはだれですか", "siapa orang itu?"], ["どこですか", "doko desu ka", "どこですか", "di mana?"],
        ["トイレはどこですか", "toire wa doko desu ka", "といれはどこですか", "toilet di mana?"], ["いつ行きますか", "itsu ikimasu ka", "いついきますか", "kapan pergi?"],
        ["どうしましたか", "dou shimashita ka", "どうしましたか", "ada apa?"], ["いくらですか", "ikura desu ka", "いくらですか", "berapa harganya?"],
        ["どれですか", "dore desu ka", "どれですか", "yang mana?"], ["どの本ですか", "dono hon desu ka", "どのほんですか", "buku yang mana?"],
        ["何人ですか", "nan nin desu ka", "なんにんですか", "berapa orang?"], ["何歳ですか", "nan sai desu ka", "なんさいですか", "berapa umur?"],
        ["なぜですか", "naze desu ka", "なぜですか", "mengapa?"]
    ]);

    vocabCategories["Posisi"] = vocabCategories["Posisi"].concat([
        ["右上", "migi ue", "みぎうえ", "kanan atas"], ["左上", "hidari ue", "ひだりうえ", "kiri atas"], ["右下", "migi shita", "みぎした", "kanan bawah"],
        ["左下", "hidari shita", "ひだりした", "kiri bawah"], ["真ん中", "mannaka", "まんなか", "tengah"], ["近く", "chikaku", "ちかく", "dekat"],
        ["遠く", "tooku", "とおく", "jauh"], ["向こう", "mukou", "むこう", "seberang"], ["こちら", "kochira", "こちら", "sini / arah sini"],
        ["そちら", "sochira", "そちら", "situ / arah situ"], ["あちら", "achira", "あちら", "sana / arah sana"], ["間", "aida", "あいだ", "di antara"],
        ["隣の部屋", "tonari no heya", "となりのへや", "kamar sebelah"]
    ]);

    vocabCategories["Perasaan"] = vocabCategories["Perasaan"].concat([
        ["大好き", "daisuki", "だいすき", "sangat suka"], ["大嫌い", "daikirai", "だいきらい", "sangat tidak suka"], ["楽しい", "tanoshii", "たのしい", "menyenangkan"],
        ["嬉しい", "ureshii", "うれしい", "senang"], ["悲しい", "kanashii", "かなしい", "sedih"], ["寂しい", "sabishii", "さびしい", "kesepian"],
        ["怖い", "kowai", "こわい", "takut"], ["心配", "shinpai", "しんぱい", "khawatir"], ["安心", "anshin", "あんしん", "lega / tenang"],
        ["元気", "genki", "げんき", "sehat / bersemangat"], ["疲れた", "tsukareta", "つかれた", "lelah"], ["眠い", "nemui", "ねむい", "mengantuk"],
        ["怒る", "okoru", "おこる", "marah"], ["驚く", "odoroku", "おどろく", "terkejut"], ["困る", "komaru", "こまる", "kesulitan / bingung"]
    ]);

    vocabCategories["Pekerjaan"] = [
        ["先生", "sensei", "せんせい", "guru"], ["学生", "gakusei", "がくせい", "pelajar"],
        ["会社員", "kaishain", "かいしゃいん", "pegawai perusahaan"], ["医者", "isha", "いしゃ", "dokter"],
        ["看護師", "kangoshi", "かんごし", "perawat"], ["店員", "ten'in", "てんいん", "pegawai toko"],
        ["銀行員", "ginkouin", "ぎんこういん", "pegawai bank"], ["警察官", "keisatsukan", "けいさつかん", "polisi"],
        ["公務員", "koumuin", "こうむいん", "pegawai negeri"], ["料理人", "ryourinin", "りょうりにん", "koki"],
        ["運転手", "untenshu", "うんてんしゅ", "sopir"], ["歌手", "kashu", "かしゅ", "penyanyi"],
        ["作家", "sakka", "さっか", "penulis"], ["主婦", "shufu", "しゅふ", "ibu rumah tangga"]
    ];

    vocabCategories["Belanja dan Harga"] = [
        ["買い物", "kaimono", "かいもの", "belanja"], ["買う", "kau", "かう", "membeli"], ["売る", "uru", "うる", "menjual"],
        ["店", "mise", "みせ", "toko"], ["商品", "shouhin", "しょうひん", "barang dagangan"], ["値段", "nedan", "ねだん", "harga"],
        ["お金", "okane", "おかね", "uang"], ["円", "en", "えん", "yen"], ["高い", "takai", "たかい", "mahal"],
        ["安い", "yasui", "やすい", "murah"], ["いくら", "ikura", "いくら", "berapa harganya"], ["ください", "kudasai", "ください", "tolong berikan"],
        ["これ", "kore", "これ", "ini"], ["それ", "sore", "それ", "itu"], ["あれ", "are", "あれ", "itu di sana"],
        ["全部", "zenbu", "ぜんぶ", "semua"], ["一つ", "hitotsu", "ひとつ", "satu buah"], ["二つ", "futatsu", "ふたつ", "dua buah"],
        ["袋", "fukuro", "ふくろ", "kantong"], ["お釣り", "otsuri", "おつり", "uang kembalian"]
    ];

    vocabCategories["Rumah dan Ruangan"] = [
        ["家", "ie", "いえ", "rumah"], ["部屋", "heya", "へや", "kamar"], ["玄関", "genkan", "げんかん", "pintu masuk rumah"],
        ["台所", "daidokoro", "だいどころ", "dapur"], ["居間", "ima", "いま", "ruang keluarga"], ["寝室", "shinshitsu", "しんしつ", "kamar tidur"],
        ["お風呂", "ofuro", "おふろ", "bak mandi / mandi"], ["トイレ", "toire", "といれ", "toilet"], ["庭", "niwa", "にわ", "halaman"],
        ["窓", "mado", "まど", "jendela"], ["ドア", "doa", "どあ", "pintu"], ["階段", "kaidan", "かいだん", "tangga"],
        ["ベッド", "beddo", "べっど", "tempat tidur"], ["布団", "futon", "ふとん", "kasur Jepang"], ["電気", "denki", "でんき", "lampu / listrik"],
        ["冷蔵庫", "reizouko", "れいぞうこ", "kulkas"], ["洗濯機", "sentakuki", "せんたくき", "mesin cuci"], ["掃除", "souji", "そうじ", "bersih-bersih"]
    ];

    vocabCategories["Cuaca"] = [
        ["天気", "tenki", "てんき", "cuaca"], ["晴れ", "hare", "はれ", "cerah"], ["晴れる", "hareru", "はれる", "menjadi cerah"],
        ["曇り", "kumori", "くもり", "berawan"], ["曇る", "kumoru", "くもる", "menjadi mendung"], ["雨", "ame", "あめ", "hujan"],
        ["雨が降る", "ame ga furu", "あめがふる", "hujan turun"], ["雪", "yuki", "ゆき", "salju"], ["雪が降る", "yuki ga furu", "ゆきがふる", "salju turun"],
        ["風", "kaze", "かぜ", "angin"], ["風が強い", "kaze ga tsuyoi", "かぜがつよい", "anginnya kencang"], ["暑い", "atsui", "あつい", "panas"],
        ["寒い", "samui", "さむい", "dingin"], ["暖かい", "atatakai", "あたたかい", "hangat"], ["涼しい", "suzushii", "すずしい", "sejuk"],
        ["気温", "kion", "きおん", "suhu udara"], ["季節", "kisetsu", "きせつ", "musim"], ["春", "haru", "はる", "musim semi"],
        ["夏", "natsu", "なつ", "musim panas"], ["秋", "aki", "あき", "musim gugur"], ["冬", "fuyu", "ふゆ", "musim dingin"]
    ];

    vocabCategories["Angka dan Penghitung"] = [
        ["一つ", "hitotsu", "ひとつ", "satu benda"], ["二つ", "futatsu", "ふたつ", "dua benda"], ["三つ", "mittsu", "みっつ", "tiga benda"],
        ["一人", "hitori", "ひとり", "satu orang"], ["二人", "futari", "ふたり", "dua orang"], ["三人", "sannin", "さんにん", "tiga orang"],
        ["一枚", "ichimai", "いちまい", "satu lembar"], ["二枚", "nimai", "にまい", "dua lembar"], ["一本", "ippon", "いっぽん", "satu benda panjang"],
        ["二本", "nihon", "にほん", "dua benda panjang"], ["一台", "ichidai", "いちだい", "satu mesin / kendaraan"], ["一冊", "issatsu", "いっさつ", "satu buku"],
        ["一匹", "ippiki", "いっぴき", "satu hewan kecil"], ["一歳", "issai", "いっさい", "satu tahun usia"], ["何個", "nanko", "なんこ", "berapa buah"],
        ["何人", "nannin", "なんにん", "berapa orang"]
    ];

    vocabCategories["Kata Kerja Tambahan"] = [
        ["開ける", "akeru", "あける", "membuka"], ["閉める", "shimeru", "しめる", "menutup"], ["入る", "hairu", "はいる", "masuk"],
        ["出る", "deru", "でる", "keluar"], ["始める", "hajimeru", "はじめる", "memulai"], ["終わる", "owaru", "おわる", "selesai"],
        ["着る", "kiru", "きる", "memakai pakaian"], ["脱ぐ", "nugu", "ぬぐ", "melepas pakaian"], ["立つ", "tatsu", "たつ", "berdiri"],
        ["座る", "suwaru", "すわる", "duduk"], ["置く", "oku", "おく", "meletakkan"], ["取る", "toru", "とる", "mengambil"],
        ["貸す", "kasu", "かす", "meminjamkan"], ["借りる", "kariru", "かりる", "meminjam"], ["返す", "kaesu", "かえす", "mengembalikan"],
        ["送る", "okuru", "おくる", "mengirim"], ["もらう", "morau", "もらう", "menerima"], ["あげる", "ageru", "あげる", "memberi"],
        ["見せる", "miseru", "みせる", "memperlihatkan"], ["忘れる", "wasureru", "わすれる", "melupakan"]
    ];

    var pageName = window.location.pathname.split("/").pop();

    var pageName = window.location.pathname.split("/").pop();
    var lesson = detailData[pageName];
    var footer = document.querySelector("footer");

    function buildRows(rows) {
        return rows.map(function (row) {
            return "<tr><td>" + row[0] + "</td><td>" + row[1] + "</td><td>" + row[2] + "</td><td>" + row[3] + "</td></tr>";
        }).join("");
    }

    if (pageName === "Kosakata.html" && footer && !document.querySelector(".vocab-categories")) {
        var categoryNames = Object.keys(vocabCategories);
        var categoryButtons = categoryNames.map(function (category, index) {
            return "<button class=\"vocab-category" + (index === 0 ? " active" : "") + "\" type=\"button\" data-category=\"" + category + "\">" + category + "</button>";
        }).join("");
        var vocabMarkup = "<section class=\"material detail-material\"><div class=\"section-heading\"><div class=\"section-icon\">語</div><div><h2>Pilih kategori kosakata</h2><p>Klik kategori untuk melihat daftar kosakata yang sesuai.</p></div></div><div class=\"vocab-categories\">" + categoryButtons + "</div><div class=\"detail-table-wrap\"><table class=\"detail-table\"><thead><tr><th>Teks Jepang</th><th>Cara baca</th><th>Hiragana</th><th>Arti Indonesia</th></tr></thead><tbody class=\"vocab-rows\">" + buildRows(vocabCategories[categoryNames[0]]) + "</tbody></table></div></section>";
        footer.insertAdjacentHTML("beforebegin", vocabMarkup);
        var vocabSection = footer.previousElementSibling;
        var vocabRows = vocabSection.querySelector(".vocab-rows");
        vocabSection.querySelectorAll(".vocab-category").forEach(function (button) {
            button.addEventListener("click", function () {
                vocabSection.querySelectorAll(".vocab-category").forEach(function (item) {
                    item.classList.toggle("active", item === button);
                });
                vocabRows.innerHTML = buildRows(vocabCategories[button.dataset.category]);
            });
        });
    } else if (lesson && footer && !document.querySelector(".detail-table")) {
        footer.insertAdjacentHTML("beforebegin", "<section class=\"material detail-material\"><div class=\"section-heading\"><div class=\"section-icon\">読</div><div><h2>" + lesson.title + "</h2><p>" + lesson.description + "</p></div></div><div class=\"detail-table-wrap\"><table class=\"detail-table\"><thead><tr><th>Teks Jepang</th><th>Cara baca</th><th>Hiragana</th><th>Arti Indonesia</th></tr></thead><tbody>" + buildRows(lesson.rows) + "</tbody></table></div></section>");
    }
})();
