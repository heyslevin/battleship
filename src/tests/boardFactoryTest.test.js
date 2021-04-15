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

  const result = board.spaceChecker(array);

  expect(result).toBe(true);
});

it("Returns false if space is Unavailable", () => {
  const board = boardFactory();
  const array = [
    {
      coordinates: [3, 2],
      hasShip: true,
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

  const result = board.spaceChecker(array);

  expect(result).toBe(false);
});

it("Update ship info Sets has ship to true", () => {
  const board = boardFactory();
  const hasShip = function updateHasShip(unit) {
    unit.hasShip = true;
  };
  const units = [
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

  const filtered = [
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

  const expected = [
    {
      coordinates: [3, 2],
      hasShip: true,
      isHit: false,
      name: "square32",
      whichShip: false,
    },
    {
      coordinates: [9, 2],
      hasShip: true,
      isHit: false,
      name: "square92",
      whichShip: false,
    },
    {
      coordinates: [5, 1],
      hasShip: true,
      isHit: false,
      name: "square51",
      whichShip: false,
    },
  ];

  const result = board.updateShipInfo(units, filtered, hasShip);

  expect(result).toMatchObject(expected);
});

it("Returns false if space is Unavailable", () => {
  const board = boardFactory();
  const array = [
    {
      coordinates: [3, 2],
      hasShip: true,
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

  const result = board.spaceChecker(array);

  expect(result).toBe(false);
});

it("Test Place Ship", () => {
  const board = boardFactory();

  const result = board.placeShip([
    [3, 2],
    [1, 2],
    [9, 1],
  ]);

  const expected = [
    {
      coordinates: [3, 2],
      hasShip: true,
      isHit: false,
      name: "square32",
      whichShip: false,
    },
    {
      coordinates: [1, 2],
      hasShip: true,
      isHit: false,
      name: "square92",
      whichShip: false,
    },
    {
      coordinates: [9, 1],
      hasShip: true,
      isHit: false,
      name: "square51",
      whichShip: false,
    },
  ];

  expect(result).toEqual(
    expect.arrayContaining([expect.objectContaining({ hasShip: true })])
  );
});
