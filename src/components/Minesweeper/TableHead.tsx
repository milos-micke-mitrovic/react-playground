import React, { useState, useEffect } from "react";
import { Face, GamePhase } from "../../types/mineSweeper";

type Props = {
  mineCounter: number;
  face: keyof typeof Face;
  phase: keyof typeof GamePhase;
  resetGame: () => void;
};

const TableHead = ({
  mineCounter,
  face,
  phase,
  resetGame,
}: Props): JSX.Element => {
  const [time, setTime] = useState<number>(0);

  const onFaceClickHandler = () => {
    setTime(0);
    resetGame();
  };

  useEffect(() => {
    if (phase === "in_progress") {
      const timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [phase]);

  return (
    <div className="flex justify-between items-center text-4xl gap-10">
      <div>{mineCounter.toString().padStart(3, "0")}</div>
      <button
        className={phase === "won" ? "animate-spin" : ""}
        onClick={onFaceClickHandler}
      >
        {Face[face]}
      </button>
      <div className={phase === "won" ? "animate-ping" : ""}>{time.toString().padStart(3, "0")}</div>
    </div>
  );
};

export default TableHead;
