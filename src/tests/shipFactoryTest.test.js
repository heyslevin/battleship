import { ShipFactory, resetShips } from "../factories/ShipFactory";

afterEach(() => {
  resetShips();
});

it("creates object correctly", () => {
  const expected = {
    data: {
      hit: expect.anything(),
      hitPoints: expect.anything(),
      sunk: expect.any(Boolean),
      length: 1,
      checkIfSunk: expect.anything(),
      whichShip: expect.anything(),
      resetShips: expect.anything(),
      orientation: expect.anything(),
      // owner: expect.anything(),
    },
  };

  const result = ShipFactory(1);

  expect(result).toStrictEqual(expected);
});

it("creates object length of 3", () => {
  let ship = ShipFactory(1);

  expect(ship.data.length).toBe(1);
});

it("to have hitpoints equal to length", () => {
  let ship = ShipFactory(3);

  expect(ship.data.length).toBe(3);
});

it("on hit, ship deducts 1 hitpoint", () => {
  let ship = ShipFactory(3, null);
  ship.data.hit();
  expect(ship.data.hitPoints).toBe(2);
});

it("on no hitpoints, ship sinks", () => {
  let ship = ShipFactory(3, []);
  ship.data.hit();
  ship.data.hit();
  ship.data.hit();
  expect(ship.data.checkIfSunk()).toBe(true);
});

it("check properties on ship", () => {
  let ship = ShipFactory(3, []);
  ship.data.hit();

  expect(ship.data.length).toBe(3);
});

it("counts up on each ship created", () => {
  let ship = ShipFactory(1, "player1");
  let result = ShipFactory(2, "player2");

  const expected = {
    data: {
      hit: expect.anything(),
      hitPoints: expect.anything(),
      sunk: expect.any(Boolean),
      length: 2,
      checkIfSunk: expect.anything(),
      orientation: expect.anything(),
      whichShip: 2,
      resetShips: expect.anything(),
      // owner: "player2",
    },
  };

  expect(result).toStrictEqual(expected);
});
