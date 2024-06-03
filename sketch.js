let moveCount = 0;
var decisionArray = [];
for (var i = 0; i < 3; i++) {
  decisionArray[i] = [];
} //for

function setup() {
  createCanvas(400, 400);
  background("yellow");
  line(0, 133, 400, 133);
  line(0, 266, 400, 266);
  line(133, 0, 133, 400);
  line(266, 0, 266, 400);
  initArray(decisionArray);
  console.log(decisionArray[0][0]);
} //setup

function initArray(x) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      x[i][j] = "0";
    }
  }
}
function outputMove() {
  if (
    mouseX > 0 &&
    mouseX < 133 &&
    mouseY > 0 &&
    mouseY < 133 &&
    mouseIsPressed &&
    decisionArray[0][0] == "0"
  ) {
    if (moveCount % 2 == 0) {
      drawX(1);
      moveCount++;
      decisionArray[0][0] = "X";
      consoleOutput(decisionArray);
    } //if
    else {
      drawCircle(1);
      moveCount++;
      decisionArray[0][0] = "O";
      consoleOutput(decisionArray);
    } //else
  } //if
  if (
    mouseX > 133 &&
    mouseX < 266 &&
    mouseY > 0 &&
    mouseY < 133 &&
    mouseIsPressed &&
    decisionArray[0][1] == "0"
  ) {
    if (moveCount % 2 == 0) {
      drawX(2);
      moveCount++;
      decisionArray[0][1] = "X";
      consoleOutput(decisionArray);
    }
    else {
      drawCircle(2);
      moveCount++;
      decisionArray[0][1] = "O";
      consoleOutput(decisionArray);
    }//end
  }
  if (
    mouseX > 266 &&
    mouseX < 400 &&
    mouseY > 0 &&
    mouseY < 133 &&
    mouseIsPressed &&
    decisionArray[0][2] == "0"
  ) {
    if (moveCount % 2 == 0) {
      drawX(3);
      moveCount++;
      decisionArray[0][2] = "X";
      consoleOutput(decisionArray);
    } //if
    else {
      drawCircle(3);
      moveCount++;
      decisionArray[0][2] = "O";
      consoleOutput(decisionArray);
    }
  }
  if (
    mouseX > 0 &&
    mouseX < 133 &&
    mouseY > 133 &&
    mouseY < 266 &&
    mouseIsPressed &&
    decisionArray[1][0] == "0"
  ) {
    if (moveCount % 2 == 0) {
      drawX(4);
      moveCount++;
      decisionArray[1][0] = "X";
      consoleOutput(decisionArray);
    }
    else {
      drawCircle(4);
      moveCount++;
      decisionArray[1][0] = "O";
      consoleOutput(decisionArray);
    }
  }
  if (
    mouseX > 133 &&
    mouseX < 266 &&
    mouseY > 133 &&
    mouseY < 266 &&
    mouseIsPressed &&
    decisionArray[1][1] == "0"
  ) {
    if (moveCount % 2 == 0) {
      drawX(5);
      moveCount++;
      decisionArray[1][1] = "X";
      consoleOutput(decisionArray);
    } //if
    else {
      drawCircle(5);
      moveCount++;
      decisionArray[1][1] = "O";
      consoleOutput(decisionArray);
    } //else
  } //if

  if (
    mouseX > 266 &&
    mouseX < 400 &&
    mouseY > 133 &&
    mouseY < 266 &&
    mouseIsPressed &&
    decisionArray[1][2] == "0"
  ) {
    if (moveCount % 2 == 0) {
      drawX(6);
      moveCount++;
      decisionArray[1][2] = "X";
      consoleOutput(decisionArray);
    } //if
    else {
      drawCircle(6);
      moveCount++;
      decisionArray[1][2] = "O";
      consoleOutput(decisionArray);
    }//end
  }

  if (
    mouseX > 0 &&
    mouseX < 133 &&
    mouseY > 266 &&
    mouseY < 400 &&
    mouseIsPressed &&
    decisionArray[2][0] == "0"
  ) {
    if (moveCount % 2 == 0) {
      drawX(7);
      moveCount++;
      decisionArray[2][0] = "X";
      consoleOutput(decisionArray);
    } //if
    else {
      drawCircle(7);
      moveCount++;
      decisionArray[2][0] = "O";
      consoleOutput(decisionArray);
    }
  }

  if (
    mouseX > 133 &&
    mouseX < 266 &&
    mouseY > 266 &&
    mouseY < 400 &&
    mouseIsPressed &&
    decisionArray[2][1] == "0"
  ) {
    if (moveCount % 2 == 0) {
      drawX(8);
      moveCount++;
      decisionArray[2][1] = "X";
      consoleOutput(decisionArray);
    } //if
    else {
      drawCircle(8);
      moveCount++;
      decisionArray[2][1] = "O";
      consoleOutput(decisionArray);
    }
  }

  if (
    mouseX > 266 &&
    mouseX < 400 &&
    mouseY > 266 &&
    mouseY < 400 &&
    mouseIsPressed &&
    decisionArray[2][2] == "0"
  ) {
    if (moveCount % 2 == 0) {
      drawX(9);
      moveCount++;
      decisionArray[2][2] = "X";
      consoleOutput(decisionArray);
    }
    else {
      drawCircle(9);
      moveCount++;
      decisionArray[2][2] = "O";
      consoleOutput(decisionArray);
    } 
  }
}

