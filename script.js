// 1. Countdown
// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array's "zeroth" element) down to 0(as the last element). How long is this array?
function countdownArray(number) {
    let countdown = [];

    for (let i = number; i >= 0; i--) {
        countdown.push(i);
    }
    return countdown;
}

let resultArray = countdownArray(14);
console.log(resultArray);
console.log()

// 2. First Plus Length
// Given an array, return the sum of the first value in the arrray plus the array's length. What happens if the array's first value is not a number, but a string(like "What?") or a boolean (like false)

function sumOfFirstAndLength(arr) {
    // Check if the array is not empty
    if (arr.length > 0) {
        // Check if the first value is a number
        if (typeof arr[0] === 'number') {
            // Return the sum of the first value and the array's length
            return arr[0] + arr.length;
        } else {
            // Handle the case where the first value is not a number
            return "The first value is not a number.";
        }
    } else {
        // Handle the case where the array is empty
        return "The array is empty.";
    }
}

let result = sumOfFirstAndLength([2,4,6,8,10,12,14,16,18,20]);
console.log(result)
console.log()

// 3. Values Greater than Second 
// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is
function filterValues(arr){
    let secondValue = arr[1];

    let greaterValues = arr.filter(num => num > secondValue);

    let count = greaterValues.length;

    console.log("Values greater than the second value", greaterValues);
    console.log("Number of values greater than the second value", count);

    return count;
}

filterValues([1,3,5,7,9,13]);
console.log()

// 4. Values Greater than Second, Generalized
// Write a function that accepts ANY array, and returns a new array with the array values that are greater than its second value. Print how many values that is. What will you do if the array is only one element long?
function anyArr (arr) {
    if (arr.length <= 1) {
        return "The array only has 1 element or is empty"
    }
    else {
        let secondValue = arr[1];

        let greaterValues = arr.filter(num => num > secondValue);
    
        let count = greaterValues.length;
    
        console.log("Values greater than the second value", greaterValues);
        console.log("Number of values greater than the second value", count);
        return greaterValues
    }
}
let arr1 = [1, 2, 3, 4, 5];
console.log(anyArr(arr1));
console.log()

// 5. This length, That value
// Given two numbers, return array of lenth num1 with each value num2. Print "Jinx!" of they are same. 
function twoNum (num1, num2) {
    if (num1 === num2){
        console.log("Jinx!")
    }
    return new Array(num1).fill(num2);
}

console.log(twoNum(5, 3));  // Output: [3, 3, 3, 3, 3]
console.log(twoNum(4, 4));  // Output: "Jinx!", [4, 4, 4, 4]
console.log()

// 6. Fit the First Value
// Your function should accept an array. If value at [0] is greater than array's length, print "Too big!"; if value at [0] is less than array's lenth, print "too small!"; otherwise print "Just right!".
function checkFirstValue(arr) {
    if (arr[0] > arr.length) {
        console.log("Too big!");
    } else if (arr[0] < arr.length) {
        console.log("Too small!");
    } else {
        console.log("Just right!");
    }
}console.log(fahrenheitToCelsius(32));  // Output: 0
console.log(fahrenheitToCelsius(212));  // Output: 100

checkFirstValue([5,1,2,3,4]);
checkFirstValue([6,1,2,3,4]);
checkFirstValue([4,1,2,3,4]);

// 7. Fahrenheit to Celcius
// Kelvin wants to convert between temperature scales
// Create fahrenheitToCelcius(fDegrees) that accepts a number of degrees in Fahrenheit and returns the equivalent temperature as express in Celcius degrees. For review Fahrenheit = (9/5 * Celcius) + 32.
function fahrenheitToCelsius(fDegrees) {
    let cDegrees = (fDegrees - 32) * 5/9;
    return cDegrees
}

console.log(fahrenheitToCelsius(32));  // Output: 0
console.log(fahrenheitToCelsius(72));  // Output: 100
