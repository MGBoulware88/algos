// if track by openPara = 0 and closePara = 0, if closePara is ever > openPara; return False

/* 
    Parens Valid
    Given an str that has parenthesis in it
    return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.
//             v

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.
//                v
const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

/* 
PSEUDOCODE
create a function that accepts a string
    declare 2 variables to hold a number we use for counting open and close paranthesis as we see them
    loop through the input string, starting at 0, ending at str.length and inc by 1
        inside loop, check if the character is a close para
        if it is, add 1 to our closePara var
        immediately check if closePara > openPara
            if it is, early exit (return )

*/






function parensValid(str){
    var openPara = 0;
    var closePara = 0;
    for (var i = 0; i < str.length; i++){
        if (str[i] == ')'){ //check to see if the value at our iteration within the string is ")"
            if (closePara > openPara){ //checks to see if we have closing parantheses before a corresponding opening paranthesis
                return false; //early exit if above statement is true
            }
            closePara++; //If yes, increment closePara
        }
        if (str[i] == '('){ //check to see if the value at our iteration within the string is "("
            openPara++; //If yes, increment openPara
        }
    }
    return openPara == closePara; //Should evaluate true/false and return one of those values
}