function checkWin(n){
    if (
    // horizontal
    n[0][0] == n[0][1] && n[0][0] == n[0][2] && n[0][0]!="0" ||
    n[1][0] == n[1][1] && n[1][0] == n[1][2] && n[1][0]!="0" ||
    n[2][0] == n[2][1] && n[2][0] == n[2][2] && n[2][0]!="0" ||
    // vertical
    n[0][0] == n[1][0] && n[0][0] == n[2][0] && n[0][0]!="0" ||
    n[0][1] == n[1][1] && n[0][1] == n[2][1] && n[0][1]!="0" ||
    n[0][2] == n[1][2] && n[0][2] == n[2][2] && n[0][2]!="0" ||
    // diagonal
    n[0][0] == n[1][1] && n[0][0] == n[2][2] && n[0][0]!="0" ||
    n[0][2] == n[1][1] && n[0][2] == n[2][0] && n[0][2]!="0"
  ) {
     if (moveCount % 2 == 1) {
     noLoop()
      createCanvas(400,400)
      background('yellow')
      textSize(40)
      fill('black')
      textAlign(CENTER<CENTER)
      text('Game Over!',100,200)
      textAlign(CENTER<CENTER)
      text('X Wins!', 140,260)
  }
     else {
     noLoop()
      createCanvas(400,400)
      background('yellow')
      textSize(60)
      fill('black')
      textAlign(CENTER<CENTER)
      text('Game Over!',100,200)
      textAlign(CENTER<CENTER)
      text('O Wins!', 140,260)
     }// else if
    }
     else{
     if (moveCount == 9){
     noLoop()
      createCanvas(400,400)
      background('yellow')
      textSize(40)
      fill('black')
      text('Game Over!',100,200)
      text('Tie!', 170 ,260)  
  }
} //end
}
function consoleOutput(x) {
  for (var i = 0; i < 3; i++) {
    print(i + ": " + x[i][0] + " " + x[i][1] + " " + x[i][2] + " ");
  } //endfor
} //consoleoutput

function drawX(n) {
  textSize(15)  
  fill('black')
  text(n, 66 + ((n - 1) % 3) * 134, 66 + floor((n - 1) / 3) * 134);
  line(
    ((n - 1) % 3) * 134 + 33,
    floor((n - 1) / 3) * 134 + 33,
    ((n - 1) % 3) * 134 + 100,
    floor((n - 1) / 3) * 134 + 100
  );
  line(
    ((n - 1) % 3) * 134 + 100,
    floor((n - 1) / 3) * 134 + 33,
    ((n - 1) % 3) * 134 + 33,
    floor((n - 1) / 3) * 134 + 100
  );
} //draw

function drawCircle(n) {
  fill('white')
  circle(66 + ((n - 1) % 3) * 134, 66 + floor((n - 1) / 3) * 134, 100);
  textSize(15)  
  fill('black')
  text(n, 66 + ((n - 1) % 3) * 134, 66 + floor((n - 1) / 3) * 134);
} //drawCircle

function draw() {
  outputMove();
  checkWin(decisionArray)
} //draw