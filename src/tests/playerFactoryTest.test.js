import PlayerFactory from "../factories/playerFactory";

it("Returns true", () => {
  const newPlayer = PlayerFactory();
  expect(newPlayer).toMatchObject(expect.anything());
});

it("Places ship correctly", () => {
  const newPlayer = PlayerFactory();
  let expected = "placed";
  let mockShip = {};
  mockShip.data = {
    hitPoints: 3,
    sunk: false,
    length: 3,
    orientation: "x",
    whichShip: 1,
  };
  let result = newPlayer.playerPickCoordinates(mockShip);

  expect(result).toEqual(expect.any(Array));
});
