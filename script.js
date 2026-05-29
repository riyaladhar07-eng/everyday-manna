const verses = {

    faith: `
        <div class="subtopic-content">

            <h2>Faith & Trust ✝️</h2>

            <p>
                "Faith can move mountains."
                — Matthew 17:20
            </p>

            <p>
                Trust God even when you cannot
                see the future.
            </p>

            <button class="share-btn"
                    onclick="shareVerse(
                    'Faith can move mountains - Matthew 17:20'
                    )">

                📤 Share Verse

            </button>

        </div>
    `,

    students: `
        <div class="subtopic-content">

            <h2>Students & Youth 🎓</h2>

            <p>
                "Do your best as working
                for the Lord."
                — Colossians 3:23
            </p>

            <p>
                Study with discipline and excellence.
            </p>

            <button class="share-btn"
                    onclick="shareVerse(
                    'Do your best as working for the Lord - Colossians 3:23'
                    )">

                📤 Share Verse

            </button>

        </div>
    `,

    marriage: `
        <div class="subtopic-content">

            <h2>Marriage & Family 💍</h2>

            <p>
                "Love one another deeply."
                — 1 Peter 4:8
            </p>

            <p>
                Healthy families are built on love.
            </p>

            <button class="share-btn"
                    onclick="shareVerse(
                    'Love one another deeply - 1 Peter 4:8'
                    )">

                📤 Share Verse

            </button>

        </div>
    `,

    business: `
        <div class="subtopic-content">

            <h2>Business & Finance 💼</h2>

            <p>
                "Commit your work to the Lord."
                — Proverbs 16:3
            </p>

            <p>
                God blesses honest work.
            </p>

            <button class="share-btn"
                    onclick="shareVerse(
                    'Commit your work to the Lord - Proverbs 16:3'
                    )">

                📤 Share Verse

            </button>

        </div>
    `,

    health: `
        <div class="subtopic-content">

            <h2>Health & Healing ❤️</h2>

            <p>
                "I will restore you to health."
                — Jeremiah 30:17
            </p>

            <p>
                God cares deeply about your healing.
            </p>

            <button class="share-btn"
                    onclick="shareVerse(
                    'I will restore you to health - Jeremiah 30:17'
                    )">

                📤 Share Verse

            </button>

        </div>
    `,

    emotions: `
        <div class="subtopic-content">

            <h2>Emotional Support 🌿</h2>

            <p>
                "Come to me, all who are weary."
                — Matthew 11:28
            </p>

            <p>
                God gives rest to heavy hearts.
            </p>

            <button class="share-btn"
                    onclick="shareVerse(
                    'Come to me all who are weary - Matthew 11:28'
                    )">

                📤 Share Verse

            </button>

        </div>
    `
};

const dailyVerses = [

    '"God is our refuge and strength." — Psalm 46:1',

    '"The joy of the Lord is your strength." — Nehemiah 8:10',

    '"I can do all things through Christ." — Philippians 4:13',

    '"Be still and know that I am God." — Psalm 46:10'
];

function generateDailyVerse() {

    const randomVerse =

        dailyVerses[
            Math.floor(
                Math.random() *
                dailyVerses.length
            )
        ];

    document.getElementById(
        "dailyVerseText"
    ).innerText = randomVerse;
}

generateDailyVerse();

function openCategory(category) {

    document.getElementById(
        "subtopic-box"
    ).innerHTML = verses[category];
}

function toggleDarkMode() {

    document.body.classList.toggle(
        "dark-mode"
    );
}

function shareVerse(text) {

    navigator.share({

        title: "Everyday Manna",

        text: text

    });
}

function searchTopics() {

    let input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    let cards =
        document.querySelectorAll(".card");

    cards.forEach(card => {

        if (
            card.innerText
            .toLowerCase()
            .includes(input)
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";
        }
    });
}

function aiEncouragement() {

    const feeling = document
        .getElementById("userFeeling")
        .value
        .toLowerCase();

    let response = "";

    if (feeling.includes("anxious")
        || feeling.includes("stress")) {

        response = `
            <p>
                "Cast all your anxiety on Him."
                — 1 Peter 5:7
            </p>

            <p>
                God is with you in every storm ❤️
            </p>
        `;
    }

    else if (
        feeling.includes("sad")
        || feeling.includes("lonely")
    ) {

        response = `
            <p>
                "I am with you always."
                — Matthew 28:20
            </p>

            <p>
                You are never alone ✨
            </p>
        `;
    }

    else {

        response = `
            <p>
                God loves you ❤️
            </p>

            <p>
                "Come to me, all who are weary."
                — Matthew 11:28
            </p>
        `;
    }

    document.getElementById(
        "chat-response"
    ).innerHTML = response;
}
