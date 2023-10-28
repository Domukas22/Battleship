import CREATEboard from "../CREATEboard";
//
//
//
//
//
let board = CREATEboard();
describe("Simple board interaction", () => {
  beforeEach(() => {
    board = CREATEboard();
  });
  test("Creates board", () => {
    expect(board.GETships()).toStrictEqual([]);
  });
  test("Adds ships", () => {
    board.PLACEship([1, 1], [1, 3]);
    board.PLACEship([4, 2], [4, 5]);
    board.PLACEship([6, 1], [6, 6]);
    expect(board.GETships()).toHaveLength(3);
  });
  test("Checks if game is over", () => {
    board.PLACEship([1, 1], [1, 2]);
    board.PLACEship([2, 2], [2, 3]);

    board.GETships().forEach((ship) => {
      ship.GETcords().forEach((cell) => {
        ship.hit(cell.cell[0], cell.cell[1]);
      });
    });
    expect(board.ISgameOver()).toBe(true);
  });
});

describe("Board attacks", () => {
  beforeEach(() => {
    board = CREATEboard();
  });
  test("Attacks with false cords", () => {
    // place ship and attack first cell
    expect(board.RECEIVEattack(-1, 1)).toBe("X and Y must be between 0 and 9");
    expect(board.RECEIVEattack(5, 10)).toBe("X and Y must be between 0 and 9");
  });
  test("Attacks an already hit spot", () => {
    // place ship and attack first cell
    board.PLACEship([1, 1], [1, 2]);
    board.RECEIVEattack(1, 1);
    expect(board.RECEIVEattack(1, 1)).toBe("Already hit");
  });
  test("Attacks ship", () => {
    // place ship, attack first cell, check ship cell status
    board.PLACEship([1, 1], [1, 2]);
    board.RECEIVEattack(1, 1);
    expect(board.GETships()[0].GETcords()[0].hit).toBe(true);
  });
  test("Sinks ship and hits surrouding cordinates", () => {
    // place ship, attack first cell, check ship cell status
    board.PLACEship([1, 1], [1, 2]);
    board.RECEIVEattack(1, 1);
    board.RECEIVEattack(1, 2);
    expect(board.GETships()[0].isSunk()).toBe(true);
    const hitLIST = board.GEThitList();
    expect(hitLIST).toContain("0,0");
    expect(hitLIST).toContain("0,3");
    expect(hitLIST).toContain("2,3");
    expect(hitLIST).toContain("2,0");
  });
  test("Attacks and ends game", () => {
    // place ship, attack first cell, check ship cell status
    board.PLACEship([1, 1], [1, 2]);
    board.PLACEship([6, 2], [6, 4]);
    board.RECEIVEattack(1, 1);
    board.RECEIVEattack(1, 2);
    board.RECEIVEattack(6, 2);
    board.RECEIVEattack(6, 3);
    board.RECEIVEattack(6, 4);
    expect(board.ISgameOver()).toBe(true);
  });
});
