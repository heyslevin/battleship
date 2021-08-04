import React from "react";

import { Box, HStack, Wrap } from "@chakra-ui/react";

import Unit from "./Unit";

//note

const Board = (props) => {
  let grid = [...Array(100)].map((e, index) => <Unit index={index} />);

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
