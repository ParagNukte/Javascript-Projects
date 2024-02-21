let compScore = 0;
let selfScore = 0;
let selfMove = 0;
let whoWin = "";
let num = 0;

function myMove(selfClickedValue) {
  selfMove = selfClickedValue;
}

function checkWhoWin() {
  let comp = Math.floor(Math.random() * 3) + 1;
  if (
    (selfMove === 1 && comp === 2) ||
    (selfMove === 2 && comp === 3) ||
    (selfMove === 3 && comp === 1)
  ) {
    whoWin = "compWin";
    compScore += 1;
    return compScore;
  }
  if (
    (selfMove === 2 && comp === 1) ||
    (selfMove === 3 && comp === 2) ||
    (selfMove === 1 && comp === 3)
  ) {
    whoWin = "selfWin";
    selfScore += 1;
    return selfScore;
  }
  if (selfMove === comp) {
    return 0;
  }
}

function displayResult() {
  checkWhoWin();
  const button = document.querySelector("button");

  if (whoWin === "selfWin") {
    button.innerText = "You won";
    button.style.backgroundColor = "green"; // Change the background color to green
  } else if (whoWin === "compWin") {
    button.innerText = "Comp Won";
    button.style.backgroundColor = "red"; // Reset the background color
  } else {
    button.innerText = "Draw";
    button.style.backgroundColor = "grey"; // Reset the background color
  }
  whoWin = "";
  document.querySelector("#selfResult").innerText = `${selfScore}`;
  document.querySelector("#compResult").innerText = ` ${compScore}`;
}
