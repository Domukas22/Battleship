import CREATEship from "../CREATEship";
//
//
//
//
//
test("Ship has correct coordinates", () => {
  const ship = CREATEship([2, 4], [2, 7]);

  expect(ship.GETcords()).toStrictEqual([
    [2, 4],
    [2, 5],
    [2, 6],
    [2, 7],
  ]);
});
