// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

//findMin
const findMin = (...nums) => Math.min(...nums);

//merging objs
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

//doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...nums) => {
    nums = nums.map(num => num * 2);
    return [...arr, ...nums]; 
}

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
let i = Math.floor(Math.random() * items.length);
return [...items.slice(0,i), ...items.slice(i+1)];
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1, ...array2];

}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => ({...obj, [key]: val})


/** Return a new object with a key removed. */

const  removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
return {...obj1,...obj2};
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}
