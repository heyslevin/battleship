import React from "react";
import { useState, useEffect } from "react";

import { Heading } from "@chakra-ui/react";

import Scoreboard from "./Scoreboard";
import Board from "./Board";

import BoardFactory from "../factories/boardFactory";

const Game = (props) => {
  const [turn, setTurn] = useState("playerHuman");
  const [game, setGame] = useState("noGameStarted");
  const [players, setPlayers] = useState("noPlayers");

  // Initializes Game after first render
  useEffect(() => {
    const game = BoardFactory();
    const players = game.addPlayers();
    const shipLengths = [5, 4, 3, 2, 1];

    const { playerHuman, playerAi } = players;

    shipLengths.forEach((length) => playerHuman.addShip(length));
    shipLengths.forEach((length) => playerAi.addShip(length));

    setPlayers({ playerHuman, playerAi });
    setGame(game);
  }, []);

  const placeShips = function placePlayerShipsOnBoard(player) {
    const ships = player.myShips;
    ships.forEach((ship) => {
      let isEmptyCoordinates = false;
      let coordinates = [];

      while (!isEmptyCoordinates) {
        isEmptyCoordinates = true;
        coordinates = player.playerPickShipCoordinates(ship);

        coordinates.forEach((coordinate) => {
          if (game.units[([coordinate[0]], [coordinate[1]])].hasShip) {
            isEmptyCoordinates = false;
          }
        });
      }

      let newUnits = game.placeShip(coordinates, ship);

      setGame((prevState) => ({
        ...prevState,
        units: newUnits,
      }));
    });
    alert("ships have been placed");
  };
  return (
    <React.Fragment>
      <Heading align="center">Welcome to Battleship</Heading>
      <Scoreboard
        currentTurn={turn}
        game={game}
        players={players}
        placeShips={placeShips}
      />
      <Board game={game} />
    </React.Fragment>
  );
};

export default Game;
