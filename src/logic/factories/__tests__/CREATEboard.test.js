import CREATEboard from "../CREATEboard";
//
//
//
//
//
describe("Board interaction", () => {
  let board = CREATEboard();
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
