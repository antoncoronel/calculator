function add(a, b){
    return a + b;
};

function subtract(a, b){
    return a - b;
};

function multiply(a, b){
    return a*b;
};

function divide(a, b){
    return a/b;
};

function operate(a, b, op){
    switch(op){ //selects which operator to use
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
    }
};

function displayCalcNum(){
    const screen = document.querySelector(".screen");
    screen.textContent = appendStr;
}

function displayCalcClear(){
    const screen = document.querySelector(".screen");
    screen.textContent = "";
}

class Calculator {
    constructor(previousNum, currentNum){
        this.previousNum = previousNum;
        this.currentNum = currentNum;
    }

    appendNum(num){
        this.currentNum = num;
        console.log(this.currentNum);
    }

    updateDisplay(){
        this.currentNumDisplay.innerText = this.currentNum;
    }
}

let appendStr = "";

const numButton = document.querySelectorAll("#num");
const opButton = document.querySelectorAll("#operate");
const previousNumDisplay = document.querySelectorAll('#previous');
const currentNumDisplay = document.querySelectorAll('#currentNum');

const calc = new Calculator(previousNumDisplay.innerText, currentNumDisplay.innerText);

numButton.forEach(button => {
    button.addEventListener('click', () => {
        calc.appendNum(button.innerText);
        calc.updateDisplay();
    })
})

