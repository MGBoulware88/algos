/* 
Given in an alumni interview
String Encode
You are given a string that may contain sequences of consecutive characters.
Create a function to shorten a string by including the character,
then the number of times it appears. 

If final result is not shorter (such as "bb" => "b2" ),
return the original string.
*/


const str1 = "aaaabbcddd";
const expected1 = "a4b2cd3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";
/* PSEUDOCODE
create a function that accepts a string as input:
    create an empty hashmap tempMap = {}
    create an empty string for the return newStr = ""
    loop through the input string:
        check each character of string:
            if exist in map, add 1 to the value
            if not exist in map, add to map and assign value 1
    loop through tempMap:
        at each key, check if value is 1
            if 1, only add the key to newStr
            if >1 add the key and value to newStr
    return newStr
*/
function stringEncode(str) {
    let tempMap = {};
    let newStr = "";
    for (var i=0;i<str.length;i++) {
        if (tempMap.hasOwnProperty(str[i])) {
            tempMap[str[i]]++;
        }
        else {
            tempMap[str[i]] = 1;
        }
    }
    for (var [key, value] of Object.entries(tempMap)) {
        newStr += key;
        if (value === 1) {
            continue;
        }
        newStr+=value;
    }
    return newStr;
}

console.log(stringEncode(str1));
console.log(stringEncode(str2));
console.log(stringEncode(str3));
