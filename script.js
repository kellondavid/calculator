let currentNum = "";
let prevNum = "";
let operator = "";
const numberButtons = document.querySelectorAll(".num-btns")
const equals = document.querySelector(".equals");
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
          output = addFn(a, b);
          break;
  
        case '*':
          output = multiFn(a, b);
          break;
  
        case '-':
          output = subFn(a, b);
          break;
  
       case '/': 
            output = divFn(a, b);
          break;
      }
    }
    catch(e) {
      console.log("There's an error: ", e)
    };
  
    return output;
}

//event listeners for buttons
// const one = document.getElementsByClassName("1")
// const two = document.getElementsByClassName("2")
// let choice



//display
// let display = document.getElementsByClassName('display')
// display = "";

//keyboard input listener
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