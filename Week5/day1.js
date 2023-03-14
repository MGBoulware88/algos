/* 

** Frequency Map **

Given an array of strings
return the number of times each string occurs (a frequency / hash table)
*/
//                       v
const arr1 = ["a", "a", "a"];
const expected1 = {
    a: 3,
};

const arr2 = ["a", "b", "a", "c", "Bob", "c", "c", "d"];
const expected2 = {
    a: 2,
    b: 1,
    c: 3,
    Bob: 1,
    d: 1,
};

const arr3 = [];
const expected3 = {};
/* 

** PSEUDOCODE **

create a function that accepts an array
    define a variable as tempMap = {}
    iterate through with a for loop | start at 0, end at arr.length | increment by 1
        check if the key exists
            increment by 1 
        else
            save the element as a key in our tempMap with a value of 1
    return tempMap
*/

function createMap(arr) {
    tempMap = {}; //create empty map for the return
    if (arr.length == 0) { //if given arr is empty, just return the empty obj immediately
        return tempMap
    }
    //else actually loop through the given arr
    for (i=0; i<arr.length;i++) { //we want to check all elements of the arr
        if (tempMap.hasOwnProperty(arr[i])) { //check first if key exists
            tempMap[arr[i]]+=1; //if it does, inc 1 to its value
        }
        else {
            tempMap[arr[i]] = 1; //if the key doesn't exist, add it with val of 1
        }
    }
    return tempMap;
}


















/* 

** Odd frequency occurence **

Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1 = [1];
const expectedOne = 1;

const nums2 = [5, 4, 5];
const expectedTwo = 4;

//             V
const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expectedThree = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expectedFour = 1;

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// pseudocode here

// create the function and decide what params it needs and what it will return