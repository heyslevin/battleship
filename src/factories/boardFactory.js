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

  // Filters Input Coordinates
  const filterUnits = function filterUnitsByInputCoordinate(coordinates) {
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
          // return unit.coordinates == coordinate;
        })
      );
    });

    return matches;
  };

  //Space checking. If all hasShip is false, then returns true (true space is available)
  const spaceChecker = function checkIfUnitHasShip(units) {
    return units.every((unit) => {
      return !unit.hasShip;
    });
  };

  // const updateShipInfo = function unitNowHasShip(units, filteredUnits) {
  //   let updatedUnits = units.map((unit) => {
  //     const exists = filteredUnits.find((filtered) => {
  //       return (
  //         filtered.coordinates[0] == unit.coordinates[0] &&
  //         filtered.coordinates[1] == unit.coordinates[1]
  //       );
  //     });

  //     if (exists) {
  //       unit.hasShip = true;
  //     }

  //     return unit;
  //   });

  //   return updatedUnits;
  // };

  // Plug in functions for Updating ship Info
  const hasShip = function updateHasShip(unit) {
    unit.hasShip = true;
  };

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

  const placeShip = function placeShipInUnit(coordinates) {
    //An array of coordinates is entered. Ex [[3,2],[3,3],[3,4]

    // Step 1: Find units with those coordinates
    let spaceAvailable = true;

    let selectedUnits = filterUnits(coordinates);

    //Step 2, If no space available, change spaceAvailable

    if (!spaceChecker(selectedUnits)) {
      spaceAvailable = false;
      return;
    }

    updateShipInfo(units, selectedUnits, hasShip);

    // Next: Verify units are updating correctly via tests

    return units;
  };

  // Data generator for board

  return { units, placeShip, filterUnits, spaceChecker, updateShipInfo };
};

export default boardFactory;
