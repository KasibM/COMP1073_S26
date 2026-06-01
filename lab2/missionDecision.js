/*Project: Mission Decision Engine
Objective: In this lab, students will build a Mission Decision Engine using JavaScript conditional statements.
The system evaluates multiple mission variables and generates a mission status report based on logic conditions.
No user input is required. All values are predefined.

IMPORTANT TERMINOLOGY
In this lab, some game-style terms are used:

Ammo (Ammunition): Represents the number of shots or uses a weapon can perform.
If ammo becomes 0, the weapon cannot be used.
Shield: A protection system that reduces damage (true = active, false = inactive)
Health: Represents the character’s life level (0–100)
Mission Progress: Shows how close the mission is to completion (0–100%)
Enemy Nearby: Indicates whether an enemy is currently present (true/false)
These are simulation variables only used for programming practice.

GIVEN VARIABLES
let health = 65;
let ammo = 8;
let shield = true;
let missionProgress = 40;
let enemyNearby = true;

INSTRUCTIONS
Create a JavaScript program that evaluates the mission status using conditional statements.
The program should analyze the variables above and display appropriate system messages.


CONDITION RULES
1. CRITICAL FAILURE (Highest Priority)
If:
health < 30 AND enemyNearby is true
Display:
"CRITICAL ALERT: Immediate Evacuation Required"

2. LOW RESOURCES WARNING
If:
ammo < 5 OR shield is false
Display:
"Warning: Low Resources"

3. MID MISSION STATUS
If:
missionProgress is between 1 and 70
Display:
"Mission In Progress"

4. HIGH PROGRESS STATUS
If:
missionProgress > 70 AND enemyNearby is false
Display:
"Approaching Mission Completion"

5. MISSION COMPLETE
If:
missionProgress === 100
Display:
"Mission Complete Successfully"

6. DEFAULT STATE
If none of the above conditions match:
"System Stable"

OUTPUT REQUIREMENTS
Use querySelector and textContent
Display output clearly on the webpage
Multiple conditions may be true, but priority order must be respected 
TECHNICAL REQUIREMENTS
Students must demonstrate:

Variables
Conditional statements
Logical operators (&&, ||)
Comparison operators
DOM manipulation (querySelector)
Proper program flow and priority handling
*/

// Declare and Initialise Variables
let health = 65;
let ammo = 8;
let shield = true;
let missionProgress = 40;
let enemyNearby = true;

const ammoP = document.querySelector("p#ammo");
const shieldP = document.querySelector("p#shield");
const healthP = document.querySelector("p#health");
const missionProgressP = document.querySelector("p#missionProgress");
const enemyNearbyP = document.querySelector("p#enemyNearby");
const missionDecision = document.querySelector("p#missionDecision");
