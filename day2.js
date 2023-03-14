/* 
Given a string,
return a new string with the duplicates excluded
  //Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

const str5 = "melee";
const expected5 = "mle";

// pseudocode here
/* 
create function that accepts a string
    check if empty
        if empty, return empty string
    create empty string
    create empty obj
    for loop through the string 0, str.length, ++
        if key doesn't exist
            add it to the hashmap
        (no else)
    for in loop through the hashmap
        concat our string var with each key
    return the new string
*/

// create the function and decide what params it needs and what it will return
function strDedupe(str) {
    if (str === "") {
        return "";
    }
    let myMap = {};
    let myStr = "";
    for (i=0;i<str.length;i++) {
        if (!myMap.hasOwnProperty(str[i])) {//loop through the input str and each character to the map once
            myMap[str[i]] = i; //the value we assign doesn't matter
            myStr += str[i]; //add each key to myStr
        }
        else continue //added for clarity
    }
    return myStr;
}

testCase1 = strDedupe(str1);
testCase2 = strDedupe(str2);
testCase3 = strDedupe(str3);
testCase4 = strDedupe(str4);

console.log(testCase1)
console.log("--------")
console.log(testCase2)
console.log("--------")
console.log(testCase3)

//bonus - keep track of idx of the character we add to the map to show we are returning the last instance of it
//this version returns in order, but tracks the idx of the last instance

function strDedupeBonus(str) {
    if (str === "") {
        return "";
    }
    let myMap = {};
    let myStr = "";
    for (i=0;i<str.length;i++) {
        myMap[str[i]] = i; //always add or update the key with current idx value
    }
    console.log(myMap);
    for (var key in myMap) {
        myStr += key; //add each key to myStr
    }
    return myStr;
}

testCase1 = strDedupeBonus(str1);
testCase2 = strDedupeBonus(str2);
testCase3 = strDedupeBonus(str3);
testCase4 = strDedupeBonus(str4);

console.log(testCase1)
console.log("--------")
console.log(testCase2)
console.log("--------")
console.log(testCase3)

//this version returns in the order of last instance

function strDedupeBonus2(str) {
    if (str === "") {
        return "";
    }
    let myMap = {};
    let myStr = "";
    for (i=0;i<str.length;i++) {
        if (myMap.hasOwnProperty(str[i])) {
            delete myMap[str[i]] //delete if exists
        }
        myMap[str[i]] = i; //always add
    }
    console.log(myMap);
    for (var key in myMap) {
        myStr += key; //add each key to myStr
    }
    return myStr;
}

testCase1 = strDedupeBonus2(str1);
testCase2 = strDedupeBonus2(str2);
testCase3 = strDedupeBonus2(str3);
testCase4 = strDedupeBonus2(str4);
testCase5 = strDedupeBonus2(str5);

console.log(testCase1)
console.log("--------")
console.log(testCase2)
console.log("--------")
console.log(testCase3)
console.log("--------")
console.log(testCase4)
console.log("--------")
console.log(testCase5)