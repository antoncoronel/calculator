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

let appendStr = "";

const num = document.querySelectorAll("#num");
const op = document.querySelectorAll("#operate");

for (let i = 0; i < 10; i++){
    num[i].addEventListener("click", (e) => {
        const value = e.target.textContent;
        appendStr += value;
        displayCalcNum();
    });
}
for (let i = 0; i < 4; i++){
    op[i].addEventListener("click", (e) =>{
        const operator = e.target.textContent;
        var num1 = appendStr;

        appendStr = "";

        console.log(operator);
        displayCalcClear();

        var appendNum = operate(parseFloat(num1), 3, operator);
        appendStr = "";
        console.log(appendNum);
        appendStr = appendNum;
        }
    );
}

