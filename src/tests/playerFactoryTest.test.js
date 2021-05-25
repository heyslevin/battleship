import PlayerFactory from "../factories/playerFactory";

it("Returns true", () => {
  const newPlayer = PlayerFactory("computer");
  expect(newPlayer).toMatchObject(expect.anything());
});

it("Places ship correctly", () => {
  const newPlayer = PlayerFactory("human");
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

it("Creates Ships Correctly", () => {
  const newPlayer = PlayerFactory("human");
  newPlayer.addShip();

  expect(newPlayer.myShips).toStrictEqual(expect.anything());
});
