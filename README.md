LIVE: https://kellondavid.github.io/calculator/

General thoughts: Initially, I thought the project was fairly easy. Writing the operator functions and utilizing switch expression to get the calculator to work didn't take too long, and I was finished with majority of the project in a short amount of time. However, I was stuck on one issue for over 15 hours... After an output was created from the calculator, I was unable to figure out how to clear the output when a new number is entered. For example, when I input "2 + 5", the calculator would output "5." Afterwards, when I input a new number (let's say 3), rather than replacing the output "5" with "3", the "3" would concatenate with the string of the output, which displayed "53." Eventually, I was able to solve the issue by creating a new variable ```let clearOnNextNum = false;``` , adding the variable into handleOperator function as well ass addDot function, and making it ```true``` at the bottom of the operate function. Then, in the handleNumber function, I added 
```
if (clearOnNextNum === true) {
    clearOnNextNum = false;
    currentNum = "";
}
```

What this essentially does is that when an output is created, the variable will cause the next number input to clear the previous number, and remove this catch when an operator button is pressed.

Although being stuck on a single issue for over 15 hours was frustrating, being able to solve the issue gave me a great feeling of accomplishment.

What I Learned:

    - how to uitilize switch expression
    - how to add keyboard inputs
    - how to convert a string into number using parseFloat
    - to never give up when you're stuck