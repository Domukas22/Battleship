import CREATEship from "../CREATEship";
//
//
//
//
//

describe("Ship interaction", () => {
  let ship = CREATEship([1, 1], [1, 3]);
  beforeEach(() => {
    ship = CREATEship([1, 1], [1, 3]);
  });

  test("Ship generates correctly", () => {
    expect(ship.GETcords()).toStrictEqual([
      { cell: [1, 1], hit: false },
      { cell: [1, 2], hit: false },
      { cell: [1, 3], hit: false },
    ]);
  });

  test("Ship get's hit correctly", () => {
    ship.hit(1, 2);
    expect(ship.GETcords()).toStrictEqual([
      { cell: [1, 1], hit: false },
      { cell: [1, 2], hit: true },
      { cell: [1, 3], hit: false },
    ]);
  });
  test("Ship is sunk", () => {
    ship.hit(1, 1);
    ship.hit(1, 2);
    ship.hit(1, 3);
    expect(ship.isSunk()).toBe(true);
  });
});
