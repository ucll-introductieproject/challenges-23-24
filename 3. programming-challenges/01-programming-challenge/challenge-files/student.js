function myFirstFunction(bike) {
  forward(bike);
}

function twiceForward(bike) {
  forward(bike);
  forward(bike);
}

function thriceForward(bike) {
  forward(bike);
  forward(bike);
  forward(bike);
}

function forward4(bike) {
  forward(bike);
  forward(bike);
  forward(bike);
  forward(bike);
}

function forward5(bike) {
  let i = 5;
  while (i > 0) {
    forward(bike);
    i = i - 1;
  }
}

function forward10(bike) {
  let i = 10;
  while (i > 0) {
    forward(bike);
    i = i - 1;
  }
}

function right(bike) {
  turnRight(bike);
  forward(bike);
}

function ellShape(bike) {
  forward5(bike);
  turnRight(bike);
  forward4(bike);
}

function uTurn(bike) {
  thriceForward(bike);
  turnRight(bike);
  forward10(bike);
  turnRight(bike);
  twiceForward(bike);
}

function crookedUTurn(bike) {
  let x = 7;
  while (x > 0) {
    forward(bike);
    x = x - 1;
  }
  turnRight(bike);
  let y = 9;
  while (y > 0) {
    forward(bike);
    y = y - 1;
  }
  turnRight(bike);
  thriceForward(bike);
}

function forwardUntilWall(bike) {
  while (!sensor(bike)) {
    forward(bike);
  }
}

function smartEllShape(bike) {
  forwardUntilWall(bike);
  turnRight(bike);
  forwardUntilWall(bike);
}

function spiral(car) {
  while (!sensor(car)) {
    forwardUntilWall(car);
    turnRight(car);
  }
}

function turnLeft(car) {
  let t = 3;
  while (t > 0) {
    turnRight(car);
    t = t - 1;
  }
}

function left(car) {
  turnLeft(car);
  forwardUntilWall(car);
}

function isNotDestination(car) {
  forwardUntilWall(car);
  turnLeft(car);
  if (sensor(car)) {
    turnRight(car);
    turnRight(car);
    if (sensor(car)) {
      turnLeft(car);
      return false;
    }
  }
}

function slalom(car) {
  while (true) {
    forwardUntilWall(car);
    turnLeft(car);
    if (sensor(car)) {
      turnRight(car);
      turnRight(car);
      if (sensor(car)) {
        turnLeft(car);
        return false;
      }
    }
  }
}

function leftOrRight(car) {
  slalom(car);
}

function incompleteU(car) {
  if (sensor(car)) {
    turnRight(car);
    turnRight(car);
    slalom(car);
  } else {
    slalom(car);
  }
}

function whichDirection(car) {
  while (sensor(car)) {
    turnRight(car);
  }
  incompleteU(car);
}

function sensorRight(car) {
  turnRight(car);
  let s = sensor(car);
  turnLeft(car);
  return s;
}

function firstRight(car) {
  while (sensorRight(car)) {
    forward(car);
  }
  turnRight(car);
  forwardUntilWall(car);
}

function sensorLeft(car) {
  turnLeft(car);
  let s = sensor(car);
  turnRight(car);
  return s;
}

function firstLeft(car) {
  while (sensorLeft(car)) {
    forward(car);
  }
  turnLeft(car);
  forwardUntilWall(car);
}

function zigZag(car) {
  firstRight(car);
  forwardUntilWall(car);
  turnLeft(car);
  forward(car);
  firstLeft(car);
}
