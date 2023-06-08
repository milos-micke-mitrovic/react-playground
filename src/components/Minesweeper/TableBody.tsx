import React, { Dispatch, SetStateAction } from "react";

import Square from "./Square";
import { Cell, Face, GamePhase } from "../../types/mineSweeper";

type Props = {
  setFace: (face: keyof typeof Face) => void;
  setPhase: (phase: keyof typeof GamePhase) => void;
  setMineCounter: Dispatch<SetStateAction<number>>;
  setCells: Dispatch<SetStateAction<Cell[][]>>;
  phase: keyof typeof GamePhase;
  mines: number;
  mineCounter: number;
  cells: Cell[][];
  columns: number;
  rows: number;
};

const TableBody = ({
  setFace,
  setPhase,
  setMineCounter,
  setCells,
  phase,
  mines,
  mineCounter,
  cells,
  columns,
  rows,
}: Props): JSX.Element => {
  const renderCells = (): React.ReactNode => {
    return cells.map((row, rowIndex) =>
      row.map((cell, colIndex) => (
        <Square
          key={colIndex}
          cell={cell}
          cells={cells}
          columns={columns}
          rows={rows}
          phase={phase}
          mines={mines}
          mineCounter={mineCounter}
          rowIndex={rowIndex}
          colIndex={colIndex}
          setFace={setFace}
          setCells={setCells}
          setPhase={setPhase}
          setMineCounter={setMineCounter}
        />
      ))
    );
  };
  const styles = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
  };

  return (
    <div className="grid" style={styles}>
      {renderCells()}
    </div>
  );
};

export default TableBody;
