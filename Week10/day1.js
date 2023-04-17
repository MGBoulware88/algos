/* 
Recreate Object.entries method
Given an object,
return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = {
    name: 'Pizza',
    calories: 9001,
};

const expected1 = [
    ['name', 'Pizza'],
    ['calories', 9001],
];

const proto = { inheritance: 'inherited key', keyOnProto: 'val from proto' };

// This object contains inherited key value pairs from the above proto obj.
const obj2 = Object.assign(Object.create(proto), {
    firstName: 'Foo',
    lastName: 'Bar',
    age: 13,
});

const expected2 = [
    ['firstName', 'Foo'],
    ['lastName', 'Bar'],
    ['age', 13],
];

/* 
PSEUDOCODE
--note: can use hasOwnProperty() method to check if key was inherited
create a function that accepts an object
    create empty array to use for return
    loop through the object to grab the key and value
        check if key is inherited or not
            create temp arr
            push key to temp arr
            push value to temp arr
            push the temp arr to array
    return array
*/

/**
 * Returns a 2d array of key value pairs from the given obj.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object} obj
 * @typedef {Array<Array<string, any>>} output The nested array should look
 *    like [key, val]
 * @returns {output}
 */

//for (let i = 0; i<arr.length; i++)

// for player in player_dict


function entries(obj) {
    //declare array for the return
    const arrOfKeyPairs = [];
    //loop through the keys in our passed obj
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) { //filter out inherited keys --hasOwnProperty() returns false for inherited keys
            const tempArr = []; //declare tempArr and push key & value to it
            tempArr.push(key, obj[key]); //we can pass both elements with the same push command
            arrOfKeyPairs.push(tempArr); //push our tempArr to the array we need to return as a 2d array of key pairs
        }
    }
    return arrOfKeyPairs;
}

const testCase1 = entries(obj1);const testCase2 = entries(obj2);console.log(testCase1);console.log(testCase2);