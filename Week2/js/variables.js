/* STEP 1: Declare variables
Use a-z, 0-9, A-Z and underscores, avoiding reserved names
All program variables are generally declared at the beginning */

let myName;
let myCourse;
let string;
let para = document.querySelector("p");



/* STEP 2: Initialize variables
Don't confuse a variable with no value with one that doesn't exist at all */

myName = "Kasib Mir";
myCourse = "JavaScript";
string = "string";

/* STEP 3: Updating variables
Once a variable has been declared, this can be done any time */
myName = "Kasib";
myCourse = "JS";
string = myName + " " + myCourse;
para.textContent = string;

// STEP 4: Variable types (use typeof in the console)
// Numbers
let numCourse = 6;
para.textContent = typeof(para);

// Strings (use '' or "")
let stringCourse = "Client-Side JS";
para.textContent = stringCourse;
// Booleans
let isAlive = true;
para.textContent = "Is alive?: " + isAlive;
let compare = 5 > 2;
para.textContent = "is 5 > 2 ?: " + compare;
// Arrays
let myArrays = ["Sarah","Steve","Kasib"];
para.textContent = myArrays[1];

// Objects
let myDog = {
            fName:'Simba',
            breed:'Staffy',
            colour:'Brown'
};
console.log("Dog colour: " + myDog.colour);

// STEP 5: Typing (JavaScript is a loosely-typed language)


