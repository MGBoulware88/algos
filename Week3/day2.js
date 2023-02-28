/* 
  Given an array and an index,
  remove the item at that index.
  return the removed item

  If index is out of range, return null and don't alter array
  
  No built-in array methods except pop().
*/

const arr1 = ["a", "b", "c", "d", "e"];
const removeIdx1 = 1;
const expected1 = "b";
// after function call, arr1 should be:
const arr1Expected = ["a", "c", "d", "e"];

const arr2 = ["a", "b", "c"];
const removeIdx2 = 3;
const expected2 = null;
const arr2Expected = ["a", "b", "c"];

const arr3 = ["a", "b", "c"];
const removeIdx3 = -3;
const expected3 = null;
const arr3Expected = ["a", "b", "c"];

const arr4 = ["cake", "pie", "cookies", "vegetables", "candy"];
const removeIdx4 = 3;
const expected4 = "vegetables";
const arr4Expected =  ["cake", "pie", "cookies", "candy"];

/**
 * Removes and returns the item at the given idx from the given array and
 * shifts the remaining items to fill the empty space created by the item
 * being removed.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items
 * @param {number} idx Index of the item to be removed.
 * @returns {any} The removed item.
 */
function removeAt(items, idx) {
    var targetIdx = items[idx]; //save target for return

    if (idx >= 0 && idx < items.length) { //make sure idx is within bounds
        for (var i=idx;i<items.length-1;i++) { //start loop at idx end at length - 1
            items[i] = items[i+1]; //move everything to the left, starting at idx
        }
        items.pop(); //remove the last idx
        return targetIdx; //return target
    }
    return null; //return null if false
}    
// Tests
const result1 = removeAt(arr1, removeIdx1);
console.log(result1, "should equal", expected1);
console.log(arr1, "should equal", arr1Expected);

const result2 = removeAt(arr2, removeIdx2);
console.log(result2, "should equal", expected2);
console.log(arr2, "should equal", arr2Expected);

const result3 = removeAt(arr3, removeIdx3);
console.log(result3, "should equal", expected3);
console.log(arr3, "should equal", arr3Expected);

const result4 = removeAt(arr4, removeIdx4);
console.log(result4, "should equal", expected4);
console.log(arr4, "should equal", arr4Expected);