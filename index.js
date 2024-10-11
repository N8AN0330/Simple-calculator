//Creating a calculate function for a button
function calculate() {

// Get user input
    const number1 = parseFloat(document.getElementById('number1').value);
    const operation = document.getElementById('operation').value.trim();
    const number2 = parseFloat(document.getElementById('number2').value);
    const resultElement = document.getElementById('result');
    let result;

// Validate user input
    if (isNaN(number1) || isNaN(number2)) {
        resultElement.textContent = "Invalid input. Please enter valid numbers.";
        return;
    }


//Operation
    if (operation === '+'){
        result = number1 + number2;
    } else if (operation === '-'){
        result = number1 - number2;
    } else if (operation === '*'){
        result = number1 * number2;
    } else if (operation === '/'){
        if (number2 === 0) {
            resultElement.textContent = "Error: Division by zero is not allowed.";
            return;
        }
        result = number1 / number2;
    } else {
        resultElement.textContent = "Invalid operation. Please use +, -, *, or /.";
        return;
    }

// Display result
    resultElement.textContent = `Result: ${result}`;
}
