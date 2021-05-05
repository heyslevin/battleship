let ship = 0;

const getShipNumber = () => {
  ship++;
  return ship;
};

const resetShips = () => {
  ship = 0;
};

const ShipFactory = (length) => {
  const hit = function shipTakesAHit() {
    data.hitPoints--;
    data.sunk = checkIfSunk();
  };

  const checkIfSunk = function shipHasNoMoreHitPoints() {
    if (data.hitPoints == 0) {
      return true;
    }
  };

  let shipNumber = getShipNumber();

  const data = {
    hitPoints: length,
    sunk: false,
    hit: hit,
    checkIfSunk: checkIfSunk,
    length: length,
    whichShip: shipNumber,
    resetShips: resetShips,
  };

  // const currentHitPoints = () => hitPoints;

  return { data };
};

export default ShipFactory;
