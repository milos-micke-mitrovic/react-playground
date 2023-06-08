import React, { useEffect, Dispatch, SetStateAction } from "react";

import {
  Cell,
  CellState,
  CellValue,
  CellValueColors,
  Face,
  GamePhase,
  SquareImages,
} from "../../types/mineSweeper";
import { openMultipleCells } from "../../utils/mineSweeper";

type Props = {
  cell: Cell;
  cells: Cell[][];
  phase: keyof typeof GamePhase;
  mines: number;
  mineCounter: number;
  rows: number;
  columns: number;
  rowIndex: number;
  colIndex: number;
  setCells: Dispatch<SetStateAction<Cell[][]>>;
  setFace: (face: keyof typeof Face) => void;
  setPhase: (phase: keyof typeof GamePhase) => void;
  setMineCounter: Dispatch<SetStateAction<number>>;
};

const Square = ({
  cell,
  cells,
  phase,
  mines,
  mineCounter,
  rows,
  columns,
  rowIndex,
  colIndex,
  setCells,
  setFace,
  setPhase,
  setMineCounter,
}: Props): JSX.Element => {
  const showAllBombs = (): Cell[][] => {
    const currentCells = cells.slice();

    return currentCells.map((row) =>
      row.map((cell) => {
        if (cell.value === CellValue.bomb) {
          return {
            ...cell,
            state: CellState.visible,
          };
        }

        return cell;
      })
    );
  };

  const onMouseUpHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (phase === "lost" || phase === "won" || cell.state === CellState.flagged)
      return;

    const isLeftClick = e.nativeEvent.button === 0;
    let currentCells = cells.slice();
    const currentCell = cells[rowIndex][colIndex];

    if (isLeftClick) {
      if (cell.value === CellValue.bomb) {
        setFace("lost");
        setPhase("lost");
        setCells(showAllBombs());
      } else {
        setPhase("in_progress");
        setFace("smile");
        if (currentCell.state === CellState.visible) {
          return;
        } else {
          if (currentCell.value === CellValue.none) {
            openMultipleCells(currentCells, rowIndex, colIndex, columns, rows);
          }
          currentCells[rowIndex][colIndex].state = CellState.visible;

          // Check to see if you have won
          let safeOpenCellsExists = false;

          for (let row = 0; row < rows; row++) {
            for (let col = 0; col < columns; col++) {
              const currentCell = currentCells[row][col];

              if (
                currentCell.value !== CellValue.bomb &&
                currentCell.state === CellState.open
              ) {
                safeOpenCellsExists = true;
                break;
              }
            }
          }

          if (!safeOpenCellsExists) {
            currentCells = currentCells.map((row) =>
              row.map((cell) => {
                if (cell.value === CellValue.bomb) {
                  return {
                    ...cell,
                    state: CellState.flagged,
                  };
                }
                return cell;
              })
            );

            setPhase("won");
          }

          setCells(currentCells);
        }
      }
    }
  };

  const onMouseDownHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (phase === "lost" || phase === "won") return;

    const isLeftClick = e.nativeEvent.button === 0;
    const currentCells = cells.slice();
    const currentCell = cells[rowIndex][colIndex];

    if (isLeftClick && cell.state !== CellState.flagged) {
      setFace("oh");
    } else {
      if (currentCell.state === CellState.visible) {
        return;
      } else if (currentCell.state === CellState.flagged) {
        if (mineCounter === mines) return;

        currentCells[rowIndex][colIndex].state = CellState.open;
        setMineCounter((prev: number) => prev + 1);
        setCells(currentCells);
      } else if (currentCell.state === CellState.open) {
        if (mineCounter === 0) return;
        currentCells[rowIndex][colIndex].state = CellState.flagged;
        setMineCounter((prev: number) => prev - 1);
        setCells(currentCells);
      }
    }
  };

  const renderContent = (): React.ReactNode => {
    if (cell.state === CellState.visible) {
      if (cell.value === CellValue.bomb) {
        return SquareImages.explode;
      } else if (cell.value === CellValue.none) {
        return null;
      }

      return cell.value;
    } else if (cell.state === CellState.flagged) {
      return SquareImages.flagged;
    }

    return null;
  };

  const additionalClasses = () =>
    cell.state === CellState.visible
      ? "bg-dark dark:bg-light cursor-default font-black"
      : "cursor-pointer";

  const styles = {
    color: CellValueColors[cell.value],
  };

  // Prevent right click
  useEffect(() => {
    const handleContextmenu = (e: Event) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextmenu);

    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);

  return (
    <div
      onMouseUp={(e) => onMouseUpHandler(e)}
      onMouseDown={(e) => onMouseDownHandler(e)}
      className={`w-8 h-8 border border-green hover:border-light-green flex justify-center items-center ${additionalClasses()}`}
      style={styles}
    >
      {renderContent()}
    </div>
  );
};

export default Square;
