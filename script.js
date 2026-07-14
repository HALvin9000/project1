function addition() {
    let x = parseInt(document.getElementById("num1").value);
    let y = parseInt(document.getElementById("num2").value);
    let total = x + y;
    
    document.getElementById("result").innerText = "Result: " + total;
}

function subtraction() {
    let x = parseInt(document.getElementById("num1").value);
    let y = parseInt(document.getElementById("num2").value);
    let total = x - y;

    document.getElementById("result").innerText = "Result: " + total;
}

function multiplication() {
    let x = parseInt(document.getElementById("num1").value);
    let y = parseInt(document.getElementById("num2").value);
    let total = x * y;

    document.getElementById("result").innerText = "Result: " + total;
}

function division() {
    let x = parseInt(document.getElementById("num1").value);
    let y = parseInt(document.getElementById("num2").value);
    let total = x / y;

    document.getElementById("result").innerText = "Result: " + total;
}