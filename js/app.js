/*-------------------------------- Constants --------------------------------*/
const squareEls = document.querySelectorAll(".sqr");
const messageEL = document.querySelector("h2");

/*---------------------------- Variables (state) ----------------------------*/
let turn = false;
let winner = 0;
let tie = 0;
let xArr = [];
let oArr = [];
/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/

squareEls.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.textContent === "" && winner == 0 && turn == false) {
      element.innerHTML = "X";
      turn = true;
      xArr.push(element.id);
      tie++;
      check();
    }
    if (element.textContent === "" && winner == 0 && turn == true) {
      element.innerHTML = "O";
      turn = false;
      oArr.push(element.id);
      tie++;
      check();
    }
    if (tie == 9 && winner == 0) {
      messageEL.innerHTML = "tie";
    }
  });
});

const check = () => {
  if (xArr.includes("0") && xArr.includes("1") && xArr.includes("2")) {
    winner++;
    messageEL.innerHTML = "p1 won";
  }
  if (xArr.includes("3") && xArr.includes("4") && xArr.includes("5")) {
    winner++;
    messageEL.innerHTML = "p1 won";
  }
  if (xArr.includes("6") && xArr.includes("7") && xArr.includes("8")) {
    winner++;
    messageEL.innerHTML = "p1 won";
  }
  if (xArr.includes("0") && xArr.includes("3") && xArr.includes("6")) {
    winner++;
    messageEL.innerHTML = "p1 won";
  }
  if (xArr.includes("1") && xArr.includes("4") && xArr.includes("7")) {
    winner++;
    messageEL.innerHTML = "p1 won";
  }
  if (xArr.includes("2") && xArr.includes("5") && xArr.includes("8")) {
    winner++;
    messageEL.innerHTML = "p1 won";
  }
  if (xArr.includes("0") && xArr.includes("4") && xArr.includes("8")) {
    winner++;
    messageEL.innerHTML = "p1 won";
  }
  if (xArr.includes("2") && xArr.includes("4") && xArr.includes("6")) {
    winner++;
    messageEL.innerHTML = "p1 won";
  }

  //--------------------------------oooooo

  if (oArr.includes("0") && oArr.includes("1") && oArr.includes("2")) {
    winner++;
    messageEL.innerHTML = "p2 won";
  }
  if (oArr.includes("3") && oArr.includes("4") && oArr.includes("5")) {
    winner++;
    messageEL.innerHTML = "p2 won";
  }
  if (oArr.includes("6") && oArr.includes("7") && oArr.includes("8")) {
    winner++;
    messageEL.innerHTML = "p2 won";
  }
  if (oArr.includes("0") && oArr.includes("3") && oArr.includes("6")) {
    winner++;
    messageEL.innerHTML = "p2 won";
  }
  if (oArr.includes("1") && oArr.includes("4") && oArr.includes("7")) {
    winner++;
    messageEL.innerHTML = "p2 won";
  }
  if (oArr.includes("2") && oArr.includes("5") && oArr.includes("8")) {
    winner++;
    messageEL.innerHTML = "p2 won";
  }
  if (oArr.includes("0") && oArr.includes("4") && oArr.includes("8")) {
    winner++;
    messageEL.innerHTML = "p2 won";
  }
  if (oArr.includes("2") && oArr.includes("4") && oArr.includes("6")) {
    winner++;
    messageEL.innerHTML = "p2 won";
  }
};

function reseter() {
  squareEls.forEach((element) => {
    element.innerHTML = "";
    winner = 0;
    tie = 0;
    xArr = [];
    oArr = [];
    messageEL.innerHTML = "message";
    turn = false;
  });
}
document.querySelector("button").addEventListener("click", reseter);
