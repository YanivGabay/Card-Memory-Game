
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
    // Assuming half of the total number of cards needed (rows * cols) are unique
    const halfDeckSize = (rows * cols) / 2;
  
    // Generate card objects with image paths from 0.png to (halfDeckSize-1).png
    const cardImages = Array.from({ length: halfDeckSize }, (_, i) => ({
      id: i + 1,
      url: `public/images/${i}.png`
    }));
  
    // Duplicate and map each card object to include unique identifiers for matching pairs
    const deck = cardImages.concat(cardImages).map((card, index) => ({
      ...card,
      id: index, // Ensure unique IDs for the deck (necessary for React keys)
      isFlipped: false,
      isMatched: false
    }));
  
    return deck;
  };
  