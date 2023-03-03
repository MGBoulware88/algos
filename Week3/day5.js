/* 
Challenge: Create Pascal's Triangle

Your task is to write a JavaScript function that takes an integer n as input and returns an array of arrays 
that represents the first n rows of Pascal's triangle.

Pascal's triangle is a triangular array of numbers in which the first and last number in each row is 1,
and each remaining number is the sum of the two numbers above it in the previous row.

For example, if n is 5, the function should return the following array:
[
     [1],
   [1, 1],
  [1, 2, 1],
 [1, 3, 3, 1],
[1, 4, 6, 4, 1]
]
hint: How many digits are in row n? 
*/

/* Pseudocode 
Each iteration has n digits in the arr where n is the iteration cycle
The first array arr[0] is always [1]
the second arr[1] is always [1,1]
the first idx and the arr.length-1 idx are always 1
myidx from prev arr + myidx from prev arr-1 = my value

2D array, probably need nested loops
*/

function generatePascalsTriangle(n) {
    var triangle = [];
    for (var i=0;i<n;i++) {
        var tempArr = [1];
        for (var x=1;x<=i;x++) {
            if (x===i){
                tempArr.push(1);
            }
            else {
                var sum = triangle[i-1][x-1] + triangle[i-1][x];
                tempArr.push(sum);
            }
        }    
        triangle.push(tempArr);
        //triangle = [[1]] || [1,1] => [[1],[1,1]]
    }
    return triangle;
}
console.log(generatePascalsTriangle(1));
// => [[1]]
console.log(generatePascalsTriangle(2));
// => [[1], [1, 1]]
console.log(generatePascalsTriangle(5));
// => [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
console.log(generatePascalsTriangle(6));
// => [
//   [ 1 ],
//   [ 1, 1 ],
//   [ 1, 2, 1 ],
//   [ 1, 3, 3, 1 ],
//   [ 1, 4, 6, 4, 1 ],
//   [ 1, 5, 10, 10, 5, 1 ]
// ]