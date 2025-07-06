// 50 Seviyeli Oyun Hikayesi ve Soruları
const extendedGameQuestions = [
    // Seviye 1-10: Evin Keşfi
    {
        story: "Babaannenin eski evine vardığında, kapı hafifçe aralık duruyordu. İçeriden garip sesler geliyordu...",
        question: "Ne yaparsın?",
        choices: ["A) İçeri girerim", "B) Geri dönerim"],
        correct: 0,
        timeLimit: 15
    },
    {
        story: "İçeri girdiğinde, eski tahta zeminler gıcırdıyor. Merdivenden yukarıdan ayak sesleri geliyor...",
        question: "Hangi yöne gidersin?",
        choices: ["A) Yukarı çıkarım", "B) Mutfağa giderim"],
        correct: 1,
        timeLimit: 14
    },
    {
        story: "Mutfakta eski bir not buluyorsun: 'Bodrumdaki sandığa bak...' yazıyor.",
        question: "Ne yaparsın?",
        choices: ["A) Bodruma inerim", "B) Notu yakıp kaçarım"],
        correct: 0,
        timeLimit: 13
    },
    {
        story: "Bodrum karanlık ve nemli. Köşede eski bir sandık var, üzerinde garip semboller...",
        question: "Sandığı açar mısın?",
        choices: ["A) Evet, açarım", "B) Hayır, uzak dururum"],
        correct: 1,
        timeLimit: 12
    },
    {
        story: "Sandığı açmamaya karar verdin ama arkandan bir ses geldi: 'Çok geç...'",
        question: "Ne yaparsın?",
        choices: ["A) Arkama bakarım", "B) Koşarak kaçarım"],
        correct: 1,
        timeLimit: 11
    },
    {
        story: "Koşarken merdivenlerden yukarı çıkıyorsun. Kapı kapandı! Pencereden bir gölge geçti...",
        question: "Hangi odaya gidersin?",
        choices: ["A) Yatak odasına", "B) Oturma odasına"],
        correct: 0,
        timeLimit: 10
    },
    {
        story: "Yatak odasında eski bir ayna var. Aynada kendi yansıman yok, başka birinin var...",
        question: "Ne yaparsın?",
        choices: ["A) Aynaya dokunurum", "B) Aynayı kırarım"],
        correct: 1,
        timeLimit: 10
    },
    {
        story: "Aynayı kırdığında, arkandan bir çığlık geldi. Hayalet seni buldu!",
        question: "Son şansın! Ne yaparsın?",
        choices: ["A) Dua ederim", "B) Gözlerimi kapatırım"],
        correct: 0,
        timeLimit: 9
    },
    {
        story: "Dua etmeye başladığında, hayalet yavaşça geri çekiliyor. Ama henüz bitmedi...",
        question: "Devam eder misin?",
        choices: ["A) Dua etmeye devam ederim", "B) Kaçmaya çalışırım"],
        correct: 0,
        timeLimit: 9
    },
    {
        story: "Duaların etkili oluyor! Hayalet zayıflıyor ama seni son kez test ediyor...",
        question: "Hangi duayı seçersin?",
        choices: ["A) Nazar duası", "B) Ayetel Kürsi"],
        correct: 1,
        timeLimit: 8
    },

    // Seviye 11-20: Köyün Sırları
    {
        story: "Hayalet geçici olarak çekildi. Şimdi köyün diğer evlerini araştırman gerekiyor...",
        question: "Hangi eve gidersin?",
        choices: ["A) Eski kiliseye", "B) Mezarlığa"],
        correct: 0,
        timeLimit: 12
    },
    {
        story: "Kilisede eski bir rahip ruhu seni karşılıyor. 'Yardım et bana...' diyor.",
        question: "Ne yaparsın?",
        choices: ["A) Yardım ederim", "B) Kaçarım"],
        correct: 0,
        timeLimit: 11
    },
    {
        story: "Rahip: 'Köyü lanetleyen kitap çan kulesinde saklı. Onu bulmalısın!'",
        question: "Çan kulesine çıkar mısın?",
        choices: ["A) Evet, çıkarım", "B) Başka yol ararım"],
        correct: 0,
        timeLimit: 10
    },
    {
        story: "Çan kulesinde eski bir kitap buluyorsun. Sayfaları kan kırmızısı...",
        question: "Kitabı açar mısın?",
        choices: ["A) Açarım", "B) Yakarım"],
        correct: 1,
        timeLimit: 9
    },
    {
        story: "Kitabı yakmaya çalışırken, sayfalar kendiliğinden açılıyor. Lanet güçleniyor!",
        question: "Ne yaparsın?",
        choices: ["A) Kitabı suya atarım", "B) Kutsal su dökerim"],
        correct: 1,
        timeLimit: 8
    },
    {
        story: "Kutsal su kitaba değdiğinde, korkunç çığlıklar yükseliyor. Lanet zayıflıyor...",
        question: "Devam eder misin?",
        choices: ["A) Daha fazla kutsal su dökerim", "B) Kaçarım"],
        correct: 0,
        timeLimit: 8
    },
    {
        story: "Kitap yok oluyor ama köydeki ruhlar hala huzursuz. Mezarlığa gitmen gerekiyor...",
        question: "Mezarlığa gider misin?",
        choices: ["A) Giderim", "B) Köyden kaçarım"],
        correct: 0,
        timeLimit: 7
    },
    {
        story: "Mezarlıkta eski mezar taşları arasında dolaşıyorsun. Birinden ses geliyor...",
        question: "Hangi mezara yaklaşırsın?",
        choices: ["A) En eski mezara", "B) En büyük mezara"],
        correct: 0,
        timeLimit: 7
    },
    {
        story: "Eski mezardan bir ses: 'Benim kemiklerimi topla, huzura kavuşayım...'",
        question: "Ne yaparsın?",
        choices: ["A) Kemikleri toplarım", "B) Mezarı kapatırım"],
        correct: 0,
        timeLimit: 6
    },
    {
        story: "Kemikleri toplarken, diğer ruhlar da huzura kavuşmak için sana yaklaşıyor...",
        question: "Hepsine yardım eder misin?",
        choices: ["A) Evet, hepsine yardım ederim", "B) Sadece birine yardım ederim"],
        correct: 0,
        timeLimit: 6
    },

    // Seviye 21-30: Karanlık Güçler
    {
        story: "Ruhları huzura kavuşturdun ama asıl kötülük henüz ortaya çıkmadı. Orman derinliklerinden sesler geliyor...",
        question: "Ormana girer misin?",
        choices: ["A) Girerim", "B) Köyde kalırım"],
        correct: 0,
        timeLimit: 10
    },
    {
        story: "Ormanda eski bir kulübe var. İçinden kırmızı ışık sızıyor...",
        question: "Kulübeye yaklaşır mısın?",
        choices: ["A) Yaklaşırım", "B) Uzaktan izlerim"],
        correct: 1,
        timeLimit: 9
    },
    {
        story: "Uzaktan izlerken, kulübeden siyah gölgeler çıkıyor. Seni fark ettiler!",
        question: "Ne yaparsın?",
        choices: ["A) Saklanırım", "B) Karşı dururum"],
        correct: 0,
        timeLimit: 8
    },
    {
        story: "Saklandığın yerden, gölgelerin bir ritüel yaptığını görüyorsun. Büyük bir kötülük çağırıyorlar...",
        question: "Ritüeli durdurur musun?",
        choices: ["A) Evet, müdahale ederim", "B) Yardım çağırırım"],
        correct: 1,
        timeLimit: 7
    },
    {
        story: "Köye koşup rahip ruhunu çağırıyorsun. Birlikte ormana dönüyorsunuz...",
        question: "Hangi stratejiyi seçersin?",
        choices: ["A) Doğrudan saldırı", "B) Gizlice yaklaşma"],
        correct: 1,
        timeLimit: 7
    },
    {
        story: "Gizlice yaklaştığınızda, ritüelin son aşamasında olduklarını görüyorsunuz...",
        question: "Ne yaparsın?",
        choices: ["A) Kutsal kitap okumaya başlarım", "B) Ritüel çemberini bozarım"],
        correct: 0,
        timeLimit: 6
    },
    {
        story: "Kutsal sözler okunurken, gölgeler zayıflıyor ama ana kötülük henüz ortaya çıkmadı...",
        question: "Devam eder misin?",
        choices: ["A) Okumaya devam ederim", "B) Geri çekilirim"],
        correct: 0,
        timeLimit: 6
    },
    {
        story: "Ana kötülük ortaya çıktı! Korkunç bir varlık seni tehdit ediyor...",
        question: "Son savaş! Ne yaparsın?",
        choices: ["A) Işık büyüsü yaparım", "B) Aşk ve merhamet gösteririm"],
        correct: 1,
        timeLimit: 5
    },
    {
        story: "Merhamet gösterdiğinde, kötülük şaşırıyor. Bu onun zayıf noktası...",
        question: "Devam eder misin?",
        choices: ["A) Evet, sevgiyle yaklaşırım", "B) Saldırıya geçerim"],
        correct: 0,
        timeLimit: 5
    },
    {
        story: "Sevgin karşısında kötülük erimeye başlıyor. Ama son bir tuzak kurabilir...",
        question: "Dikkatli olur musun?",
        choices: ["A) Evet, tetikte kalırım", "B) Tamamen güvenirim"],
        correct: 0,
        timeLimit: 5
    },

    // Seviye 31-40: Final Yaklaşıyor
    {
        story: "Kötülük son nefesini veriyor ama köyün laneti henüz tam olarak kalkmadı...",
        question: "Laneti tamamen kaldırmak için ne yaparsın?",
        choices: ["A) Köyü kutsarım", "B) Köyü terk ederim"],
        correct: 0,
        timeLimit: 8
    },
    {
        story: "Köyü kutsarken, geçmişten sesler geliyor. Köyün gerçek hikayesini öğreniyorsun...",
        question: "Hikayeyi dinler misin?",
        choices: ["A) Evet, dinlerim", "B) Kutsama ritüelini sürdürürüm"],
        correct: 0,
        timeLimit: 7
    },
    {
        story: "Köy sakinleri yıllar önce büyük bir haksızlık yapmış. Masum birini suçlamışlar...",
        question: "Bu bilgiyle ne yaparsın?",
        choices: ["A) Masumun ruhunu ararım", "B) Geçmişi unutmaya çalışırım"],
        correct: 0,
        timeLimit: 7
    },
    {
        story: "Masumun ruhu köyün merkezindeki eski çınar ağacının altında bekliyor...",
        question: "Ona nasıl yaklaşırsın?",
        choices: ["A) Özür dileyerek", "B) Korkuyla"],
        correct: 0,
        timeLimit: 6
    },
    {
        story: "Masum ruh: 'Sadece adaletin yerini bulmasını istiyordum...' diyor.",
        question: "Ne yaparsın?",
        choices: ["A) Onun hikayesini anlatacağıma söz veririm", "B) Onu teselli etmeye çalışırım"],
        correct: 0,
        timeLimit: 6
    },
    {
        story: "Söz verdiğinde, ruh huzura kavuşuyor. Köy üzerindeki kara bulutlar dağılmaya başlıyor...",
        question: "Son adım için ne yaparsın?",
        choices: ["A) Köy halkının ruhlarını da huzura kavuştururum", "B) Köyden ayrılırım"],
        correct: 0,
        timeLimit: 5
    },
    {
        story: "Köy halkının ruhları da ortaya çıkıyor. Hepsi pişmanlık içinde...",
        question: "Onları affeder misin?",
        choices: ["A) Evet, hepsini affederim", "B) Sadece bazılarını affederim"],
        correct: 0,
        timeLimit: 5
    },
    {
        story: "Affettiğinde, köy tamamen temizleniyor. Ama bir son sınav daha var...",
        question: "Bu deneyimden ne öğrendin?",
        choices: ["A) Sevginin gücünü", "B) Korkunun gerçek olmadığını"],
        correct: 0,
        timeLimit: 5
    },
    {
        story: "Doğru cevap! Ama şimdi gerçek dünyaya dönmen gerekiyor...",
        question: "Bu deneyimi unutur musun?",
        choices: ["A) Hayır, hatırlayacağım", "B) Evet, unutmak istiyorum"],
        correct: 0,
        timeLimit: 4
    },
    {
        story: "Hatırlamayı seçtin. Bu bilgelik sana güç verecek...",
        question: "Son karar: Bu gücü nasıl kullanırsın?",
        choices: ["A) Başkalarına yardım etmek için", "B) Kendimi korumak için"],
        correct: 0,
        timeLimit: 4
    },

    // Seviye 41-50: Büyük Final
    {
        story: "Artık gerçek dünyaya dönme zamanı. Ama portal açılmıyor...",
        question: "Ne yaparsın?",
        choices: ["A) Sabırla beklerim", "B) Zorla açmaya çalışırım"],
        correct: 0,
        timeLimit: 6
    },
    {
        story: "Beklerken, babaannenin ruhu ortaya çıkıyor. 'Torunum, gurur duyuyorum' diyor.",
        question: "Ona ne söylersin?",
        choices: ["A) Teşekkür ederim babaanne", "B) Neden beni buraya gönderdin?"],
        correct: 0,
        timeLimit: 5
    },
    {
        story: "Babaanne: 'Seni güçlü yapmak için. Artık hazırsın.' Portal açılmaya başlıyor...",
        question: "Portala girer misin?",
        choices: ["A) Evet, eve dönme zamanı", "B) Biraz daha kalırım"],
        correct: 0,
        timeLimit: 5
    },
    {
        story: "Portala girerken, tüm yaşadıkların gözünün önünden geçiyor...",
        question: "En önemli ders neydi?",
        choices: ["A) Sevgi korkunun üstesinden gelir", "B) Güçlü olmak önemlidir"],
        correct: 0,
        timeLimit: 4
    },
    {
        story: "Doğru! Sevgi en güçlü silahtır. Şimdi gerçek dünyada bu gücü kullanabilirsin...",
        question: "İlk olarak ne yapacaksın?",
        choices: ["A) Aileme sarılacağım", "B) Bu hikayeyi anlatacağım"],
        correct: 0,
        timeLimit: 4
    },
    {
        story: "Mükemmel seçim! Aile sevgisi her şeyin temelidir. Portal seni eve götürüyor...",
        question: "Bu maceraya değdi mi?",
        choices: ["A) Kesinlikle evet", "B) Emin değilim"],
        correct: 0,
        timeLimit: 4
    },
    {
        story: "Evet, değdi! Çünkü artık daha güçlü ve bilge birisin. Eve yaklaşıyorsun...",
        question: "Gelecekte böyle bir maceraya tekrar atılır mısın?",
        choices: ["A) Evet, başkalarına yardım etmek için", "B) Hayır, yeter bu kadar"],
        correct: 0,
        timeLimit: 3
    },
    {
        story: "Harika! Gerçek kahramanlar böyle düşünür. Artık evdesin, ama güçlerin seninle...",
        question: "Bu gücü gizli tutar mısın?",
        choices: ["A) Hayır, ihtiyacı olanlara yardım ederim", "B) Evet, gizli tutarım"],
        correct: 0,
        timeLimit: 3
    },
    {
        story: "Mükemmel! Sen gerçek bir kahraman oldun. Babaannen seninle gurur duyuyor...",
        question: "Son soru: Bu deneyim seni nasıl değiştirdi?",
        choices: ["A) Daha cesur ve sevgi dolu yaptı", "B) Daha dikkatli yaptı"],
        correct: 0,
        timeLimit: 3
    },
    {
        story: "TEBRIKLER! Karanlığın tüm sorularını çözdün ve gerçek bir kahraman oldun! Babaannenin ruhu huzur içinde, köy kurtuldu ve sen güçlü bir kalple eve döndün. Bu macera sona erdi, ama senin hikayenin daha yeni başlıyor...",
        question: "Oyunu tamamladın! Tekrar oynamak ister misin?",
        choices: ["A) Evet, tekrar oynayalım!", "B) Hayır, yeter bu kadar"],
        correct: 0,
        timeLimit: 5
    }
];

// Oyun verilerini global olarak kullanılabilir hale getir
if (typeof window !== 'undefined') {
    window.extendedGameQuestions = extendedGameQuestions;
}

