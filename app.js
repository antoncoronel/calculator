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


let appendNum = "";
const box = document.querySelectorAll(".box");

for (let i = 0; i < 16; i++){
    box[i].addEventListener("click", (e) => {
        const value = e.target.textContent;
        appendNum += value;
        alert(appendNum);
    });

}

console.log(add(5, 4));
console.log(subtract(5, 4));
console.log(multiply(5,4));
console.log(divide(5,4));