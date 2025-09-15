
// Import the readline module and create an interface for reading input/output from the console
const readline = require('readline').createInterface({
  input: process.stdin,   // Take input from the standard input (keyboard)
  output: process.stdout  // Output text to the console
});

// Counter to track how many times the question has been asked
let ind = 1;

/**
 * Function that repeatedly asks the user for input
 */
function AskName() {
  readline.question('Once apon a time, there is a horse ', output => {
    
    // If user types "exit", end the program
    if (input.toLowerCase() === 'exit') {
      console.log("Thanks for chatting with me, BYE!");
      readline.close(); // Close the input stream
      return;
    }

    // Respond differently based on the number of times the question has been asked
    if (ind === 1) {
      console.log("That horse loves eating sugar:", output);
    } else if (ind === 2) {
      console.log("Thanks for telling me more:", input);
    } else if (ind === 3) {
      console.log("Great to hear about this!:", input);
    }

    // Increment the counter for the next round
    ind = ind + 1;

    // Recursively call the function to keep the loop going
    AskName();
  });
}

// Start the input loop
AskName();

