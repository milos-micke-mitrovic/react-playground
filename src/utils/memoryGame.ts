import { GameCardType, GameImageType } from "../types";

// Shuffle the cards to "mess up" with their order
export const shuffleCards = (cards: GameCardType[]): GameCardType[] => {
  let m = cards.length;
  let t;
  let i;

  // While there remain elements to shuffle
  while (m) {
    // Pick a remaining element
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element
    t = cards[m];
    cards[m] = cards[i];
    cards[i] = t;
  }

  return cards;
};

export const getFormedImagesData = (data: GameImageType[]): GameCardType[] => {
  const formedData = data.map((pic: GameImageType, index: number) => ({
    id: index,
    url: pic.src.small,
    isShown: false,
    isFound: false,
  }));

  // Make duplicates, and add unique IDS to all
  return [...formedData, ...formedData].map((entry, i) => ({
    ...entry,
    uniqueId: i,
  }));
};
