const verses = {

    hope: {
        verse: '"For I know the plans I have for you," declares the Lord. — Jeremiah 29:11',
        message: 'God has a beautiful purpose and future for your life.'
    },

    fear: {
        verse: '"Do not fear, for I am with you." — Isaiah 41:10',
        message: 'God walks beside you through every challenge.'
    },

    anxiety: {
        verse: '"Cast all your anxiety on Him because He cares for you." — 1 Peter 5:7',
        message: 'You are deeply loved and never alone.'
    },

    faith: {
        verse: '"Faith can move mountains." — Matthew 17:20',
        message: 'Keep trusting even when the path seems unclear.'
    },

    love: {
        verse: '"Love one another as I have loved you." — John 13:34',
        message: 'God’s love is endless, pure, and unconditional.'
    },

    strength: {
        verse: '"I can do all things through Christ who strengthens me." — Philippians 4:13',
        message: 'God gives strength for every battle you face.'
    },

    depression: {
        verse: '"The Lord is close to the brokenhearted." — Psalm 34:18',
        message: 'Even in sadness, God stays near and faithful.'
    },

    stress: {
        verse: '"Come to me, all who are weary." — Matthew 11:28',
        message: 'God offers rest and peace to your heart.'
    },

    forgiveness: {
        verse: '"Forgive as the Lord forgave you." — Colossians 3:13',
        message: 'Forgiveness brings healing and freedom.'
    },

    loneliness: {
        verse: '"Never will I leave you." — Hebrews 13:5',
        message: 'God’s presence is always with you.'
    },

    peace: {
        verse: '"Peace I leave with you." — John 14:27',
        message: 'God’s peace calms every storm within.'
    },

    joy: {
        verse: '"The joy of the Lord is your strength." — Nehemiah 8:10',
        message: 'True joy is found in God’s presence.'
    },

    wisdom: {
        verse: '"If any of you lacks wisdom, ask God." — James 1:5',
        message: 'God generously gives wisdom and guidance.'
    },

    courage: {
        verse: '"Be strong and courageous." — Joshua 1:9',
        message: 'God strengthens you to move forward with courage.'
    }

};

function showVerse(topic) {

    document.getElementById("verse-box").innerHTML = `
        <h2>${topic.toUpperCase()}</h2>

        <p>${verses[topic].verse}</p>

        <p><strong>${verses[topic].message}</strong></p>
    `;
}
