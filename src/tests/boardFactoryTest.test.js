import BoardFactory from "../factories/BoardFactory";

it("Has 100 units", () => {
  const board = BoardFactory();
  expect(board.units.length).toBe(100);
});

it("placeShip filters all units with input coordinates", () => {
  const board = BoardFactory();
  let result = board.filterUnits([
    [3, 2],
    [9, 2],
    [5, 1],
  ]);
  expect(result.length).toBe(3);
});

it("Returns true if space is Available", () => {
  const board = BoardFactory();
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
  const board = BoardFactory();
  const array = [
    {
      coordinates: [3, 2],
      hasShip: true,
      isHit: true,
      name: "square32",
      whichShip: 0,
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
  const board = BoardFactory();
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
  const board = BoardFactory();
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

it("Test Place Ship, Multiples", () => {
  const board = BoardFactory();

  const ship1 = {};
  ship1.data = {
    hit: expect.anything(),
    hitPoints: expect.anything(),
    sunk: expect.any(Boolean),
    length: 3,
    checkIfSunk: expect.anything(),
    whichShip: 3,
  };

  const result = board.placeShip(
    [
      [3, 2],
      [1, 2],
      [9, 1],
    ],
    ship1
  );

  expect(result).toEqual(
    expect.arrayContaining([expect.objectContaining({ hasShip: true })])
  );
});

it("Test Place Ship, Single", () => {
  const board = BoardFactory();
  const ship1 = {};
  ship1.data = {
    hit: expect.anything(),
    hitPoints: expect.anything(),
    sunk: expect.any(Boolean),
    length: 3,
    checkIfSunk: expect.anything(),
    whichShip: 3,
  };

  const result = board.placeShip([3, 2], ship1);

  expect(result).toEqual(
    expect.arrayContaining([expect.objectContaining({ hasShip: true })])
  );
});

it("Test Ship has a Number ", () => {
  const board = BoardFactory();
  const ship1 = {};
  ship1.data = {
    hit: expect.anything(),
    hitPoints: expect.anything(),
    sunk: expect.any(Boolean),
    length: 3,
    checkIfSunk: expect.anything(),
    whichShip: 3,
  };

  const result = board.placeShip(
    [
      [3, 2],
      [1, 2],
      [9, 1],
    ],
    ship1
  );

  expect(result).toEqual(
    expect.arrayContaining([expect.objectContaining({ whichShip: 3 })])
  );
});

it("Test Receive attack", () => {
  const board = BoardFactory();
  const ship1 = {};
  ship1.data = {
    hit: expect.anything(),
    hitPoints: expect.anything(),
    sunk: expect.any(Boolean),
    length: 3,
    checkIfSunk: expect.anything(),
    whichShip: 3,
  };

  const hit = function shipTakesAHit() {
    this.hitPoints--;
    this.sunk = this.checkIfSunk();
  };

  const checkIfSunk = function shipHasNoMoreHitPoints() {
    if (this.hitPoints == 0) {
      return true;
    } else {
      return false;
    }
  };

  const allShips = [
    {
      data: {
        hitPoints: 3,
        sunk: false,
        hit: hit,
        checkIfSunk: checkIfSunk,
        length: 3,
        whichShip: 1,
      },
    },
    {
      data: {
        hitPoints: 4,
        sunk: false,
        hit: hit,
        checkIfSunk: checkIfSunk,
        length: 4,
        whichShip: 2,
      },
    },
    {
      data: {
        hitPoints: 1,
        sunk: false,
        hit: hit,
        checkIfSunk: checkIfSunk,
        length: 1,
        whichShip: 3,
      },
    },
  ];

  board.placeShip([3, 2], ship1);

  const result = board.receiveAttack([3, 2], allShips);

  expect(result).toEqual(expect.objectContaining({ hitPoints: 0 }));
});

it("Board creates players correctly", () => {
  const board = BoardFactory();
  let addHuman = board.addPlayers("human");
  let expected = {
    playerHuman: expect.anything(),
  };

  expect(addHuman).toStrictEqual(expected);
});

it("Players in Board can create ships", () => {
  const board = BoardFactory();
  let boardPlayers = board.addPlayers("human");
  boardPlayers.playerHuman.addShip(3);

  expect(boardPlayers.playerHuman.myShips).toStrictEqual(
    expect.arrayContaining([{ data: expect.anything() }])
  );
});
