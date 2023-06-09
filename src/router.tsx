import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Paws from "./pages/Paws";
import BreakingBad from "./pages/BreakingBad";
import Weather from "./pages/Weather";
import MemoryGame from "./pages/MemoryGame";
import TicTacToe from "./pages/TicTacToe";
import Minesweeper from "./pages/Minesweeper";
import FlappyCat from "./pages/FlappyCat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/paws",
        element: <Paws />,
      },
      {
        path: "/breaking-bad",
        element: <BreakingBad />,
      },
      {
        path: "/weather",
        element: <Weather />,
      },
      {
        path: "/memory-game",
        element: <MemoryGame />,
      },
      {
        path: "/tic-tac-toe",
        element: <TicTacToe />,
      },
      {
        path: "/minesweeper",
        element: <Minesweeper />,
      },
      {
        path: "/flappy-cat",
        element: <FlappyCat />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
