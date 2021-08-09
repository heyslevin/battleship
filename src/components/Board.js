import React, { useState } from "react";

import { Box, HStack, Wrap } from "@chakra-ui/react";

import Unit from "./Unit";

//note

const Board = (props) => {
  let filterUnitsWithShip = "";

  if (props.game.units) {
    let filterUnitsWithShip = props.game.units.filter((unit) => {
      return unit.hasShip;
    });

    console.log(filterUnitsWithShip);
  }

  let grid = [...Array(100)].map((e, index) => (
    <Unit key={index} index={index} />
  ));

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
