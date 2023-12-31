const favorites = [
  {
    id: 201,
    image: "https://wp.oggusto.com/wp-content/uploads/2023/08/cem-adrian.webp",
    artist: "Cem Adrian",
    city: "İstanbul",
    location: "Hayal Kahvesi Aqua Florya",
    date: "09/09/2023",
    time: "22:00",
    ticket: "Biletix",
    description:
      "Müzikte sınırları, tarzları, kuralları dışlayan, kendini sadece “özgür bir müzisyen” olarak tanımlayan Cem Adrian, sevenleriyle buluşmaya devam ediyor.",
  },
  {
    id: 202,
    image:
      "https://wp.oggusto.com/wp-content/uploads/2023/08/kenan-dogulu.webp",
    artist: "Kenan Doğulu",
    city: "İstanbul",
    location: "Turkcell Vadi",
    date: "10/09/2023",
    time: "21:00",
    ticket: "Biletix",
    description:
      "Pop müziğin sevilen ismi Kenan Doğulu, sevilen şarkılarıyla Turkcell Vadi Sahnesi’nde!",
  },
  {
    id: 203,
    image:
      "https://wp.oggusto.com/wp-content/uploads/2023/08/ceylan-ertem.webp",
    artist: "Ceylan Ertem",
    city: "İstanbul",
    location: "Jolly Joker Kıyı İstanbul",
    date: "15/09/2023",
    time: "21:00",
    ticket: "Biletix",
    description: "Ceylan Ertem, 15 Eylül’de Jolly Joker Kıyı İstanbul’da.",
  },
  {
    id: 204,
    image:
      "https://tiyatrolar.com.tr/files/activity/o/othello-3/image/othello-3.jpg",
    title: "Othello",
    city: "İstanbul",
    location: "Kadıköy Belediyesi Süreyya Operası",
    date: "01/09/2023",
    time: "20:00",
    ticket: "Biletix",
    description:
      "William Shakespeare'in unutulmaz eseri Othello, Kadıköy Belediyesi Süreyya Operası'nda seyirci ile buluşuyor.",
  },
  {
    id: 205,
    image:
      "https://wp.oggusto.com/wp-content/uploads/2023/08/cyrano-1024x683.webp",
    title: "Cyrano",
    city: "Ankara",
    location: "Oran Açık Hava Sahnesi",
    date: "1 Eylül 2023",
    time: "21:00",
    ticket: "Biletix",
    description:
      "Edmond Rostand’ın unutulmaz eseri Cyrano De Bergerac bu sezon DasDas’ta yeniden canlanıyor...",
  },
  {
    id: 206,
    image:"https://festtr.com/wp-content/uploads/istanbulrooftopfestival-20.08.2021-23-23-43.jpg",
    artist: "İstanbul Rooftop Festival",
    city: "İstanbul",
    location: "Çeşitli Teraslar",
    date: "09/09/2023",
    ticket: "Passo",
    description:
      "Bu sene altıncısı düzenlenecek olan ve bir Sonbahar klasiği haline gelen İstanbul Rooftop Festival, bu zamana kadar yaşadığı eşsiz deneyime bir yenisini eklemek için 18 Eylül Cumartesi günü şehrin en keyifli teraslarında sizlerle buluşmaya hazırlanıyor!",
  },
  {
    id: 207,
    image:
      "https://wp.oggusto.com/wp-content/uploads/2023/07/akbank-caz-festivali.webp",
    artist: "33. Akbank Caz Festivali",
    city: "İstanbul",
    location: "Çeşitli Mekanlar",
    date: "23/09/2023 - 08/10/2023",
    ticket: "Biletix",
    description:
      "Bu yıl 33'üncüsü gerçekleşecek olan Akbank Caz Festivali, 23 Eylül-8 Ekim tarihleri arasında caz dünyasının saygın isimlerini ağırlayacak.",
  },
  {
    id: 208,
    image:
      "https://wp.oggusto.com/wp-content/uploads/2023/08/2DT02pnga1alt-1.webp",
    artist: "Alsancak Müzik Festivali",
    city: "izmir",
    location: "Tarihi Havagazı Fabrikası",
    date: "22/09/2023",
    time: "",
    ticket: "Biletix",
    description:
      "Sertab Erener, Adamlar, Evdeki Saat, Kendimden Hallice . Alsancak Müzik Festivali 22 Eylülde İzmir Tarihi Havagazı Fabrikası’nda!",
  },
  {
    id: 209,
    image:
      "https://wp.oggusto.com/wp-content/uploads/2023/08/gurmefest-800x1200-imr_1-1024x683.webp",
    artist: "İzmir Gurmefest",
    city: "izmir",
    location: "Tarihi Havagazı Fabrikası",
    date: "30/09/2023",
    time: "",
    ticket: "Biletix",
    description:
      "Tezgah, Haluk Levent . İzmir’de bugüne kadar yapılmış en büyük yeme&içme ve eğlence festivali İzmir Gurmefest ikinci kez YİCEZ, İÇÇEZ, EĞLENCEZ teması ile düzenleniyor. ",
  },
  {
    id: 210,
    image:
      "https://wp.oggusto.com/wp-content/uploads/2023/08/dogu-demirkol-1-1024x576.webp",
    artist: "Doğu Demirkol",
    city: "izmir",
    location: "Bostanlı Suat Taşer Tiyatrosu",
    date: "19/09/2023",
    time: "21:00",
    ticket: "Passo",
    description:
      "Türkiye, Avrupa ve Amerika’da ve dünyanın farklı şehirlerinde gerçekleştirdiği tek kişilik gösterisinde kendi yaşamından ve bu topraklarda güldürü niteliği taşıyan her olaydan beslenen Doğu Demirkol, bu sezon da seyircisi ile buluşmaya devam ediyor.",
  },
  {
    id: 211,
    image:
      "https://wp.oggusto.com/wp-content/uploads/2023/08/Mesut-Sure-Iliski-Testi.webp",
    artist: "Mesut Süre İle İlişki Testi",
    city: "izmir",
    location: "Tepekule Kültür ve Kongre Merkezi",
    date: "24/09/2023",
    time: "17:00",
    ticket: "Biletix",
    description:
      "“Mesut Süre İle İlişki Testi” çiftlerin tanışma hikayelerinden kıskançlıklarına, eski sevgililerinden arkadaşlarıyla ve aileleriyle bir çift olarak kurdukları ilişkiye kadar pek çok şeyi, Mesut Süre’nin yer yer keskin ama her daim eğlenceli ve neşeli moderatörlüğü eşliğinde paylaştıkları bir talk show.",
  },
];

export default favorites;
