document.addEventListener('DOMContentLoaded', function() {
    // Character data with categories
    const characters = [
        { name: "Kazehaya", category: "anime", source: "Kimi ni Todoke", image: "img/kazehaya.jpeg" },
        { name: "Scaramouche", category: "genshin", source: "Genshin Impact", image: "img/scaramouche.jpeg" },
        { name: "Wanderer", category: "genshin", source: "Genshin Impact", image: "img/wanderer.jpeg" },
        { name: "Kabukimono", category: "genshin", source: "Genshin Impact", image: "img/kabukimono.jpeg" },
        { name: "The Balladeer", category: "genshin", source: "Genshin Impact", image: "img/theballadeer.jpeg" },
        { name: "Kazuha", category: "genshin", source: "Genshin Impact", image: "img/kazuha.jpeg" },
        { name: "Cid Kagenou", category: "anime", source: "The Eminence in Shadow", image: "img/cid.jpeg" },
        { name: "Xiao", category: "genshin", source: "Genshin Impact", image: "img/xiao.jpeg" },
        { name: "Ororon", category: "genshin", source: "Genshin Impact", image: "img/ororon.jpeg" },
        { name: "Kou", category: "anime", source: "Ao Haru Ride", image: "img/kou.jpeg" },
        { name: "Kai", category: "anime", source: "Honey Lemon Soda", image: "img/kai.jpeg" },
        { name: "Miyamura", category: "anime", source: "Horimiya", image: "img/miyamura.jpeg" },
        { name: "Childe", category: "genshin", source: "Genshin Impact", image: "img/childe.jpeg" },
        { name: "Harris Caine", category: "vtuber", source: "VTuber", image: "img/harris.jpeg" },
        { name: "Riji", category: "vtuber", source: "Unknown", image: "img/riji.jpeg" },
        { name: "Krow", category: "vtuber", source: "VTuber", image: "img/krow.jpeg" },
        { name: "Mikazuki Arion", category: "vtuber", source: "VTuber", image: "img/mika.jpeg" },
        { name: "Heizou", category: "genshin", source: "Genshin Impact", image: "img/heizou.jpeg" },
        { name: "Venti", category: "genshin", source: "Genshin Impact", image: "img/venti.jpeg" },
        { name: "Rafayel", category: "game", source: "Love and Deepspace", image: "img/rafayel.jpeg" },
        { name: "Sylus", category: "game", source: "Love and Deepspace", image: "img/sylus.jpeg" },
        { name: "Caleb", category: "game", source: "Love and Deepspace", image: "img/caleb.jpeg" },
        { name: "Xavier", category: "game", source: "Love and Deepspace", image: "img/xavier.jpeg" },
        { name: "Zayne", category: "game", source: "Love and Deepspace", image: "img/zayne.jpeg" },
        { name: "Aventurine", category: "honkai", source: "Honkai Star Rail", image: "img/aventurine.jpeg" },
        { name: "Sunday", category: "honkai", source: "Honkai Star Rail", image: "img/sunday.jpeg" },
        { name: "Dan Heng", category: "honkai", source: "Honkai Star Rail", image: "img/danheng.jpeg" },
        { name: "Harumasa", category: "game", source: "Zenless Zone Zero", image: "img/harumasa.jpeg" },
        { name: "Dan Heng IL", category: "honkai", source: "Honkai Star Rail", image: "img/danhengil.jpeg" },
        { name: "Scar", category: "game", source: "Wuthering Waves", image: "img/scar.jpeg" },
        { name: "Kaiser", category: "anime", source: "Blue Lock", image: "img/kaiser.jpeg" },
        { name: "Nagi", category: "anime", source: "Blue Lock", image: "img/nagi.jpeg" },
        { name: "Bachira", category: "anime", source: "Blue Lock", image: "img/bachira.jpeg" },
        { name: "Souta Izumi", category: "vtuber", source: "VTuber", image: "img/souta.jpeg" },
        { name: "Gingitsune Gehenna", category: "vtuber", source: "VTuber", image: "img/gin.jpeg" },
        { name: "Vanitas", category: "anime", source: "The Case Study of Vanitas", image: "img/vanitas.jpeg" },
        { name: "Chigiri", category: "anime", source: "Blue Lock", image: "img/chigiri.jpeg" },
        { name: "Shiroi Aether", category: "vtuber", source: "VTuber", image: "img/shiroi.jpeg" },
        { name: "Alhaitam", category: "genshin", source: "Genshin Impact", image: "img/alhaitham.jpeg" },
        { name: "Kaveh", category: "genshin", source: "Genshin Impact", image: "img/kaveh.jpeg" },
        { name: "Tighnari", category: "genshin", source: "Genshin Impact", image: "img/tighnari.jpeg" },
        { name: "Ni-ki", category: "real", source: "ENHYPEN", image: "img/niki.jpeg" },
        { name: "Beomgyu", category: "real", source: "TXT", image: "img/beomgyu.jpeg" },
        { name: "Ivan", category: "anime", source: "Alien Stage", image: "img/ivan.jpeg" },
        { name: "Till", category: "anime", source: "Alien Stage", image: "img/till.jpeg" },
        { name: "Isagi", category: "anime", source: "Blue Lock", image: "img/isagi.jpeg" },
        { name: "Rin", category: "anime", source: "Blue Lock", image: "img/rin.jpeg" },
        { name: "Sae", category: "anime", source: "Blue Lock", image: "img/sae.jpeg" },
        { name: "Shoyo", category: "anime", source: "Haikyuu", image: "img/shoyo.jpeg" },
        { name: "Kageyama", category: "anime", source: "Haikyuu", image: "img/kageyama.jpeg" },
        { name: "Tsukishima", category: "anime", source: "Haikyuu", image: "img/tsukishima.jpeg" },
        { name: "Kenma", category: "anime", source: "Haikyuu", image: "img/kenma.jpeg" },
        { name: "Langa", category: "anime", source: "SK8 the Infinity", image: "img/langa.jpeg" },
        { name: "Rimuru", category: "anime", source: "That Time I Got Reincarnated as a Slime", image: "img/rimuru.jpeg" },
        { name: "Miya Chinen", category: "anime", source: "SK8 the Infinity", image: "img/miya.jpeg" },
        { name: "Reki", category: "anime", source: "SK8 the Infinity", image: "img/reki.jpeg" },
        { name: "Diluc", category: "genshin", source: "Genshin Impact", image: "img/diluc.jpeg" },
        { name: "Ayato", category: "genshin", source: "Genshin Impact", image: "img/ayato.jpeg" },
        { name: "Mydei", category: "honkai", source: "Honkai Star Rail", image: "img/mydei.jpeg" },
        { name: "Anaxa", category: "honkai", source: "Honkai Star Rail", image: "img/anaxa.jpeg" },
        { name: "Gepard", category: "honkai", source: "Honkai Star Rail" },
        { name: "Balde", category: "manhwa", source: "Unknown" },
        { name: "Moze", category: "manhwa", source: "Unknown" },
        { name: "Ifa", category: "manhwa", source: "Unknown" },
        { name: "Karma", category: "anime", source: "Assassination Classroom" },
        { name: "Nagisa", category: "anime", source: "Assassination Classroom" },
        { name: "Gaara", category: "anime", source: "Naruto" },
        { name: "Boothil", category: "manhwa", source: "Unknown" },
        { name: "Jing Yuan", category: "honkai", source: "Honkai Star Rail" },
        { name: "Dr. Ratio", category: "honkai", source: "Honkai Star Rail" },
        { name: "Razor", category: "genshin", source: "Genshin Impact" },
        { name: "Wriothesley", category: "genshin", source: "Genshin Impact" },
        { name: "Kinich", category: "manhwa", source: "Unknown" },
        { name: "Sethos", category: "genshin", source: "Genshin Impact" },
        { name: "Gaming", category: "genshin", source: "Genshin Impact" },
        { name: "Freminet", category: "genshin", source: "Genshin Impact" },
        { name: "Lyney", category: "genshin", source: "Genshin Impact" },
        { name: "Gorou", category: "genshin", source: "Genshin Impact" },
        { name: "Jiaoqiu", category: "honkai", source: "Honkai Star Rail" },
        { name: "Yanqing", category: "honkai", source: "Honkai Star Rail" },
        { name: "Luocha", category: "honkai", source: "Honkai Star Rail" },
        { name: "Misha", category: "honkai", source: "Honkai Star Rail" },
        { name: "Gojo", category: "anime", source: "Jujutsu Kaisen" },
        { name: "Megumi", category: "anime", source: "Jujutsu Kaisen" },
        { name: "Toji", category: "anime", source: "Jujutsu Kaisen" },
        { name: "Geto", category: "anime", source: "Jujutsu Kaisen" },
        { name: "Lingyang", category: "honkai", source: "Honkai Star Rail" },
        { name: "Calcharo", category: "game", source: "Wuthering Waves" },
        { name: "Xiangli Yao", category: "game", source: "Wuthering Waves" },
        { name: "Leviathan", category: "manhwa", source: "Unknown" },
        { name: "Lucifer", category: "anime", source: "Obey Me!" },
        { name: "Aamon", category: "game", source: "Mobile Legends" },
        { name: "Ling", category: "game", source: "Mobile Legends" },
        { name: "Gusion", category: "game", source: "Mobile Legends" },
        { name: "Fredrinn", category: "game", source: "Mobile Legends" },
        { name: "Rei", category: "anime", source: "Unknown" },
        { name: "Aster", category: "manhwa", source: "Unknown" },
        { name: "Usui", category: "anime", source: "Maid Sama!" },
        { name: "Noah", category: "manhwa", source: "Unknown" },
        { name: "Arnold", category: "manhwa", source: "Unknown" },
        { name: "Itsuomi", category: "anime", source: "A Sign of Affection" },
        { name: "Kyo", category: "anime", source: "Fruits Basket" },
        { name: "Kyoka", category: "anime", source: "Unknown" },
        { name: "Tomoe", category: "anime", source: "Kamisama Hajimemashita" },
        { name: "Hak", category: "anime", source: "Yona of the Dawn" },
        { name: "Zen", category: "anime", source: "Snow White with the Red Hair" },
        { name: "Yamada", category: "anime", source: "Yamada-kun and the Seven Witches" },
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
        { name: "Yuuta", category: "anime", source: "Jujutsu Kaisen" },
        { name: "Guren", category: "anime", source: "Seraph of the End" },
        { name: "Mechamaru", category: "anime", source: "Jujutsu Kaisen" },
        { name: "Rintaro Tsumugi", category: "anime", source: "Unknown" },
        { name: "Lu Guang", category: "anime", source: "Link Click" },
        { name: "Cheng Xiaoshi", category: "anime", source: "Link Click" },
        { name: "Hua Cheng", category: "anime", source: "Heaven Official's Blessing" },
        { name: "Xie Lian", category: "anime", source: "Heaven Official's Blessing" },
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
        { name: "Daisuke Kambe", category: "anime", source: "The Millionaire Detective" },
        { name: "Aki Hayakawa", category: "anime", source: "Chainsaw Man" },
        { name: "Hayato Suo", category: "anime", source: "Unknown" },
        { name: "Ron Kamonohashi", category: "anime", source: "Ron Kamonohashi's Forbidden Deductions" },
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
        { name: "Teru Minamoto", category: "anime", source: "Toilet-bound Hanako-kun" },
        { name: "Haruka", category: "anime", source: "Unknown" },
        { name: "Melt Narushima", category: "anime", source: "Unknown" },
        { name: "Masachika", category: "anime", source: "Unknown" },
        { name: "Ryu Sanada", category: "anime", source: "Unknown" },
        { name: "Kento Miura", category: "anime", source: "Unknown" },
        { name: "Wang Ling", category: "anime", source: "The Daily Life of the Immortal King" },
        { name: "Amane", category: "anime", source: "The Angel Next Door Spoils Me Rotten" },
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
        { name: "Benimaru", category: "anime", source: "That Time I Got Reincarnated as a Slime" },
        { name: "Diablo", category: "anime", source: "That Time I Got Reincarnated as a Slime" },
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
        { name: "Ike", category: "anime", source: "Unknown" }
    ];

        // DOM elements
    const gallery = document.getElementById('gallery');
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');
    const modalTitle = document.getElementById('modalTitle');
    const closeModal = document.getElementById('closeModal');

    // Display all characters initially
    displayCharacters(characters);

    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredCharacters = characters.filter(character => 
            character.name.toLowerCase().includes(searchTerm) || 
            character.source.toLowerCase().includes(searchTerm)
        );
        displayCharacters(filteredCharacters);
    });

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('bg-indigo-600', 'text-white'));
            this.classList.add('bg-indigo-600', 'text-white');
            
            if (filter === 'all') {
                displayCharacters(characters);
            } else {
                const filteredCharacters = characters.filter(character => character.category === filter);
                displayCharacters(filteredCharacters);
            }
        });
    });

    // Modal functionality
    closeModal.addEventListener('click', function() {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Function to display characters
    function displayCharacters(charactersToDisplay) {
    gallery.innerHTML = '';
    
    if (charactersToDisplay.length === 0) {
        gallery.innerHTML = '<p class="text-center text-gray-500 col-span-full py-8">No characters found matching your search.</p>';
        return;
    }
    
    charactersToDisplay.forEach(character => {
        const characterCard = document.createElement('div');
        characterCard.className = 'character-card bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transition-all duration-300';
        const imgSrc = character.image ? character.image : `https://via.placeholder.com/300x400/cccccc/969696?text=${encodeURIComponent(character.name)}`;
        characterCard.innerHTML = `
            <div class="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                <img src="${imgSrc}" 
                     alt="${character.name}" 
                     class="character-image w-full h-full object-cover transition-transform duration-300">
            </div>
            <div class="p-3">
                <h3 class="font-semibold text-lg truncate">${character.name}</h3>
                <p class="text-gray-600 text-sm truncate">${character.source}</p>
            </div>
        `;
        
        characterCard.addEventListener('click', () => {
            openCharacterModal(character);
        });
        
        gallery.appendChild(characterCard);
    });
}

// Function to open character modal with transition
function openCharacterModal(character) {
    modalTitle.textContent = character.name;
    const imgSrc = character.image ? character.image : `https://via.placeholder.com/400x600/cccccc/969696?text=${encodeURIComponent(character.name)}`;
    modalContent.innerHTML = `
        <div class="flex flex-col md:flex-row gap-6">
            <div class="w-full md:w-1/3">
                <img src="${imgSrc}" 
                     alt="${character.name}" 
                     class="character-image w-full h-64 md:h-auto object-cover rounded-lg transition-transform duration-300">
            </div>
            <div class="w-full md:w-2/3">
                <p class="mb-2"><span class="font-semibold">Source:</span> ${character.source}</p>
                <p class="mb-4"><span class="font-semibold">Category:</span> ${getCategoryName(character.category)}</p>
                <div class="bg-gray-100 p-4 rounded-lg">
                    <p class="text-gray-700">Detailed information about ${character.name}. This is placeholder text that would be replaced with actual character details, backstory, or other relevant information.</p>
                </div>
            </div>
        </div>
    `;
    
    // Trigger modal open with transition
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

    // Helper function to get category name
    function getCategoryName(category) {
        const names = {
            'genshin': 'Genshin Impact',
            'honkai': 'Honkai Star Rail',
            'anime': 'Anime',
            'manhwa': 'Manhwa',
            'vtuber': 'VTuber',
            'game': 'Other Games',
            'real': 'Real Person'
        };
        return names[category] || category;
    }
});