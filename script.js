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

    let subtopicBox =
        document.getElementById("subtopic-box");

    subtopicBox.innerHTML = "";

    let content = "";

    // FAITH CATEGORY

    if (category === "faith") {

        content = `

        <h2>✝️ Faith & Trust</h2>

        <p>
        Explore deeper topics about faith,
        trust, courage, and hope.
        </p>

        <div class="subtopics">

            <button class="sub-btn"
                    onclick="openSubtopic('trust')">

                Trust God

            </button>

            <button class="sub-btn"
                    onclick="openSubtopic('hope')">

                Hope

            </button>

            <button class="sub-btn"
                    onclick="openSubtopic('courage')">

                Courage

            </button>

            <button class="sub-btn"
                    onclick="openSubtopic('trials')">

                Faith During Trials

            </button>

        </div>
        `;
    }

    // STUDENTS CATEGORY

    else if (category === "students") {

        content = `

        <h2>🎓 Students & Youth</h2>

        <div class="subtopics">

            <button class="sub-btn"
                    onclick="openSubtopic('studies')">

                Studies

            </button>

            <button class="sub-btn"
                    onclick="openSubtopic('parents')">

                Respect Parents

            </button>

            <button class="sub-btn"
                    onclick="openSubtopic('future')">

                Future Success

            </button>

        </div>
        `;
    }

    // MARRIAGE CATEGORY

    else if (category === "marriage") {

        content = `

        <h2>💍 Marriage & Family</h2>

        <div class="subtopics">

            <button class="sub-btn"
                    onclick="openSubtopic('love')">

                Love

            </button>

            <button class="sub-btn"
                    onclick="openSubtopic('family')">

                Family Unity

            </button>

            <button class="sub-btn"
                    onclick="openSubtopic('parenting')">

                Parenting

            </button>

        </div>
        `;
    }

    // BUSINESS CATEGORY

    else if (category === "business") {

        content = `

        <h2>💼 Business & Finance</h2>

        <div class="subtopics">

            <button class="sub-btn"
                    onclick="openSubtopic('hardwork')">

                Hard Work

            </button>

            <button class="sub-btn"
                    onclick="openSubtopic('money')">

                Money Wisdom

            </button>

            <button class="sub-btn"
                    onclick="openSubtopic('integrity')">

                Integrity

            </button>

        </div>
        `;
    }

    // HEALTH CATEGORY

    else if (category === "health") {

        content = `

        <h2>❤️ Health & Healing</h2>

        <div class="subtopics">

            <button class="sub-btn"
                    onclick="openSubtopic('healing')">

                Healing

            </button>

            <button class="sub-btn"
                    onclick="openSubtopic('peace')">

                Peace

            </button>

            <button class="sub-btn"
                    onclick="openSubtopic('strength')">

                Strength

            </button>

        </div>
        `;
    }

    // EMOTIONS CATEGORY

    else if (category === "emotions") {

        content = `

        <h2>🌿 Emotional Support</h2>

        <div class="subtopics">

            <button class="sub-btn"
                    onclick="openSubtopic('anxiety')">

                Anxiety

            </button>

            <button class="sub-btn"
                    onclick="openSubtopic('depression')">

                Depression

            </button>

            <button class="sub-btn"
                    onclick="openSubtopic('loneliness')">

                Loneliness

            </button>

        </div>
        `;
    }

    verseBox.innerHTML = content;
}

