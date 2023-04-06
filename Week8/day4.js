/* 
Params: numbers, left, right
    - left and right are indexes, for now, left will be 0, and right will be
        the last idx.
    - later these params will be used to specify a sub section of the array to
        partition.
Steps:
1. Pick an number out of the arr to be your pivot value
    - usually the middle idx but can be any.
2. Partition the array IN PLACE such that all values less than the pivot
value are to the left of it and all values greater than the pivot value
are to the right (not perfectly sorted).
3. return: the index where the left section of smaller items ends.
"Choosing a random pivot minimizes the chance that you will encounter
worst-case O(n^2) performance (always choosing first or last would cause
worst-case performance for nearly-sorted or nearly-reverse-sorted data).
Choosing the middle element would also be acceptable in the majority of
cases."
https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/

const numbers1 = [11, 8, 14, 3, 6, 2, 7]; /* after first swap => */ [11, 8, 14, 7, 6, 2, 3];
/* 
There are many possible answers for numbers1 depending on which number is chosen
as the pivot.
E.g., if 3 is chosen as the pivot, the below are some solutions because
numbers smaller than 3 are to the left and larger numbers are to the right
[2, 3, 7, 6, 11, 8, 14]
[2, 3, 11, 8, 7, 6, 14]
[2, 3, 8, 7, 11, 6, 14]
[2, 3, 8, 6, 14, 7, 11]
*/
const numbers2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const numbers3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const numbers4 = [2, 1];


/*
PSEUDOCODE

create a function that accepts an unsorted arr & and left & right value
    declare a pivot var and set it to numbers.length/2 (rounded down to make sure whole number)
    swap pivot with right (reassign right as pivot idx and pivot idx as numbers.length-1)
    compare left with pivot
*/


function partition(arr, leftIdx = 0, rightIdx = arr.length - 1) {
    const midIdx = Math.floor((leftIdx + rightIdx)/2);
    const pivot = arr[midIdx];
    const tempPivotIdx = rightIdx;
    //swap pivot to the end
    [arr[midIdx], arr[tempPivotIdx]] = [arr[tempPivotIdx], arr[midIdx]];

    //move the rightIdx to 1 left of the pivot
    rightIdx = tempPivotIdx - 1;

    //check numbers from the left and right
    while (true) {
        //move leftIdx until we found a number that needs to move
        while (arr[leftIdx] < pivot) {
            leftIdx+=1;
        }
        //move rightIdx until we find a number that needs to move
        while (arr[rightIdx] > pivot) {
            rightIdx-=1;
        }
        //create our break case
        if (leftIdx >= rightIdx) {
            //swap the pivot back to its final position then return
            [arr[tempPivotIdx], arr[leftIdx]] = [arr[leftIdx], arr[tempPivotIdx]];
            return leftIdx;
        }

        //swap numbers when find out of place values
        [arr[leftIdx], arr[rightIdx]] = [arr[rightIdx], arr[leftIdx]];
        //move the Idxs after any swap
        leftIdx+=1;
        rightIdx-=1;
    }

}