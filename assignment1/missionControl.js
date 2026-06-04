/*Project: Mission Control
Objective: Using HTML, CSS, and JavaScript, create an interactive Mission Control web application that simulates a futuristic mission generator.
Users will build a secret mission by selecting different mission elements such as agent type, location, weapon loadout, objective, and risk level. Once selections are complete, the system will generate a mission briefing.
This assignment focuses on practicing variables, arrays, functions, conditionals, selectors, and DOM manipulation while creating an engaging mini-project experience.

Create a simple HTML page featuring 5 buttons or clickable controls

Your mission categories must include:
Agent Type
Mission Location
Weapon Loadout
Mission Objective
Risk Level

GENERATING THE MISSION
Add one additional button that allows the user to launch or generate the completed mission briefing.
The final button (for example: “LAUNCH MISSION”) should trigger a function that combines all selected values into a completed mission briefing.
Before generating the mission, use conditional statements to ensure the user has made all required selections.
If selections are incomplete, display an appropriate warning message.

INTERACTION REQUIREMENTS
When the user clicks each button, your JavaScript should:
Cycle through an array of predefined choices for that category
Update the selected value visually on the page
Allow users to continue clicking until they are satisfied with their choice

For example:
Clicking the Agent Type button may cycle through:
Ghost → Shadow → Viper → Nova

The user’s selected choice should be displayed clearly beside the button or within the interface.

FUNCTION REQUIREMENTS
You must create and use JavaScript functions to organize your code.
At minimum, your project should include functions for:
Changing/cycling mission selections
Generating the mission briefing
Resetting the mission system
(Optional) Generating a random mission
Functions should be connected to user interactions using event listeners.

TECHNICAL REQUIREMENTS
Your project must demonstrate the following JavaScript concepts:
Variables
Arrays
Functions
Conditional statements
Event listeners
DOM manipulation
String concatenation or template literals

STYLING
Once functionality has been completed, apply CSS to make the interface visually appealing.
Try to create a design inspired by:
futuristic dashboards
sci-fi games
mission control systems
Do not spend excessive time on styling — the focus of this assignment is JavaScript functionality.
Ensure your HTML, CSS, and JavaScript are:
Validated
Well-commented
Properly formatted
Organized carefully


*/

// Declaration and Initialisation of Variables
const agentBank = [
                "Not Selected",
                "Dr. No",
                "Blofeld",
                "Scaramanga",
                "Le Chiffre",
                "Goldfinger",
                "Silva",
                "Safin",
                "Oddjob"
];
const locBank = [
                "Not Selected",
                "Canada",
                "Japan",
                "Brazil",
                "Germany",
                "Australia",
                "South Africa",
                "Norway",
                "Mexico",
                "India",
                "Italy"
];
const weaponBank = [
                "Not Selected",
                "Plasma Rifle",
                "Laser Pistol",
                "EMP Grenade",
                "Nano Blade",
                "Railgun",
                "Pulse Cannon",
                "Shock Baton",
                "Drone Swarm",
                "Flamethrower",
                "Sniper Rifle",
                "Tactical Crossbow",
                "Energy Sword"
];
const objectiveBank = [
                "not Selected",
                "rescue the hostage",
                "stop the nuclear launch",
                "retrieve the stolen intel",
                "eliminate the crime syndicate leader",
                "protect the VIP",
                "hack the enemy mainframe",
                "destroy the secret weapon facility",
                "prevent the assassination",
                "infiltrate the enemy base",
                "recover the experimental prototype",
                "escape before detonation"
];
const riskBank = [
                "Not Selected",
                "Low Risk",
                "Moderate Risk",
                "High Risk",
                "Extreme Risk",
                "Impossible"
];

let agent = 0;
let loc = 0;
let weapon = 0;
let objective = 0;
let risk = 0;

// Declaration and Initialisation of Document Constants
const agentBack = document.querySelector("#agentBack");
const agentSelection = document.querySelector("#agentSelection");
const agentNext = document.querySelector("#agentNext");

const locBack = document.querySelector("#locationBack");
const locSelection = document.querySelector("#locationSelection");
const locNext = document.querySelector("#locationNext");

