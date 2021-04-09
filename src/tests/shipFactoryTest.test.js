import shipFactory from "../factories/shipFactory";

it("creates object correctly", () => {
  const expected = {
    data: {
      hit: expect.anything(),
      hitPoints: expect.anything(),
      sunk: expect.any(Boolean),
      length: 1,
      checkIfSunk: expect.anything(),
    },
  };

  const result = shipFactory(1);

  expect(result).toStrictEqual(expected);
});

it("creates object length of 3", () => {
  let ship = shipFactory(1);

  expect(ship.data.length).toBe(1);
});

it("to have hitpoints equal to length", () => {
  let ship = shipFactory(3);

  expect(ship.data.length).toBe(3);
});

it("on hit, ship deducts 1 hitpoint", () => {
  let ship = shipFactory(3, null);
  ship.data.hit();
  expect(ship.data.hitPoints).toBe(2);
});

it("on no hitpoints, ship sinks", () => {
  let ship = shipFactory(3, []);
  ship.data.hit();
  ship.data.hit();
  ship.data.hit();
  expect(ship.data.checkIfSunk()).toBe(true);
});

it("check properties on ship", () => {
  let ship = shipFactory(3, []);
  ship.data.hit();

  expect(ship.data.length).toBe(3);
});
