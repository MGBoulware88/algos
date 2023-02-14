/* #2
Predict the output of:

for(var i=0; i<10;i++) 
{
    console.log(i);
    i = i + 3;    
}
    
console.log("outside of the loop " + i);
*/

/*Answer:

outside of the loop: 12

*/



/* #3
Predict the output of:

function getTotal(arrayOfNumbers) {
    
  var sum = arrayOfNumbers[0];
    
  for(var i=0; i<arrayOfNumbers.length; ) {
    sum += arrayOfNumbers[i];
    console.log("the current sum is: " + sum);
    i++; 
  }
    
  console.log("the total is: " + sum);
    
}
    
getTotal([1, 3, 5]);
*/ 

/* Answer:

the total is: 10

*/




