function startApp() {
    // Day 1: Variables
    let n1 = Number(prompt("Enter first number:"));
    let op = prompt("Enter operator (+, -, *, /):");
    let n2 = Number(prompt("Enter second number:"));

    let result;

    // Day 2: Control Flow (Conditionals)
    if (op === "+") {
        result = n1 + n2;
    } else if (op === "-") {
        result = n1 - n2;
    } else if (op === "*") {
        result = n1 * n2;
    } else if (op === "/") {
        result = n2 !== 0 ? n1 / n2 : "Error: Can't divide by 0";
    } else {
        result = "Invalid operator!";
    }

    // Showing the result
    alert("Result: " + result);
}