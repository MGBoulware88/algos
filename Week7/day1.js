
/* 
    Recursive Sigma
    Input: integer
    Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (5+4+3+2+1)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (2+1)

const num3 = -1;
const expected3 = 0;

/* 
PSEUDOCODE

create a function that accepts an int argument
    check for fail case of that int being negative
        return 0 if so
    otherwise
        return calling itself 

*/

function recursiveSigma(num) {
    if (num <= 0) { //establish the base case
        return 0; //if num is negative, just return 0 (early exit)
    }
    else { //else call the func with num + passing in num-1 and return that
        return Math.floor(num + recursiveSigma(num - 1)) //once this gets to base case, it will return and clear the stack
    }
}