import React from "react";
import { STEP } from "../../constants/memoryGame";

type Prop = {
  cardsCount: number;
  onClick: (n: number) => void;
};

const Counter = ({ cardsCount, onClick }: Prop): JSX.Element => {
  const onDecrement = () => {
    const number = cardsCount - STEP;
    if (number >= 2) onClick(number);
  };

  const onIncrement = () => {
    const number = cardsCount + STEP;
    if (number <= 160) onClick(number);
  };

  return (
    <div className="flex gap-3 items-center">
      <button
        className="rounded-full w-8 h-8 flex justify-center items-center"
        onClick={onDecrement}
      >
        -
      </button>

      {cardsCount}

      <button
        className="rounded-full w-8 h-8 flex justify-center items-center"
        onClick={onIncrement}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
