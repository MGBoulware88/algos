/*
Recursive Factorial
Input: integer
Output: integer, product of ints from 1 up to given integer

If less than zero, treat as zero.
Bonus: If not integer, truncate (remove decimals).

Experts tell us 0! is 1.

rFact(3) = 6 (1*2*3)
rFact(6.8) = 720 (1*2*3*4*5*6)
*/

const num1 = 3;
const expected1 = 6;
// Explanation: 1*2*3 = 6

const num2 = 6.8;
const expected2 = 720;
// Explanation: 1*2*3*4*5*6 = 720

const num3 = 0;
const expected3 = 1;


function rFact(num) {
    num = Math.floor(num); //this removes decimals
    if (num <=1) { //this establishes base case and returns 1 if num is 0 or negative
        return 1;
    }
    else {
        return num * rFact(num-1); //this is the math to return the factorial product
    }
}

console.log(rFact(num1))
console.log(rFact(num2))
console.log(rFact(num3))
console.log(rFact(7))