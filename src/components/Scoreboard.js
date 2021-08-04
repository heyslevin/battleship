import { Box, Center, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Scoreboard = ({ currentTurn }) => {
  let turnColor = "";
  let turn = "";

  if (currentTurn === "player") {
    turnColor = "green";
    turn = "your";
  } else if (currentTurn === "computer") {
    turnColor = "gray";
    turn = "the computer's";
  }

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
        <Text align="center" color={turnColor}>
          Its {turn} turn.
        </Text>
      </Box>
    </Center>
  );
};

export default Scoreboard;
