/* calculator backend */

/* global variables */
let initialNumbers = [];
let finalNumbers = [];
var firstDisplay = document.getElementById('display');
var secondDisplay = document.getElementById('operationDisplay');
var counter = 0;
var newCounter = 0;
var result = 0;

/* makes number buttons work */
function displayText (numValue) {
    if (numValue === parseInt(numValue, 10)) {
        firstDisplay.innerHTML += (numValue);
        initialNumbers.push(numValue);
        console.log(initialNumbers);
        //makes operator buttons work
    }else if (numValue !== parseInt(numValue, 10) && counter == 0) { 
        finalNumbers.push(initialNumbers.join(''));
        firstDisplay.innerHTML = finalNumbers + ' ' + numValue + ' ';
        initialNumbers = [];
        counter += 1;
        //checks if operator has already been pressed
    }else if (numValue !== parseInt(numValue, 10) && counter == 1) {
        operate();
        firstDisplay.innerHTML = result + ' ' + numValue + ' ';
        secondDisplay.innerHTML = '';
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

/* function that takes everything and spits out the result */
function operate() {
    if (secondDisplay.innerHTML.indexOf('=') == -1) {
        finalNumbers.push(initialNumbers.join(''));
        secondDisplay.innerHTML = firstDisplay.innerHTML;
        console.log(secondDisplay.innerHTML);
        console.log(finalNumbers);
        let numbers = finalNumbers.map(Number);
        console.log(numbers);
        //checks which operator was pressed to calculate and print result
        if (firstDisplay.innerHTML.indexOf('+') !== -1) {
            result = numbers[0] + numbers[1];
            secondDisplay.innerHTML += ' = ' + result;
        }else if (firstDisplay.innerHTML.indexOf('-') !== -1) {
            result = numbers[0] - numbers[1];
            secondDisplay.innerHTML += ' = ' + result;
        }else if (firstDisplay.innerHTML.indexOf('*') !== -1) {
            result = numbers[0] * numbers[1];
            secondDisplay.innerHTML += ' = ' + result;
        }else if (firstDisplay.innerHTML.indexOf('/') !== -1) {
            result = numbers[0] / numbers[1];
            secondDisplay.innerHTML += ' = ' + result;
        }
    }else {
        return;
    }
    firstDisplay.innerHTML = '';
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

/* 
TODO:
- equals button pressed twice bug - DONE (i hope)
- result shouldn't always be first number bug
- dot operator functionality
- keyboard support
- test everything for final github commit
OBJECTS CAN HAVE NAMES I CAN TRACK RESULT AND DISCARD IT IF I NEED TO OOOOMGGGGGG
*/