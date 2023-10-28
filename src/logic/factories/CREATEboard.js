import CREATEship from "./CREATEship";
//
//
//
//
//
export default function CREATEboard() {
  const shipOBJS = [];
  const missedATTACKS = [];

  const PLACEship = (startCORDS, endCORDS) => {
    shipOBJS.push(CREATEship(startCORDS, endCORDS));
  };
  const RECEIVEattack = (x, y) => {
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

  return {
    PLACEship,
    GETships,
    ISgameOver,
  };
}
