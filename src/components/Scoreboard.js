import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";

const Scoreboard = (props) => {
  return (
    <Center>
      <Box
        maxW="350px"
        bg="white"
        p="5"
        my="30"
        border="1px solid"
        borderColor="gray.500"
        borderRadius="3px"
      >
        <Heading align="center" size="s">
          Welcome to the game! Let's play.
        </Heading>
      </Box>
    </Center>
  );
};

export default Scoreboard;
