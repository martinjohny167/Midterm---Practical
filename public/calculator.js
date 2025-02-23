// Use CommonJS syntax for exporting functions
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  // This function handles button clicks and updates the display
  function updateDisplay(value) {
    const display = document.getElementById('display');
    display.value += value; // Appending the clicked button value to the display
  }
  
  // Add event listeners for the buttons to update the display
  document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', () => {
      updateDisplay(button.textContent);
    });
  });
  
  // Export the functions using CommonJS syntax
  module.exports = { add, subtract, multiply, divide };
  