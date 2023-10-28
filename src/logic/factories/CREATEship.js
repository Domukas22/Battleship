//
//
//
//
//
export default function CREATEship(startCORDS, endCORDS) {
  const cords = [];

  // populate cords array
  for (let x = startCORDS[0]; x <= endCORDS[0]; x += 1) {
    for (let y = startCORDS[1]; y <= endCORDS[1]; y += 1) {
      cords.push({ cell: [x, y], hit: false });
    }
  }

  const hit = (x, y) => {
    const targetCell = cords.find(
      (cord) => cord.cell[0] === x && cord.cell[1] === y,
    );
    if (targetCell) targetCell.hit = true;
  };
  const isSunk = () => cords.every((cell) => cell.hit === true);
  const GETcords = () => [...cords];

  return {
    hit,
    isSunk,
    GETcords,
  };
}
