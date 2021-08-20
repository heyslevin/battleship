import React from "react";

import { Box, HStack, Wrap } from "@chakra-ui/react";

import Unit from "./Unit";

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
}) => {
  if (!startGame) {
    return null;
  }

  let currentEnemy; //Enemy Object
  let enemyBoard; //Enemy Board
  let setEnemyBoard; //useState to setBoard
  let enemyName; //String

  if (turn === "playerHuman") {
    currentEnemy = players.playerAi;
    enemyName = "playerAi";
    enemyBoard = computerBoard;
    setEnemyBoard = setComputerBoard;
  } else if (turn === "playerAi") {
    currentEnemy = players.playerHuman;
    enemyName = "playerHuman";
    enemyBoard = humanBoard;
    setEnemyBoard = setHumanBoard;
  } else {
    alert("error, turn is" + turn);
  }

  const launchAttack = function shipsBeginAttacking(unitIndex) {
    enemyBoard.receiveAttack(
      enemyBoard.units[unitIndex]["coordinates"],
      currentEnemy.myShips
    );

    setEnemyBoard((prevState) => ({
      ...prevState,
      units: enemyBoard.units,
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
          handleUnitClick={handleUnitClick}
          isHit={unit.isHit}
        />
      );
    });
  };

  let grid = setBoard(humanBoard);
  let blankGrid = setBoard(computerBoard);

  //Ai Play

  if (turn === "playerAi") {
    // let unitHitBefore = false;
    // let unit = "";
    // while (!unitHitBefore) {
    //   unitHitBefore = true;
    //   let attackCoordinates = players.playerAi.aiPlay();
    //   unit = enemyBoard.filterUnit(attackCoordinates)[0];
    //   if (unit.isHit) {
    //     unitHitBefore = false;
    //   }
    // }
    setTurn("playerHuman");
    let unit = enemyBoard.filterUnit(players.playerAi.aiPlay())[0];
    setTimeout(launchAttack, 2000, unit.name);
  }

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
