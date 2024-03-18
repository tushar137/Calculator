document.addEventListener("DOMContentLoaded", function () {
    // Get references to the input and result elements
    const inputElement = document.querySelector(".input");
    const resultElement = document.querySelector(".result");

    // Get all the buttons
    const buttons = document.querySelectorAll(".keys span");

    // Initialize variables to store the input and current operator
    let input = "";
    let currentOperator = "";

    // Add a click event listener to each button
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const value = button.getAttribute("data-value");

            if (value === "C") {
                // Clear the input
                input = "";
                currentOperator = "";
            } else if (value === "=") {
                // Evaluate the expression and display the result
                try {
                    input = eval(input).toString();
                } catch (error) {
                    input = "Error";
                }
                currentOperator = "";
            } else {
                // Append the value to the input string
                input += value;

                if (["+", "-", "*", "/", "%"].includes(value)) {
                    // Update the current operator
                    currentOperator = value;
                }
            }

            // Update the display
            inputElement.textContent = input;
            resultElement.textContent = currentOperator;
        });
    });
});
