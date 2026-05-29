const dailyVerses = [

  '"God is our refuge and strength." — Psalm 46:1',

  '"I can do all things through Christ." — Philippians 4:13',

  '"The joy of the Lord is your strength." — Nehemiah 8:10',

  '"Be still and know that I am God." — Psalm 46:10'

];

function generateVerse(){

  const randomVerse =

    dailyVerses[
      Math.floor(Math.random() * dailyVerses.length)
    ];

  document.getElementById(
    "dailyVerseText"
  ).innerText = randomVerse;
}

window.onload = function(){

  const favorites =

    JSON.parse(
      localStorage.getItem("favorites")
    ) || [];

  const list =
    document.getElementById("favoritesList");

  if(list){

    favorites.forEach(item => {

      list.innerHTML += `

        <div class="prayer-card">

          <h3>Saved Verse ⭐</h3>

          <p>${item}</p>

        </div>

      `;
    });
  }
}
