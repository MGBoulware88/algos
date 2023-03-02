/* https://leetcode.com/problems/two-sum/

Given arr = [2, 11, 7, 15], target = 9,
Because arr[0] + arr[2] = 2 + 7 = 9
return [0, 2].

example 1
given: [2, 11, 7, 15]
target: 9
output: [0,2]

example 2
        0  1 2
given: [3,2,4]
target: 6
output: [1,2]

example 3
given: [3,3]
target: 6
output: [0,1]

Given an array of integers, return indices of the
two numbers such that they add up to a specific target.

You may assume that each input would have EXACTLY ONE SOLUTION,
and you may not use the same element twice.

the array is unsorted, contains no floats, and there may be duplicate values



*/
 
function twoSum(arr, target) {
    var tempArr = [];
    for (var i = 0; i<arr.length-1;i++) { //first loop i=0 (2)
        if (arr[i] < target) { //yup 2 is < 9
            for (var j = i+1; j<arr.length;j++) { //first loop j=1, starting with 11, then 7, then 15 | sec loop j=2 (7)
                //is i + j = target
                var sum = arr[i] + arr[j];
                if (sum === target) { //if true, we found our answer
                    return [i,j];
                }                
            }
        }
    }
}

console.log(twoSum([2, 11, 7, 15], 9)); // [0,2]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]

// if you finish early -- can you do this without nesting for loops? 

function noNestingTwoSum(arr, target) {
    var myObject = {}; //create an object to store as we traverse the array
    for (var i = 0; i<arr.length;i++) {
        var currentVal = arr[i]; //save the value of the idx i as we go
        var remainder = target - currentVal; //save the remainder to know which other number would be the solution with the current number
        if (myObject.hasOwnProperty(remainder)) { //if myObject has a key that matches the remainder, then we have found our solution
            return [myObject[remainder], i];
        }
        myObject[currentVal] = i; //add the key pair of arr[i]: index to myObject
    }
}

console.log(noNestingTwoSum([2, 11, 7, 15], 9)); // [0,2]
console.log(noNestingTwoSum([3, 2, 4], 6)); // [1,2]
console.log(noNestingTwoSum([3, 3], 6)); // [0,1]