const verses = {

faith: `
<div class="subtopic-content">
<h2>Faith ✝️</h2>
<p>"Faith can move mountains." Matthew 17:20</p>
<h3>Prayer</h3>
<p>Lord, strengthen my faith.</p>

<button onclick="shareVerse('Faith can move mountains - Matthew 17:20')">
📤 Share Verse
</button>

</div>
`,

students: `
<div class="subtopic-content">
<h2>Students 🎓</h2>
<p>"Do your best." Colossians 3:23</p>
<h3>Prayer</h3>
<p>Lord, help students grow.</p>

<button onclick="shareVerse('Do your best - Colossians 3:23')">
📤 Share Verse
</button>

</div>
`,

marriage: `
<div class="subtopic-content">
<h2>Marriage 💍</h2>
<p>"Love one another." 1 Peter 4:8</p>
<h3>Prayer</h3>
<p>Lord bless families.</p>

<button onclick="shareVerse('Love one another - 1 Peter 4:8')">
📤 Share Verse
</button>

</div>
`,

business: `
<div class="subtopic-content">
<h2>Business 💼</h2>
<p>"Commit your work to the Lord." Proverbs 16:3</p>
<h3>Prayer</h3>
<p>Lord guide my work.</p>

<button onclick="shareVerse('Commit your work to the Lord - Proverbs 16:3')">
📤 Share Verse
</button>

</div>
`,

health: `
<div class="subtopic-content">
<h2>Health ❤️</h2>
<p>"I will heal you." Jeremiah 30:17</p>
<h3>Prayer</h3>
<p>Lord bring healing.</p>

<button onclick="shareVerse('I will heal you - Jeremiah 30:17')">
📤 Share Verse
</button>

</div>
`,

emotions: `
<div class="subtopic-content">
<h2>Emotions 🌿</h2>
<p>"I am with you." Matthew 28:20</p>
<h3>Prayer</h3>
<p>Lord give peace.</p>

<button onclick="shareVerse('I am with you - Matthew 28:20')">
📤 Share Verse
</button>

</div>
`

};

// DAILY VERSE
const dailyVerses = [
"God is our refuge. Psalm 46:1",
"The Lord is my strength. Nehemiah 8:10",
"I can do all things. Philippians 4:13"
];

function generateDailyVerse() {
document.getElementById("dailyVerseText").innerText =
dailyVerses[Math.floor(Math.random() * dailyVerses.length)];
}

generateDailyVerse();

function openCategory(cat) {
document.getElementById("subtopic-box").innerHTML = verses[cat];
}

function toggleDarkMode() {
document.body.classList.toggle("dark-mode");
}

function searchTopics() {
let input = document.getElementById("searchInput").value.toLowerCase();
let cards = document.querySelectorAll(".card");

cards.forEach(card => {
card.style.display =
card.innerText.toLowerCase().includes(input)
? "block"
: "none";
});
}

function shareVerse(text) {

if (navigator.share) {

navigator.share({
title: "Everyday Manna",
text: text
});

} else {

alert("Sharing not supported on this device.");

}

}

/* BIBLE API */

async function searchBibleVerse() {

const reference = document.getElementById("bibleInput").value;

if (reference === "") {
alert("Please enter a Bible verse.");
return;
}

try {

const response = await fetch(
`https://bible-api.com/${reference}`
);

const data = await response.json();

document.getElementById("bibleResult").innerHTML = `

<div class="subtopic-content">

<h2>${data.reference}</h2>

<p>${data.text}</p>

<button onclick="shareVerse('${data.reference} - ${data.text}')">
📤 Share Verse
</button>

</div>

`;

} catch (error) {

document.getElementById("bibleResult").innerHTML = `
<p>Verse not found.</p>
`;

}

}
/* BIBLE BOOK NAVIGATION */

const oldTestament = [
"Genesis",
"Exodus",
"Leviticus",
"Numbers",
"Deuteronomy",
"Joshua",
"Judges",
"Psalms",
"Proverbs",
"Isaiah",
"Jeremiah"
];

const newTestament = [
"Matthew",
"Mark",
"Luke",
"John",
"Acts",
"Romans",
"1 Corinthians",
"2 Corinthians",
"Galatians",
"Ephesians"
];

function showBooks(type) {

let books = type === "old"
? oldTestament
: newTestament;

let html = "<h3>Select a Book</h3>";

books.forEach(book => {

html += `
<button onclick="showChapters('${book}')">
${book}
</button>
<br><br>
`;

});

document.getElementById("bookList").innerHTML = html;
}

function showChapters(book) {

let html = `<h3>${book}</h3>`;
html += "<p>Select Chapter</p>";

for (let i = 1; i <= 20; i++) {

html += `
<button onclick="openChapter('${book}', ${i})">
${i}
</button>
`;

}

document.getElementById("bookList").innerHTML = html;
}

async function openChapter(book, chapter) {

try {

const response = await fetch(
`https://bible-api.com/${book} ${chapter}`
);

const data = await response.json();

document.getElementById("bookList").innerHTML = `

<div class="subtopic-content">

<h2>${data.reference}</h2>

<p>${data.text}</p>

<button onclick="shareVerse('${data.reference}')">
📤 Share Chapter
</button>

</div>

`;

} catch (error) {

document.getElementById("bookList").innerHTML =
"<p>Chapter not found.</p>";

}

}
