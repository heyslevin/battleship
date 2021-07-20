import "./App.css";
import Board from "./components/Board";
import { useEffect } from "react";

function App() {
  // Sets the title
  useEffect(() => {
    document.title = "🛳 Battleship";
  }, []);

  return (
    <div className="container">
      <Board />
    </div>
  );
}

export default App;
