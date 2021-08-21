import PlayerFactory from "./playerFactory";

const BoardFactory = (type) => {
  //Constructor

  let ai = false;
  let gameOver = false;

  if (type === "computer") {
    ai = true;
  }

  let units = (function (generateUnits) {
    let boardUnits = [];

    // Global functions to store data
    let allUnitCoordinates = [];
    let allUnitNames = [];

    // Loop Creates coordinates and unique unit names
    const createCoordinates = function () {
      for (let y = 0; y < 10; y++) {
        let coordinate = [];
        let name = "";

        for (let x = 0; x < 10; x++) {
          coordinate = [x, y];

          name = "square" + x + y;

          allUnitCoordinates.push(coordinate);
          allUnitNames.push(name);
        }
      }
    };

    //Unit properties are created
    const createUnitData = () => {
      for (let i = 0; i < 100; i++) {
        let unit = {
          name: i,
          coordinates: allUnitCoordinates[i],
          isHit: false,
          hasShip: false,
          whichShip: false,
        };

        boardUnits.push(unit);
      }
    };

    //Runs  functions
    createCoordinates();
    createUnitData();

    return boardUnits;
  })();

  // Helper functions
  ////////////////////////////////////////////
  ////////////////////////////////////////////
  ////////////////////////////////////////////
  ////////////////////////////////////////////
  ////////////////////////////////////////////
  ////////////////////////////////////////////

  // Filters Input Coordinates, returns array with matches
  const filterUnits = function filterMultipleUnits(coordinates) {
    let matches = [];

    // Filters Units
    coordinates.forEach((coordinate) => {
      matches = matches.concat(
        units.filter((unit) => {
          //Loop through array items

          if (
            unit.coordinates[0] !== coordinate[0] ||
            unit.coordinates[1] !== coordinate[1]
          ) {
            return false;
          } else {
            return true;
          }
        })
      );
    });

    return matches;
  };

  // Filters Input Coordinates, returns array with matches
  const filterUnit = function filterSingleUnit(coordinates) {
    let matches = [];
    //This is for when a single coordinate is entered
    matches = units.filter((unit) => {
      if (
        unit.coordinates[0] !== coordinates[0] ||
        unit.coordinates[1] !== coordinates[1]
      ) {
        return false;
      } else {
        return true;
      }
    });
    let result = matches;
    return result;
  };

  //Checks if space is available (aka does not have a ship). If all hasShip is false, then returns true (true, space is available)
  const spaceChecker = function checkIfUnitHasShip(units) {
    return units.every((unit) => {
      return !unit.hasShip;
    });
  };

  const setGameOver = function () {
    gameOver = true;
  };

  // Plug in functions
  ////////////////////////////////////////////
  ////////////////////////////////////////////
  ////////////////////////////////////////////
  ////////////////////////////////////////////
  ////////////////////////////////////////////
  ////////////////////////////////////////////
  const hasShip = function updateHasShip(unit, ship) {
    unit.hasShip = true;
    unit.whichShip = ship.data.whichShip;
  };

  const isHit = function updatedHitPoints(unit, ship) {
    unit.isHit = true;
  };

  // Private functions
  ////////////////////////////////////////////
  ////////////////////////////////////////////
  ////////////////////////////////////////////
  ////////////////////////////////////////////
  ////////////////////////////////////////////
  ////////////////////////////////////////////

  const updateShipInfo = function unitNowHasShip(
    units,
    filteredUnits,
    callback,
    ship
  ) {
    let updatedUnits = units.map((unit) => {
      // Finds unit in unitArray, and updates it

      const foundUnit = filteredUnits.find((filtered) => {
        return filtered.name === unit.name;
      });

      if (foundUnit) {
        callback(unit, ship);
      }

      return unit;
    });

    return updatedUnits;
  };

  // Public functions
  ////////////////////////////////////////////
  ////////////////////////////////////////////
  ////////////////////////////////////////////
  ////////////////////////////////////////////
  ////////////////////////////////////////////
  ////////////////////////////////////////////

  //Player functions

  const addPlayers = function createsPlayers(typeOfPlayer) {
    if (typeOfPlayer === "human") {
      const playerHuman = PlayerFactory("human");
      return { playerHuman };
    } else if (typeOfPlayer === "computer") {
      const playerAi = PlayerFactory("computer");
      return { playerAi };
    } else {
      alert("error creating player, no player type specified");
    }
  };

  const placeShip = function placeShipInUnit(coordinates, ship) {
    //An array of coordinates is entered. Ex [[3,2],[3,3],[3,4]

    // Step 1: Find units with those coordinates
    let selectedUnits;
    // Check if coordinates is a single array or group of arrays
    if (coordinates.length === 2 && coordinates[0][0] === undefined) {
      selectedUnits = filterUnit(coordinates);
    } else {
      selectedUnits = filterUnits(coordinates);
    }

    //Step 2, If no space available, exit function
    // if (!spaceChecker(selectedUnits)) {
    //   return false;
    // }
    //Step 3, Update units with new info

    units = updateShipInfo(units, selectedUnits, hasShip, ship);

    return units;
  };

  const receiveAttack = function spaceGetsHit(coordinates, allShips) {
    // Step 1: Find units with those coordinates.
    let selectedUnitArray = filterUnit(coordinates);
    let selectedUnit = filterUnit(coordinates)[0];

    // Step 2: if no ship on space, mark space as "space hit, but no ship"
    if (!selectedUnit.hasShip) {
      updateShipInfo(units, selectedUnitArray, isHit, false);
    } else if (selectedUnit.hasShip) {
      // Step 3, find ship in ShipList
      let whichShip = selectedUnit.whichShip;
      let thisShip = allShips.filter((ship) => {
        return ship.data.whichShip === whichShip;
      })[0];

      // Step 4,deduct hitpoints and check if sunk
      thisShip.data.hit();

      if (thisShip.data.sunk && gameOverCheck(allShips)) {
        alert("Game over");
      } else if (thisShip.data.sunk) {
        alert("Ship going DOWN");
      }

      // Step 5, update ship Data

      updateShipInfo(units, selectedUnitArray, isHit, thisShip);

      return thisShip.data;
    } else {
      alert("error in filtering unit in attack");
    }

    // // Takes a hit
    // thisShip.data.hit();

    // //Next, check is thisShip is sunk
    // if (thisShip.data.sunk) {
    //   //ship down
    // } else {
    //   //ship not down
    // }
  };

  const gameOverCheck = function checkIfAllShipsAreSunk(allShips) {
    return allShips.every((ship) => {
      return ship.data.sunk;
    });
  };

  // Data generator for board

  return {
    units,
    placeShip,
    filterUnits,
    filterUnit,
    spaceChecker,
    updateShipInfo,
    receiveAttack,
    addPlayers,
    ai,
    gameOverCheck,
    gameOver,
  };
};

export default BoardFactory;
