/****************** YOUR NAME: Wui Yi Tang******************/

/*The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE




// create variables for modelName and duration
let modelName = "XYZ";
let duration = 0;




/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE


function recalculate() {
    // get the calculated-cost span element
    let costLabel = document.getElementById("calculated-cost");
  
    // check the value of the modelName variable and calculate the new total cost
    let totalCost;
    if (modelName === "XYZ") {
      totalCost = duration * 100;
    } else {
      totalCost = duration * 213;
    } 
  
    // set the calculated-cost element's innerHTML to the new value
    costLabel.innerHTML = totalCost;
  }



/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    // modelButton.addEventListener("click", changeModel);

// INSERT YOUR CODE HERE


// create a variable for the model button
let modelButton = document.getElementById("model-button");

// create the changeModel function
function changeModel() {
  // get the model-text span element
  let modelText = document.getElementById("model-text");

  // check the value of the modelName variable and update accordingly
  if (modelName === "XYZ") {
    modelName = "CPRG";
    modelText.innerHTML = "Model CPRG";
  } else if (modelName === "CPRG") {
    modelName = "XYZ";
    modelText.innerHTML = "Model XYZ";
  }

  // recalculate the total cost with the new model
  recalculate();
}

// add an event listener to the model button to run changeModel() on click

modelButton.addEventListener("click", changeModel);



/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE

// create a variable for the duration button
let durationButton = document.getElementById("duration-button");

// create the changeDuration function
function changeDuration() {
  // get the duration-text span element
  let durationText = document.getElementById("duration-text");

  // prompt the user for a new duration and update the duration variable
  let newDuration = prompt("Enter a new duration (in days):");
  duration = parseFloat(newDuration);

  // update the duration-text span element with the new value
  durationText.innerHTML = duration;

  // recalculate the total cost with the new duration
  recalculate();
}

// add an event listener to the duration button to run changeDuration() on click

durationButton.addEventListener("click", changeDuration);



