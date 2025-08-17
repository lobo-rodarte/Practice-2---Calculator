const readline = require('readline-sync');

/* 
1. Write a function for each operation listed above using the Math module. 
2. Test each function with sample inputs to ensure it works as intended. 
3. Combine the individual functions into a single "calculator" program where the user can select an operation and input the required values. 
4. Test the calculator by performing the following: 
● Find the absolute value of -45.67. 
● Raise 5 to the power of 3. 
● Calculate the square root of 144. 
● Determine the largest and smallest values from [3, 78, -12, 0.5, 27]. 
● Generate a random number between 1 and 50. 
● Round 23.67891 to 2 decimal places. 
*/
let calculations = {
    absoluteValue: function(num1) {
        return Math.abs(num1);
    },

    powerCalc: function(num1, num2) {
        return Math.pow(num1, num2);
    },
    
    squareRoot: function(num1) {
        return Math.sqrt(num1);
    },

    maxFind: function(num1, num2, num3) {
        return Math.max(num1, num2, num3);
    },

    minFind: function(num1, num2, num3) {
        return Math.min(num1, num2, num3);
    },

    randomNum: function(min, max) {
        return Math.random() * (max - min) + min;
    },

    customRound: function(num1) {
        return Math.round(num1 * 100)/100
    }
};

/*for (let key in calculations) {
    if (key === 'absoluteValue') {
}}
// powerCalc, squareRoot, maxFind, minFind, randomNum, customRound */

/*
console.log(calculations.absoluteValue(-45.67));
console.log(calculations.powerCalc(5, 3));
console.log(calculations.squareRoot(144));
console.log(calculations.maxFind(3, 78, -12, 0.5, 27));
console.log(calculations.minFind(3, 78, -12, 0.5, 27));
console.log(calculations.randomNum(1, 50));
console.log(calculations.customRound(23.67891))
*/
let singleNumberCalculationChoice = ['absoluteValue', 'squareRoot', 'customRound'];
let doubleNumberCalculationChoice = ['powerCalc', 'randomNum'];
let moreThanTwoNumbersChoice = ['maxFind', 'minFind']
let num1;
let num2;
let num3;
let result;
const welcomeMessage = readline.question(`Welcome student, are you ready to start your caluclations, click enter to start!\n`); 
let method = readline.question('Please select your math method, we have:\nabsoluteValue\npowerCalc,\nsquareRoot,\nmaxFind,\nminFind,\nrandomNum,\ncustomRound\nPlease select one.\n');
    while (!calculations[method]) {
        console.log('This is not a valid choice, please select a valid choice\n');
        method = readline.question(`Please select your math method.\n`)
    }
    
    if (method === 'absoluteValue') {
        num1 = parseFloat(readline.question('Enter your number\n'));
        result = calculations[method](num1);
        console.log(`Result: ${result}`);
    }


/*let calculationChoicePrompt = readline.question(`Please select your math method, we have:\nabsoluteValue\npowerCalc,\nsquareRoot,\nmaxFind,\nminFind,\nrandomNum,\ncustomRound\nPlease select one.\n`); */ // Used the multi-line strings from the STRINGING CHARACTERS AND STRINGS section to present the user with two options for a journey path 

/*
    if (doubleNumberCalculationChoice.includes(method)) {
    num2 = parseFloat(readline.question('Enter your seond number'));
    }
    if (moreThanTwoNumbersChoice.includes(method)) {
    num3 = parseFloat(readline.question('Enter your other number'));
    }
    if (calculationChoicePrompt === 'absoluteValue') {
        console.log('There is only one number needed for your calculation\n')
        calculationChoicePrompt = readline.question('');
    }  
*/
/*
    let firstNumberInput = readline.question('Enter your first number\n')
    while(isNaN(firstNumberInput)) {
        firstNumberInput = readline.question('This is not a number, please input the correct data Thank you\n')
    }

let secondNumberInput = readline.question('Enter your second number\n')
    while(isNaN(secondNumberInput)) {
        secondNumberInput = readline.question('This is not a number, please input the correct data\n')
    }

// let finalCalculation = 

// let initialNumber = num1
/*
let gatePassQuestion = readline.question('To pass through the gate, you must answer this question: What is the product of 3 and 4?\n'); {
    while (gatePassQuestion !== numberThree.toString() && mathTry < maxTries) { // Used a while loop to validate the input
        console.log('Incorrect. Please try again.');
        gatePassQuestion = readline.question(`What is the product of ${numberOne} and ${numberTwo}?\n`); // Asked the user to answer the question again
        mathTry++; // Incremented the attempt counter
    };
    if (gatePassQuestion === numberThree.toString()) { //converting the input to a string to accept the user input
        console.log('Correct! You may pass through the gate.\n\nYou look up and read a sign that says: \n\"To slay the dragon, you must go left, bring your COURAGE as it will be the KEY to your success!\n\"To rescue the princess, you must go right, bring your wits and make haste as the KEY to freeing her will only come at high NOON!\"'); // Used a template literal to create a message
    }
}
*/