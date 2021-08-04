import { Heading } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import Scoreboard from "./Scoreboard";
import Board from "./Board";

const Game = (props) => {
  const [turn, setTurn] = useState("player");

  return (
    <React.Fragment>
      <Heading align="center">Welcome to Battleship</Heading>
      <Scoreboard currentTurn={turn} />
      <Board />
    </React.Fragment>
  );
};

export default Game;
