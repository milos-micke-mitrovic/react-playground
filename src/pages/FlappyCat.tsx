import React from "react";

import PageTitle from "../components/PageTitle";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import useFlappyCat from "../hooks/useFlappyCat";

const FlappyCat = (): JSX.Element => {
  const {
    t,
    time,
    topObstacleStyles,
    bottomObstacleStyles,
    sadCatImg,
    flappyCatImg,
    catStyles,
    resetGame,
    gameStatus,
    handleClick,
    GameStatus,
  } = useFlappyCat();

  return (
    <div className="flex flex-col items-center gap-4 w-full md:w-1/2 mx-auto">
      <PageTitle icon={faCat} title="flappy-cat" />

      <div className="flex flex-col gap-4 justify-center">
        <button onClick={resetGame}>{t("reset")}</button>
        <div
          className={`text-2xl ${
            gameStatus === GameStatus.finished ? "animate-ping" : ""
          }`}
        >
          {t("time")} : {time}
        </div>
      </div>

      <div
        className="border border-green w-full h-48 md:h-96 relative overflow-hidden"
        onClick={handleClick}
      >
        <div className="absolute no-select" style={catStyles}>
          {gameStatus === GameStatus.finished ? sadCatImg : flappyCatImg}
        </div>
        <div
          className="bg-green absolute w-3 md:w-6 top-0"
          style={topObstacleStyles}
        ></div>
        <div
          className="bg-green absolute w-3 md:w-6 bottom-0"
          style={bottomObstacleStyles}
        ></div>
      </div>
    </div>
  );
};

export default FlappyCat;