const weaponBack = document.querySelector("#weaponBack");
const weaponSelection = document.querySelector("#weaponSelection");
const weaponNext = document.querySelector("#weaponNext");

const objectiveBack = document.querySelector("#objectiveBack");
const objectiveSelection = document.querySelector("#objectiveSelection");
const objectiveNext = document.querySelector("#objectiveNext");

const riskBack = document.querySelector("#riskBack");
const riskSelection = document.querySelector("#riskSelection");
const riskNext = document.querySelector("#riskNext");

const generateButton = document.querySelector("#generateButton");
const resetButton = document.querySelector("#resetButton");

const missionHeader = document.querySelector("#briefingHead");
const missionPara = document.querySelector("#briefingPara");

// Set initial Not Selected Placeholders
agentRefresh();
locRefresh();
weaponRefresh();
objectiveRefresh();
riskRefresh();

// Functions to Change Selection
function agentRefresh(){
    agentSelection.textContent = agentBank[agent];
}
function agentSelectNext(){
    if(agent < agentBank.length-1){
        agent++;
    } else {
        agent = 1;
    } 
    agentRefresh();
}
function agentSelectBack(){
    if(agent > 1){
        agent--;
    } else {
        agent = agentBank.length-1;
    } 
    agentRefresh();
}

function locRefresh(){
    locSelection.textContent = locBank[loc];
}
function locSelectNext(){
    if(loc < locBank.length-1){
        loc++;
    } else {
        loc = 1;
    } 
    locRefresh();
}
function locSelectBack(){
    if(loc > 1){
        loc--;
    } else {
        loc = locBank.length-1;
    } 
    locRefresh();
}

function weaponRefresh(){
    weaponSelection.textContent = weaponBank[weapon];
}
function weaponSelectNext(){
    if(weapon < weaponBank.length-1){
        weapon++;
    } else {
        weapon = 1;
    } 
    weaponRefresh();
}
function weaponSelectBack(){
    if(weapon > 1){
        weapon--;
    } else {
        weapon = weaponBank.length-1;
    } 
    weaponRefresh();
}

function objectiveRefresh(){
    objectiveSelection.textContent = objectiveBank[objective];
}
function objectiveSelectNext(){
    if(objective < objectiveBank.length-1){
        objective++;
    } else {
        objective = 1;
    } 
    objectiveRefresh();
}
function objectiveSelectBack(){
    if(objective > 1){
        objective--;
    } else {
        objective = objectiveBank.length-1;
    } 
    objectiveRefresh();
}

function riskRefresh(){
    riskSelection.textContent = riskBank[risk];
}
function riskSelectNext(){
    if(risk < riskBank.length-1){
        risk++;
    } else {
        risk = 1;
    } 
    riskRefresh();
}
function riskSelectBack(){
    if(risk > 1){
        risk--;
    } else {
        risk = riskBank.length-1;
    } 
    riskRefresh();
}

// Functions to Generate and Reset Mission
async function generateMission(){
    if(agent === 0 || loc === 0 || weapon === 0 || objective === 0 || risk === 0){
        missionHeader.textContent = "Unable to Generate Mission Briefing";
        missionPara.textContent = "All mission details need to be selected.";
    } else{
        missionHeader.textContent = "Mission Briefing";
        missionPara.textContent = `Agent ${agentBank[agent]} will be on a ${riskBank[risk]} mission in ${locBank[loc]}. They will be using a ${weaponBank[weapon]} to ${objectiveBank[objective]}.`;
    } 
}

// Event listeners

agentBack.addEventListener("click", agentSelectBack);
agentNext.addEventListener("click", agentSelectNext);

locBack.addEventListener("click", locSelectBack);
locNext.addEventListener("click", locSelectNext);

weaponBack.addEventListener("click", weaponSelectBack);
weaponNext.addEventListener("click", weaponSelectNext);

objectiveBack.addEventListener("click", objectiveSelectBack);
objectiveNext.addEventListener("click", objectiveSelectNext);

riskBack.addEventListener("click", riskSelectBack);
riskNext.addEventListener("click", riskSelectNext);

generateButton.addEventListener("click", generateMission);

