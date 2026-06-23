function addition() {
    let x = parseInt(prompt("What is x?"));
    let y = parseInt(prompt("What is y?"));
    let sum = x + y;
    return sum;
}

function subtraction() {
    let x = parseInt(prompt("What is x?"));
    let y = parseInt(prompt("What is y?"));
    let sum = x - y;
    return sum;
}

function multiplication() {
    let x = parseInt(prompt("What is x?"));
    let y = parseInt(prompt("What is y?"));
    let sum = x * y;
    return sum;
}

function division() {
    let x = parseInt(prompt("What is x?"));
    let y = parseInt(prompt("What is y?"));
    let sum = x / y;
    return sum;
}

console.log(addition());
console.log(subtraction());
console.log(multiplication());
console.log(division());