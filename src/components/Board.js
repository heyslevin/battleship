import React, { useState } from "react";

import { Box, HStack, Wrap } from "@chakra-ui/react";

import Unit from "./Unit";
import { useEffect } from "react";

const Board = ({ startGame, humanBoard, computerBoard, turn, players }) => {
  const [unitsWithShip, setUnitsWithShip] = useState(["no units"]);
  const [filterUnitsWithShip, setFilterUnitsWithShip] = useState("no units");

  if (!startGame) {
    return null;
  }

  const handleUnitClick = function unitHasBeenClicked(unitIndex) {
    let enemyBoard;
    let currentPlayer;
    if (turn === "playerHuman") {
      currentPlayer = players.playerHuman;
      enemyBoard = computerBoard;
    } else if (turn === "playerAi") {
      currentPlayer = players.playerAi;
      enemyBoard = humanBoard;
    } else {
      alert("error, turn is" + turn);
    }
    enemyBoard.receiveAttack(
      enemyBoard.units[unitIndex],
      currentPlayer.myShips
    );
  };

  const setBoard = (playerBoard) => {
    let filterUnits = playerBoard.units.filter((unit) => unit.hasShip);

    let onlyIndex = filterUnits.map((unit) => {
      return unit.name;
    });

    let gridUnits = playerBoard.units;

    return gridUnits.map((unit, index) => {
      if (onlyIndex.includes(unit.name)) {
        return (
          <Unit
            key={index}
            index={index}
            hasShip={true}
            ai={playerBoard.ai}
            handleUnitClick={handleUnitClick}
          />
        );
      } else {
        return (
          <Unit
            key={index}
            index={index}
            hasShip={false}
            ai={playerBoard.ai}
            handleUnitClick={handleUnitClick}
          />
        );
      }
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
