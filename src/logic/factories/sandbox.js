function CREATEship(startCORDS, endCORDS) {
  const cords = [];

  // populate cords array
  for (let x = startCORDS[0]; x <= endCORDS[0]; x += 1) {
    for (let y = startCORDS[1]; y <= endCORDS[1]; y += 1) {
      cords.push({ cell: [x, y], hit: false });
    }
  }

  const hit = (x, y) => {
    const targetCell = cords.find((cord) => cord.cell[0] === x && cord.cell[1] === y);
    if (targetCell) targetCell.hit = true;
  };
  const isSunk = () => cords.every((cell) => cell.hit === true);
  const GETcords = () => [...cords];
  const HAScords = (x, y) => cords.some((cell) => cell.cell[0] === x && cell.cell[1] === y);

  return {
    hit,
    isSunk,
    GETcords,
    HAScords,
  };
}

function CREATEboard() {
  const shipOBJS = [];
  const hitLIST = [];

  const PLACEship = (startCORDS, endCORDS) => {
    shipOBJS.push(CREATEship(startCORDS, endCORDS));
  };

  const RECEIVEattack = (x, y) => {
    if (_AREcordsOnHitList(x, y)) return "Already hit";

    if (_AREcordsOnShip(x, y)) {
      const targetSHIP = _GETshipWithCords(x, y);
      targetSHIP.hit(x, y);
    }
    hitLIST.push([x, y]);

    // if shipOBJS has cords
    // ship.hit()
    // if ship.isSunk() === true
    // disable surrounding water cords
    // if all ships are sunk
    // end game
    // if missedATTACKS has cords
    // return false
    // missedATTACKS.push(x, y)
  };
  const ISgameOver = function AREallShipsSunk() {
    return shipOBJS.every((ship) => ship.isSunk() === true);
  };
  const GETships = () => [...shipOBJS];
  function _AREcordsOnShip(x, y) {
    return shipOBJS.some((ship) => ship.HAScords(x, y) === true);
  }
  function _GETshipWithCords(x, y) {
    console.log(shipOBJS);
    return shipOBJS.find((ship) => ship.HAScords(x, y) === true);
  }
  function _AREcordsOnHitList(x, y) {
    return hitLIST.some((hit) => hit[0] === x && hit[1] === y);
  }
  return {
    PLACEship,
    GETships,
    ISgameOver,
    RECEIVEattack,
  };
}

const board = CREATEboard();
board.PLACEship([1, 1], [1, 2]);
board.RECEIVEattack(1, 1);
console.log(board.GETships()[0].GETcords()[0].hit);
console.log(board.RECEIVEattack(1, 1));
console.log(board.ISgameOver());
