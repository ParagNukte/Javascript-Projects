const secs = document.querySelector(".secs");
const mins = document.querySelector(".mins");
const hrs = document.querySelector(".hrs");
const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");

let secondsElapsed = 0; // Use a single variable to track elapsed seconds
let intervalId; // Store the interval ID for later clearing

function toggleButtons(isStart) {
  startBtn.disabled = !isStart; // Directly set button states based on the argument
  stopBtn.disabled = isStart;
}

function updateDisplay() {
  const hours = Math.floor(secondsElapsed / 3600);
  const minutes = Math.floor((secondsElapsed % 3600) / 60);
  const seconds = secondsElapsed % 60;

  secs.textContent = padZero(seconds); // Use textContent for efficiency
  mins.textContent = padZero(minutes);
  hrs.textContent = padZero(hours);
}
function resetDisplay() {
  secs.textContent = "00"; // Use textContent for efficiency
  mins.textContent ="00";
  hrs.textContent = "00";
}
function padZero(number) {
  return number < 10 ? "0" + number : number;
}

function startTimer() {
  secondsElapsed = 0; // Reset timer on start
  updateDisplay();
  intervalId = setInterval(incrementTimer, 1000);
  toggleButtons(false); // Disable start, enable stop
}

function incrementTimer() {
  secondsElapsed++;
  updateDisplay();
}

function stopTimer() {
  clearInterval(intervalId); // Clear the single interval
  resetDisplay();
  toggleButtons(true); // Enable start, disable stop
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
