


export const validateName = (name) => {
  if (!name) return 'Name is required.';
  if (name.length > 12 || !/^[a-zA-Z0-9]*$/.test(name)) return 'Name must be up to 12 alphanumeric english characters.';
  return null;
};

export const validateSettings = ({ rows, cols }) => {
  const totalCards = rows * cols;
  return totalCards % 2 !== 0 ? 'The combination of rows and columns must result in an even number of cards.' : null;
};

/**
 * Shuffles an array of cards using the Fisher-Yates algorithm.
 * @param {Array} cards - The array of cards to be shuffled.
 * @returns {Array} - The shuffled array of cards.
 */
export const shuffleCards = (cards) => {
    let currentIndex = cards.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [cards[currentIndex], cards[randomIndex]] = [cards[randomIndex], cards[currentIndex]];
    }
    return cards;
  };
  
/**
 * Initializes the deck for the memory game.
 * 
 * @param {number} rows - The number of rows in the game board.
 * @param {number} cols - The number of columns in the game board.
 * @returns {Array} - The initialized deck for the memory game.
 */
export const initializeDeck = (rows, cols) => {
  const halfDeckSize = (rows * cols) / 2;
  
  // Create an array of card images where each image appears twice with the same ID
  const cardImages = [];
  for (let i = 0; i < halfDeckSize; i++) {
    const baseCard = {
      id: i, // Same ID for matching cards
      url: `/images/${i}.jpg`
    };
    cardImages.push(baseCard, {...baseCard}); // Add two instances of the same card
  }
  
  return shuffleCards(cardImages).map((card, index) => ({
    ...card,
    isFlipped: false,
    isMatched: false,
    index: index  // This helps track the card position in the grid
  }));
};


export const isEveryCardMatched = (cards) => {
  console.log(cards)
  console.log(cards.every(card => card.isMatched))
  return cards.every(card => card.isMatched);
};