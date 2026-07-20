/* The Pizza Maker

DESCRIPTION
Build a simple form that allows a user to order a pizza, including a number of ingredients and other suitable characteristics. When the form is submitted and all validations pass, your JavaScript should create an object from a Pizza class and present the order back to the customer by invoking a method on that object.

INSTRUCTIONS
Create an html file (index.html) and two folders which contain CSS and JavaScript for the assignment.
Build a simple HTML form that you think would be appropriate for a customer to order a pizza. Dynamically add your student id and name somewhere on the page using a p tag and JavaScript.
Be creative – what different options might you want your customers to have?
Validate the HTML pizza order form. The following steps should only execute if all validations pass.
Write JavaScript to capture the values from each of the form inputs when the user clicks the 'order' button.
Create a class called Pizza using the parameters from the order form. The class must include at least one method that builds and returns a description of the pizza order as a string.
When the form is submitted and validated, instantiate a new Pizza object from your class using the captured form values. Visually output the pizza description to the HTML page by invoking the method on your Pizza object — the displayed text must come from that method, not directly from the form values.
The JavaScript and CSS file should be linked to the html. Don't forget to use defer if you are adding script in the head section.
Once you've completed the functionality of the interface, add some CSS to make the page visually attractive (don't spend too much time on this – the focus is the JS).
Ensure that all your HTML, CSS, and JS is well-commented, formatted, and organized.
Upload your application to a live website. (GitHub Pages or any other that works for you.)
Post the URL to the assignment on Blackboard.
*/

// Declare and Initialise Variables (Adapted from Lesson 1 guess.js)
const studentName = "Kasib Mir";
const studentNumber = "200653265";

// Declare and Initialise Elements of Document (Adapted from Lesson 4 conditionals.js)
const pizzaSize = document.querySelector("#size");
const pizzaSauce = document.querySelector("#sauce");
const pizzaToppings = document.querySelector("#toppings");
const pizzaSpecialInstructions = document.querySelector("#specialInstructions");
const orderButton = document.querySelector("#orderButton");
const errorSection = document.querySelector("#errorSection");
const orderDetails = document.querySelector("#orderDetails");

// Add EventListener for orderButton (Adapted from Lesson 4 conditionals.js)
orderButton.addEventListener("click", orderPizza);

// Create a class called 'Pizza' (Adapted from Lessson 09 coffee.js)
class Pizza {
    size;
    sauce;
    toppings;
    specialInstructions;

    constructor(size, sauce, toppings, specialInstructions){
        this.size = size;
        this.sauce = sauce;
        this.toppings = toppings;
        this.specialInstructions = specialInstructions;
    }

    description(){
        return `You ordered a ${this.size} ${this.toppings} pizza with ${this.sauce}. You specified these special instructions: ${this.specialInstructions}`
    }

}
// Declare orderPizza Function (Adapted from Lesson 4 conditionals.js)
function orderPizza () {
    // Collect pizza choices
    let size = pizzaSize.value;
    let sauce = pizzaSauce.value;
    let toppings = pizzaToppings.value;
    let specialInstructions = pizzaSpecialInstructions.value;

    // Validation for empty choices
    if(size === ""){
        errorSection.textContent = "Please choose a Size";
    } else if (sauce === "") {
        errorSection.textContent = "Please choose a Sauce";
    } else if (toppings === "") {
        errorSection.textContent = "Please choose Toppings";
    } else {
        // Else none empty instantiate new Pizza and call description method
        let orderedPizza = new Pizza(size, sauce, toppings, specialInstructions);

        // Update textContent of orderDetails <p> with return value of description method of Pizza class
        orderDetails.textContent = orderedPizza.description();

    }
    

}









