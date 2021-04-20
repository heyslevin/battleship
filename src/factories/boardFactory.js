const boardFactory = () => {
  //Constructor

  const units = (function (generateUnits) {
    let boardUnits = [];

    // Global functions to store data
    let allUnitCoordinates = [];
    let allUnitNames = [];

    // Loop Creates coordinates and unique unit names
    const createCoordinates = function () {
      for (let x = 0; x < 10; x++) {
        let coordinate = [];
        let name = "";

        for (let y = 0; y < 10; y++) {
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
        let unitName = allUnitNames[i];

        let unit = {
          name: unitName,
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
    return matches;
  };

  //Checks if space is available (aka does not have a ship). If all hasShip is false, then returns true (true, space is available)
  const spaceChecker = function checkIfUnitHasShip(units) {
    return units.every((unit) => {
      return !unit.hasShip;
    });
  };

  // Plug in functions
  ////////////////////////////////////////////
  ////////////////////////////////////////////
  ////////////////////////////////////////////
  ////////////////////////////////////////////
  ////////////////////////////////////////////
  ////////////////////////////////////////////
  const hasShip = function updateHasShip(unit) {
    unit.hasShip = true;
  };

  const isHit = function updatedHitPoints(unit) {
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
    callback
  ) {
    let updatedUnits = units.map((unit) => {
      // Finds unit in unitArray, and updates it
      const foundUnit = filteredUnits.find((filtered) => {
        return filtered.name == unit.name;
      });

      if (foundUnit) {
        callback(unit);
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

  const placeShip = function placeShipInUnit(coordinates) {
    //An array of coordinates is entered. Ex [[3,2],[3,3],[3,4]

    // Step 1: Find units with those coordinates
    let selectedUnits;

    // Check if coordinates is a single array or group of arrays
    if (coordinates.length == 2 && coordinates[0][0] == undefined) {
      selectedUnits = filterUnit(coordinates);
    } else {
      selectedUnits = filterUnits(coordinates);
    }

    //Step 2, If no space available, exit function
    if (!spaceChecker(selectedUnits)) {
      console.log("No Space");
      return;
    }

    //Step 3, Update units with new info
    updateShipInfo(units, selectedUnits, hasShip);

    return units;
  };

  const receiveAttack = function shipGetsHit(coordinate) {
    // Step 1: Find units with those coordinates.
    let selectedUnits = filterUnit(coordinate);

    // Step 2: Check if space is available. If true, exit function (no ship)
    if (spaceChecker(selectedUnits)) {
      return 0;
    }

    //Step 3, Update unit
    updateShipInfo(units, selectedUnits, isHit);

    return units;
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
  };
};

export default boardFactory;
