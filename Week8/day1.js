/* 
https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
Stable sort

Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.
Space: O(1) constant.
For review, create a function that uses BubbleSort to sort an unsorted array in-place.
For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

const numbersOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numbersReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given numbers in-place by mutating the array.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} numbers
 * @returns {Array<number>} The given numbers after being sorted.
 */
function bubbleSort(numbers = []) { }

// Pseudocode 
/*
write a function that accepts an unsorted array
create a for-loop that traverses through the array 
compare [i] to [i + 1]
if one on left is smaller
    do not do anything
if is greater
    then swap them by assigning the first one to a temp variable
    re-assign the second one to the previous index
    assign the temp value to the following index 
*/

function bubbleSort(numbers = []) {

    let isSorted = false; //set a bool for early exit - assume the arr is not sorted

    while (isSorted === false) { //while it is not sorted, keep trying to sort it
        isSorted = true; //switch our bool to true - swap it to false if we do any sorting in this iteration

        for (let i = 0; i < numbers.length - 1; i++) { //loop through the arr
            const j = i + 1; //create the second value for comparison
            if (numbers[i] > numbers[j]) { //we only have to if greater b/c that means we need to swap
                isSorted = false; //now that we have sorted, we need at least 1 more iteration
                const tempNum = numbers[i]; //create a temp to store one of the numbers for the swap
                // console.log(tempNum);
                numbers[i] = numbers[j];
                // console.log(numbers[j]);
                numbers[j] = tempNum;
            }
            // console.log(numbers);
        }
    }
    return numbers; //once while is false, we can return the sorted arr
}
console.log(bubbleSort(numbersRandomOrder))
// console.log(bubbleSort(numbersReversed))
