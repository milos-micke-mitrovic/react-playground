import React, { useEffect, useState } from "react";
import { GameCardType } from "../../types";

type Prop = {
  card: GameCardType;
  onCardClick: (id: number) => void;
  cardsLength: number;
};

const Card = ({ card, cardsLength, onCardClick }: Prop): JSX.Element => {
  const onClick = () => {
    if (card.isShown || card.isFound) return;
    onCardClick(card.uniqueId);
  };

  return (
    <>
      <div className="scene scene--card border border-green w-24 h-24 md:w-48 md:h-48">
        <div
          className={`card ${card.isShown || card.isFound ? "is-flipped" : ""}`}
          onClick={onClick}
        >
          <div className="card__face card__face--front">
            <img src="images/cat-question.gif" alt="" width="200" />
          </div>

          <div className="card__face card__face--back">
            <img src={card.url} alt="" width="200" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
