import CREATEship from "./CREATEship";
//
//
//
//
//
export default function CREATEboard() {
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