function openSubtopic(type) {

    let subtopicBox =
        document.getElementById("subtopic-box");

    let content = "";

    // FAITH

    if (type === "trust") {

        content = `

        <div class="subtopic-content">

        <h2>Trust God ✝️</h2>

        <p>
        "Trust in the Lord with all your heart."
        — Proverbs 3:5
        </p>

        <p>
        Even when life feels uncertain,
        God asks us to trust Him fully.
        </p>

        <h3>Example</h3>

        <p>
        Abraham trusted God even without
        knowing where he was going.
        </p>

        </div>
        `;
    }

    else if (type === "hope") {

        content = `

        <div class="subtopic-content">

        <h2>Hope 🌟</h2>

        <p>
        "For I know the plans I have for you."
        — Jeremiah 29:11
        </p>

        <p>
        God has a future and hope prepared for you.
        </p>

        <h3>Example</h3>

        <p>
        Joseph stayed hopeful even after hardship.
        </p>

        </div>
        `;
    }

    else if (type === "courage") {

        content = `

        <div class="subtopic-content">

        <h2>Courage 🛡️</h2>

        <p>
        "Be strong and courageous."
        — Joshua 1:9
        </p>

        <p>
        God strengthens us during fear and challenges.
        </p>

        <h3>Example</h3>

        <p>
        David courageously faced Goliath with faith.
        </p>

        </div>
        `;
    }

    else if (type === "trials") {

        content = `

        <div class="subtopic-content">

        <h2>Faith During Trials 🌧️</h2>

        <p>
        "Consider it pure joy whenever you face trials."
        — James 1:2
        </p>

        <p>
        Difficult seasons can strengthen our faith.
        </p>

        <h3>Example</h3>

        <p>
        Job remained faithful during suffering.
        </p>

        </div>
        `;
    }

    // STUDENTS

    else if (type === "studies") {

        content = `

        <div class="subtopic-content">

        <h2>Studies 📚</h2>

        <p>
        "Do your best as working for the Lord."
        — Colossians 3:23
        </p>

        <p>
        Study with discipline and excellence.
        </p>

        </div>
        `;
    }

    else if (type === "parents") {

        content = `

        <div class="subtopic-content">

        <h2>Respect Parents 👨‍👩‍👧</h2>

        <p>
        "Honor your father and mother."
        — Ephesians 6:2
        </p>

        <p>
        Respecting parents brings blessings and wisdom.
        </p>

        </div>
        `;
    }

    else if (type === "future") {

        content = `

        <div class="subtopic-content">

        <h2>Future Success 🚀</h2>

        <p>
        "Commit your work to the Lord."
        — Proverbs 16:3
        </p>

        <p>
        God can guide your dreams and career.
        </p>

        </div>
        `;
    }

    // MARRIAGE

    else if (type === "love") {

        content = `

        <div class="subtopic-content">

        <h2>Love ❤️</h2>

        <p>
        "Love is patient, love is kind."
        — 1 Corinthians 13:4
        </p>

        <p>
        Marriage should be built on patience and love.
        </p>

        </div>
        `;
    }

    else if (type === "family") {

        content = `

        <div class="subtopic-content">

        <h2>Family Unity 👨‍👩‍👧‍👦</h2>

        <p>
        "A cord of three strands is not quickly broken."
        — Ecclesiastes 4:12
        </p>

        <p>
        Families grow stronger with God at the center.
        </p>

        </div>
        `;
    }

    else if (type === "parenting") {

        content = `

        <div class="subtopic-content">

        <h2>Parenting 👶</h2>

        <p>
        "Train up a child in the way he should go."
        — Proverbs 22:6
        </p>

        <p>
        Parents should guide children with wisdom.
        </p>

        </div>
        `;
    }

    // BUSINESS

    else if (type === "hardwork") {

        content = `

        <div class="subtopic-content">

        <h2>Hard Work 💼</h2>

        <p>
        "The plans of the diligent lead to profit."
        — Proverbs 21:5
        </p>

        <p>
        Success comes through discipline and honesty.
        </p>

        </div>
        `;
    }

    else if (type === "money") {

        content = `

        <div class="subtopic-content">

        <h2>Money Wisdom 💰</h2>

        <p>
        "The wise store up knowledge."
        — Proverbs 10:14
        </p>

        <p>
        Manage money wisely and responsibly.
        </p>

        </div>
        `;
    }

    else if (type === "integrity") {

        content = `

        <div class="subtopic-content">

        <h2>Integrity 🤝</h2>

        <p>
        "Better a little with righteousness."
        — Proverbs 16:8
        </p>

        <p>
        Honest work honors God.
        </p>

        </div>
        `;
    }

    // HEALTH

    else if (type === "healing") {

        content = `

        <div class="subtopic-content">

        <h2>Healing ❤️</h2>

        <p>
        "I am the Lord who heals you."
        — Exodus 15:26
        </p>

        <p>
        God deeply cares about your healing.
        </p>

        </div>
        `;
    }

    else if (type === "peace") {

        content = `

        <div class="subtopic-content">

        <h2>Peace 🕊️</h2>

        <p>
        "Peace I leave with you."
        — John 14:27
        </p>

        <p>
        God's peace calms anxious hearts.
        </p>

        </div>
        `;
    }

    else if (type === "strength") {

        content = `

        <div class="subtopic-content">

        <h2>Strength 💪</h2>

        <p>
        "I can do all things through Christ."
        — Philippians 4:13
        </p>

        <p>
        God gives strength for every challenge.
        </p>

        </div>
        `;
    }

    // EMOTIONS

    else if (type === "anxiety") {

        content = `

        <div class="subtopic-content">

        <h2>Anxiety 🌿</h2>

        <p>
        "Cast all your anxiety on Him."
        — 1 Peter 5:7
        </p>

        <p>
        God cares about every burden you carry.
        </p>

        </div>
        `;
    }

    else if (type === "depression") {

        content = `

        <div class="subtopic-content">

        <h2>Depression 🌧️</h2>

        <p>
        "The Lord is close to the brokenhearted."
        — Psalm 34:18
        </p>

        <p>
        God stays near during painful seasons.
        </p>

        </div>
        `;
    }

    else if (type === "loneliness") {

        content = `

        <div class="subtopic-content">

        <h2>Loneliness 🤍</h2>

        <p>
        "Never will I leave you."
        — Hebrews 13:5
        </p>

        <p>
        God is always with you.
        </p>

        </div>
        `;
    }

    subtopicBox.innerHTML = content;
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
        God deeply cares for every burden.
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
        God stays near even during suffering.
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
