import { useEffect, useState } from "react";

import { GameCardType, GameImageType } from "../types/others";
import { getFormedImagesData, shuffleCards } from "../utils/memoryGame";
import { MAX_VISIBLE_CARDS, PACES } from "../constants/memoryGame";

const useGameLogic = (images: GameImageType[], gamePace: string) => {
  const [score, setScore] = useState(0);
  const [isWin, setIsWin] = useState(false);
  const [cards, setCards] = useState<GameCardType[]>([]);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  const prepareCards = () => {
    const formedImages = getFormedImagesData(images);
    const shuffledImages = shuffleCards(formedImages);
    setCards(shuffledImages);
  };

  const flipCard = (clickedCardId: number) => {
    if (visibleCards.includes(clickedCardId)) return;

    const flippedCards = cards.map((card) => {
      if (card.uniqueId === clickedCardId) {
        card.isShown = true;
      }

      if (card.isShown) setVisibleCards((prev) => [...prev, card.uniqueId]);

      return card;
    });

    setCards(flippedCards);
  };

  const onCardClick = (clickedCardId: number) => {
    if (visibleCards.length < MAX_VISIBLE_CARDS) flipCard(clickedCardId);
  };

  const updateScore = () => {
    setScore((prev) => prev + 1);
  };

  const checkMatch = () => {
    const visible = cards.filter(
      (card) => visibleCards.indexOf(card.uniqueId) !== -1
    );

    const matched = visible[0].id === visible[1].id;

    const updatedCards = cards.map((card) => {
      if (visibleCards.indexOf(card.uniqueId) !== -1) {
        card.isShown = false;
        card.isFound = matched;
      }

      return card;
    });

    setTimeout(() => {
      setCards(updatedCards);
      setVisibleCards([]);
      if (matched) updateScore();
    }, PACES[gamePace as keyof typeof PACES]);
  };

  useEffect(() => {
    if (images.length > 0) {
      prepareCards();
    }
  }, [images]);

  useEffect(() => {
    if (visibleCards.length >= MAX_VISIBLE_CARDS) {
      checkMatch();
    }
  }, [visibleCards]);

  useEffect(() => {
    if (images.length && score === images.length) setIsWin(true);
  }, [score]);

  return { cards, onCardClick, isWin };
};

export default useGameLogic;
