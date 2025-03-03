// Code your solution in this file!

function distanceFromHqInBlocks(val) {
  return Math.abs(val - 42);
}

function distanceFromHqInFeet(val) {
  return distanceFromHqInBlocks(val) * 264;
}

function distanceTravelledInFeet(val1, val2) {
  return Math.abs(val1 - val2) * 264;
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  let price = 0;
  switch (true) {
    case distance > 2500:
      return "cannot travel that far";
    case distance >= 2000:
      price = 25;
      break;
    case distance >= 400:
      price += 0.02 * (Math.min(distance, 2000) - 400);
      break;
  }
  return price;
}
