/* 
Given an int to represent how much change is needed
calculate the fewest number of coins needed to create that change,
using the standard US denominations
quarter: 25c
dime: 10c
nickel: 5c
penny: 1c
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 51;
const expected2 = { quarter: 2, penny: 1 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

function fewestCoinChange(balance) {
    var myCoins = {};
// use ifs to check how many coins are needed, starting with 
    if (balance >= 25) {
        // grabbing all the quarters now to not need a loop
        var quartersNeeded = Math.floor(balance / 25); //round down for whole numbers
        myCoins['quarter'] = quartersNeeded; //add the key
        balance -= (25 * quartersNeeded); //subtract the amoung of coins * their value from balance
        console.log("Added " + quartersNeeded + " quarter(s)"); //logging for visibility
        console.log("Remaining balance: " + balance + "c");
    }
    if (balance >= 10) {
        var dimesNeeded = Math.floor(balance / 10)
        myCoins['dime'] = dimesNeeded;
        balance -= (10 * dimesNeeded);
        console.log("Added " + dimesNeeded + " dime(s)");
        console.log("Remaining balance: " + balance + "c");
    }
    if (balance >= 5) {
        nickelsNeeded = Math.floor(balance / 5);
        myCoins['nickel'] = nickelsNeeded;
        balance -= (5 * nickelsNeeded);
        console.log("Added " + nickelsNeeded + " nickel(s)");
        console.log("Remaining balance: " + balance + "c");
    }
    if (balance >= 1) {
        //everything left is pennies | balance has to be <= 4 at this point
        myCoins['penny'] = balance;
        balance -= myCoins['penny']; //subtracting penny value just to make sure it makes balance 0
        console.log("Added " + myCoins.penny + " pennie(s)");
        console.log("Remaining balance: " + balance + "c");
    }
    return myCoins;
}

console.log(fewestCoinChange(cents1));
console.log(fewestCoinChange(cents2));
console.log(fewestCoinChange(cents3));
console.log(fewestCoinChange(cents4));