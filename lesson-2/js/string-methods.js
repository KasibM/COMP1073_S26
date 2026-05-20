let output = document.querySelector('p');

/* STEP 1: String Length */
let step1 = "This is a string";
output.textContent = step1.length;


/* STEP 2: Retrieving a Specific String Character */
let step2 = "Donald J. Trump";
let firstCharacter = step2[0];
output.textContent = firstCharacter;
let lastCharacter = step2[step2.length - 1];
output.textContent = lastCharacter;



/* STEP 3: Extracting Part of a String */
let step3 = step2.indexOf("ald");
output.textContent = step3;

// Note - if the substring is not found within the string, indexOf() returns -1

// Note - if you don't specify where to end the slice, the method returns the rest of the string
let step3ss = step2.slice(5,8);
output.textContent = step3ss;
/* STEP 4: Changing Case */
let step4a =  step2.toUpperCase();
output.textContent = step4a;


/* STEP 5: Updating Parts of a String */
let step5 = 'Barrie, ON';
output.textContent = step5.replace("ON", "Ontario");