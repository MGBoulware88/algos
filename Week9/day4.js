// Interview Algo given to alumni Oct 2019

/* 
You are given a list of integers. Find all the consecutive sets of 
integers that adds up to the sum passed in as one of the inputs.
*/

const numbers1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
const expected1 = [
[2, 5, 3, 6],
[3, 6, 7],
];

const numbers2 = [];
const sum2 = 5;
const expected2 = [];

const numbers3 = [10, 15, 20, 35, 30];
const sum3 = 5;
const expected3 = [];

// Bonus:
const numbers4 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum4 = 16;
const expected4 = [
[2, 5, 3, 6],
[3, 6, 7],
[3, 6, 7, 0],
[3, 6, 7, 0, 0],
];

// Bonus:
const numbers5 = [-2, -5, -3, -6, -7, -0, -0, -23, -12];
const sum5 = -16;
const expected5 = [
[-2, -5, -3, -6],
[-3, -6, -7],
[-3, -6, -7, -0],
[-3, -6, -7, -0, -0],
];

/* 
PSEUDOCODE

create a function that accepts an array of nums and a target num
    create a variable to count the sum
    create temp arr for return
    for loop through each element
        add to sum 
        when sum >= targetSum
            stop adding
            and if = targetSum, push to our temp arr
        ----edge case for zero-----

*/

// const numbers1 = [2, 5, 3, 6, 7, 23, 12];
// const sum1 = 16;
// const expected1 = [
// [2, 5, 3, 6],
// [3, 6, 7],
// ];


/**
 * Finds all the sets of consecutive numbers that sum to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} numbers Unordered numbers.
 * @param {number} targetSum
 * @returns {Array<Array<number>>} 2d array where each nested array is a set of
 *    consecutive numbers that add up to the given targetSum. Consecutive in
 *    this context means the numbers whose indexes are one after the other
 *    only.
 */
function findConsecutiveSums(numbers, targetSum) {
    //can use const here because push is allowed
    const summedSlices = [];
    
    //loop a number of times equal to the array length
    for (let i=0 ; i < numbers.length; i++) {
        let sumCount = numbers[i];

        for (let j=i+1; j<= numbers.length; j++) {
            if (sumCount === targetSum) {
                summedSlices.push(numbers.slice(i, j));
            }
            sumCount += numbers[j];
        }
    }
    return summedSlices;
}

console.log(findConsecutiveSums(numbers1,sum1))
console.log(findConsecutiveSums(numbers2,sum2))
console.log(findConsecutiveSums(numbers3,sum3))
console.log(findConsecutiveSums(numbers4,sum4))
console.log(findConsecutiveSums(numbers5,sum5))