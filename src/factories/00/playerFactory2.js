import shipFactory from "./shipFactory";

const Player = () => {
  const playedCoordinates = [];
  const myShips = [];

  const addShip = function createsAShipWithFactory(length, name) {
    const ship = shipFactory(length, name);
    myShips.push(ship);
  };

  const playerPlaceShip = (ship) => {
    let x = Math.floor(Math.random() * 10);
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

  return { aiPlay };
};

export default Player;
