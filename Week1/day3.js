/*
Challenge: with below code, create a for loop to to iterate through the array, counting all positives

var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

console.log("there are " + countPositives + " positive values");
*/
/*
Bonus Challenge:
Level 1: Write this as a function that accepts arrays as parameters.
Level 2: Include a return statement that gives back the counted positive numbers.
Level 3: Instead of returning the count, return a new array of only the positive numbers.
*/

//Base Challenge
var countPositives = 0; //required vars: a counter and an array
var numbers = [3, 4, -2, 7, 16, -8, 0];

for (i=0;i<numbers.length;i++) //This loops 6 times
{
    if (numbers[i]>0)
    {
        countPositives++; //This adds 1 to countPositives when the number in the arr is > 0
    }      
}
console.log("there are " + countPositives + " positive values"); /*This will output 'there are 4 positive values' with given array*/

//Bonus lvl 1 (make it a function)
var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

function getPositives(arr)
{
    for (i=0;i<arr.length;i++) //This loops 6 times
{
    if (numbers[i]>0)
    {
        countPositives++; //This adds 1 to countPositives when the number in the arr is > 0
    }      
}
console.log("there are " + countPositives + " positive values"); /*This will output 'there are 4 positive values' with given array & take any array as input */
}

getPositives(numbers); //Call the function with given array as the argument

//Bonus lvl 2 (return countPositives)
var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

function getPositives(arr) 
{
    for (i=0;i<arr.length;i++) //This loops 6 times
{
    if (numbers[i]>0)
    {
        countPositives++;
    }      
}
    return countPositives; /*This will return 4 with given array & take any array as input */
    console.log("there are " + countPositives + " positive values");  /*This will output 'there are 4 positive values' with given array & take any array as input */
}

console.log(getPositives(numbers)); /*Call the function with given array as the argument
Expected output: 'there are 4 positive numbers' and returned value 4 */

//Bonus lvl 3 (return a new array with the positive numbers)
var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

function getPositives(arr)
{
    var posArr = [];

    for (i=0;i<arr.length;i++) //This loops 6 times
{
    if (numbers[i]>0)
    {
        countPositives++; //This adds 1 to countPositives when the number in the arr is > 0
        posArr.push(arr[i]);
    }      
}
    return posArr; //This will return [3,4,7,16] with given array & take any array as input
    console.log("there are " + countPositives + " positive values"); /*This will output 'there are 4 positive values' with given array & take any array as input */
}

console.log(getPositives(numbers)); /*Call the function with given array as the argument
Expected output: 'there are 4 positive numbers' and returned value [3,4,7,16] */

