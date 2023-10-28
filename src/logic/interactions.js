import { PRINTcells, PRINThits, PRINTships } from "./dom/PRINTcells";
import CREATEboard from "./factories/CREATEboard";
//
//
//
//
export default function STARTgame() {
  PRINTcells();
  const board = CREATEboard();
  board.PLACEship([1, 1], [1, 3]);
  board.PLACEship([5, 5], [5, 7]);
  board.PLACEship([3, 2], [5, 2]);
  PRINTships(board.GETships());

  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      const coordsSTRING = e.currentTarget.dataset.cords;
      const [x, y] = coordsSTRING.split(",").map(Number);
      attack(board, [x, y]);
    });
  });
}
function attack(board, coords) {
  const [x, y] = coords;
  board.RECEIVEattack(x, y);
  PRINThits(board.GEThitList());

  if (board.ISgameOver()) {
    document.querySelector(".board").innerHTML = "";
    STARTgame();
  }
}
