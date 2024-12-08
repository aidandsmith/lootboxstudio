let label = document.getElementById('label');
let shoppingCart = document.getElementById('shoppingCart');

let removeItem = (id) => {
    window.cart = window.cart.filter((game) => game.id !== id);
    window.updateCart(window.cart);
    generateCheckoutCartItems();
};

let generateCheckoutCartItems = () => {
    if(window.cart.length !== 0) {
        label.innerHTML = `<h2>Shopping Cart</h2>`;
        shoppingCart.innerHTML = `
            <div class="checkoutCart">
                <div class="checkoutCartItems">
                    ${window.cart.map((game) => {
                        let {id} = game;
                        let search = gameCardData.find(game => game.gameId === id) || [];
                        return `
                            <div class="checkoutCartItem">
                                <img src="${search.image}" alt="${search.name}">
                                <h4>${search.name}</h4>
                                <div class="price-container">
                                    <p>Price: $${search.price}</p>
                                    <button onclick="removeItem('${id}')" class="delete-item">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
                <div class="checkoutCartTotal">
                    <h3>Total: $${window.cart.reduce((total, game) => {
                        let search = gameCardData.find(x => x.gameId === game.id) || [];
                        return total + search.price;
                    }, 0).toFixed(2)}</h3>
                    <a href="checkout.html">
                        <button class="checkoutCartButton">Checkout</button>
                    </a>
                </div>
            </div>
        `;
    } else {
        label.innerHTML = `
            <div class="empty-cart">
                <h2>Cart is empty</h2>
                <a href="games-select.html">
                    <button class="checkoutCartButton">Browse Games</button>
                </a>
            </div>
        `;
        shoppingCart.innerHTML = '';
    }
};

generateCheckoutCartItems();
