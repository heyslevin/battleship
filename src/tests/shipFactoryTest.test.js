import shipFactory from "../factories/shipFactory";

it("creats object correctly", () => {
  const expected = { hit: undefined, sunk: undefined, length: undefined };

  expect(shipFactory()).toStrictEqual(expected);
});
