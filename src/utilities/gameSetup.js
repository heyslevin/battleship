import BoardFactory from "../factories/boardFactory";

const gameSetup = () => {
  const start = function createBoardAndPlayers() {
    const humanBoard = BoardFactory();
    const computerBoard = BoardFactory();

    const addHumanPlayer = humanBoard.addPlayers("human");
    const addComputerPlayer = computerBoard.addPlayers("computer");
    const shipLengths = [5, 4, 3, 2, 1];

    const { playerHuman } = addHumanPlayer;
    const { playerAi } = addComputerPlayer;

    shipLengths.forEach((length) => playerHuman.addShip(length));
    shipLengths.forEach((length) => playerAi.addShip(length));

    return { humanBoard, computerBoard, playerHuman, playerAi };
  };

  return { start };
};

export default gameSetup;
