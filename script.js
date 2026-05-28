const verses = {

    hope: {
        verse: '"For I know the plans I have for you." — Jeremiah 29:11',
        message: 'God has a beautiful purpose for your life.'
    },

    fear: {
        verse: '"Do not fear, for I am with you." — Isaiah 41:10',
        message: 'God walks beside you through every storm.'
    },

    anxiety: {
        verse: '"Cast all your anxiety on Him." — 1 Peter 5:7',
        message: 'You are never alone. God deeply cares for you.'
    },

    faith: {
        verse: '"Faith can move mountains." — Matthew 17:20',
        message: 'Keep trusting even when the road feels uncertain.'
    },

    love: {
        verse: '"Love one another." — John 13:34',
        message: 'God’s love never fails.'
    },

    strength: {
        verse: '"I can do all things through Christ." — Philippians 4:13',
        message: 'God strengthens you every day.'
    },

    depression: {
        verse: '"The Lord is close to the brokenhearted." — Psalm 34:18',
        message: 'God stays near in painful seasons.'
    },

    stress: {
        verse: '"Come to me, all who are weary." — Matthew 11:28',
        message: 'God offers peace and rest.'
    },

    forgiveness: {
        verse: '"Forgive as the Lord forgave you." — Colossians 3:13',
        message: 'Forgiveness brings healing.'
    },

    loneliness: {
        verse: '"Never will I leave you." — Hebrews 13:5',
        message: 'God is always with you.'
    },

    peace: {
        verse: '"Peace I leave with you." — John 14:27',
        message: 'God’s peace calms every storm.'
    },

    joy: {
        verse: '"The joy of the Lord is your strength." — Nehemiah 8:10',
        message: 'True joy is found in God.'
    },

    wisdom: {
        verse: '"Ask God for wisdom." — James 1:5',
        message: 'God guides your path.'
    },

    courage: {
        verse: '"Be strong and courageous." — Joshua 1:9',
        message: 'God gives courage for every challenge.'
    }

};

let currentVerse = "";

function showVerse(topic) {

    currentVerse = `
${verses[topic].verse}

${verses[topic].message}
`;

    document.getElementById("verse-box").innerHTML = `

        <h2>${topic.toUpperCase()}</h2>

        <p>${verses[topic].verse}</p>

        <p>
            <strong>
                ${verses[topic].message}
            </strong>
        </p>

        <button onclick="saveFavorite()">
            ⭐ Save Favorite
        </button>

        <button onclick="shareVerse()">
            📤 Share Verse
        </button>
    `;
}

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");
}

function searchTopics() {

    let input =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    let buttons =
        document.querySelectorAll(".topics button");

    buttons.forEach(button => {

        if (
            button.innerText
            .toLowerCase()
            .includes(input)
        ) {

            button.style.display = "inline-block";

        } else {

            button.style.display = "none";
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

function saveFavorite() {

    localStorage.setItem(
        "favoriteVerse",
        currentVerse
    );

    alert("Verse saved ⭐");
}

function shareVerse() {

    if (navigator.share) {

        navigator.share({

            title: "Everyday Manna",

            text: currentVerse,

            url: window.location.href
        });

    } else {

        alert("Sharing not supported.");
    }
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

    else if (
        feeling.includes("fear") ||
        feeling.includes("scared")
    ) {

        response = `

        <h3>Be courageous ❤️</h3>

        <p>
        "Do not fear, for I am with you."
        — Isaiah 41:10
        </p>

        <p>
        God walks beside you through every storm.
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
