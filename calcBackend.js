// calculator backend v2 

//global variables
var firstDisplay = document.getElementById('display');
var secondDisplay = document.getElementById('operationDisplay');
let initialNumArray = []
let numArray = [];
let result = 0;
let operator = '';
let numbers = [];
let counter = 0;
let resultCounter = 0;

/* function for numpad keys. It also checks if there is a result,
    meaning if a number is pressed a new calculation is started,
    instead of taking the result as the first number */
function numPad (numValue) {
    if (secondDisplay.innerHTML.indexOf('=') == -1) {
        firstDisplay.innerHTML += numValue;
        initialNumArray.push(numValue);
    }else if (secondDisplay.innerHTML.indexOf('=') !== -1) {
        counter = 0;
        resultCounter = 0;
        result = 0;
        secondDisplay.innerHTML = '';
        firstDisplay.innerHTML += numValue;
        initialNumArray.push(numValue);
    }
}

/* function for the operator buttons which also checks if an operator
    has already been pressed */
function operatorButtons (operation) {
    if (counter == 0) {
        operator = operation;
        firstDisplay.innerHTML = '';
        numArray.push(initialNumArray.join(''));
        initialNumArray = [];
        secondDisplay.innerHTML += numArray + ' ' + operator;
        return counter = 1;
    }else if (counter == 1) {
        if (resultCounter == 1) {
            numArray.push(result);
            operator = operation;
            initialNumArray = [];
            secondDisplay.innerHTML = numArray + ' ' + operator;
            counter = 1;
            resultCounter = 0;
        }else if (resultCounter == 0) {
            operator = operation;
            equals();
            resultCounter = 1;
        }
    }
}

/* function for equals key, looks like it does a lot but just
    calculates, displays result and resets for new calculations */
function equals () {
    if (operator == '+') {
        numArray.push(initialNumArray.join(''));
        numbers = numArray.map(Number);
        result = numbers[0] + numbers[1];
        secondDisplay.innerHTML += ' ' + numArray[1] + ' = ' + result;
        firstDisplay.innerHTML = '';
        initialNumArray = [];
        numArray = [];
        resultCounter = 1;
        counter = 1;
        return result;
    }else if (operator == '-') {
        numArray.push(initialNumArray.join(''));
        numbers = numArray.map(Number);
        result = numbers[0] - numbers[1];
        secondDisplay.innerHTML += ' ' + numArray[1] + ' = ' + result;
        firstDisplay.innerHTML = '';
        initialNumArray = [];
        numArray = [];
        resultCounter = 1;
        counter = 1;
        return result;
    }else if (operator == '*') {
        numArray.push(initialNumArray.join(''));
        numbers = numArray.map(Number);
        result = numbers[0] * numbers[1];
        secondDisplay.innerHTML += ' ' + numArray[1] + ' = ' + result;
        firstDisplay.innerHTML = '';
        initialNumArray = [];
        numArray = [];
        resultCounter = 1;
        counter = 1;
        return result;
    }else if (operator == '/') {
        numArray.push(initialNumArray.join(''));
        numbers = numArray.map(Number);
        result = numbers[0] / numbers[1];
        secondDisplay.innerHTML += ' ' + numArray[1] + ' = ' + result;
        firstDisplay.innerHTML = '';
        initialNumArray = [];
        numArray = [];
        resultCounter = 1;
        counter = 1;
        return result;
    }
}

function deleteKey () {
    initialNumArray.pop()
    firstDisplay.innerHTML = initialNumArray.join('');
}

function clearAll() {
    initialNumArray = []
    numArray = [];
    result = 0;
    operator = '';
    numbers = [];
    counter = 0;
    resultCounter = 0;
    firstDisplay.innerHTML = '';
    secondDisplay.innerHTML = '';
}

// function to bind keyboard keys
document.addEventListener('keyup', function(e) {
    if(event.key === '1') {
        numPad(1);
    }else if (event.key === '2') {
        numPad(2);
    }else if (event.key === '3') {
        numPad(3);
    }else if (event.key === '4') {
        numPad(4);
    }else if (event.key === '5') {
        numPad(5);
    }else if (event.key === '6') {
        numPad(6);
    }else if (event.key === '7') {
        numPad(7);
    }else if (event.key === '8') {
        numPad(8);
    }else if (event.key === '9') {
        numPad(9);
    }else if (event.key === '0') {
        numPad(0);
    }else if (event.key === '+') {
        operatorButtons('+');
    }else if (event.key === '-') {
        operatorButtons('-');
    }else if (event.key === '*') {
        operatorButtons('*');
    }else if (event.key === '/') {
        operatorButtons('/');
    }else if (event.key === 'Enter') {
        equals();
    }else if (event.key === 'Backspace') {
        deleteKey();
    }else if (event.key === 'c') {
        clearAll();
    }
})

function showHelp() {
    document.getElementById('showHelp').style.display = "flex";
}