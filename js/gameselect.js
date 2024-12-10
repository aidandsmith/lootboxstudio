let gameSelect = document.getElementById("gameSelect");

const triggerConfetti = () => {
  // Left side confetti with a slight delay
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
        let { gameId, name, image, description, price } = game;
        let inCart = window.cart.some((item) => item.id === gameId);
        let isClyde = name.toLowerCase().includes("clyde");

        return ` 
                <div class="item">
                    ${
                      isClyde
                        ? '<div class="upcoming-banner">Upcoming Release!</div>'
                        : ""
                    }
                    <div class="details">
                        <img src="${image}" alt="${name}">
                        <h3>${name}</h3>
                        <p>${description}</p>
                        <p class="price">$${price}</p>
                    </div>
                    <div class="buttons gameCardButton">
                        <button onclick="${
                          inCart ? "removeFromCart" : "incrementCartAmount"
                        }('${gameId}')" 
                                class="${inCart ? "remove-button" : ""}">
                            ${inCart ? "Remove From Cart" : "Add to Cart"}
                        </button>
                    </div>
                </div>
                `;
      })
      .join("");
  }
};

let incrementCartAmount = (gameId) => {
  window.cart.push({
    id: gameId,
    item: 1,
  });

  window.updateCart(window.cart);
  triggerConfetti();
  generateGameCards();
};

let removeFromCart = (gameId) => {
  window.cart = window.cart.filter((game) => game.id !== gameId);
  window.updateCart(window.cart);
  generateGameCards();
};

generateGameCards();
