const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");

const inputAmt = document.querySelector("#from-amount");
const outputAmt = document.querySelector("#to-amount");
const btn = document.querySelector("#submit");
const fromCurr = document.querySelector("#from-select");
const toCurr = document.querySelector("#to-select");
const msg = document.querySelector(".message");

const swapBtn = document.querySelector("#swap-btn");

for (let select of dropdowns) {
  for (code in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = code;
    newOption.value = code;
    if (select.name === "from" && code === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && code === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
}

btn.addEventListener("click", async (event) => {
  event.preventDefault();
  let amount = parseFloat(inputAmt.value);
  let URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[toCurr.value.toLowerCase()];

  // Calculate the converted amount
  let convertedAmount = (amount * rate).toFixed(3); // Convert to string with 3 decimal places

  // Update the output elements
  outputAmt.value = convertedAmount;
  msg.innerText = `${amount.toFixed(3)} ${
    fromCurr.value
  } is equals ${convertedAmount} ${toCurr.value}`;
});

swapBtn.addEventListener("click", () => {
  [fromCurr.value, toCurr.value] = [toCurr.value, fromCurr.value];
  [inputAmt.value, outputAmt.value] = [outputAmt.value, inputAmt.value];
});
