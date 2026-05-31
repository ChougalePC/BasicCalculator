


function add() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const add = num1 + num2;
     // You can change this to perform other operations
    document.getElementById('result').innerText = `Result: ${add}`;
}

function subtract() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const subtract = num1 - num2;
     // You can change this to perform other operations
    document.getElementById('result').innerText = `Result: ${subtract}`;
}

function multiply() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const multiply = num1 * num2;
     // You can change this to perform other operations
    document.getElementById('result').innerText = `Result: ${multiply}`;
}

function divide() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (num2 === 0) {
        document.getElementById('result').innerText = 'Error: Division by zero';
    } else {
        const divide = num1 / num2;
         // You can change this to perform other operations
        document.getElementById('result').innerText = `Result: ${divide}`;
    }
}   