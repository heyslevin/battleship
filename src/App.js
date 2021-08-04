import Game from "./components/Game";

import { useEffect } from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";

function App() {
  // Sets the title
  useEffect(() => {
    document.title = "🛳 Battleship";
  }, []);

  return (
    <ChakraProvider>
      <Container maxW="100%" height="100vh" py="5" bg="gray.100">
        <Game />
      </Container>
    </ChakraProvider>
  );
}

export default App;
