let gameSelect = document.getElementById('gameSelect');

const triggerConfetti = () => {
    // Left side confetti
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { x: 0, y: 0.6 },
    });
    
    // Right side confetti with a slight delay
    setTimeout(() => {
        confetti({
            particleCount: 200,
            spread: 70,
            origin: { x: 1, y: 0.6 },
        });
    }, 50);
};

let generateGameCards = () => {
    if (gameSelect) {
        gameSelect.innerHTML = gameCardData
            .map((game) => {
                let {gameId, name, image, description, price} = game;
                return ` 
                <div class="item">
                    <div class="details">
                        <img src="${image}" alt="${name}">
                        <h3>${name}</h3>
                        <p>${description}</p>
                        <p class="price">$${price}</p>
                    </div>
                    <div class="buttons gameCardButton">
                        <button onclick="incrementCartAmount('${gameId}')">Add to Cart</button>
                    </div>
                </div>
                `;
            }).join('');
    }
};

let incrementCartAmount = (gameId) => {
    let searchCart = window.cart.find((game) => game.id === gameId);

    if (searchCart === undefined) {
        window.cart.push({
            id: gameId,
            item: 1,
        });
    } else {
        searchCart.item += 1;
    }
    
    window.updateCart(window.cart);
    triggerConfetti();
};

generateGameCards();
