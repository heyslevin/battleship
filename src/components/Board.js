import React, { useState } from "react";

import { Box, HStack, Wrap } from "@chakra-ui/react";

import Unit from "./Unit";
import { useEffect } from "react";

const Board = (props) => {
  const [unitsWithShip, setUnitsWithShip] = useState(["no units"]);
  const [filterUnitsWithShip, setFilterUnitsWithShip] = useState("no units");

  if (!props.startGame) {
    return null;
  }

  let filterUnits = props.game.units.filter((unit) => unit.hasShip);
  console.log(filterUnits);

  let onlyIndex = filterUnits.map((unit) => {
    return unit.name;
  });
  console.log(onlyIndex);

  // let grid = [...Array(100)].map((e, index) => (
  //   <Unit key={index} index={index} />
  // ));

  let gridUnits = props.game.units;

  let grid = gridUnits.map((unit, index) => {
    if (onlyIndex.includes(unit.name)) {
      return <Unit key={index} index={index} hasShip={true} />;
    } else {
      return <Unit key={index} index={index} hasShip={false} />;
    }
  });

  return (
    <HStack justifyContent="center">
      <Box w="510px" py="5px" px="5px" borderRadius="3px" bg="blue.500">
        <Wrap justify="center" spacing="0">
          {grid}
        </Wrap>
      </Box>
      <Box w="510px" py="5px" px="5px" borderRadius="3px" bg="red.500">
        <Wrap justify="center" spacing="0">
          {grid}
        </Wrap>
      </Box>
    </HStack>
  );
};

export default Board;
