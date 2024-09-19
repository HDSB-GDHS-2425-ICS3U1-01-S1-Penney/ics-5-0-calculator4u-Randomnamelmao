let num1
let num2
let opration
let result 
let inputStr

function calculator() {
    num1 = parseInt(prompt("Welcome to calculator #1259, please enter a number."));

    if(isNaN(num1)) {
        console.log("Thats not a number try again");
    } else {
        opration = parseInt(prompt("Enter your opration (+,-,*,/)"));
    } num2 = parseInt(prompt("Please enter your second number"))
    
    switch (opration) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                console.log("Error: Division by zero is not allowed.");
                return;
            }
            break;
        default:
            console.log("Invalid operator. Please use +, -, *, or /.");
            return;
    }
}

calculator()
