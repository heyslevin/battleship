import React, { useState } from "react";

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
  players,
}) => {
  const [unitsWithShip, setUnitsWithShip] = useState(["no units"]);
  const [filterUnitsWithShip, setFilterUnitsWithShip] = useState("no units");

  if (!startGame) {
    return null;
  }

  const handleUnitClick = function unitHasBeenClicked(unitIndex) {
    let enemyBoard;
    let currentPlayer;
    let setBoard;
    if (turn === "playerHuman") {
      currentPlayer = players.playerHuman;
      enemyBoard = computerBoard;
      setBoard = setComputerBoard;
    } else if (turn === "playerAi") {
      currentPlayer = players.playerAi;
      enemyBoard = humanBoard;
      setBoard = setHumanBoard;
    } else {
      alert("error, turn is" + turn);
    }

    enemyBoard.receiveAttack(
      enemyBoard.units[unitIndex]["coordinates"],
      currentPlayer.myShips
    );

    setBoard((prevState) => ({
      ...prevState,
      units: enemyBoard.units,
    }));
  };

  const setBoard = (playerBoard) => {
    let gridUnits = playerBoard.units;
    console.log(gridUnits);

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
