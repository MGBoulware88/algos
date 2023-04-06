/* 
Stable sort.
Visualization:
https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
Time Complexity
    - Best case: O(n log(n)) linearithmic.
    - Average case: O(n log(n)) linearithmic.
    - Worst case: O(n log(n)) linearithmic.
Space: O(n) linear
steps:
    1. create a merge function to merge two already sorted arrays into a single
        sorted array.
    - you do NOT need to work in place, ok to use a new array
    2. create mergeSort function to sort the provided array
    - split the array in half and recursively merge the halves using the previously created merge function.
    - splitting of arrays stops when array can no longer be split.
    - an array of 1 item is by definition sorted, so two arrays of 1 item
    can therefore be merged into a sorted array.
*/

// merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */

/*
PSEUDOCODE
create a function that accepts 2 sorted arrays
    create 3 vars:
        newArr = []
        leftIdx = 0
        rightIdx = 0
    while loop with condition that the left & right idx are < their array's length
        if left is smaller than right
            push left into newArr
            increment leftIdx
        else
            push right to newArr
            inc rightIdx
    
    after while loop finishes, return newArr
*/


function merge(left = [], right = []) {
    //declare empty arr for the return
    let newArr = [];
    //declare left and right starting points for comparisons
    let leftIdx = 0;
    let rightIdx = 0;
    //use a while loop to check each value until reaching the end of the arr
    while (leftIdx < left.length && rightIdx < right.length) {
        //if left is smaller, push it and inc the Idx
        if (left[leftIdx] < right[rightIdx]) {
            newArr.push(left[leftIdx]);
            leftIdx++;
        //else push the right value and inc the rightIdx
        } else {
            newArr.push(right[rightIdx]);
            rightIdx++;
        }
    }
    return newArr;
}

console.log(merge(sortedA1, sortedB1));
console.log(merge(sortedA2, sortedB2));
console.log(merge(sortedA3, sortedB3));
console.log(merge(sortedA4, sortedB4));

// mergeSort
const numbersOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numbersReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Creates a new sorted array based on the given numbers being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {Array<number>} numbers
 * @returns {Array<number>} A New sorted array.
 */

//now pass it through a recursive function to divide and conquer an unsorted array
function mergeSort(numbers = []) {
    //this is our base case to end the recursion
    if (numbers.length === 1) {
        return numbers;
    }
    //declare our vars for the recursion
    const middleIdx = Math.floor(numbers.length/2);
    const left = numbers.slice(0, middleIdx);
    const right = numbers.slice(middleIdx);
    //call mergeSort to set up our bounds
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    //now call merge to sort these chunks
    return merge(sortedLeft, sortedRight);
}

console.log(mergeSort(numbersOrdered));
console.log(mergeSort(numbersRandomOrder));
console.log(mergeSort(numbersReversed));