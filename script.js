function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");
}

function searchTopics() {

    let input =
        document.getElementById("searchInput")
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

const dailyVerses = [

    '"The Lord is my shepherd." — Psalm 23:1',

    '"Be still and know that I am God." — Psalm 46:10',

    '"I can do all things through Christ." — Philippians 4:13',

    '"God is our refuge and strength." — Psalm 46:1',

    '"The joy of the Lord is your strength." — Nehemiah 8:10'
];

function generateDailyVerse() {

    const randomVerse =
        dailyVerses[
            Math.floor(
                Math.random() * dailyVerses.length
            )
        ];

    document.getElementById(
        "dailyVerseText"
    ).innerText = randomVerse;
}

window.onload = function () {

    generateDailyVerse();
};

function openCategory(category) {

    let verseBox =
        document.getElementById("verse-box");

    let content = "";

    if (category === "faith") {

        content = `

        <h2>✝️ Faith & Trust</h2>

        <h3>Faith</h3>

        <p>
        "Faith can move mountains."
        — Matthew 17:20
        </p>

        <p>
        Even when situations look impossible,
        God asks us to trust Him.
        </p>

        <h3>Hope</h3>

        <p>
        "For I know the plans I have for you."
        — Jeremiah 29:11
        </p>

        <p>
        God has a beautiful future prepared for you.
        </p>

        <h3>Courage</h3>

        <p>
        "Be strong and courageous."
        — Joshua 1:9
        </p>

        <p>
        God gives strength in difficult moments.
        </p>
        `;
    }

    else if (category === "students") {

        content = `

        <h2>🎓 Students & Youth</h2>

        <h3>Studies</h3>

        <p>
        "Do your best as working for the Lord."
        — Colossians 3:23
        </p>

        <p>
        Study with discipline and excellence.
        </p>

        <h3>Respect Parents</h3>

        <p>
        "Honor your father and mother."
        — Ephesians 6:2
        </p>

        <p>
        Respecting parents brings wisdom and blessings.
        </p>

        <h3>Future Success</h3>

        <p>
        "Commit your work to the Lord."
        — Proverbs 16:3
        </p>

        <p>
        God can guide your dreams and future career.
        </p>
        `;
    }

    else if (category === "marriage") {

        content = `

        <h2>💍 Marriage & Family</h2>

        <h3>Love</h3>

        <p>
        "Love is patient, love is kind."
        — 1 Corinthians 13:4
        </p>

        <p>
        Marriage should be built on patience and love.
        </p>

        <h3>Family Unity</h3>

        <p>
        "A cord of three strands is not quickly broken."
        — Ecclesiastes 4:12
        </p>

        <p>
        Families grow stronger when centered on God.
        </p>

        <h3>Parenting</h3>

        <p>
        "Train up a child in the way he should go."
        — Proverbs 22:6
        </p>

        <p>
        Parents should guide children with wisdom and care.
        </p>
        `;
    }

    else if (category === "business") {

        content = `

        <h2>💼 Business & Finance</h2>

        <h3>Hard Work</h3>

        <p>
        "The plans of the diligent lead to profit."
        — Proverbs 21:5
        </p>

        <p>
        Success comes through discipline and honesty.
        </p>

        <h3>Money Wisdom</h3>

        <p>
        "The wise store up knowledge."
        — Proverbs 10:14
        </p>

        <p>
        Manage finances carefully and wisely.
        </p>

        <h3>Integrity</h3>

        <p>
        "Better a little with righteousness."
        — Proverbs 16:8
        </p>

        <p>
        Honest business honors God.
        </p>
        `;
    }

    else if (category === "health") {

        content = `

        <h2>❤️ Health & Healing</h2>

        <h3>Healing</h3>

        <p>
        "I am the Lord who heals you."
        — Exodus 15:26
        </p>

        <p>
        God cares deeply about your health and healing.
        </p>

        <h3>Peace</h3>

        <p>
        "Peace I leave with you."
        — John 14:27
        </p>

        <p>
        God's peace brings calmness to the mind.
        </p>

        <h3>Strength</h3>

        <p>
        "I can do all things through Christ."
        — Philippians 4:13
        </p>

        <p>
        God strengthens you physically and emotionally.
        </p>
        `;
    }

    else if (category === "emotions") {

        content = `

        <h2>🌿 Emotional Support</h2>

        <h3>Anxiety</h3>

        <p>
        "Cast all your anxiety on Him."
        — 1 Peter 5:7
        </p>

        <p>
        God cares about every burden you carry.
        </p>

        <h3>Depression</h3>

        <p>
        "The Lord is close to the brokenhearted."
        — Psalm 34:18
        </p>

        <p>
        God stays near during painful seasons.
        </p>

        <h3>Loneliness</h3>

        <p>
        "Never will I leave you."
        — Hebrews 13:5
        </p>

        <p>
        God is always with you.
        </p>
        `;
    }

    verseBox.innerHTML = content;
}

function aiEncouragement() {

    let feeling =
        document.getElementById("userFeeling")
        .value
        .toLowerCase();

    let response = "";

    if (
        feeling.includes("anxious") ||
        feeling.includes("anxiety")
    ) {

        response = `

        <h3>God is with you ❤️</h3>

        <p>
        "Cast all your anxiety on Him."
        — 1 Peter 5:7
        </p>

        <p>
        God deeply cares for every burden
        you carry.
        </p>
        `;
    }

    else if (
        feeling.includes("sad") ||
        feeling.includes("depressed")
    ) {

        response = `

        <h3>God sees your pain ❤️</h3>

        <p>
        "The Lord is close to the brokenhearted."
        — Psalm 34:18
        </p>

        <p>
        God stays near even in difficult seasons.
        </p>
        `;
    }

    else {

        response = `

        <h3>God loves you ❤️</h3>

        <p>
        "Come to me, all who are weary."
        — Matthew 11:28
        </p>

        <p>
        God understands your heart completely.
        </p>
        `;
    }

    document.getElementById(
        "chat-response"
    ).innerHTML = response;
}

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker
            .register("service-worker.js")
            .then(() => {

                console.log(
                    "Service Worker Registered"
                );
            });
    });
}
