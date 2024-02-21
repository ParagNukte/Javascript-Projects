let compScore = 0;
let selfScore = 0;
let msg = document.querySelector("#MoveSelector");

function generateCompMove() {
  let options = ["rock", "paper", "sissor"];
  let optIdx = Math.floor(Math.random() * 3);
  return options[optIdx];
}

const resultDraw = () => {
  msg.innerText = "Draw";
  msg.style.backgroundColor = "grey"; // Reset the background color
};

function checkWhoWin(selfClickedValue) {
  let selfMove = selfClickedValue;
  let whoWin = "";
  console.log("usermove", selfMove);
  let compMove = generateCompMove();
  console.log("compmove", compMove);

  if (selfMove === compMove) resultDraw();
  if (
    (selfMove === "rock" && compMove === "paper") ||
    (selfMove === "paper" && compMove === "sissor") ||
    (selfMove === "sissor" && compMove === "rock")
  ) {
    whoWin = "compWin";
    compScore += 1;
  }
  if (
    (selfMove === "paper" && compMove === "rock") ||
    (selfMove === "sissor" && compMove === "paper") ||
    (selfMove === "rock" && compMove === "sissor")
  ) {
    whoWin = "selfWin";
    selfScore += 1;
  }
  displayResult(selfMove, compMove, whoWin);
}

function displayResult(selfMove, compMove, whoWin) {
  if (whoWin === "selfWin") {
    msg.innerText = `You won. ${selfMove} beats ${compMove}`;
    msg.style.backgroundColor = "green"; // Change the background color to green
  }
  if (whoWin === "compWin") {
    msg.innerText = `Comp Won. ${compMove} beats your ${selfMove}`;
    msg.style.backgroundColor = "red"; // Reset the background color
  }

  document.querySelector("#selfResult").innerText = `${selfScore}`;
  document.querySelector("#compResult").innerText = ` ${compScore}`;
}
