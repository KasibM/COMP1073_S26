/* Third-Party APIs

DESCRIPTION
On your own, pick a publicly available API that genuinely interests you - something connected to your hobbies, passions, or field of interest. Create a page that demonstrates how to connect with the API using JavaScript and displays rich, visual output - not just text. Avoid common APIs such as weather or joke generators; choose something innovative that allows you to display images, maps, charts, audio, or other visual content on the page.

INSTRUCTIONS
Create an html file (index.html) and two folders which contain CSS and JavaScript for the assignment.
Dynamically add your student id and name somewhere on the index page using a p tag and JavaScript.
Choose a Web app or service that offers a friendly API with good documentation, based on something you are genuinely interested in. If you are unsure whether your choice is appropriate, ask your professor. Note: weather APIs and other basic text-only APIs will not be accepted.
Find within the documentation a simple "getting started" section that shows how to obtain a key for the API, how to connect, and how to use it to obtain data.
Follow the documentation to create your own demonstration page on a Web server, using your own API key.
Learn how to make one or more calls to the API.
Output data from the Web service to your page in a visually rich way — your page must display more than plain text. This could include images, maps, charts, audio players, cards, or other visual elements that make the data engaging and meaningful.
Include a link to the tutorial or documentation page that you followed to create your page (very important – this demonstrates academic integrity).
The JavaScript and CSS file should be linked to the html. Don't forget to use defer if you are adding script in the head section.
Once you've completed the functionality of the interface, add some CSS to make the page visually attractive (don't spend too much time on this – the focus is the JS).
Ensure that all your HTML, CSS, and JS is well-commented, formatted, and organized.
Upload your application to a live website. (GitHub Pages or any other that works for you.)
Post the URL to the assignment on Blackboard.
*/

//API Documentation
//https://deckofcardsapi.com/ 

// Declare and Initialise Variables (Adapted from Lesson 1 guess.js)
const studentName = "Kasib Mir";
const studentNumber = "200653265";

let gameRunning = false;
let deckId = "new";
let correctGuessCount = 0;
let incorrectGuessCount = 0;


// Declare and Initialise Elements of Document (Adapted from Lesson 4 conditionals.js)
const sName = document.querySelector("#sName");
const sID = document.querySelector("#sID");

const pMessage = document.querySelector("#message");
const pCorrectGuesses = document.querySelector("#correctGuesses");
const pIncorrectGuesses = document.querySelector("#incorrectGuesses");
const iCardDisplay = document.querySelector("#cardDisplay");
const bDraw = document.querySelector("#drawButton");
const bYes = document.querySelector("#yesButton");
const bNo = document.querySelector("#noButton");
const bRestart = document.querySelector("#restartButton");

// Add student name and ID dynamically (Adapted from Lesson 1 guess.js)
sName.textContent = studentName;
sID.textContent = studentNumber;

//Set display property for yes/no buttons initially (Adapted from Lesson 1 guess.js)
bYes.style.display = "none";
bNo.style.display = "none";
bRestart.style.display = "none";




// Add EventListeners for buttons (Adapted from Lesson 4 conditionals.js)
bDraw.addEventListener("click", drawCard);
bYes.addEventListener("click", correctGuess);
bNo.addEventListener("click", incorrectGuess);
bRestart.addEventListener("click", redrawCard);


// Action functions (Adapted from Lesson 4 conditionals.js)
function drawCard() {
    if(!gameRunning){
        // Shuffle and pull new card
        redrawCard();
        // Unhide restart button
        bRestart.style.display = "inline";
    } else {
        pMessage.textContent = "";
        
    }

}

function correctGuess() {

}

function incorrectGuess() {
    
}

function redrawCard(){
    // Update Display Message
    pMessage.textContent = "This is your card. Remember it. Draw Card to begin the magic trick.";
    // Start game
    gameRunning = true;

    // Shuffle deck
    callShuffle();
    
    // Draw and Display Card
    callDraw();

    // Reshuffle card into deck
    callShuffle();
    


}

function callShuffle(){
    let url = `https://deckofcardsapi.com/api/deck/${deckId}/shuffle/?deck_count=1`;
    
    // Request shuffle, return and save deck_id value to deckId
    fetch(url, {method: "GET"}).then(response => {
        return response.json();
    }).then(json =>{
        deckId = json.deck_id;
    })


}

function callDraw(){
    let url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
    
    // Draw Card, display card image
    fetch(url, {method: "GET"}).then(response => {
        return response.json();
    }).then(json =>{
        iCardDisplay.setAttribute("src", json.cards[0].image);        
    })
}














