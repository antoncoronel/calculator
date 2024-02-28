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
    const current = document.querySelector(".current");
    current.textContent = appendStr;
}

function displayCalcClear(){
    const current = document.querySelector(".current");
    const previous = document.querySelector(".previous");
    const operator = document.querySelector(".op");
    current.innerHTML = "";
    previous.innerHTML = "";
    operator.innerHTML = "";
    console.log("run");
}

let appendStr = "";

const numButton = document.querySelectorAll("#num");
const operatorButton = document.querySelectorAll("#operate");
const equalsButton = document.querySelector("#equals")
const previousDisplay = document.querySelector('.previous');
const currentDisplay = document.querySelector('.current');
const operatorDisplay = document.querySelector(".op");

numButton.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.textContent;
        appendStr += value;
        displayCalcNum();
    })
});

operatorButton.forEach(button => {
    button.addEventListener('click', (e) => {
        const operator = e.target.textContent;
        console.log('operator clicked');
        if(previousDisplay.innerHTML == ""){ //before operator has been pressed
            previousDisplay.innerHTML = appendStr;
            operatorDisplay.innerHTML = operator;
            appendStr = "";
            currentDisplay.innerHTML = "";
        }
        else if (previousDisplay.innerHTML != "" && currentDisplay.innerHTML != ""){ //operator has been pressed with a second number
            const ans = operate(parseFloat(previousDisplay.innerHTML), parseFloat(currentDisplay.innerHTML), operator);
            currentDisplay.innerHTML = ans;
        }

    })
});

equalsButton.addEventListener('click', () => {
    console.log("equals");
    if (previousDisplay.innerHTML != "" && currentDisplay.innerHTML != ""){
        const ans = operate(parseFloat(previousDisplay.innerHTML), parseFloat(currentDisplay.innerHTML), operatorDisplay.innerHTML);
        displayCalcClear();
        currentDisplay.innerHTML = ans;
    }
})
