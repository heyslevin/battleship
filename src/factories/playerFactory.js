import shipFactory from "./shipFactory";

const Player = () => {
  const playedCoordinates = [];
  const myShips = [];

  const addShip = function createsAShipWithFactory(length, name) {
    const ship = shipFactory(length, name);
    myShips.push(ship);
  };

  const generateNumber = () => {
    return Math.floor(Math.random() * 10);
  };

  const generateLimitedNumber = (shipLength) => {
    return Math.floor(Math.random() * (10 - shipLength + 1));
  };

  const generateFreeCoordinate = (ship, direction) => {
    // If ship.orientation = direction, do limited random number. Else, do free random number.
    if (ship.data.orientation === direction) {
      return generateLimitedNumber(ship.data.length);
    } else {
      return generateNumber();
    }
  };

  const playerPlaceShip = function picksCoordinatesForShip(ship) {
    //Check Orientation and ShipLength
    //Generate a Valid Origin Coordinate
    //Valid Origin. If its orientation = i + ship.length <= 9
    //If not orientation i >= 0 && i <= 9
    let orienation = ship.orienation;

    let x = generateCoordinate(ship, x);
    let y = generateCoordinate(ship, y);
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
