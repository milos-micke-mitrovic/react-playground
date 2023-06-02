import React, { useEffect, useState } from "react";

import Square from "./Square";
import { WINNING_LINES } from "../../constants/ticTacToe";
import { useTranslation } from "react-i18next";

type Player = "X" | "O" | "BOTH" | null;

const calculateWinner = (squares: Player[]) => {
  for (let index = 0; index < WINNING_LINES.length; index++) {
    const [a, b, c] = WINNING_LINES[index];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      return squares[a];
  }

  return null;
};

const Board = (): JSX.Element => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState<Player>(null);
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random()) === 1 ? "X" : "O"
  );

  const { t } = useTranslation();

  const setSquareValue = (index: number) => {
    const newData = squares.map((val, i) => {
      if (i === index) {
        return currentPlayer;
      }
      return val;
    });

    setSquares(newData);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const reset = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer(Math.round(Math.random()) === 1 ? "X" : "O");
  };

  const happyCat = (
    <img
      className="h-8 w-8 inline animate-bounce"
      src="images/happy-cat.png"
      alt="Happy cat"
    ></img>
  );

  useEffect(() => {
    const winner = calculateWinner(squares);

    if (winner) setWinner(winner);

    if (!winner && !squares.filter((square) => !square).length)
      setWinner("BOTH");
  }),
    [squares];

  return (
    <div className="flex flex-col items-center gap-3">
      {!winner && (
        <p>
          {t("hey")} {currentPlayer}. {t("its-your-turn")}.
        </p>
      )}
      {winner && winner !== "BOTH" && (
        <p>
          {t("congratualtions")} {winner}! {happyCat}
        </p>
      )}
      {winner && winner === "BOTH" && (
        <p>
          {t("congratualtions")}. {t("you-are-both-winners")}! {happyCat}
        </p>
      )}

      <div className="grid grid-cols-3 grid-rows-3 relative">
        {Array(9)
          .fill(null)
          .map((_, i) => (
            <Square
              key={i}
              onClick={() => setSquareValue(i)}
              value={squares[i]}
              winner={winner}
            />
          ))}
      </div>

      <button onClick={reset}>{t('reset')}</button>
    </div>
  );
};

export default Board;
