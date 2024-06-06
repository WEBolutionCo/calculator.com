let input = document.getElementById("input");

function addToInput(value) {
  if (input.innerHTML.length < 20) {
    input.innerHTML += value;
  }
}

function pressAllClear() {
  input.innerHTML = "";
}

function removeLastCharacter() {
  let currentInput = input.innerHTML;
  input.innerHTML = currentInput.substring(0, currentInput.length - 1);
}

let calculatorEnabled = true;

function toggleCalculator() {
  calculatorEnabled = !calculatorEnabled;
  input.innerHTML = "";
  input.style.opacity = calculatorEnabled ? 1 : 0.5;
}

function calculate() {
  if (calculatorEnabled) {
    try {
      let expression = input.innerHTML.trim();
      let result = eval(expression);
      if (!Number.isFinite(result)) {
        console.error("Invalid result:", result);
        input.innerHTML = "Math Error";
      } else {
        input.innerHTML = result;
      }
    } catch (error) {
      console.error("Calculation error:", error);
      input.innerHTML = "Syntax Error";
    }
  } else {
    input.innerHTML = " ";
  }
}