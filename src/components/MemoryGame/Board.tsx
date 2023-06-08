import React, { useEffect, useState } from "react";
import useGetImages from "../../hooks/useGetImages";
import { GameOptionsType } from "../../types/others";
import Spinner from "../Spinner";
import useGameLogic from "../../hooks/useGameLogic";
import Card from "./Card";
import Result from "./Result";

type Prop = {
  gameOptions: GameOptionsType;
  restartGame: () => void
};

const Board = ({ gameOptions, restartGame }: Prop): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);
  const images = useGetImages(gameOptions);
  const { cards, onCardClick, isWin } = useGameLogic(images, gameOptions.pace);

  useEffect(() => {
    if (images.length > 0) {
      setIsLoading(false);
    }
  }, [images]);

  return (
    <div className="flex flex-col items-center gap-4">
      {isWin && <Result restartGame={restartGame} />}

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-wrap w-full md:w-2/3 justify-center gap-4">
          {cards.map((card) => (
            <Card
              key={card.uniqueId}
              card={card}
              cardsLength={cards.length}
              onCardClick={onCardClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Board;
