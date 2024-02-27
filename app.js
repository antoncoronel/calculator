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
    const screen = document.querySelector(".current");
    screen.textContent = appendStr;
}

function displayCalcClear(){
    const screen = document.querySelector(".current");
    screen.textContent = "";
}

let appendStr = "";

const numButton = document.querySelectorAll("#num");
const operatorButton = document.querySelectorAll("#operate");
const previousDisplay = document.querySelector('.previous');
const currentDisplay = document.querySelector('.current');


numButton.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.textContent;
        appendStr += value;
        displayCalcNum();
    })
})

operatorButton.forEach(button => {
    button.addEventListener('click', (e) => {
        const operator = e.target.textContent;
        console.log('operator clicked');
        if(previousDisplay.innerHTML == ""){
            previousDisplay.innerHTML = appendStr;
            appendStr = "";
        }
        else if (previousDisplay.innerHTML != ""){
            const ans = operate(previousDisplay.innerHTML, currentDisplay.innerHTML, operator);
            previousDisplay.innerHTML = "";
            currentDisplay.innerHTML = ans;
        }
    })
})


