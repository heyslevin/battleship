const boardFactory = () => {
  const generateUnits = () => {
    let boardUnits = {};

    for (let x = 0; x < 10; x++) {
      let square = [];
      let count = 1;
      for (let y = 0; y < 10; y++) {
        square = [x, y];
        boardUnits["square" + x + y] = {
          coordinates: square,
        };
        count++;
      }
    }

    return boardUnits;
  };

  const data = {
    units: generateUnits(),
  };

  return { generateUnits, data };
};

export default boardFactory;
