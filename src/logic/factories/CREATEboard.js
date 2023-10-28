import CREATEship from "./CREATEship";
//
//
//
//
//
export default function CREATEboard() {
  const shipOBJS = [];
  const hitLIST = new Set();

  const PLACEship = (startCORDS, endCORDS) => {
    shipOBJS.push(CREATEship(startCORDS, endCORDS));
  };
  const ISgameOver = function AREallShipsSunk() {
    return shipOBJS.every((ship) => ship.isSunk() === true);
  };

  const RECEIVEattack = (x, y) => {
    if (!_AREcordsValid(x, y)) return "X and Y must be between 0 and 9";
    if (_AREcordsOnHitList(x, y)) return "Already hit";

    const newHitCORDS = [x, y];
    hitLIST.add(newHitCORDS.toString());

    if (_AREcordsOnShip(x, y)) {
      const targetSHIP = _GETshipWithCords(x, y);
      targetSHIP.hit(x, y);
      if (targetSHIP.isSunk()) {
        _HANLDEsunkenShip(targetSHIP);
      }
    }
  };

  const GETships = () => [...shipOBJS];
  const GEThitList = () => [...hitLIST];

  function _AREcordsOnShip(x, y) {
    return shipOBJS.some((ship) => ship.HAScords(x, y) === true);
  }
  function _GETshipWithCords(x, y) {
    return shipOBJS.find((ship) => ship.HAScords(x, y) === true);
  }
  function _AREcordsOnHitList(x, y) {
    return hitLIST.has([x, y].toString());
  }
  function _AREcordsValid(x, y) {
    return x >= 0 && x <= 9 && y >= 0 && y <= 9;
  }
  function _HANLDEsunkenShip(sunkenShipOBJ) {
    const sunkenShipCORDS = sunkenShipOBJ.GETcords().map((cord) => cord.cell);
    sunkenShipCORDS.forEach((cords) => {
      const surroundingCORDS = _GETsurroundingCords(cords[0], cords[1]);
      surroundingCORDS.forEach((surrCORDS) => hitLIST.add(surrCORDS.toString()));
    });
  }
  function _GETsurroundingCords(x, y) {
    return [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
      [x, y - 1],
      [x - 1, y + 1],
      [x - 1, y - 1],
      [x + 1, y + 1],
      [x + 1, y - 1],
    ];
  }
  return {
    PLACEship,
    GETships,
    ISgameOver,
    RECEIVEattack,
    GEThitList,
  };
}
