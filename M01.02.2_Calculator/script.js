
function getNumbers() {
    const firstNumber = parseFloat(prompt("Enter the first number: " ));
    if (isNaN(firstNumber) || firstNumber.trim().length === 0)
        return;

    const secondNumber = parseFloat(prompt('Enter the second number: '));
    if (isNaN(secondNumber) || secondNumber.trim().length === 0)
        return;

    return { firstNumber, secondNumber };
}

function add() {
    const { firstNumber, secondNumber } = getNumbers();
    const result = firstNumber + secondNumber;

    alert('The result is: ' + result);
}

function subtract() {
    const { firstNumber, secondNumber } = getNumbers();
    const result = firstNumber - secondNumber;

    alert('The result is: ' + result);
}

function multiply() {
    const { firstNumber, secondNumber } = getNumbers();
    const result = firstNumber * secondNumber;

    alert('The result is: ' + result);
}

function divide() {
    const { firstNumber, secondNumber } = getNumbers();
    const result = firstNumber / secondNumber;

    alert('The result is: ' + result);
}