let ship = 0;

const getShipNumber = () => {
  ship++;
  return ship;
};

const resetShips = () => {
  ship = 0;
};

const ShipFactory = (length, playerName) => {
  const hit = function shipTakesAHit() {
    data.hitPoints--;
    data.sunk = checkIfSunk();
  };

  const checkIfSunk = function shipHasNoMoreHitPoints() {
    if (data.hitPoints == 0) {
      return true;
    }
  };

  const setOrientation = function zeroIsVerticalOneIsHorizontal() {
    return Math.floor(Math.random() < 0.5);
  };

  const data = {
    hitPoints: length,
    sunk: false,
    hit: hit,
    checkIfSunk: checkIfSunk,
    length: length,
    orientation: setOrientation(),
    whichShip: getShipNumber(),
    resetShips: resetShips,
    owner: playerName,
  };

  // const currentHitPoints = () => hitPoints;

  return { data };
};

export { ShipFactory, resetShips };
