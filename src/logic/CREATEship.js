//
//
//
//
//
export default function CREATEship(startCORDS, endCORDS) {
  const cords = [];

  for (let x = startCORDS[0]; x <= endCORDS[0]; x += 1) {
    for (let y = startCORDS[1]; y <= endCORDS[1]; y += 1) {
      cords.push({ cell: [x, y], hit: false });
    }
  }

  const hit = (x, y) => {
    const targetCell = cords.find((cell) => cell[0] === x && cell[1] === y);
    if (targetCell) targetCell.hit = true;
  };
  const isSunk = () => cords.every((cell) => cell.hit === true);
  const GETcords = () => cords.map((cord) => cord.cell);

  return {
    hit,
    isSunk,
    GETcords,
  };
}
