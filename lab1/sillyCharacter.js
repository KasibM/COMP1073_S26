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
const generateCharacter = document.querySelector("button#generateButton");
const characterDescription = document.querySelector("p#characterDescription");
const increaseAge = document.querySelector("button#increaseAgeButton");
const decreaseAge = document.querySelector("button#decreaseAgeButton");
const nameField = document.querySelector('input#nameField');
const nameSubmit = document.querySelector('button#nameButton');

// Function to generate a random character description
function generateCharacterDescription(){
    powerListA = ["flight", "speed", "teleportation"];
    powerListB = ["regeneration", "telepathy", "invisibility"];
    characterName = "[Change Name]";
    characterAge = Math.floor(Math.random() * 100) + 1;
    isSuperNum = Math.floor(Math.random() * 2);
    specialPowers = [powerListA[Math.floor(Math.random() * 3)], powerListB[Math.floor(Math.random() * 3)]];
    favouriteFood = "apples";
    characterDescription.textContent = characterName + " is " + characterAge + " years old.";
    if (isSuperNum === 0){
        characterDescription.textContent += " " + characterName + " has the powers of " + specialPowers[0] + " and " + specialPowers[1] + ".";
    } else {
        characterDescription.textContent += " " + characterName + " does not have any powers. ";
    }
    characterDescription.textContent += " Their favourite food is " + favouriteFood;
}

// Function to update the character's description after changing age
function updateCharacterDescription(){
    characterDescription.textContent = characterName + " is " + " years old.";
    if (isSuperNum === 0){
        characterDescription.textContent += " " + characterName + " has the powers of " + specialPowers[0] + " and " + specialPowers[1] + ".";
    } else {
        characterDescription.textContent += " " + characterName + "does not have any powers.";
    }
    characterDescription.textContent += "Their favourite food is " + favouriteFood;
}

// Functions to update character's age
function increaseCharacterAge(){
    characterAge++;
    updateCharacterDescription();
}
function decreaseCharacterAge(){
    characterAge--;
    updateCharacterDescription();
}

// Add event listeners for buttons using querySelector
//nameChange.addEventListener('click', );
generateCharacter.addEventListener('click', generateCharacterDescription);
increaseAge.addEventListener('click', increaseCharacterAge);
decreaseAge.addEventListener('click', decreaseCharacterAge);

