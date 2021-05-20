import ShipFactory from "./shipFactory";

const PlayerFactory = (aiOrHuman) => {
  const playedCoordinates = [];
  const myShips = [];
  let ai;

  // AI Checker when creating player
  if (aiOrHuman === "human") {
    ai = false;
  } else if (aiOrHuman === "computer") {
    ai = true;
  } else {
    console.log("error with ai");
  }

  const addShip = function createsAShipWithFactory(length, name) {
    const ship = ShipFactory(length, name);
    myShips.push(ship);
  };

  const generateNumber = () => {
    return Math.floor(Math.random() * 10);
  };

  const generateLimitedNumber = (shipLength) => {
    return Math.floor(Math.random() * (10 - shipLength + 1));
  };

  const generateCoordinates = function generateCoordinatesToPlaceShip(
    ship,
    direction
  ) {
    // If ship.orientation = direction, do limited random number. Else, do free random number.
    if (ship.data.orientation === direction) {
      return generateLimitedNumber(ship.data.length);
    } else {
      return generateNumber();
    }
  };

  const playerPickCoordinates = function picksCoordinatesForShip(ship) {
    //Check Orientation and ShipLength
    let orientation = ship.orientation;

    let x = generateCoordinates(ship, "x");
    let y = generateCoordinates(ship, "y");

    return [x, y];
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

  return { aiPlay, playerPickCoordinates };
};

export default PlayerFactory;
