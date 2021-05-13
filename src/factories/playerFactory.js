import shipFactory from "./shipFactory";

const Player = () => {
  const playedCoordinates = [];
  const myShips = [];

  const addShip = function createsAShipWithFactory(length, name) {
    const ship = shipFactory(length, name);
    myShips.push(ship);
  };

  const generateCoordinate = () => {
    return Math.floor(Math.random() * 10);
  };

  const playerPlaceShip = (ship, board) => {
    let allShipUnitCoordinates = [];
    // Generate coordinates, select orientation
    let x = generateCoordinate();
    let y = generateCoordinate();
    let length = ship.length;
    // Random orientation. 0 is vertical, 1 is horizontal
    // Generate allShipUnits based on orientation
    // Loop ship.length amount of times
    // Check if coordinates are legal. If false, console log and return
    const legalSpaceChecker = function checkIfSpaceExistsForShip() {
      // let i = setOrientation === 0 ? y : x;
      // let max = i + ship.length;
      // //All units must be > 0, < 9
      // if (max <= 9 || )
      // for (i; i <= i + ship.length; i++) {
      //   if (i < 0 || i > 9) {
      //     console.log("illegal move");
      //   } else {
      //     console.log("good move")
      //   }
      // }
    };

    // Check origin coordinate, and all next coordinates
    for (let i; i <= ship.length; i++) {}

    board.placeShip([x, y], ship);
  };

  const aiPlay = function aiActionWhenPlaying() {
    /*
        Process:
        
        # Player picks coordinate to attack
        
        # AI
          - BEGINNER AI
            - Computer selects random spaces
            - Generate 2 random numbers, each between 0 and 9
            - If coordinate has been already hit, try another until not hit
          - ADVANCED AI
            - If there is a hit, computer tries adjacent tiles
            - If there is a second hit, and a "direction" is defined, computer continues line on one side.
            - If no hit on that side, computer tries other side


        */
  };

  return { aiPlay, playerPlaceShip };
};

export default Player;
