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
            if(b === 0){
                return 'error'
            }
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
    appendStr = "";
    console.log("run");
}

let appendStr = "";

const numButton = document.querySelectorAll("#num");
const operatorButton = document.querySelectorAll("#operate");
const equalsButton = document.querySelector(".equals")
const previousDisplay = document.querySelector('.previous');
const currentDisplay = document.querySelector('.current');
const operatorDisplay = document.querySelector(".op");
const clearButton = document.querySelector("#clear");

numButton.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.textContent;
        if(appendStr.length > 36){
            return;
        }
        appendStr += value;
        displayCalcNum();
    })
});

operatorButton.forEach(button => {
    button.addEventListener('click', (e) => {
        const operator = e.target.textContent;
        console.log('operator clicked');
        if(previousDisplay.innerHTML === ""){ //before operator has been pressed
            previousDisplay.innerHTML = appendStr;
            operatorDisplay.innerHTML = operator;
            appendStr = "";
            currentDisplay.innerHTML = "";
        }
        else if (previousDisplay.innerHTML != "" && currentDisplay.innerHTML != ""){ //operator has been pressed with a second number
            const ans = operate(parseFloat(previousDisplay.innerHTML), parseFloat(currentDisplay.innerHTML), operatorDisplay.innerHTML);
            displayCalcClear();
            appendStr = "";
            previousDisplay.innerHTML = ans;
            operatorDisplay.innerHTML = operator;
        }

    })
});

equalsButton.addEventListener('click', () => {
    console.log("equals");
    if (previousDisplay.innerHTML != "" && currentDisplay.innerHTML != "" && operatorDisplay != ""){
        const ans = operate(parseFloat(previousDisplay.innerHTML), parseFloat(currentDisplay.innerHTML), operatorDisplay.innerHTML);
        displayCalcClear();
        if(ans === 'error'){
            currentDisplay.innerHTML = "THE UNIVERSE HAS BROKE";
            return;
        }
        if(ans.toString().length > 36){
            displayCalcClear();
            currentDisplay.innerHTML = 'Too many digits';
            return
        }
        currentDisplay.innerHTML = ans;
        appendStr = ans;
    }
})

clearButton.addEventListener('click', () => {
    displayCalcClear();
})