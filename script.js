const categories = {
  faith: {
    title: "Faith & Trust ✝️",
    verses: [
      {
        verse: '"Faith can move mountains." — Matthew 17:20',
        message: "Trust God even when you cannot see the future.",
        prayer: "Lord, strengthen my faith daily."
      },
      {
        verse: '"Trust in the Lord with all your heart." — Proverbs 3:5',
        message: "God guides every faithful step.",
        prayer: "Help me rely on You completely."
      }
    ]
  },

  students: {
    title: "Students & Youth 🎓",
    verses: [
      {
        verse: '"Do your best as working for the Lord." — Colossians 3:23',
        message: "Study with discipline and excellence.",
        prayer: "Give me wisdom and focus in studies."
      },
      {
        verse: '"Let no one despise your youth." — 1 Timothy 4:12',
        message: "Young people can shine brightly for God.",
        prayer: "Help me become a good example."
      }
    ]
  },

  marriage: {
    title: "Marriage & Family 💍",
    verses: [
      {
        verse: '"Love one another deeply." — 1 Peter 4:8',
        message: "Healthy families are built on love.",
        prayer: "Bless our family with peace and unity."
      },
      {
        verse: '"Children are a gift from the Lord." — Psalm 127:3',
        message: "Care for your children with patience and wisdom.",
        prayer: "Help us raise children with love."
      }
    ]
  },

  business: {
    title: "Business & Finance 💼",
    verses: [
      {
        verse: '"The blessing of the Lord brings wealth." — Proverbs 10:22',
        message: "Honor God in your finances.",
        prayer: "Guide me to use money wisely."
      },
      {
        verse: '"Commit your work to the Lord." — Proverbs 16:3',
        message: "God blesses honest work.",
        prayer: "Bless my work and decisions."
      }
    ]
  },

  health: {
    title: "Health & Healing ❤️",
    verses: [
      {
        verse: '"I will restore you to health." — Jeremiah 30:17',
        message: "God cares deeply about your healing.",
        prayer: "Bring healing and strength to my body."
      },
      {
        verse: '"By His wounds we are healed." — Isaiah 53:5',
        message: "Jesus brings comfort and restoration.",
        prayer: "Fill me with peace and healing."
      }
    ]
  },

  emotions: {
    title: "Emotional Support 🌿",
    verses: [
      {
        verse: '"Come to me, all who are weary." — Matthew 11:28',
        message: "God gives rest to heavy hearts.",
        prayer: "Comfort my heart today."
      },
      {
        verse: '"Cast all your anxiety on Him." — 1 Peter 5:7',
        message: "You are never alone in struggles.",
        prayer: "Take away my worries and fears."
      }
    ]
  }
};

const dailyVerses = [
  '"Be still and know that I am God." — Psalm 46:10',
  '"God is our refuge and strength." — Psalm 46:1',
  '"The joy of the Lord is your strength." — Nehemiah 8:10',
  '"I can do all things through Christ." — Philippians 4:13'
];

function generateVerse() {
  const random =
    dailyVerses[Math.floor(Math.random() * dailyVerses.length)];

  document.getElementById("dailyVerseText").innerText = random;
}

function openCategory(categoryKey) {
  const category = categories[categoryKey];

  let html = `
    <div class="detail-card">
      <button class="back-btn" onclick="closeDetails()">⬅ Back</button>

      <h2>${category.title}</h2>
  `;

  category.verses.forEach((item, index) => {
    html += `
      <div class="verse-box">
        <h3>Verse ${index + 1}</h3>

        <p class="verse-text">${item.verse}</p>

        <p class="message">${item.message}</p>

        <div class="prayer-box">
          🙏 ${item.prayer}
        </div>

        <div class="action-buttons">
          <button onclick="saveFavorite('${item.verse}')">
            ⭐ Save
          </button>

          <button onclick="shareVerse('${item.verse}')">
            📤 Share
          </button>
        </div>
      </div>
    `;
  });

  html += `</div>`;

  document.getElementById("detailsSection").innerHTML = html;

  document
    .getElementById("detailsSection")
    .scrollIntoView({ behavior: "smooth" });
}

function closeDetails() {
  document.getElementById("detailsSection").innerHTML = "";
}

function shareVerse(text) {
  navigator.share({
    title: "Everyday Manna",
    text: text
  });
}

function saveFavorite(verse) {
  let favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

  favorites.push(verse);

  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
  );

  alert("Verse saved to favorites ⭐");
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function searchCategory() {
  let input =
    document.getElementById("searchInput").value.toLowerCase();

  let cards =
    document.querySelectorAll(".category-card");

  cards.forEach(card => {
    if (
      card.innerText.toLowerCase().includes(input)
    ) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
    }
