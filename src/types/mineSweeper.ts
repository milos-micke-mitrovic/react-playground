export type MineSweeperSettings = {
  columns: number;
  rows: number;
  mines: number;
};

export type Cell = { value: CellValue; state: CellState; red?: boolean };

export enum Face {
  smile = "😸",
  oh = "🙀",
  lost = "😿",
  won = "🐱‍👤",
}

export enum SquareImages {
  explode = "💥",
  flagged = "⛳",
}

export enum GamePhase {
  won = "won",
  lost = "lost",
  ready = "ready",
  in_progress = "in_progress",
  not_ready = "not_ready",
}

export enum CellValue {
  none,
  one,
  two,
  three,
  four,
  five,
  six,
  sevent,
  eight,
  bomb,
}

export enum CellValueColors {
  "",
  "#6366f1",
  "#22c55e",
  "#ef4444",
  "#eab308",
  "#f97316",
  "#84cc16",
  "#3b82f6",
  "#a855f7",
}

export enum CellState {
  open,
  visible,
  flagged,
}
