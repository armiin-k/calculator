/* calculator backend */

/* global variables */
let initialNumbers = [];
let finalNumbers = [];
var firstDisplay = document.getElementById('display');
var secondDisplay = document.getElementById('operationDisplay');
var counter = 0;
var result = 0;

/* makes number buttons work */
function displayText (numValue) {
    if (numValue === parseInt(numValue, 10)) {
        firstDisplay.innerHTML += (numValue);
        number = numValue;
        initialNumbers.push(number);
        console.log(initialNumbers);
    }else if (numValue !== parseInt(numValue, 10) && counter == 0) {
        finalNumbers.push(initialNumbers.join(''));
        secondDisplay.innerHTML = finalNumbers + ' ' + numValue;
        initialNumbers = [];
        firstDisplay.innerHTML = '';
        counter += 1;
    }else if (numValue !== parseInt(numValue, 10) && counter == 1) {
        /* what happens if operator is pressed twice ? result should be 
        taken as new number */
        operate();
        secondDisplay.innerHTML = result + ' ' + numValue;
        finalNumbers = [];
        initialNumbers = [];
        finalNumbers.push(result);
        
    }
}

/* function for backspace key */
function backspaceKey () {
    initialNumbers.pop();
    console.log(initialNumbers);
    firstDisplay.innerHTML = initialNumbers.join('');
}

/* final function that takes everything and spits out the result */
function operate() {
    secondDisplay.innerHTML += ' ' + initialNumbers.join('') + ' = ';
    finalNumbers.push(initialNumbers.join(''));
    firstDisplay.innerHTML = '';
    console.log(secondDisplay.innerHTML);
    console.log(finalNumbers);
    let numbers = finalNumbers.map(Number);
    console.log(numbers);
    if (secondDisplay.innerHTML.indexOf('+') !== -1) {
        result = numbers[0] + numbers[1];
        secondDisplay.innerHTML += result;
    }else if (secondDisplay.innerHTML.indexOf('-') !== -1) {
        result = numbers[0] - numbers[1];
        secondDisplay.innerHTML += result;
    }else if (secondDisplay.innerHTML.indexOf('*') !== -1) {
        result = numbers[0] * numbers[1];
        secondDisplay.innerHTML += result;
    }else if (secondDisplay.innerHTML.indexOf('/') !== -1) {
        result = numbers[0] / numbers[1];
        secondDisplay.innerHTML += result;
    }
}
/* this clears everything for new calculations */
function clearAll() {
    initialNumbers = [];
    finalNumbers = [];
    firstDisplay.innerHTML = '';
    secondDisplay.innerHTML = '';
    counter = 0;
    result = 0;
}