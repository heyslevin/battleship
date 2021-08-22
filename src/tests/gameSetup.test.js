import gameSetup from "../utilities/gameSetup";

it("Returns players correctly", () => {
  const game = gameSetup().start();

  expect(game).toMatchObject({ humanBoard: expect.anything() });
});
