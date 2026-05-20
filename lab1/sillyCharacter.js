/* 
Project: "Silly Character Customizer"
Objective:
You’ll create a small interactive webpage that generates a random, 
funny character with attributes like name, age, favorite food, and special powers. 
The user can also customize some aspects like updating the character's name or age.

Project Breakdown:
Declare, Initialize, and Update Variables:

You’ll create variables to store different character attributes 
(name, age, favorite food, etc.).
Users will have the option to update some of these variables, like 
changing the character’s name or age.

Use different data types for each attribute:
characterName (string)
Age (number)
Is the character a superhero? (boolean)
Special powers (array)
Favorite food (string)
Conduct Basic Math Operations:

You can randomly generate the character's age using math operations.
You could also include a small feature where the character's age increases 
or decreases when a button is clicked.
Create and Manipulate Strings:

Use string manipulation to generate a funny description of the character 
based on the data. You can concatenate strings or use template literals to 
display the character's attributes in a creative and humorous way.

*/

// Declare and initialize variables
let powerListA = ["flight", "speed", "teleportation"];
let powerListB = ["regeneration", "telepathy", "invisibility"];
let characterName = "Name";
let characterAge = Math.floor(Math.random() * 100) + 1;
let isSuperNum = Math.floor(Math.random() * 2);
let isSuper;
let specialPowers = [powerListA[Math.floor(Math.random() * 3)], powerListB[Math.floor(Math.random() * 3)]];
let favouriteFood = "apples";
const characterDescription = document.querySelector("p#characterDescription");

// Function to generate a random character description
function generateCharacterDescription(){
    characterDescription.textContext = characterName + " is " + " years old.";
    if (isSuperNum === 0){
        characterDescription.textContext += " " + characterName + " has the powers of " + specialPowers[0] + " and " + specialPowers[1] + ".";
    } else {
        characterDescription.textContext += " " + characterName + "does not have any powers.";
    }
    characterDescription.textContext += "Their favourite food is " + favouriteFood;
}

// Functions to update character's age
function increaseCharacterAge(){
    characterAge++;
}
function decreaseCharacterAge(){
    characterAge--;
}

// Function to update the character's description after changing age


// Add event listeners for buttons using querySelector

