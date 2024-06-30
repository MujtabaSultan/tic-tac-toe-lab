/*-------------------------------- Constants --------------------------------*/
squareEL = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const messageEL = document.querySelector("h2");
/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn = 0;
let winner;
let tie = 0;
/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/
const render = () => {};
const update = () => {
  for (let index = 0; index < squareEL.length; index++) {}
};

const init = () => {
  board = ["", "", "", "", "", "", "", "", ""];
  turn = "X";
  winner = false;
  tie = false;
  render();
};

/*----------------------------- Event Listeners -----------------------------*/
