// Algo 1

/* 
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

const str3 = "hello";
const expected3 = "olleh";

const str4 = "";
const expected4 = "";

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:
/* 
write a function that accepts a str as input:
    create tempStr var and set to empty str
    loop through the given string backwards
        add each character to the tempStr
    return tempStr

*/

// create the function and decide what params it needs and what it will return

function reverseString(str) {
    let reversedString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}

let olleh = reverseString("hello")
console.log(olleh);

// Algo 2


/* 
  Acronyms
  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 
  Do it with .split first if you need to, then try to do it without
*/

/* 
## using built-ins

* create a function that accepts a string input:
    * store the input string as a temp var
    * use another temp var and set to empty string (this is what we will return at the end)
    * pass that temp var through split(" ") as a new temp var
    * iterate through the temp array elements, which should now be each single word from the string:
        * use charAt(0) to isolate the first letter of each word
        *  with the first letter isolate, add that to our empty str var
    * call toUppercase() on our string to capitalize all of the letters (which should be just the first letter of each word from our input str)
    * return the acronym var

## not using built-ins


    
*/



const strA = "object oriented programming";
const expectedA = "OOP";

// The 4 pillars of OOP
const strB = "abstraction polymorphism inheritance encapsulation";
const expectedB = "APIE";

const strC = "software development life cycle";
const expectedC = "SDLC";

// // Bonus: ignore extra spaces
// const strD = "  global   information tracker    ";
// const expectedD = "GIT";