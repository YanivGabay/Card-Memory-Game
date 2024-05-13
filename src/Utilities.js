
export const shuffleCards = (cards) => {
    let currentIndex = cards.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [cards[currentIndex], cards[randomIndex]] = [cards[randomIndex], cards[currentIndex]];
    }
    return cards;
  };
  
  export const initializeDeck = (rows, cols) => {
    const halfDeckSize = (rows * cols) / 2;
  
    const cardImages = Array.from({ length: halfDeckSize }, (_, i) => ({
      id: i + 1,
      url: `/images/${i}.jpg`  // Adjusted path
    }));
  
    const deck = cardImages.concat(cardImages).map((card, index) => ({
      ...card,
      id: index,
      isFlipped: false,
      isMatched: false
    }));
  
    return deck;
  };
  