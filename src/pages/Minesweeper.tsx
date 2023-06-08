import React, { useState } from "react";

import { faExplosion } from "@fortawesome/free-solid-svg-icons";
import PageTitle from "../components/PageTitle";
import TableHead from "../components/Minesweeper/TableHead";
import TableBody from "../components/Minesweeper/TableBody";
import GameOtpions from "../components/Minesweeper/GameOtpions";
import { Face, GamePhase, MineSweeperSettings } from "../types/mineSweeper";
import { generateCells } from "../utils/mineSweeper";

const Minesweeper = (): JSX.Element => {
  const [face, setFace] = useState<keyof typeof Face>("smile");
  const [phase, setPhase] = useState<keyof typeof GamePhase>("not_ready");
  const [{ columns, rows, mines }, setSettings] = useState<MineSweeperSettings>(
    {
      columns: 9,
      rows: 9,
      mines: 10,
    }
  );
  const [mineCounter, setMineCounter] = useState(mines);
  const [cells, setCells] = useState(generateCells({ columns, rows, mines }));

  const onNewGameHandler = (settingsFromGameOptions: MineSweeperSettings) => {
    setSettings(settingsFromGameOptions);
    setCells(generateCells(settingsFromGameOptions));
    setMineCounter(settingsFromGameOptions.mines);
    setPhase("ready");
  };

  const resetGame = () => {
    setFace("smile");
    setCells(generateCells({ columns, rows, mines }));
    setMineCounter(mines);
    setPhase("ready");
  };

  return (
    <div className="flex flex-col items-center gap-3 w-full md:w-2/3 mx-auto">
      <PageTitle icon={faExplosion} title="minesweeper" />

      {phase === "not_ready" ? (
        <GameOtpions onNewGame={onNewGameHandler} />
      ) : (
        <div className="flex flex-col gap-6">
          <TableHead
            mineCounter={mineCounter}
            face={face}
            phase={phase}
            resetGame={resetGame}
          />

          <TableBody
            setFace={setFace}
            setPhase={setPhase}
            setMineCounter={setMineCounter}
            setCells={setCells}
            phase={phase}
            mines={mines}
            mineCounter={mineCounter}
            cells={cells}
            columns={columns}
            rows={rows}
          />
        </div>
      )}
    </div>
  );
};

export default Minesweeper;
