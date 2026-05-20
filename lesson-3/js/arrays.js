const output = document.querySelector('body p:nth-of-type(2)');
//Empty spots in arrays are called 'holes'
// calling .length() on an array also deletes elements from the array ?????
// -1 is considered a property name in JS, cannot be used as an index to call the last item in an array
// instead of array[-1] for last item in array use array.at(-1)
//console.log(array1[1]);
// array[-2] will work for 2nd last item
//console.log(array1[-2]);
// arrays are compared by memory location not by content
// [1,2] === [2,1] is false
//let array2 = [];
//console.log(array2); //-->[]
//let array3 = Array(3);
//console.log(array3); //-->(3)[empty x 3]
//let array4 = [undefined, undefined,undefined]; // different from empty
//console.log(array4);
// You can also change a particular element
// setting a huge index creates a huge array
const array5 = [];
array5[1000] = 'hi';
console.log(array5.length);
console.log(array5.length);
// array.sort()
// Array.isArray(arrayX)
// An array within an array is called a multidimensional array - it can be accessed by specifying the index of the first array, then the item within it

/* STEP 1: Creating an array
When declaring and initializing an array, you can include strings, numbers, booleans, and even other arrays */
let myArray = ['string', 25, true, [1,2,3]];

/* STEP 2: Reading and changing array elements
You can refer to a particular element in an array with it's index number */
output.textContent = myArray[2];
output.textContent = myArray[3][0];

/* STEP 3: Determining array length
Being able to figure out how many elements are contained in an array is a critical feature of JavaScript programming */
output.textContent = myArray.length;

// In particular, looping through arrays
//for and for each
for(let i=0; i<myArray.length; i++){

}
myArray.forEach(i => {
    
});
/*
function add(a,b){
    return a + b;
}

const add = (a,b) => {
    return a + b;
};*/
// => is shorthand for defining a function

/* STEP 4: Convert a string to an array
If there is a common character that can act as a delimiter in a string, we can use this character to create an array */
let origFive = 'Toronto Maple Leafs, Chicago Blackhawks, Detroit Red Wings, Boston Bruins, Montreal Canadiens';
// Output one of the array items
console.log(origFive);
let origFiveArray = origFive.split(', ');
console.log(origFiveArray);

// Output the last element of the array
output.textContent = origFiveArray.at(-1);
/* STEP 5: Convert an array back to a string
Use join() and toString() - note that join() allows you to choose and insert a delimiter, while toString() does not */
let origFiveString = origFiveArray.join(', '); // specify a separator
output.textContent = origFiveString;
/* STEP 6: Adding and removing items from an array
Without the ability to edit the contents of an array, this type of variable would have limited use - but adding and removing array items is pretty straightforward */

// Adding one or more items to an array with push()
let origSevenArray = origFiveArray.push('Network Ragers', 'Philadelphia Flyers');
output.textContent = origSevenArray;
// If you would like to capture how many elements are in the array after you have edited it, then…

// Removing an item from an array with pop()
//origSevenArray.pop();
// pop() returns the item that was removed, rather than the length of the updated array, so…

// To do the same thing, that is, to add and remove an item from the beginning of the array, use shift() and unshift()
//unshift() add at the beginning of the list
//shift() to remove at the beginning of the list
// We can also modify the array contents by deleting or substituting elements, or inserting one or more elements at a certain place with splice()

/* That's it for the basics of working with arrays! With these tools at your disposal, a whole new world of possibilities with JavaScript are at your command */

// map(): used to change each element and return a new array
mappedArray = myArray.map(i=>String(i));
console.log(mappedArray);

// filter(): select specific elements and keep elements that match a specific condition
let filteredArray = myArray.filter(i=>typeof i === "number"); 
console.log(filteredArray);


// includes(): checks if a value exists, returns boolean
let includesArray = myArray.includes(25);
console.log(includesArray);
