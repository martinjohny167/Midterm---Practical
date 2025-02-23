beforeAll(() => {
  document.body.innerHTML = `
    <div class="calculator">
      <input type="text" id="display" readonly>
      <div class="buttons">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>+</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>*</button>
        <button>0</button>
        <button>.</button>
        <button>=</button>
        <button>/</button>
        <button>C</button>
      </div>
    </div>
  `;

  // Load the calculator.js script
  require('../public/calculator.js');
});

// Import the functions to test
const { add, subtract, multiply, divide } = require('../public/calculator');

// Test the calculator functions
test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('multiplies 3 * 4 to equal 12', () => {
  expect(multiply(3, 4)).toBe(12);
});

test('divides 10 / 2 to equal 5', () => {
  expect(divide(10, 2)).toBe(5);
});


