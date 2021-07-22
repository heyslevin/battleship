import Game from "./components/Game";
import Scoreboard from "./components/Scoreboard";

import { useEffect } from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import Board from "./components/Board";

function App() {
  // Sets the title
  useEffect(() => {
    document.title = "🛳 Battleship";
  }, []);

  return (
    <ChakraProvider>
      <Container maxW="100%" height="100vh" py="5" bg="gray.100">
        <Game>
          <Scoreboard />
          <Board />
        </Game>
      </Container>
    </ChakraProvider>
  );
}

export default App;
