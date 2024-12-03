let gameCardData = [
    {
        gameId: "game2",
        name: "Demon King Kong vs The World",
        image: "img/kongCover.png",
        description: "King Kong vs The World is a story-driven game where you battle King Kong in 2035, facing intense challenges to save humanity.",
        price: 89.99
    },
    {
        gameId: "game1",
        name: "Sea Otter vs Communist Zombies",
        image: "img/otterNoText.jpg",
        description: "Sea Otter vs Communist Zombies is a 90s-style 2D platformer with intense boss battles and retro visuals. A must-play game!",
        price: 89.99
    }, 
    {
        gameId: "game3",
        name: "Clyde the Capybara: Guardian of the Riverbank",
        image: "img/Capybara.jpg",
        description: "Clyde the capybara defends his Amazon River bank from predators, jaguars, anacondas, and pesky pelicans.",
        price: 89.99
    },
];

// Global cart management
window.cart = JSON.parse(localStorage.getItem('cart')) || [];

window.updateCart = (newCart) => {
    window.cart = newCart;
    localStorage.setItem('cart', JSON.stringify(newCart));
    updateCartDisplay();
};

window.updateCartDisplay = () => {
    const cartAmount = document.getElementById('cartAmount');
    if (cartAmount) {
        const total = window.cart.reduce((sum, item) => sum + item.item, 0);
        cartAmount.textContent = total;
    }
};

// Initialize cart display
updateCartDisplay();