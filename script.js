document.getElementById('generateCoin').addEventListener('click', function() {
    const memeCoins = ['PepeCash', 'DogeCoin', 'Garlicoin', 'Banano'];
    const selectedCoin = memeCoins[Math.floor(Math.random() * memeCoins.length)];
    document.getElementById('coinDisplay').innerHTML = `<p>Congratulations! You've generated: <strong>${selectedCoin}</strong></p>`;
});