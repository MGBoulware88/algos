/* 
  String: Rotate String
  Create a standalone function that accepts a string and an integer,
  and rotates the characters in the string to the right by that given
  integer amount.
*/

const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";
/*
Explanation: this is 2 more than the length so it ends up being the same
as rotating it 2 characters because after rotating every letter it gets back
to the original position.
*/

// take 5-8 mins to write the pseudocode here:
/*
PSEUDOCODE

create a function that accepts a string and integer
    check if integer is 0
        return str
    check if integer is > str.length
        reassign integer to integer-strr.length
    declare empty str var
    create arr var using .split(str) to break each char of the input str into a single elem within the arr
    loop through the arr starting at i=str.length - integer, stopping at last character
        concat emptyStr var with that char
    loop through the arr starting at 0 and stopping at arr.length - (int + 1)
        concat emptyStr var with that char

*/


// create the function and decide what params it needs and what it will return

//using .split()

function rotateString(str, int) {
    // console.log("str is: " + str);
    if (int === 0) {
        return str; //early exit
    }
    if (int > str.length) {
        int = int-str.length; //reassign int value by subtracting length - this reduces the complexity * amount of operations needed
    }
    // console.log("int is: " + int);
    let newStr = ""; //this is what we return at end
    let splitStr = str.split("") //split on each char
    // console.log("split made: " + splitStr);
    for (var i=splitStr.length-int;i<splitStr.length;i++) {
        // console.log(splitStr[i]);
        newStr += splitStr[i]; //start from the back and concat string
    }
    for (var i=0;i<splitStr.length - int;i++) {
        // console.log(splitStr[i]);
        newStr += splitStr[i]; //now add the rest of the chars
    }
    return newStr;
}

testCase1 = rotateString(str,rotateAmnt1);
testCase2 = rotateString(str,rotateAmnt2);
testCase3 = rotateString(str,rotateAmnt3);
testCase4 = rotateString(str,rotateAmnt4);
testCase5 = rotateString(str,rotateAmnt5);

console.log(testCase1);
console.log(testCase2);
console.log(testCase3);
console.log(testCase4);
console.log(testCase5);

/* */