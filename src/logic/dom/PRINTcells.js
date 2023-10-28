//
//
//
//
//
export function PRINTcells() {
  const board = document.querySelector(".board");
  for (let row = 0; row < 10; row += 1) {
    for (let col = 0; col < 10; col += 1) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("data-cords", `${row},${col}`);

      board.appendChild(cell);
    }
  }
}
export function PRINTships(shipObjLIST) {
  const allShipCOORDs = _TRANSLATEshipCords(shipObjLIST);
  allShipCOORDs.forEach((shipCOORDS) => {
    shipCOORDS.forEach((cellCOORDS) => {
      const cell = document.querySelector(`.cell[data-cords="${cellCOORDS}"]`);
      cell.classList.add("ship");
    });
  });
}
export function PRINThits(hitLIST) {
  hitLIST.forEach((hitCOORDS) => {
    const targetCELL = document.querySelector(`.cell[data-cords="${hitCOORDS}"]`);
    targetCELL.setAttribute("data-hit", true);
  });
}

function _TRANSLATEshipCords(shipObjLIST) {
  const allShipCOORDs = [];

  shipObjLIST.forEach((shipOBJ) => {
    const coords = shipOBJ.GETcords().map((cord) => cord.cell.toString());
    allShipCOORDs.push(coords);
  });

  return allShipCOORDs;
}
