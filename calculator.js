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

function absoluteValue(num1, num2) {
    return Math.abs(num1 - num2);
}
 
function powerCalc(num1, num2) {
    return Math.pow(num1, num2);
}
 
function squareRoot(num1) {
    return Math.sqrt(num1);
}

function maxFind(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

function minFind(num1, num2, num3) {
    return Math.min(num1, num2, num3);
}
function randomNum
/*

function customRound
*/
console.log(absoluteValue(4, 9));
console.log(powerCalc(5, 3));
console.log(squareRoot(9));
console.log(maxFind(1, 8, 4));
console.log(minFind(10, 5, 9));
