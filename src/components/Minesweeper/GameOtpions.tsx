import React, { useState } from "react";

import { useTranslation } from "react-i18next";
import { SETTINGS } from "../../constants/mineSweeper";
import { MineSweeperSettings } from "../../types/mineSweeper";

type Props = {
  onNewGame: ({ columns, rows, mines }: MineSweeperSettings) => void;
};

const GameOtpions = ({ onNewGame }: Props): JSX.Element => {
  const [rows, setRows] = useState(9);
  const [columns, setColumns] = useState(9);
  const [mines, setMines] = useState(10);

  const [customRows, setCustomRows] = useState(20);
  const [customColumns, setCustomColumns] = useState(30);
  const [customMines, setCustomMines] = useState(145);

  const { t } = useTranslation();

  const onClickHandler = () => {
    if ([columns, rows, mines].includes(0)) return;

    onNewGame({ columns, rows, mines });
  };

  const onChangeLevelHandler = (index: number) => {
    if (index === 4) {
      setRows(customRows);
      setColumns(customColumns);
      setMines(customMines);
    } else {
      setRows(+SETTINGS[index].rows);
      setColumns(+SETTINGS[index].columns);
      setMines(+SETTINGS[index].mines);
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full md:w-1/3">
      {SETTINGS.map(({ level, rows, columns, mines, radio }, i) => (
        <div key={i} className="flex items-center gap-3">
          {radio ? (
            <div className="flex items-center gap-3 basis-1/2">
              <input
                onChange={() => onChangeLevelHandler(i)}
                defaultChecked={i === 1}
                type="radio"
                value=""
                name="settings"
                className="w-4 h-4"
              />

              <label htmlFor="settings-1" className="text-sm font-medium">
                {t(level)}
              </label>
            </div>
          ) : (
            <div className="flex items-center gap-3 basis-1/2">
              <p>{t(level)}</p>
            </div>
          )}

          {!mines ? (
            <div className="flex gap-3 basis-1/2">
              <input
                className="basis-1/3 w-full"
                type="number"
                value={customRows}
                onChange={(e) => setCustomRows(+e.target.value)}
              />

              <input
                className="basis-1/3 w-full"
                type="number"
                value={customColumns}
                onChange={(e) => setCustomColumns(+e.target.value)}
              />

              <input
                className="basis-1/3 w-full"
                type="number"
                value={customMines}
                onChange={(e) => setCustomMines(+e.target.value)}
              />
            </div>
          ) : (
            <div className="flex gap-3 basis-1/2">
              <p className="basis-1/3 text-center">{t(rows)}</p>
              <p className="basis-1/3 text-center">{t(columns)}</p>
              <p className="basis-1/3 text-center">{t(mines)}</p>
            </div>
          )}
        </div>
      ))}

      <button
        className="f-full md:w-28 m-auto mt-6"
        onClick={() => {
          onClickHandler();
        }}
      >
        {t("start")}
      </button>
    </div>
  );
};

export default GameOtpions;
