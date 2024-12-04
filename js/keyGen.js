document.addEventListener('DOMContentLoaded', function() {
    const gameKey = document.getElementById('gameKey');
    const copyButton = document.getElementById('copyButton');



    const generateKey = () => {
        return 'xxxx-xxxx-xxxx-xxxx'.replace(/[x]/g, () => {
           const random = Math.floor(Math.random() * 16);
           const upperCase = Math.random() < 0.5;
           return random.toString(16).toUpperCase();
        });
    };

    const displayKey = () => {
        const generatedKey = generateKey();
        gameKey.textContent = generatedKey;
        console.log(gameKey);
    };

    displayKey();

    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(gameKey.textContent)
            .then(() => alert('Key copied to clipboard!'))
            .catch(err => console.error('Failed to copy key: ', err))
    });

});

