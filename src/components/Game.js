import React from "react";
import { useState } from "react";

import { Heading } from "@chakra-ui/react";

import Scoreboard from "./Scoreboard";
import Board from "./Board";

import PlayerFactory from "../factories/playerFactory";

const Game = (props) => {
  const [turn, setTurn] = useState("player");
  const [players, setPlayers] = useState(() => {
    const player = PlayerFactory("human");
    const computer = PlayerFactory("computer");
    const shipLengths = [5, 4, 3, 2, 1];

    shipLengths.forEach((length) => player.addShip(length));
    shipLengths.forEach((length) => computer.addShip(length));

    return { player, computer };
  });

  return (
    <React.Fragment>
      <Heading align="center">Welcome to Battleship</Heading>
      <Scoreboard currentTurn={turn} />
      <Board />
    </React.Fragment>
  );
};

export default Game;
