import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import RadioBox from "./RadioBox";
import Counter from "./Counter";
import { GameOptionsType } from "../../types";
import {
  CATEGORIES,
  INITIAL_CARDS_COUNT,
  PACE,
} from "../../constants/memoryGame";

type Prop = {
  startGame: ({ category, pace, cardsCount }: GameOptionsType) => void;
};

const Settings = ({ startGame }: Prop): JSX.Element => {
  const { t } = useTranslation();
  const [category, setCategory] = useState<string>(CATEGORIES[0]);
  const [pace, setPace] = useState<string>(PACE[0]);
  const [cardsCount, setCardsCount] = useState<number>(INITIAL_CARDS_COUNT);

  const onStartGameClick = () => {
    startGame({ category, pace, cardsCount });
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="text-2xl">{t("settings")}</h2>

      <h3 className="mt-4 font-semibold text-dark dark:text-green">
        {t("category")}:
      </h3>

      <div className="items-center border-4 rounded-xl border-green  text-sm font-medium sm:flex">
        {CATEGORIES.map((item) => (
          <RadioBox
            key={item}
            selectedItem={category}
            name={item}
            onChange={(e) => setCategory(e.target.value)}
          />
        ))}
      </div>

      <h3 className="mt-4 font-semibold text-dark dark:text-green">
        {t("amount-of-cards")}:
      </h3>

      <Counter cardsCount={cardsCount} onClick={setCardsCount} />

      <h3 className="mt-4 font-semibold text-dark dark:text-green">
        {t("pace")}:
      </h3>

      <div className="items-center border-4 rounded-xl border-green  text-sm font-medium sm:flex">
        {PACE.map((item) => (
          <RadioBox
            key={item}
            name={item}
            selectedItem={pace}
            onChange={(e) => setPace(e.target.value)}
          />
        ))}
      </div>

      <button className="mt-4" onClick={onStartGameClick}>
        {t("start")}
      </button>
    </div>
  );
};

export default Settings;
