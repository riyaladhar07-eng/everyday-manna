const verses = {
    hope: {
        verse: '"For I know the plans I have for you," declares the Lord. - Jeremiah 29:11',
        message: 'God has a beautiful purpose for your life.'
    },

    fear: {
        verse: '"Do not fear, for I am with you." - Isaiah 41:10',
        message: 'God walks beside you even in difficult moments.'
    },

    anxiety: {
        verse: '"Cast all your anxiety on Him because He cares for you." - 1 Peter 5:7',
        message: 'You are not alone. God cares deeply for you.'
    },

    faith: {
        verse: '"Faith can move mountains." - Matthew 17:20',
        message: 'Keep trusting even when you cannot see the outcome.'
    },

    love: {
        verse: '"Love one another as I have loved you." - John 13:34',
        message: 'God’s love is endless and unconditional.'
    },

    strength: {
        verse: '"I can do all things through Christ who strengthens me." - Philippians 4:13',
        message: 'God gives strength for every challenge.'
    }
};

function showVerse(topic) {
    document.getElementById("verse-box").innerHTML = `
        <h2>${topic.toUpperCase()}</h2>
        <p>${verses[topic].verse}</p>
        <p><strong>${verses[topic].message}</strong></p>
    `;
}
