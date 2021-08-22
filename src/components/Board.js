import React from "react";

import { Box, HStack, Wrap } from "@chakra-ui/react";

import Unit from "./Unit";
import { useEffect } from "react";

const Board = ({
  startGame,
  humanBoard,
  setHumanBoard,
  computerBoard,
  setComputerBoard,
  turn,
  setTurn,
  players,
  setPlayers,
  setAlertShipSunk,
}) => {
  useEffect(() => {
    if (turn === "playerAi") {
      let unitHitBefore = false;
      let unit = "";
      while (!unitHitBefore) {
        unitHitBefore = true;
        let attackCoordinates = players.playerAi.aiPlay();
        unit = enemyBoard.filterUnit(attackCoordinates)[0];
        if (unit.isHit) {
          unitHitBefore = false;
        }
      }

      //Timer to simulate computer thinking
      const timeOut = setTimeout(() => {
        launchAttack(unit.name);
        setTurn("playerHuman");
      }, 10);

      return () => clearTimeout(timeOut);
    }
  }, [turn]);

  if (!startGame) {
    return null;
  }

  let currentEnemy; //Enemy Object
  let enemyBoard; //Enemy Board
  let setEnemyBoard; //useState to setBoard
  let enemyName; //String
  let disabled = true;

  if (turn === "playerHuman") {
    currentEnemy = players.playerAi;
    enemyName = "playerAi";
    enemyBoard = computerBoard;
    setEnemyBoard = setComputerBoard;
    disabled = false;
  } else if (turn === "playerAi") {
    currentEnemy = players.playerHuman;
    enemyName = "playerHuman";
    enemyBoard = humanBoard;
    setEnemyBoard = setHumanBoard;
    disabled = true;
  }

  const launchAttack = function shipsBeginAttacking(unitIndex) {
    let attackedShip = enemyBoard.receiveAttack(
      enemyBoard.units[unitIndex]["coordinates"],
      currentEnemy.myShips
    );

    if (attackedShip.sunk) {
      setAlertShipSunk(true);
    }

    let gameOver = enemyBoard.gameOverCheck(currentEnemy.myShips);
    if (gameOver) {
      setTurn(null);
    }

    setEnemyBoard((prevState) => ({
      ...prevState,
      units: enemyBoard.units,
      gameOver: gameOver,
    }));

    setPlayers((prevState) => ({
      ...prevState,
      [enemyName]: currentEnemy,
    }));
  };

  const handleUnitClick = function unitHasBeenClicked(unitIndex) {
    setTurn("playerAi");
    launchAttack(unitIndex);
  };

  const setBoard = (playerBoard) => {
    let gridUnits = playerBoard.units;

    return gridUnits.map((unit, index) => {
      return (
        <Unit
          key={index}
          index={index}
          hasShip={unit.hasShip}
          ai={playerBoard.ai}
          disabled={disabled}
          handleUnitClick={disabled ? null : handleUnitClick}
          isHit={unit.isHit}
        />
      );
    });
  };

  let grid = setBoard(humanBoard);
  let blankGrid = setBoard(computerBoard);

  //Ai Play

  // if (turn === "playerAi") {
  //   // let unitHitBefore = false;
  //   // let unit = "";
  //   // while (!unitHitBefore) {
  //   //   unitHitBefore = true;
  //   //   let attackCoordinates = players.playerAi.aiPlay();
  //   //   unit = enemyBoard.filterUnit(attackCoordinates)[0];
  //   //   if (unit.isHit) {
  //   //     unitHitBefore = false;
  //   //   }
  //   // }
  //   setTurn("playerHuman");
  //   let unit = enemyBoard.filterUnit(players.playerAi.aiPlay())[0];
  //   setTimeout(launchAttack, 2000, unit.name);
  // }

  return (
    <HStack justifyContent="center">
      <Box w="510px" py="5px" px="5px" borderRadius="3px" bg="blue.500">
        <Wrap justify="center" spacing="0">
          {grid}
        </Wrap>
      </Box>
      <Box w="510px" py="5px" px="5px" borderRadius="3px" bg="red.500">
        <Wrap justify="center" spacing="0">
          {blankGrid}
        </Wrap>
      </Box>
    </HStack>
  );
};

export default Board;
