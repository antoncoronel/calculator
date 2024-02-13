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
    switch(op){
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

console.log(add(5, 4));
console.log(subtract(5, 4));
console.log(multiply(5,4));
console.log(divide(5,4));