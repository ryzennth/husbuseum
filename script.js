document.addEventListener("DOMContentLoaded", function () {
  // Character data with categories
  const characters = [
    {
      name: "Kazehaya",
      category: "anime",
      source: "Kimi ni Todoke",
      image: "img/kazehaya.jpeg",
    },
    {
      name: "Scaramouche",
      category: "genshin",
      source: "Genshin Impact",
      image: "img/scaramouche.jpeg",
    },
    {
      name: "Wanderer",
      category: "genshin",
      source: "Genshin Impact",
      image: "img/wanderer.jpeg",
    },
    {
      name: "Kabukimono",
      category: "genshin",
      source: "Genshin Impact",
      image: "img/kabukimono.jpeg",
    },
    {
      name: "The Balladeer",
      category: "genshin",
      source: "Genshin Impact",
      image: "img/theballadeer.jpeg",
    },
    {
      name: "Kazuha",
      category: "genshin",
      source: "Genshin Impact",
      image: "img/kazuha.jpeg",
    },
    {
      name: "Cid Kagenou",
      category: "anime",
      source: "The Eminence in Shadow",
      image: "img/cid.jpeg",
    },
    {
      name: "Xiao",
      category: "genshin",
      source: "Genshin Impact",
      image: "img/xiao.jpeg",
    },
    {
      name: "Ororon",
      category: "genshin",
      source: "Genshin Impact",
      image: "img/ororon.jpeg",
    },
    {
      name: "Kou",
      category: "anime",
      source: "Ao Haru Ride",
      image: "img/kou.jpeg",
    },
    {
      name: "Kai",
      category: "anime",
      source: "Honey Lemon Soda",
      image: "img/kai.jpeg",
    },
    {
      name: "Miyamura",
      category: "anime",
      source: "Horimiya",
      image: "img/miyamura.jpeg",
    },
    {
      name: "Childe",
      category: "genshin",
      source: "Genshin Impact",
      image: "img/childe.jpeg",
    },
    {
      name: "Harris Caine",
      category: "vtuber",
      source: "VTuber",
      image: "img/harris.png",
    },
    {
      name: "Riji",
      category: "vtuber",
      source: "Unknown",
      image: "img/riji.jpeg",
    },
    {
      name: "Krow",
      category: "vtuber",
      source: "VTuber",
      image: "img/krow.jpeg",
    },
    {
      name: "Mikazuki Arion",
      category: "vtuber",
      source: "VTuber",
      image: "img/mika.jpeg",
    },
    {
      name: "Heizou",
      category: "genshin",
      source: "Genshin Impact",
      image: "img/heizou.jpeg",
    },
    {
      name: "Venti",
      category: "genshin",
      source: "Genshin Impact",
      image: "img/venti.jpeg",
    },
    {
      name: "Rafayel",
      category: "game",
      source: "Love and Deepspace",
      image: "img/rafayel.jpeg",
    },
    {
      name: "Sylus",
      category: "game",
      source: "Love and Deepspace",
      image: "img/sylus.jpeg",
    },
    {
      name: "Caleb",
      category: "game",
      source: "Love and Deepspace",
      image: "img/caleb.jpeg",
    },
    {
      name: "Xavier",
      category: "game",
      source: "Love and Deepspace",
      image: "img/xavier.jpeg",
    },
    {
      name: "Zayne",
      category: "game",
      source: "Love and Deepspace",
      image: "img/zayne.jpeg",
    },
    {
      name: "Aventurine",
      category: "honkai",
      source: "Honkai Star Rail",
      image: "img/aventurine.jpeg",
    },
    {
      name: "Sunday",
      category: "honkai",
      source: "Honkai Star Rail",
      image: "img/sunday.jpeg",
    },
    {
      name: "Dan Heng",
      category: "honkai",
      source: "Honkai Star Rail",
      image: "img/danheng.jpeg",
    },
    {
      name: "Harumasa",
      category: "game",
      source: "Zenless Zone Zero",
      image: "img/harumasa.jpeg",
    },
    {
      name: "Dan Heng IL",
      category: "honkai",
      source: "Honkai Star Rail",
      image: "img/danhengil.jpeg",
    },
    {
      name: "Scar",
      category: "game",
      source: "Wuthering Waves",
      image: "img/scar.jpeg",
    },
    {
      name: "Kaiser",
      category: "anime",
      source: "Blue Lock",
      image: "img/kaiser.jpeg",
    },
    {
      name: "Nagi",
      category: "anime",
      source: "Blue Lock",
      image: "img/nagi.jpeg",
    },
    {
      name: "Bachira",
      category: "anime",
      source: "Blue Lock",
      image: "img/bachira.jpeg",
    },
    {
      name: "Souta Izumi",
      category: "vtuber",
      source: "VTuber",
      image: "img/souta.jpeg",
    },
    {
      name: "Gingitsune Gehenna",
      category: "vtuber",
      source: "VTuber",
      image: "img/gin.jpeg",
    },
    {
      name: "Vanitas",
      category: "anime",
      source: "The Case Study of Vanitas",
      image: "img/vanitas.jpeg",
    },
    {
      name: "Chigiri",
      category: "anime",
      source: "Blue Lock",
      image: "img/chigiri.jpeg",
    },
    {
      name: "Shiroi Aether",
      category: "vtuber",
      source: "VTuber",
      image: "img/shiroi.jpeg",
    },
    {
      name: "Alhaitam",
      category: "genshin",
      source: "Genshin Impact",
      image: "img/alhaitham.jpeg",
    },
    {
      name: "Kaveh",
      category: "genshin",
      source: "Genshin Impact",
      image: "img/kaveh.jpeg",
    },
    {
      name: "Tighnari",
      category: "genshin",
      source: "Genshin Impact",
      image: "img/tighnari.jpeg",
    },
    {
      name: "Ni-ki",
      category: "real",
      source: "ENHYPEN",
      image: "img/niki.jpeg",
    },
    {
      name: "Beomgyu",
      category: "real",
      source: "TXT",
      image: "img/beomgyu.jpeg",
    },
    {
      name: "Ivan",
      category: "anime",
      source: "Alien Stage",
      image: "img/ivan.jpeg",
    },
    {
      name: "Till",
      category: "anime",
      source: "Alien Stage",
      image: "img/till.jpeg",
    },
    {
      name: "Isagi",
      category: "anime",
      source: "Blue Lock",
      image: "img/isagi.jpeg",
    },
    {
      name: "Rin",
      category: "anime",
      source: "Blue Lock",
      image: "img/rin.jpeg",
    },
    {
      name: "Sae",
      category: "anime",
      source: "Blue Lock",
      image: "img/sae.jpeg",
    },
    {
      name: "Shoyo",
      category: "anime",
      source: "Haikyuu",
      image: "img/shoyo.jpeg",
    },
    {
      name: "Kageyama",
      category: "anime",
      source: "Haikyuu",
      image: "img/kageyama.jpeg",
    },
    {
      name: "Tsukishima",
      category: "anime",
      source: "Haikyuu",
      image: "img/tsukishima.jpeg",
    },
    {
      name: "Kenma",
      category: "anime",
      source: "Haikyuu",
      image: "img/kenma.jpeg",
    },
    {
      name: "Langa",
      category: "anime",
      source: "SK8 the Infinity",
      image: "img/langa.jpeg",
    },
    {
      name: "Rimuru",
      category: "anime",
      source: "That Time I Got Reincarnated as a Slime",
      image: "img/rimuru.jpeg",
    },
    {
      name: "Miya Chinen",
      category: "anime",
      source: "SK8 the Infinity",
      image: "img/miya.jpeg",
    },
    {
      name: "Reki",
      category: "anime",
      source: "SK8 the Infinity",
      image: "img/reki.jpeg",
    },
    {
      name: "Diluc",
      category: "genshin",
      source: "Genshin Impact",
      image: "img/diluc.jpeg",
    },
    {
      name: "Ayato",
      category: "genshin",
      source: "Genshin Impact",
      image: "img/ayato.jpeg",
    },
    {
      name: "Mydei",
      category: "honkai",
      source: "Honkai Star Rail",
      image: "img/mydei.jpeg",
    },
    {
      name: "Anaxa",
      category: "honkai",
      source: "Honkai Star Rail",
      image: "img/anaxa.jpeg",
    },
    {
      name: "Gepard",
      category: "honkai",
      source: "Honkai Star Rail",
      image: "img/gepard.jpeg",
    },
    {
      name: "Blade",
      category: "honkai",
      source: "Honkai Star Rail",
      image: "img/blade.jpeg",
    },
    {
      name: "Moze",
      category: "honkai",
      source: "Honkai Star Rail",
      image: "img/moze.jpeg",
    },
    {
      name: "Ifa",
      category: "honkai",
      source: "Honkai Star Rail",
      image: "img/ifa.jpeg",
    },
    {
      name: "Karma",
      category: "anime",
      source: "Assassination Classroom",
      image: "img/karma.jpeg",
    },
    {
      name: "Nagisa",
      category: "anime",
      source: "Assassination Classroom",
      image: "img/nagisa.jpeg",
    },
    {
      name: "Gaara",
      category: "anime",
      source: "Naruto",
      image: "img/gaara.jpeg",
    },
    {
      name: "Boothil",
      category: "honkai",
      source: "Honkai Star Rail",
      image: "img/boothil.jpeg",
    },
    {
      name: "Jing Yuan",
      category: "honkai",
      source: "Honkai Star Rail",
      image: "img/jingyuan.jpeg",
    },
    {
      name: "Dr. Ratio",
      category: "honkai",
      source: "Honkai Star Rail",
      image: "img/drratio.jpeg",
    },
    {
      name: "Razor",
      category: "genshin",
      source: "Genshin Impact",
      image: "img/razor.jpeg",
    },
    {
      name: "Wriothesley",
      category: "genshin",
      source: "Genshin Impact",
      image: "img/wriothesley.jpeg",
    },
    {
      name: "Kinich",
      category: "genshin",
      source: "Genshin Impact",
      image: "img/kinich.jpeg",
    },
    {
      name: "Sethos",
      category: "genshin",
      source: "Genshin Impact",
      image: "img/sethos.jpeg",
    },
    {
      name: "Gaming",
      category: "genshin",
      source: "Genshin Impact",
      image: "img/gaming.jpeg",
    },
    {
      name: "Freminet",
      category: "genshin",
      source: "Genshin Impact",
      image: "img/freminet.jpeg",
    },
    {
      name: "Lyney",
      category: "genshin",
      source: "Genshin Impact",
      image: "img/lyney.jpeg",
    },
    {
      name: "Gorou",
      category: "genshin",
      source: "Genshin Impact",
      image: "img/gorou.jpeg",
    },
    {
      name: "Jiaoqiu",
      category: "honkai",
      source: "Honkai Star Rail",
      image: "img/jiaoqiu.jpeg",
    },
    {
      name: "Yanqing",
      category: "honkai",
      source: "Honkai Star Rail",
      image: "img/yanqing.jpeg",
    },
    {
      name: "Luocha",
      category: "honkai",
      source: "Honkai Star Rail",
      image: "img/luocha.jpeg",
    },
    {
      name: "Misha",
      category: "honkai",
      source: "Honkai Star Rail",
      image: "img/misha.jpeg",
    },
    {
      name: "Gojo",
      category: "anime",
      source: "Jujutsu Kaisen",
      image: "img/gojo.jpeg",
    },
    {
      name: "Megumi",
      category: "anime",
      source: "Jujutsu Kaisen",
      image: "img/megumi.jpeg",
    },
    {
      name: "Toji",
      category: "anime",
      source: "Jujutsu Kaisen",
      image: "img/toji.jpeg",
    },
    {
      name: "Geto",
      category: "anime",
      source: "Jujutsu Kaisen",
      image: "img/geto.jpeg",
    },
    {
      name: "Lingyang",
      category: "honkai",
      source: "Honkai Star Rail",
      image: "img/lingyang.jpeg",
    },
    {
      name: "Calcharo",
      category: "game",
      source: "Wuthering Waves",
      image: "img/calcharo.jpeg",
    },
    {
      name: "Xiangli Yao",
      category: "game",
      source: "Wuthering Waves",
      image: "img/xiangliyao.jpeg",
    },
    {
      name: "Lucifer",
      category: "anime",
      source: "Obey Me!",
      image: "img/lucifer.jpeg",
    },
    {
      name: "Aamon",
      category: "game",
      source: "Mobile Legends",
      image: "img/aamon.jpeg",
    },
    {
      name: "Ling",
      category: "game",
      source: "Mobile Legends",
      image: "img/ling.jpeg",
    },
    {
      name: "Gusion",
      category: "game",
      source: "Mobile Legends",
      image: "img/gusion.jpeg",
    },
    {
      name: "Fredrinn",
      category: "game",
      source: "Mobile Legends",
      image: "img/fredrinn.jpeg",
    },
    {
      name: "Usui",
      category: "anime",
      source: "Maid Sama!",
      image: "img/usui.jpeg",
    },
    {
      name: "Noah",
      category: "anime",
      source: "Kanojo ga Koushaku",
      image: "img/noah.jpeg",
    },
    {
      name: "Arnold",
      category: "manhwa",
      source: "7th time loop",
      image: "img/arnold.jpeg",
    },
    {
      name: "Itsuomi",
      category: "anime",
      source: "A Sign of Affection",
      image: "img/itsuomi.jpeg",
    },
    {
      name: "Kyo",
      category: "anime",
      source: "Fruits Basket",
      image: "img/kyo.jpeg",
    },
    {
      name: "Kyoka",
      category: "anime",
      source: "My Happy Mariage",
      image: "img/kyoka.jpeg",
    },
    { name: "Tomoe", category: "anime", source: "Kamisama Hajimemashita" },
    { name: "Hak", category: "anime", source: "Yona of the Dawn" },
    { name: "Zen", category: "anime", source: "Snow White with the Red Hair" },
    {
      name: "Yamada",
      category: "anime",
      source: "Yamada-kun and the Seven Witches",
    },
    { name: "Shell", category: "manhwa", source: "Unknown" },
    { name: "Ichimura", category: "anime", source: "Unknown" },
    { name: "Jinshi", category: "anime", source: "The Apothecary Diaries" },
    { name: "Ichikura", category: "anime", source: "Unknown" },
    { name: "Yoshida", category: "anime", source: "Unknown" },
    { name: "Denji", category: "anime", source: "Chainsaw Man" },
    { name: "Kaiser", category: "anime", source: "Blue Lock" },
    { name: "Killua", category: "anime", source: "Hunter x Hunter" },
    { name: "Kurapika", category: "anime", source: "Hunter x Hunter" },
    { name: "Hisoka", category: "anime", source: "Hunter x Hunter" },
    { name: "Levi", category: "anime", source: "Attack on Titan" },
    { name: "Eren", category: "anime", source: "Attack on Titan" },
    { name: "Todoroki", category: "anime", source: "My Hero Academia" },
    { name: "Yuta", category: "anime", source: "Jujutsu Kaisen" },
    { name: "Guren", category: "anime", source: "Seraph of the End" },
    { name: "Mechamaru", category: "anime", source: "Jujutsu Kaisen" },
    { name: "Rintaro Tsumugi", category: "anime", source: "Unknown" },
    { name: "Lu Guang", category: "anime", source: "Link Click" },
    { name: "Cheng Xiaoshi", category: "anime", source: "Link Click" },
    {
      name: "Hua Cheng",
      category: "anime",
      source: "Heaven Official's Blessing",
    },
    {
      name: "Xie Lian",
      category: "anime",
      source: "Heaven Official's Blessing",
    },
    { name: "Lui Xiao", category: "manhwa", source: "Unknown" },
    { name: "Xia Fei", category: "manhwa", source: "Unknown" },
    { name: "Hirotaka", category: "anime", source: "Wotakoi" },
    { name: "Yoshida Haru", category: "anime", source: "My Little Monster" },
    { name: "Dazai", category: "anime", source: "Bungou Stray Dogs" },
    { name: "Aqua", category: "anime", source: "Oshi no Ko" },
    { name: "Nanase", category: "anime", source: "Unknown" },
    { name: "Lance Crown", category: "manhwa", source: "Unknown" },
    { name: "Oushi", category: "anime", source: "A Condition Called Love" },
    { name: "Stark", category: "anime", source: "Frieren" },
    { name: "Himmel", category: "anime", source: "Frieren" },
    { name: "Haruka Sakura", category: "anime", source: "Blue Lock" },
    { name: "Ayanokoji", category: "anime", source: "Classroom of the Elite" },
    {
      name: "Daisuke Kambe",
      category: "anime",
      source: "The Millionaire Detective",
    },
    { name: "Aki Hayakawa", category: "anime", source: "Chainsaw Man" },
    { name: "Hayato Suo", category: "anime", source: "Unknown" },
    {
      name: "Ron Kamonohashi",
      category: "anime",
      source: "Ron Kamonohashi's Forbidden Deductions",
    },
    { name: "Umemiya", category: "anime", source: "Wind Breaker" },
    { name: "Hazuki Nagisa", category: "anime", source: "Free!" },
    { name: "Ikuya", category: "anime", source: "Free!" },
    { name: "Natsuya", category: "anime", source: "Free!" },
    { name: "Momotaro", category: "anime", source: "Unknown" },
    { name: "Sasaki", category: "anime", source: "Sasaki and Miyano" },
    { name: "Miyano", category: "anime", source: "Sasaki and Miyano" },
    { name: "Okarun (Takakura Ken)", category: "anime", source: "Dandadan" },
    { name: "Jiji", category: "anime", source: "Unknown" },
    { name: "Abe Haruaki", category: "anime", source: "Unknown" },
    { name: "Miki Rintarou", category: "anime", source: "Unknown" },
    { name: "Izuna", category: "anime", source: "Unknown" },
    { name: "Takahashi Akira", category: "anime", source: "Unknown" },
    { name: "Ebisu", category: "anime", source: "Unknown" },
    { name: "Sano Mikoto", category: "anime", source: "Unknown" },
    { name: "Mame", category: "anime", source: "Unknown" },
    { name: "Hijita", category: "anime", source: "Unknown" },
    { name: "Akisame", category: "anime", source: "Unknown" },
    { name: "Hanako", category: "anime", source: "Toilet-bound Hanako-kun" },
    { name: "Akane Aoi", category: "anime", source: "Toilet-bound Hanako-kun" },
    {
      name: "Teru Minamoto",
      category: "anime",
      source: "Toilet-bound Hanako-kun",
    },
    { name: "Haruka", category: "anime", source: "Unknown" },
    { name: "Melt Narushima", category: "anime", source: "Unknown" },
    { name: "Masachika", category: "anime", source: "Unknown" },
    { name: "Ryu Sanada", category: "anime", source: "Unknown" },
    { name: "Kento Miura", category: "anime", source: "Unknown" },
    {
      name: "Wang Ling",
      category: "anime",
      source: "The Daily Life of the Immortal King",
    },
    {
      name: "Amane",
      category: "anime",
      source: "The Angel Next Door Spoils Me Rotten",
    },
    { name: "Kabane", category: "anime", source: "Kemono Jihen" },
    { name: "Shiki", category: "anime", source: "Unknown" },
    { name: "Linden de Romanoff", category: "manhwa", source: "Unknown" },
    { name: "Graham de Fallon", category: "manhwa", source: "Unknown" },
    { name: "Guren", category: "anime", source: "Seraph of the End" },
    { name: "Mikaela", category: "anime", source: "Seraph of the End" },
    { name: "Yuichiro", category: "anime", source: "Seraph of the End" },
    { name: "Rayne", category: "manhwa", source: "Unknown" },
    { name: "Finn", category: "manhwa", source: "Unknown" },
    { name: "Orter", category: "manhwa", source: "Unknown" },
    {
      name: "Benimaru",
      category: "anime",
      source: "That Time I Got Reincarnated as a Slime",
    },
    {
      name: "Diablo",
      category: "anime",
      source: "That Time I Got Reincarnated as a Slime",
    },
    { name: "Rui", category: "anime", source: "Demon Slayer" },
    { name: "Toya", category: "anime", source: "Unknown" },
    { name: "Kirishima Toru", category: "anime", source: "Unknown" },
    { name: "Rei Hojo", category: "anime", source: "Unknown" },
    { name: "Chris", category: "anime", source: "Unknown" },
    { name: "Vijay", category: "anime", source: "Unknown" },
    { name: "Leo", category: "anime", source: "Unknown" },
    { name: "Yeon Hajun", category: "manhwa", source: "Unknown" },
    { name: "Aoi Nanamori", category: "anime", source: "Unknown" },
    { name: "Saybil", category: "anime", source: "The Dawn of the Witch" },
    { name: "Ramune", category: "anime", source: "Unknown" },
    { name: "Kuro", category: "anime", source: "Unknown" },
    { name: "Keizaki", category: "anime", source: "Unknown" },
    { name: "Wolfy", category: "anime", source: "Unknown" },
    { name: "Kuro (Sleepy Ash)", category: "anime", source: "Servamp" },
    { name: "Hyde (Lawless)", category: "anime", source: "Unknown" },
    { name: "Litch", category: "anime", source: "Unknown" },
    { name: "Tsubaki", category: "anime", source: "Unknown" },
    { name: "Mikuni", category: "anime", source: "Unknown" },
    { name: "Misono", category: "anime", source: "Unknown" },
    { name: "Ratlua", category: "anime", source: "Unknown" },
    { name: "Shifale", category: "anime", source: "Unknown" },
    { name: "Verivera", category: "anime", source: "Unknown" },
    { name: "Ike", category: "anime", source: "Unknown" },
  ];

  // DOM elements
  const gallery = document.getElementById("gallery");
  const searchInput = document.getElementById("searchInput");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modalContent");
  const modalTitle = document.getElementById("modalTitle");
  const closeModal = document.getElementById("closeModal");
  const pagination = document.getElementById("pagination");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const paginationInfo = document.getElementById("pagination-info");
  const itemsPerPage = 10;
  let currentPage = 1;
  let filteredCharacters = [...characters]; // Default to all

  // Display initial characters
  renderPage();

  // Search functionality
  searchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    filteredCharacters = characters.filter(
      (character) =>
        character.name.toLowerCase().includes(searchTerm) ||
        character.source.toLowerCase().includes(searchTerm)
    );
    currentPage = 1;
    renderPage();
  });

  // Filter functionality
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter");

      filterButtons.forEach((btn) =>
        btn.classList.remove("bg-indigo-600", "text-white")
      );
      this.classList.add("bg-indigo-600", "text-white");

      if (filter === "all") {
        filteredCharacters = [...characters];
      } else {
        filteredCharacters = characters.filter(
          (character) => character.category === filter
        );
      }

      currentPage = 1;
      renderPage();
    });
  });

  // Modal functionality
  closeModal.addEventListener("click", () => modal.classList.remove("active"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });

  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderPage();
    }
  });
  nextBtn.addEventListener("click", () => {
    const totalPages = Math.ceil(filteredCharacters.length / itemsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      renderPage();
    }
  });
  // Render pagination + characters
  function renderPage() {
    const totalPages = Math.ceil(filteredCharacters.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const paginatedItems = filteredCharacters.slice(
      start,
      start + itemsPerPage
    );

    displayCharacters(paginatedItems);

    paginationInfo.textContent = `Page ${
      totalPages === 0 ? 0 : currentPage
    } of ${totalPages}`;
    prevBtn.disabled = currentPage === 1 || totalPages === 0;
    nextBtn.disabled = currentPage === totalPages || totalPages === 0;
  }
  function renderPagination(totalPages) {
    pagination.innerHTML = "";

    if (totalPages <= 1) return;

    const prevBtn = document.createElement("button");
    prevBtn.textContent = "Previous";
    prevBtn.disabled = currentPage === 1;
    prevBtn.className = `px-3 py-1 rounded-md mr-2 ${
      currentPage === 1
        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
        : "bg-white text-indigo-600 border hover:bg-indigo-100"
    }`;
    prevBtn.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        renderPage();
      }
    });
    pagination.appendChild(prevBtn);

    const currentLabel = document.createElement("span");
    currentLabel.textContent = `Page ${currentPage} of ${totalPages}`;
    currentLabel.className = "mx-4 text-sm font-medium text-gray-700";
    pagination.appendChild(currentLabel);

    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Next";
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.className = `px-3 py-1 rounded-md ml-2 ${
      currentPage === totalPages
        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
        : "bg-white text-indigo-600 border hover:bg-indigo-100"
    }`;
    nextBtn.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        renderPage();
      }
    });
    pagination.appendChild(nextBtn);
  }

  function displayCharacters(charactersToDisplay) {
    gallery.innerHTML = "";

    if (charactersToDisplay.length === 0) {
      gallery.innerHTML =
        '<p class="text-center text-gray-500 col-span-full py-8">No characters found matching your search.</p>';
      return;
    }

    charactersToDisplay.forEach((character) => {
      const characterCard = document.createElement("div");
      characterCard.className =
        "character-card bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transition-all duration-300";
      const imgSrc = character.image
        ? character.image
        : `https://via.placeholder.com/300x400/cccccc/969696?text=${encodeURIComponent(
            character.name
          )}`;
      characterCard.innerHTML = `
            <div class="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                <img src="${imgSrc}" alt="${character.name}" class="character-image w-full h-full object-cover transition-transform duration-300">
            </div>
            <div class="p-3">
                <h3 class="font-semibold text-lg truncate">${character.name}</h3>
                <p class="text-gray-600 text-sm truncate">${character.source}</p>
            </div>
        `;

      characterCard.addEventListener("click", () => {
        openCharacterModal(character);
      });

      gallery.appendChild(characterCard);
    });
  }

  function openCharacterModal(character) {
    modalTitle.textContent = character.name;
    const imgSrc = character.image
      ? character.image
      : `https://via.placeholder.com/400x600/cccccc/969696?text=${encodeURIComponent(
          character.name
        )}`;
    modalContent.innerHTML = `
        <div class="flex flex-col md:flex-row gap-6">
            <div class="w-full md:w-1/3">
                <img src="${imgSrc}" alt="${
      character.name
    }" class="character-image w-full h-64 md:h-auto object-cover rounded-lg transition-transform duration-300">
            </div>
            <div class="w-full md:w-2/3">
                <p class="mb-2"><span class="font-semibold">Source:</span> ${
                  character.source
                }</p>
                <p class="mb-4"><span class="font-semibold">Category:</span> ${getCategoryName(
                  character.category
                )}</p>
                <div class="bg-gray-100 p-4 rounded-lg">
                    <p class="text-gray-700">Detailed information about ${
                      character.name
                    }. This is placeholder text that would be replaced with actual character details, backstory, or other relevant information.</p>
                </div>
            </div>
        </div>
    `;
    setTimeout(() => modal.classList.add("active"), 10);
  }

  function getCategoryName(category) {
    const names = {
      genshin: "Genshin Impact",
      honkai: "Honkai Star Rail",
      anime: "Anime",
      manhwa: "Manhwa",
      vtuber: "VTuber",
      game: "Other Games",
      real: "Real Person",
    };
    return names[category] || category;
  }
});

    //animasi navbar
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
        navbar.classList.add("backdrop-blur-md", "bg-gray-800/70", "shadow-md");
        navbar.classList.remove("bg-transparent");
        } else {
        navbar.classList.remove("backdrop-blur-md", "bg-gray-800/70", "shadow-md");
        navbar.classList.add("bg-transparent");
        }
    });

      // scroll smooth to gallery
    document.getElementById("exploreBtn").addEventListener("click", () => {
      document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
    });