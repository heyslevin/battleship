import React from "react";

import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";

const Scoreboard = ({
  currentTurn,
  placeShips,
  players,
  startGame,
  setStartGame,
}) => {
  let turnColor = "";
  let turn = "";
  let buttonText = "";

  if (!startGame) {
    buttonText = "Start Game";
  } else {
    buttonText = "Place Ships";
  }

  let handleClick = () => {
    if (!startGame) {
      setStartGame(true);
    } else {
      placeShips(players["playerHuman"]);
      placeShips(players["playerAi"]);
    }
  };

  if (currentTurn === "playerHuman") {
    turnColor = "green";
    turn = "your";
  } else if (currentTurn === "playerAi") {
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
        align="center"
      >
        <Heading size="s">Welcome to the game! Let's play.</Heading>
        <Text color={turnColor}>Its {turn} turn.</Text>
        <Button mt={4} colorScheme="teal" onClick={handleClick}>
          {buttonText}
        </Button>
      </Box>
    </Center>
  );
};

export default Scoreboard;
