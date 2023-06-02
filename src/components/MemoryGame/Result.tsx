import React from "react";

import { useTranslation } from "react-i18next";

type Porps = {
  restartGame: () => void;
};

const Result = ({ restartGame }: Porps) => {
  const { t } = useTranslation();
  const happyCat = <img className="h-8 w-8 inline animate-bounce" src="images/happy-cat.png" alt="Happy cat"></img>

  return (
    <>
      <p>{t("awesome")}!  {happyCat}</p>

      <button onClick={restartGame}>{t("finish-game")}</button>
    </>
  );
};

export default Result;
