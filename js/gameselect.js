let gameSelect = document.getElementById('gameSelect');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

let generateGameCards = () => {
    return (gameSelect.innerHTML = gameCardData
        .map((game)=>{
            let {gameId, name, image, description} = game;
            return ` 
            <div class="item">
            <div class="details">
                <img src="${image}" alt="${name}">
                <h3>${name}</h3>
                <p>${description}</p>
            </div>
            <div class="buttons">
                <button onclick="incrementCartAmount('${gameId}')">Select</button>
            </div>
        </div>
        `;
        }).join(''));
};

generateGameCards();

let incrementCartAmount = (gameId) => {
    let selectedGame = gameCardData.find(game => game.gameId === gameId);
    let searchCart = cart.find((game) => game.id === gameId);

    if (searchCart === undefined) {
        cart.push({
            id: gameId,
            item: 1,
        });
    } else {
        searchCart.item += 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    calculateCartTotal();
};


let calculateCartTotal = () => {
    let cartIcon = document.getElementById('cartAmount');
    cartIcon.innerHTML = cart.map(game => game.item).reduce((a, b) => a + b, 0);
};

calculateCartTotal();
