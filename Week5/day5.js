/* 
Given an array of objects / dictionaries to represent new inventory,
and an array of objects / dictionaries to represent current inventory,
update the quantities of the current inventory

if the item doesn't exist in current inventory, add it to the inventory
return the current inventory after updating it.
*/

const newInv1 = [
    { name: "Grain of Rice", quantity: 9000 },
    { name: "Peanut Butter", quantity: 50 },
    { name: "Royal Jelly", quantity: 20 },
];
const currInv1 = [
    { name: "Peanut Butter", quantity: 20 },
    { name: "Grain of Rice", quantity: 1 },
];

const expected1 = [
    { name: "Peanut Butter", quantity: 70 },
    { name: "Grain of Rice", quantity: 9001 },
    { name: "Royal Jelly", quantity: 20 },
];

const newInv2 = [];
const currInv2 = [{ name: "Peanut Butter", quantity: 20 }];
const expected2 = [{ name: "Peanut Butter", quantity: 20 }];

const newInv3 = [{ name: "Peanut Butter", quantity: 20 }];
const currInv3 = [];
const expected3 = [{ name: "Peanut Butter", quantity: 20 }];



// take 5-8 mins to write the pseudocode here:
/**
Create funtion that accepts 2 arrays.

    Check if new inventory array is empty
        Return current inventory array

    loop through new inventory array
        check if current element exists in current inventory array
            add to current inventory
        else update quantity of current inventory

    return current inventory
 */


// create the function and decide what params it needs and what it will return

function updateInv(curArr, newArr){
    console.log("New Items Array: " + newArr);
    
    if(newArr == []){
        return curArr;
    }
    tempArr = [] //use for storing new items
    for(var x = 0; x<newArr.length;x++){
        console.log("new inv item[x]: " + newArr[x]['name']);
        for(var y = 0; y<curArr.length; y++){
            if(newArr[x]['name'] == curArr[y]['name']){
                curArr[y]['quantity'] += newArr[x]['quantity'];
                break
            }
            else{
                tempArr.push(newArr[x]);
            }
        }
    }
    for (var i=0;i<tempArr.length;i++){
        console.log("New Items: " + tempArr[i]);
    }
    curArr.push(tempArr); //after the loops, add all the new items -- assuming no dupes, we don't need to check until we finish
    console.log("Inv updated to: " + curArr)
    return curArr;
}

testCase1 = updateInv(currInv1, newInv1);
// testCase2 = updateInv(currInv2, newInv2);
// testCase3 = updateInv(currInv3, newInv3);

console.log(testCase1);
// console.log(testCase2);
// console.log(testCase3);