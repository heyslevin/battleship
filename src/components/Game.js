import React from "react";
import { useState, useEffect } from "react";

import { Heading } from "@chakra-ui/react";

import Scoreboard from "./Scoreboard";
import Board from "./Board";

import gameSetup from "../utilities/gameSetup";

const Game = (props) => {
  const [turn, setTurn] = useState(null);
  const [humanBoard, setHumanBoard] = useState("noHumanBoard");
  const [computerBoard, setComputerBoard] = useState("noComputerBoard");
  const [players, setPlayers] = useState("noPlayers");
  const [startGame, setStartGame] = useState(false);
  const [alertShipSunk, setAlertShipSunk] = useState(false);
  const [shipCoordinates, setShipCoordinates] = useState([]);

  // Initializes Game after first render
  useEffect(() => {
    let setUpGame = gameSetup().start();
    const { playerHuman, playerAi, humanBoard, computerBoard } = setUpGame;

    setPlayers({ playerHuman, playerAi });
    setHumanBoard(humanBoard);
    setComputerBoard(computerBoard);
  }, [startGame]);

  const restartGame = () => {
    setPlayers("no players");
    setComputerBoard("noComputerBoard");
    setHumanBoard("noHumanBoard");
    setStartGame(false);
    setTurn(null);
  };

  const placeShips = function placePlayerShipsOnBoard(player) {
    const ships = player.myShips;
    let board = humanBoard;
    let playerAi = player.ai;

    setTurn("playerHuman");

    if (player.ai) {
      board = computerBoard;
    }
    ships.forEach((ship) => {
      let isEmptyCoordinates = false;
      let coordinates = [];

      while (!isEmptyCoordinates) {
        isEmptyCoordinates = true;
        coordinates = player.playerPickShipCoordinates(ship);

        coordinates.forEach((coordinate) => {
          let currentUnit = board.filterUnit(coordinate)[0];
          if (currentUnit.hasShip) {
            isEmptyCoordinates = false;
          }
        });
      }

      let newUnits = board.placeShip(coordinates, ship);

      //Optional
      setShipCoordinates((prevState) => [...prevState, coordinates]);

      if (!player.ai) {
        setHumanBoard((prevState) => ({
          ...prevState,
          units: newUnits,
        }));
      } else if (player.ai) {
        setComputerBoard((prevState) => ({
          ...prevState,
          units: newUnits,
        }));
      } else {
        alert("error with updating units");
      }
    });
  };

  return (
    <React.Fragment>
      <Heading align="center">Welcome to Battleship</Heading>
      <Scoreboard
        players={players}
        placeShips={placeShips}
        startGame={startGame}
        setStartGame={setStartGame}
        turn={turn}
        humanBoard={humanBoard}
        computerBoard={computerBoard}
        alertShipSunk={alertShipSunk}
        setAlertShipSunk={setAlertShipSunk}
        restartGame={restartGame}
      />
      <Board
        startGame={startGame}
        humanBoard={humanBoard}
        computerBoard={computerBoard}
        turn={turn}
        setTurn={setTurn}
        players={players}
        setPlayers={setPlayers}
        setHumanBoard={setHumanBoard}
        setComputerBoard={setComputerBoard}
        setAlertShipSunk={setAlertShipSunk}
      />
    </React.Fragment>
  );
};

export default Game;
