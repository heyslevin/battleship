import boardFactory from "../factories/boardFactory";

it("Has 100 units", () => {
  const board = boardFactory();
  expect(board.units.length).toBe(100);
});

it("placeShip filters all units with input coordinates", () => {
  const board = boardFactory();
  let result = board.filterUnits([
    [3, 2],
    [9, 2],
    [5, 1],
  ]);
  expect(result.length).toBe(3);
});

it("Returns true if space is Available", () => {
  const board = boardFactory();
  const array = [
    {
      coordinates: [3, 2],
      hasShip: false,
      isHit: false,
      name: "square32",
      whichShip: false,
    },
    {
      coordinates: [9, 2],
      hasShip: false,
      isHit: false,
      name: "square92",
      whichShip: false,
    },
    {
      coordinates: [5, 1],
      hasShip: false,
      isHit: false,
      name: "square51",
      whichShip: false,
    },
  ];

  const units = board.filterUnits(array);
  const result = board.spaceChecker(units);

  expect(result).toBe(true);
});
