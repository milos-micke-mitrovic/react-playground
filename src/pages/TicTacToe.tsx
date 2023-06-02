import React from "react";

import Board from "../components/TicTacToe/Board";
import PageTitle from "../components/PageTitle";
import { faX } from "@fortawesome/free-solid-svg-icons";

const TicTacToe = (): JSX.Element => {
  return (
    <>
      <PageTitle title="tic-tac-toe" icon={faX} />
      <Board />
    </>
  );
};

export default TicTacToe;
