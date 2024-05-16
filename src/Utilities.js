
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
  
    const cardImages = Array.from({ length: halfDeckSize }, (_, i) => ({
      id: i + 1,
      url: `/images/${i}.jpg`  
    }));
  
    const deck = cardImages.concat(cardImages).map((card, index) => ({
      ...card,
      id: index,
      isFlipped: false,
      isMatched: false
    }));
  
    return deck;
  };
  