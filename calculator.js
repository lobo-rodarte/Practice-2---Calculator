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

let calculations = { // Put functions in this object to allow a check on method selection. If it does not match the list it doesn't allow further execution
    absoluteValue: function(num1) { // Function for the absolute method
        return Math.abs(num1);
    },

    powerCalc: function(num1, num2) { // Function for the power calculation method
        return Math.pow(num1, num2);
    },
    
    squareRoot: function(num1) { // Function for the square root method
        return Math.sqrt(num1);
    },

    maxFind: function(num1, num2, num3) { // Function to find the highest number, only chose 3 numbers, in the output it brings them all together but kept it to 3 for the calculations
        return Math.max(num1, num2, num3);
    },

    minFind: function(num1, num2, num3) { // Function to find the lowest number, the reasoning for this is the same as above
        return Math.min(num1, num2, num3);
    },

    randomNum: function(min, max) { // Function to provide a random number between two numbers. The random() obtains a random number between 0 and 1 then multiplies the result of subtracting the min from the max then adds the min value to ensure the result is witin the min and max range.
        return Math.random() * (max - min) + min;
    },

    customRound: function(num1) { // Function to round to the nearest hunderedth. This moves the decimal over 2 decimal places then moves it back and cuts it off to only output the two decimal places.
        return Math.round(num1 * 100)/100
    }
};

console.log(calculations.absoluteValue(-45.67));
console.log(calculations.powerCalc(5, 3));
console.log(calculations.squareRoot(144));
console.log(calculations.maxFind(3, 78, -12, 0.5, 27));
console.log(calculations.minFind(3, 78, -12, 0.5, 27));
console.log(calculations.randomNum(1, 50));
console.log(calculations.customRound(23.67891))

/*
Thought that this would be better to explain the code.
I declared the num1 - num3 and result as undefined so that I can work them into the if, else if statements as I wanted to make this kind of dynamic. This way I can assign them later.
I declared method with a condition and while statement to ensure that what was typed in would be in the list of methods built into the program, if it was there, then the user is prompted to input a valid choice.
Once a valid choice is made, and depending on if the method requires 1, 2, or 3 numbers will depend on what they are prompted (added lines for the seperate ones), this is why the functions are in an object, to allow for the validation.
Using the if, else, if statements allowed a multi-check on the selection of the user to pull the appropriate calculation.
*/

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
    
    if (method === 'absoluteValue') { // single number method, so only one num1 is 
        num1 = parseFloat(readline.question('Enter your number\n'));
        result = calculations[method](num1);
        console.log(`Result: ${result}`);
    } else if (method === 'squareRoot') {
        num1 = parseFloat(readline.question('Enter your number\n'));
        result = calculations[method](num1);
        console.log(`Result: ${result}`);
    } else if (method === 'customRound') {
        num1 = parseFloat(readline.question('Enter your number\n'));
        result = calculations[method](num1);
        console.log(`Result: ${result}`);
    } else if (method === 'minFind') { // this one has up to 3 numbers for the method to work, so num1, num2, and num3 are assigned
        num1 = parseFloat(readline.question('Enter your number\n'));
        num2 = parseFloat(readline.question('Enter your second number\n'));
        num3 = parseFloat(readline.question('Enter your other number\n'));
        result = calculations[method](num1, num2, num3);
        console.log(`Result: ${result}`);
    } else if (method === 'maxFind') {
        num1 = parseFloat(readline.question('Enter your number\n'));
        num2 = parseFloat(readline.question('Enter your second number\n'));
        num3 = parseFloat(readline.question('Enter your other number\n'));
        result = calculations[method](num1, num2, num3);
        console.log(`Result: ${result}`);
    } else if (method === 'powerCalc') { // this one has two numbers for the method to work, so num1 and num2 are assigned
        num1 = parseFloat(readline.question('Enter your number\n'));
        num2 = parseFloat(readline.question('Enter your second number\n'));
        result = calculations[method](num1, num2);
        console.log(`Result: ${result}`);
    } else if (method === 'randomNum') {
        num1 = parseFloat(readline.question('Enter your number\n'));
        num2 = parseFloat(readline.question('Enter your second number\n'));
        result = calculations[method](num1, num2);
        console.log(`Result: ${result}`);
    }
