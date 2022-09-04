let currentNum = "";
let prevNum = "";
let operator = "";
let clearOnNextNum = false;
const numberButtons = document.querySelectorAll(".num-btns")
const operatorButtons = document.querySelectorAll(".operator")
const equal = document.querySelector(".equal");
const dot = document.querySelector(".dot");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const currentDisplay = document.querySelector(".current-number");
const prevDisplay = document.querySelector(".previous-number");


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
function operate (a, b, c) {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);
    let output = 0;
    try {
  
      switch(c) {
        case '+':
          output = addFn(num1, num2);
          break;
  
        case 'x':
          output = multiFn(num1, num2);
          break;
  
        case '-':
          output = subFn(num1, num2);
          break;
  
       case '/':
          if (num2 === 0) {
            output = "ERROR"
          } else {
          output = divFn(num1, num2);
          }
          break;
      }
    }
    catch(e) {
      currentDisplay.textContent = ("There's an error: ", e)
    };
    currentDisplay.textContent = Math.round(output *100000) / 100000;
    currentNum = output;
    clearOnNextNum = true;
}

equal.addEventListener("click", (e) => {
  if (currentNum != "" && prevNum != "") {
  operate(prevNum, currentNum, operator);
  }
  prevNum = "";
});

//button inputs for numbers and operators
numberButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        handleNumber(e.target.textContent);
    });
});

function handleNumber(number) {
        if (clearOnNextNum) {
            clearOnNextNum = false;
            currentNum = "";
        }
        currentNum += number;
        currentDisplay.textContent = currentNum;
}

operatorButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleOperator(e.target.textContent);
  });
});

function handleOperator(op) {
  clearOnNextNum = false;
  if (currentNum != "") {
    operator = op
    prevNum = currentNum
    prevDisplay.textContent = prevNum + " " + operator;
    currentNum = ""
    currentDisplay.textContent = "";
  }
}

function addDot() {
  clearOnNextNum = false;
  if (!currentNum.includes(".")) {
    currentNum += ".";
    currentDisplay.textContent = currentNum;
  }
}

dot.addEventListener("click", () => {
  addDot();
})

//clear button
function reset() {
  currentDisplay.textContent = "";
  prevDisplay.textContent = "";
  currentNum = "";
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