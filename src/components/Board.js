import React from "react";

import { Box, HStack, Wrap } from "@chakra-ui/react";

import Unit from "./Unit";

const Board = (props) => {
  let grid = [...Array(100)].map((e, index) => <Unit index={index} />);

  return (
    <HStack justifyContent="center">
      <Box h="300px" w="300px" bg="gray.500">
        <Wrap spacing="0">{grid}</Wrap>
      </Box>
      <Box h="300px" w="300px" bg="gray.500">
        Here be thy board
      </Box>
    </HStack>
  );
};

export default Board;
