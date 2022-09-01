let currentNum = "";
let prevNum = "";
let operator = "";
const numberButtons = document.querySelectorAll(".num-btns")
const operatorButtons = document.querySelectorAll(".operator")
const equal = document.querySelector(".equal");
const dot = document.querySelector(".dot");
const clear = document.querySelector(".clear");
const del = document.querySelector(".del");
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
    let output = 0;
    try {
  
      switch(c) {
        case '+':
          if (operator === "+")
          output = addFn(a, b);
          break;
  
        case 'x':
          if (operator === "x")
          output = multiFn(a, b);
          break;
  
        case '-':
          if (operator === "-")
          output = subFn(a, b);
          break;
  
       case '/': 
          if (operator === "/")
          output = divFn(a, b);
          break;
      }
    }
    catch(e) {
      console.log("There's an error: ", e)
    };
    currentDisplay.textContent = output;
}

equal.addEventListener("click", operate);

//button inputs
numberButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        handleNumber(e.target.textContent);
    });
});

function handleNumber(number) {
    if (currentNum.length <= 10) {
        currentNum += number;
        currentDisplay.textContent = currentNum;
    }
}

operatorButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleOperator(e.target.textContent);
  });
});

function handleOperator(op) {
  operator = op
  prevNum = currentNum
  prevDisplay.textContent = prevNum + " " + operator;
  currentNum = ""
  currentDisplay.textContent = "";
}
