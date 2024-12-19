// Function to run tests
function runTests() {
    let button = document.querySelector('.button');
    let errors = [];

    // Test: Button text should be 'Learn More'
    if (button.textContent.trim() !== 'Learn More') {
        errors.push("Button text is incorrect.");
    }

    // Test: Button background color
    let bgColor = window.getComputedStyle(button).backgroundColor;
    if (bgColor !== 'rgb(52, 152, 219)') {
        errors.push("Button background color is incorrect.");
    }

    // Display test results
    if (errors.length > 0) {
        console.error("Tests Failed:", errors);
    } else {
        console.log("All tests passed successfully!");
    }
}

// Run tests after the page loads
window.onload = runTests;
