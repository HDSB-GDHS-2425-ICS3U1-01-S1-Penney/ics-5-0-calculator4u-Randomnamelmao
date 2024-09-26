
function calculator() {
    //prompts what number you want your first number to be
    let num1 = parseInt(prompt("Welcome to calculator #1259, please enter a number."));
    //checks if its not a number and if it is makes a message and ends the code
    if(isNaN(num1)) {
        console.log("Thats not a number try again") 
        return;
    }
    //prompts what you want your opration to be
    let operation = prompt("Enter your opration (+,-,*,/)");
    //prompt what number you want your second number to be
    let num2 = parseInt(prompt("Please enter your second number"));
    //checks if its not a number and if it is makes a message and ends the code
    if(isNaN(num2)) {
        console.log("Thats not a number try again");
        return;
    }
    //checks to see what opration was used so it can do the calculation 
    if (operation === "+") {
        console.log(num1 + num2);
    } else if (operation === "-") {
        console.log(num1 - num2);
    } else if (operation === "*") {
        console.log(num1 * num2);
    } else if (operation === "/") {
        if (num2 !== 0) {
            console.log(num1 / num2);
    // if it equles 0 then it will run this line
        } else {
            console.log("You can't divide by zero, try again");
        }
    //if none of the criteria was me
    } else {
        console.log("That's not a valid opration try again");
    }
}

calculator();
