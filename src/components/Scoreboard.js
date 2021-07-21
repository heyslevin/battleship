import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";

const Scoreboard = (props) => {
  return (
    <Center>
      <Box maxW="300px" bg="gray.200" p="5" my="30" borderRadius="5">
        <Heading align="center" size="s">
          Welcome to the game! Let's play.
        </Heading>
      </Box>
    </Center>
  );
};

export default Scoreboard;
