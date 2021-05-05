import Player from "../factories/playerFactory";

it("Returns true", () => {
  const newPlayer = Player();
  expect(newPlayer).toBe(true);
});
