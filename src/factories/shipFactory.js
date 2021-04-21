const shipFactory = (length, position) => {
  const hit = function shipTakesAHit() {
    data.hitPoints--;
    data.sunk = checkIfSunk();
  };

  const checkIfSunk = function shipHasNoMoreHitPoints() {
    if (data.hitPoints == 0) {
      return true;
    }
  };

  const data = {
    hitPoints: length,
    sunk: false,
    hit: hit,
    checkIfSunk: checkIfSunk,
    length: length,
    whichShip: shipCounter,
  };

  shipCounter++;

  // const currentHitPoints = () => hitPoints;

  return { data };
};

export default shipFactory;
