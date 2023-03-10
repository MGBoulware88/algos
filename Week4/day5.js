/* 
  Zip Arrays into Map
  Given two arrays, create an associative array and return it (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.
  Associative arrays are sometimes called maps because a key (string) maps to a value 
 */

const keys1 = ["abc", 3, "yo"];
const vals1 = [42, "wassup", true];
const expected1 = {
    abc: 42,
    3: "wassup",
    yo: true,
};

const keys2 = [];
const vals2 = [];
const expected2 = {};

const keys3 = ['name', 'number', 'type', 'evolves_from']
const vals3 = ['Gyarados', 130, 'water/flying', 'Magikarp']
const expected3 = {
    name: 'Gyarados',
    number: 130,
    type: 'water/flying',
    evolves_from: 'Magikarp'
}
const keys4 = ['name', 'number', 'type', 'evolves_from']
const vals4 = ['Gyarados', 130, 'water/flying', 'Magikarp']
const expected4 = "Invalid array: Can't create hash map with duplicate keys!"

/*  PSEUDOCODE
*** ASSUMPTIONS ***
1. Input arrays will be same length
2. Input arrays will be structured the same, i.e. if one is an array of arrays, the second would also be

*** SOLUTION ***

create a function that accepts 2 arr inputs
    create temp var as empty map {}
    for loop that starts at i=0, stops at arr1.length and i++
        assign key:value pairs to our temp var using arr1 at idx i as the key and arr2 at idx i as the value

    return the obj
*/



// create the function and decide what params it needs and what it will return

function array_to_map(arr1,arr2) { //2 array inputs
    let myMap = {};
    for (var i=0;i<arr1.length;i++) {
        if (myMap.hasOwnProperty(arr[i])) {
            return "Invalid array: Can't create hash map with duplicate keys!"
        }
        myMap[arr1[i]] = arr2[i];
        
    }
    return myMap;
}

console.log(array_to_map(keys1,vals1));
console.log(array_to_map(keys2,vals2));
console.log(array_to_map(keys3,vals3));
console.log(array_to_map(keys4,vals4));