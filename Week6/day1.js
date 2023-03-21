/*
Balance Index
Here, a balance point is ON an index, not between indices.
Return the balance index where sums are equal on either side
(exclude its own value).

Return -1 if none exist.
*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

const nums3 = [1, 1, 0, 2];
const expected3 = 2;


// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:
/* 
create a function that accepts an arr
    declare 3 vars - leftSum = arr[0]; rightSum = arr[arr.length-1]; counter = 0
    immediately check if leftSum = rightSum
        if true, check if there is only 1 index left
            if true, return 1 (if this is true, arr.length is 3 and the leftover index is 1)
    for loop through the arr forwards (x=1;x<arr.length;x++)
        add arr[x] to leftSum
        counter++
        check if leftSum = rightSum
            if true, check if there is only 1 index left
                if true, return x+1
        for loop through the arr backwards (y=arr.length-2;y>x;y--)
            add arr[y] to rightSum
        counter++
        check if leftSum = rightSum
            if true, check if there is only 1 index left
                if true, return y-1
    return -1 if the loops finish without exiting
*/

// create the function and decide what params it needs and what it will return

function balanceIndex(arr) {
    //track adding left siding
    leftSum = arr[0];
    rightSum = arr[arr.length-1];
    counter = 0;
}