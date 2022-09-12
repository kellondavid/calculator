let currentNum = "0";
let currentNum2 = "";
let prevNum = "";
let prevNum2 = "";
let operator = "";
let clearOnNextNum = true; //clear the output when a new number is pressed
const numberButtons = document.querySelectorAll(".num-btns");
const operatorButtons = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const dot = document.querySelector(".dot");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const currentDisplay = document.querySelector(".current-number");
const prevDisplay = document.querySelector(".previous-number");
currentDisplay.textContent = "0";

//add, subtract, multiply, and divide functions
function addFn(num1, num2) {
  return num1 + num2;
}

function subFn(num1, num2) {
  return num1 - num2;
}

function multiFn(num1, num2) {
  return num1 * num2;
}

function divFn(num1, num2) {
  return num1 / num2;
}

//operator function
function operate(a, b, c) {
  const num1 = parseFloat(a);
  const num2 = parseFloat(b);
  let output = 0;
  try {
    switch (c) {
      case "+":
        output = addFn(num1, num2);
        break;

      case "x":
        if (num1 === 0 || num2 === 0) {
          output = "ERROR";
        } else {
          output = multiFn(num1, num2);
        }
        break;

      case "-":
        output = subFn(num1, num2);
        break;

      case "/":
        if (num1 === 0 || num2 === 0) {
          output = "ERROR";
        } else {
          output = divFn(num1, num2);
        }
        break;
    }
  } catch (e) {
    currentDisplay.textContent = ("There's an error: ", e);
  }
  if (output === "ERROR") {
    clearOnNextNum = true;
    currentNum = "";
    currentDisplay.textContent = "ERROR :(";
    deleteBtn.disabled = true;
  } else {
    currentDisplay.textContent = Math.round(output * 100000) / 100000;
    currentNum = output;
    clearOnNextNum = true;
    deleteBtn.disabled = true;
  }
}

equal.addEventListener("click", (e) => {
  if (currentNum != "" && prevNum != "") {
    prevNum2 = currentNum;
    currentNum2 = operate(prevNum, currentNum, operator);
    prevDisplay.textContent = prevNum + " " + operator + " " + prevNum2 + " =";
  }
  prevNum = "";
});

//button inputs for numbers and operators
numberButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleNumber(e.target.textContent);
  });
});

function handleNumber(number) {
  if (clearOnNextNum === true) {
    clearOnNextNum = false;
    currentNum = "";
  }
  currentNum += number;
  currentDisplay.textContent = currentNum;
  deleteBtn.disabled = false;
}

operatorButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleOperator(e.target.textContent);
  });
});

function handleOperator(op) {
  clearOnNextNum = false;

  //chain operate without the need to press '=' after each operator
  if (prevNum != "" && currentNum != "" && operator != "") {
    operate(prevNum, currentNum, operator);
  }
  //

  if (currentNum != "") {
    operator = op;
    prevNum = currentNum;
    prevDisplay.textContent = prevNum + " " + operator;
    currentNum = "";
    currentDisplay.textContent = "";
  }
}

function addDot() {
  clearOnNextNum = false;
  if (deleteBtn.disabled === true) {
    currentNum = ".";
    currentDisplay.textContent = ".";
  } else if (!currentDisplay.textContent.includes(".")) {
    currentNum += ".";
    currentDisplay.textContent = currentNum;
  }
}

dot.addEventListener("click", () => {
  addDot();
});

//clear button
function reset() {
  clearOnNextNum = true;
  currentDisplay.textContent = "0";
  prevDisplay.textContent = "";
  currentNum = "0";
  prevNum = "";
}

clearBtn.addEventListener("click", reset);

//delete button
function delNumber() {
  currentDisplay.textContent = currentDisplay.textContent
    .toString()
    .slice(0, -1);
  currentNum = currentDisplay.textContent;
}

deleteBtn.addEventListener("click", delNumber);

//keyboard inputs
window.addEventListener("keydown", handleKeyboard);

function handleKeyboard(e) {
  e.preventDefault();
  if (e.key >= 0 && e.key <= 9) {
    handleNumber(e.key);
  }
  if (
    e.key === "Enter" ||
    (e.key === "=" && currentNum != "" && prevNum != "")
  ) {
    if (currentNum != "" && prevNum != "") {
      prevNum2 = currentNum;
      currentNum2 = operate(prevNum, currentNum, operator);
      prevDisplay.textContent =
        prevNum + " " + operator + " " + prevNum2 + " =";
    }
    prevNum = "";
  }
  if (e.key === "+" || e.key === "-" || e.key === "/") {
    handleOperator(e.key);
  }
  if (e.key === "*" || e.key == "x") {
    handleOperator("x");
  }
  if (e.key === ".") {
    addDot();
  }
  if (e.key === "Backspace") {
    deleteBtn.click();
  }
}
