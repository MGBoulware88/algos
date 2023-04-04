
/* 
https://visualgo.net/en/sorting
    
Selection sort works by iterating through the list, finding the minimum
value, and moving it to the beginning of the list. Then, ignoring the first
position, which is now sorted, iterate through the list again to find the
next minimum value and move it to index 1. This continues until all values are sorted.
Unstable sort.

Time Complexity
    - Best: O(n^2) quadratic.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic.
Space: O(1) constant.
Selection sort is one of the slower sorts.
- ideal for: pagination, where page 1 displays 10 records for example,
    you run selection sort for 10 iterations only to display the first 10 sorted items.
*/

const numbersOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numbersReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts given array in-place.
 * Best: O(n^2) quadratic.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic.
 * @param {Array<number>} numbers
 * @returns {Array<number>} The given array after being sorted.
 */
function selectionSort(arr, minIdx=0,) {
    //establish our base case
    if (minIdx === arr.length) {
        return arr;
    }
    //declare our tempvar to hold the min val, starting at the first element each time
    let minNum = arr[minIdx];
    //loop through the arr looking for the min
    for (let i = minIdx + 1; i<arr.length; i++) {
        if (arr[i] < minNum) {
            //swap min with that number and move the new min to arr[minIdx]
            arr[minIdx] = arr[i];
            // console.log("The array is now " + arr);
            arr[i] = minNum;
            // console.log("The array is now " + arr);
            minNum = arr[minIdx];
            // console.log("The array is now " + arr);
        }
    }
    return selectionSort(arr, minIdx = minIdx+1);
}

console.log(selectionSort(numbersRandomOrder));