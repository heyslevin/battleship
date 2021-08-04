import { ShipFactory } from "./shipFactory";

const PlayerFactory = (aiOrHuman) => {
  // const playedCoordinates = [];
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

  const addShip = function createsAShipWithFactory(length) {
    const ship = ShipFactory(length);
    myShips.push(ship);
  };

  const generateNumber = () => {
    return Math.floor(Math.random() * 10);
  };

  const generateLimitedNumber = (shipLength) => {
    return Math.floor(Math.random() * (10 - shipLength + 1));
  };

  const generateCoordinates = function generateSingleCoordinatesToPlaceShip(
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

  const playerPickShipCoordinates = function picksCoordinatesForShip(ship) {
    let playerCoordinates = [];

    let x = generateCoordinates(ship, "x");
    let y = generateCoordinates(ship, "y");

    //Generate rest of coordinates, push to playerCoordinates
    for (let i = x; i < ship.data.length + x; i++) {
      playerCoordinates.push([i, y]);
    }

    return playerCoordinates;

    // NEXT: check if all coordinates available
    // Loop, while true, continue
    // Filter units with coordinate to find unit
    // Check if unit.hasShip is true
    // Loop i = ship.length
    // Generate next coordinate based on orientation
    // Find unit with that coordinate (Filter unit), check if unit.hasShip is true
    // If unit.hasShip is false, restart whole thing.
  };

  const aiPlay = function aiActionWhenPlaying() {
    let x = generateNumber();
    let y = generateNumber();

    return [x, y];
    //  - BEGINNER AI
    //         - Computer selects random spaces
    //         - Generate 2 random numbers, each between 0 and 9
    //         - If coordinate has been already hit, try another until not hit (tested in Gameloop)
    /*
    
          - ADVANCED AI
            - If there is a hit, computer tries adjacent tiles
            - If there is a second hit, and a "direction" is defined, computer continues line on one side.
            - If no hit on that side, computer tries other side


        */
    // - Computer selects random spaces
    // - Generate 2 random numbers, each between 0 and 9
    // - If coordinate has been already hit, try another until not hit
  };

  return { aiPlay, playerPickShipCoordinates, addShip, myShips };
};

export default PlayerFactory;
