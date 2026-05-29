const verses = {

faith: `
<div class="subtopic-content">
<h2>Faith ✝️</h2>
<p>"Faith can move mountains." Matthew 17:20</p>
<h3>Prayer</h3>
<p>Lord, strengthen my faith.</p>
</div>
`,

students: `
<div class="subtopic-content">
<h2>Students 🎓</h2>
<p>"Do your best." Colossians 3:23</p>
<h3>Prayer</h3>
<p>Lord, help students grow.</p>
</div>
`,

marriage: `
<div class="subtopic-content">
<h2>Marriage 💍</h2>
<p>"Love one another." 1 Peter 4:8</p>
<h3>Prayer</h3>
<p>Lord bless families.</p>
</div>
`,

business: `
<div class="subtopic-content">
<h2>Business 💼</h2>
<p>"Commit your work to the Lord." Proverbs 16:3</p>
<h3>Prayer</h3>
<p>Lord guide my work.</p>
</div>
`,

health: `
<div class="subtopic-content">
<h2>Health ❤️</h2>
<p>"I will heal you." Jeremiah 30:17</p>
<h3>Prayer</h3>
<p>Lord bring healing.</p>
</div>
`,

emotions: `
<div class="subtopic-content">
<h2>Emotions 🌿</h2>
<p>"I am with you." Matthew 28:20</p>
<h3>Prayer</h3>
<p>Lord give peace.</p>
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

// OPEN CATEGORY
function openCategory(cat) {
document.getElementById("subtopic-box").innerHTML = verses[cat];
}

// DARK MODE
function toggleDarkMode() {
document.body.classList.toggle("dark-mode");
}

// SEARCH
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

// SHARE
function shareVerse(text) {
navigator.share?.({
title: "Everyday Manna",
text: text
});
}

// AI
function aiEncouragement() {

let f = document.getElementById("userFeeling").value.toLowerCase();

document.getElementById("chat-response").innerHTML =
f.includes("sad")
? "<p>God is with you ❤️</p>"
: "<p>Stay strong in Christ ✝️</p>";

}

// BIBLE API
async function searchBibleVerse() {

let ref = document.getElementById("bibleInput").value;

let res = await fetch(`https://bible-api.com/${ref}`);
let data = await res.json();

document.getElementById("bibleResult").innerHTML =
`<h3>${data.reference}</h3><p>${data.text}</p>`;
}

// BIBLE NAVIGATION
const oldTestament = [
"Genesis","Exodus","Leviticus","Numbers","Deuteronomy",
"Psalms","Proverbs","Isaiah","Jeremiah"
];

const newTestament = [
"Matthew","Mark","Luke","John",
"Acts","Romans","1 Corinthians","2 Corinthians"
];

function showBooks(type) {

let books = type === "old" ? oldTestament : newTestament;

let html = "<h4>Select Book</h4>";

books.forEach(b => {
html += `<button onclick="openBook('${b}')">${b}</button><br><br>`;
});

document.getElementById("bookList").innerHTML = html;
}

async function openBook(book) {

let res = await fetch(`https://bible-api.com/${book} 1`);
let data = await res.json();

document.getElementById("bookList").innerHTML =
`<h3>${data.reference}</h3><p>${data.text}</p>`;
}
