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
  const [startGame, setStartGame] = useState(false);
  const [shipCoordinates, setShipCoordinates] = useState([]);

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
  }, [startGame]);

  const placeShips = function placePlayerShipsOnBoard(player) {
    const ships = player.myShips;
    ships.forEach((ship) => {
      let isEmptyCoordinates = false;
      let coordinates = [];

      while (!isEmptyCoordinates) {
        isEmptyCoordinates = true;
        debugger;
        coordinates = player.playerPickShipCoordinates(ship);

        coordinates.forEach((coordinate) => {
          let currentUnit = game.filterUnit(coordinate);
          if (currentUnit.hasShip) {
            isEmptyCoordinates = false;
          }
        });
      }

      let newUnits = game.placeShip(coordinates, ship);

      setShipCoordinates((prevState) => [...prevState, coordinates]);

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
        startGame={startGame}
        setStartGame={setStartGame}
      />
      <Board game={game} startGame={startGame} />
    </React.Fragment>
  );
};

export default Game;
