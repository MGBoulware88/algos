/* 
  Given a search criteria object whose values will only be
  primitives (ints, strings, booleans) and a list of objects.
  return any object that matches all the key value pairs in the search
  criteria object.
  Bonus: write a 2nd solution using build in methods to practice functional
  programming.
*/

const items = [
    { firstName: 'Bob', lastName: 'Bobbert', age: 31 },
    { firstName: 'John', lastName: 'Smith', age: 25 },
    { firstName: 'Bob', lastName: 'Smith', age: 27 },
    { firstName: 'Bob', lastName: 'White', age: 31 },
];

const searchCriteria1 = {
    firstName: 'Bob',
    age: 31,
};
const expected1 = [
    { firstName: 'Bob', lastName: 'Bobbert', age: 31 },
    { firstName: 'Bob', lastName: 'White', age: 31 },
];

const searchCriteria2 = {
    lastName: 'Smith',
};
const expected2 = [
    { firstName: 'John', lastName: 'Smith', age: 25 },
    { firstName: 'Bob', lastName: 'Smith', age: 27 },
];

/**
 * Finds the objects that match the given search criteria.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object} criteria
 * @param {Array<Object>} collection
 * @returns {Array<Object>} The found objects.
 */
function findObjects(criteria, collection) { }

/**
 * - Time: O(?).
 * - Space: O(?).
 */
function findObjectsFunctional(criteria, collection) {
    const objArr = [];
    for (let i=0; i<collection.length; i++) {
        let isMatch = true;
        for (const key in criteria) {
            if (criteria[key] !== collection[i][key]) {
                isMatch = false;
                break;
            }
        }
        isMatch && objArr.push(collection[i]);
    }
    return objArr;
}

console.log(findObjectsFunctional(searchCriteria1, items));
console.log(findObjectsFunctional(searchCriteria2, items));