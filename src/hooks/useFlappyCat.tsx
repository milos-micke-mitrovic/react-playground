import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CAT_STARTING_POSITION, GRAVITY, JUMP_HEIGHT, OBSTACLE_GAP, OBSTACLE_STARTING_POSITION } from "../constants/flappyCat";
import { randomNumber } from "../utils/others";

const sadCatImg = (
  <img
    className="h-6 w-6 md:h-12 md:w-12 inline"
    src="images/sad-cat.png"
    alt="Sad cat"
  ></img>
);
const flappyCatImg = (
  <img
    className="h-6 w-6 md:h-12 md:w-12 inline"
    src="images/flappy-cat.png"
    alt="Flappy cat"
  ></img>
);

enum GameStatus {
  "ready",
  "in-progress",
  "finished",
}

const useFlappyCat = () => {
  const [catPosition, setCatPosition] = useState(CAT_STARTING_POSITION);
  const [gameStatus, setGameStatus] = useState(GameStatus.ready);
  const [time, setTime] = useState(0);
  const [topObstacleHeight, setTopObstacleHeight] = useState(
    +randomNumber(100 - OBSTACLE_GAP, 0)
  );
  const [bottomObstacleHeight, setBottomObstacleHeight] = useState(
    100 - OBSTACLE_GAP - topObstacleHeight
  );
  const [obstacleLeftPostion, setObstacleLeftPostion] = useState(
    OBSTACLE_STARTING_POSITION
  );

  const { t } = useTranslation();

  const catStyles = {
    top: `${catPosition}%`,
  };

  const topObstacleStyles = {
    height: `${topObstacleHeight}%`,
    left: `${obstacleLeftPostion}%`,
  };

  const bottomObstacleStyles = {
    height: `${bottomObstacleHeight}%`,
    left: `${obstacleLeftPostion}%`,
  };

  const handleClick = () => {
    if (gameStatus === GameStatus["finished"]) return;

    if (gameStatus === GameStatus["ready"]) {
      setGameStatus(GameStatus["in-progress"]);
    }

    setCatPosition((prev) => {
      return prev - JUMP_HEIGHT < 0 ? 0 : prev - JUMP_HEIGHT;
    });
  };

  const resetObstacles = () => {
    setObstacleLeftPostion(OBSTACLE_STARTING_POSITION);
    const topObstacleHeight = +randomNumber(100 - OBSTACLE_GAP, 1);
    setTopObstacleHeight(topObstacleHeight);
    setBottomObstacleHeight(100 - OBSTACLE_GAP - topObstacleHeight);

    console.log(topObstacleHeight, 100 - OBSTACLE_GAP - topObstacleHeight);
    
  };

  const resetGame = () => {
    setGameStatus(GameStatus.ready);
    setTime(0);
    setCatPosition(CAT_STARTING_POSITION);
    resetObstacles();
  };

  // Time effect
  useEffect(() => {
    let timer: number;

    if (gameStatus === GameStatus["in-progress"]) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [gameStatus]);

  // Obstacle position effect
  useEffect(() => {
    if (gameStatus === GameStatus["in-progress"]) {
      let timer: number;

      if (obstacleLeftPostion > -5) {
        timer = setInterval(() => {
          setObstacleLeftPostion((prev) => prev - 2);
        }, 50);
      } else {
        resetObstacles();
      }

      return () => {
        clearInterval(timer);
      };
    }
  });

  // Cat position effect
  useEffect(() => {
    if (gameStatus === GameStatus["in-progress"]) {
      let timer: number;

      if (catPosition < 88) {
        timer = setInterval(() => {
          setCatPosition((prev) => prev + GRAVITY);
        }, 50);
      } else {
        setGameStatus(GameStatus.finished);
      }

      return () => {
        clearInterval(timer);
      };
    }
  });

  // Check collisions effect
  useEffect(() => {
    const isCollideWithTopObstacle = catPosition < topObstacleHeight;
    const isCollideWithBottomObstacle =
      catPosition >= 100 - bottomObstacleHeight - 12;

    if (
      (isCollideWithTopObstacle || isCollideWithBottomObstacle) &&
      obstacleLeftPostion <= 8
    ) {
      setGameStatus(GameStatus.finished);
    }
  });

  return {
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
  };
};

export default useFlappyCat;
