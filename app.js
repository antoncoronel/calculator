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

const wrapper = document.querySelector('div.wrapper');

for(let i = 0; i < 16; i++){
    const box = document.createElement("div");
    box.id = "box";
    box.style.flex = `1 0 calc(100% / 5)`; // number of boxes per row
    box.style.width = `calc(100% / 5)`;//set width of box
    box.style.height = box.style.width;
    box.style.border = "1px solid black"; // Set border style
    wrapper.appendChild(box);
}

console.log(add(5, 4));
console.log(subtract(5, 4));
console.log(multiply(5,4));
console.log(divide(5,4));