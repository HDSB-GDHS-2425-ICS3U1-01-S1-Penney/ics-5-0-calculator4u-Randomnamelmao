
function calculator() {
    let start = parseInt(prompt("Welcome to calculator #1259, please enter 1 if you want to do basic math and 2 if you want to do unit conversion"));
    
    if (start = "1") {
        let num1 = parseInt(prompt("please enter your first number"))
        if(isNaN(num1)) {
            console.log("Thats not a number try again") 
            return;
    }
    let operation = prompt("Enter your opration (+,-,*,/)");
    
    let num2 = parseInt(prompt("Please enter your second number"));
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
}
calculator();
