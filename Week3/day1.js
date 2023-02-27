//https://leetcode.com/problems/arranging-coins/

/*
You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins.
The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build.

*/

//put coins in rows
//find the last row/know how many coins are in the last row
//how many coins should be in each row
//return how many rows were completed


function arrangeCoins(n){
    var coins = n; //set coins to given value
    for (var i=1;i>0;i++) { //this should probably be a while loop
        coins-=i; //removes i coins to make a row
        if (coins < i+1) { //then check if there are enough coins left to make another row
            return i; //if not, break and return i (we have currently completed i rows)
        }
    } 
}
    // the while loop version:
    // var i = 1;
    // while (n >= i) {
    //     n -= i;
    //     i++;
    // }
    // return i-1;

console.log(arrangeCoins(5)) // output: 2
console.log(arrangeCoins(8)) // output: 3
console.log(arrangeCoins(11)) // output: 4