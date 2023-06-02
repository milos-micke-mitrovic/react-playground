import React from "react";

type Player = "X" | "O" | "BOTH" | null;

type Props = {
  value: Player;
  winner: Player;
  onClick: () => void;
};

const Square = ({ value, onClick, winner }: Props): JSX.Element => {
  if (!value) {
    return (
      <button
        onClick={onClick}
        className="w-24 h-24 font-bold text-4xl disabled:cursor-not-allowed"
        disabled={Boolean(winner)}
      ></button>
    );
  }

  return (
    <button className="w-24 h-24 font-bold text-4xl  disabled:cursor-not-allowed" disabled={Boolean(winner)}>
      {value}
    </button>
  );
};

export default Square;
