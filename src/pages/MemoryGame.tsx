import React, { useState } from "react";

import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { GameOptionsType } from "../types";
import PageTitle from "../components/PageTitle";
import Settings from "../components/MemoryGame/Settings";
import Board from "../components/MemoryGame/Board";

const MemoryGame = (): JSX.Element => {
  const [gameOptions, setGameOptions] = useState<GameOptionsType | null>(null);

  const startGame = (options: GameOptionsType) => {
    setGameOptions(options);
  };

  const restartGame = () => {
    setGameOptions(null);
  };

  return (
    <>
      <PageTitle title="memory-game" icon={faBrain} />

      {!gameOptions ? (
        <Settings startGame={startGame} />
      ) : (
        <Board gameOptions={gameOptions} restartGame={restartGame} />
      )}
    </>
  );
};

export default MemoryGame;
