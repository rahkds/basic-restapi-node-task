// calculator.test.js
const sinon = require("sinon");
const Calculator = require("./calculator");

describe("Calculator Tests", () => {
  let calculator;

  beforeEach(() => {
    // Create a new instance of the Calculator before each test
    calculator = new Calculator();
  });

  afterEach(() => {
    // Restore all stubs, mocks, and spies after each test
    sinon.restore();
  });

  test("should add two numbers correctly", () => {
    const result = calculator.add(2, 3);
    expect(result).toBe(5);
  });

  test("should subtract two numbers correctly", () => {
    const result = calculator.subtract(5, 3);
    expect(result).toBe(2);
  });

  test("should multiply two numbers correctly", () => {
    const result = calculator.multiply(2, 3);
    expect(result).toBe(6);
  });

  test("should divide two numbers correctly", () => {
    const result = calculator.divide(6, 3);
    expect(result).toBe(2);
  });

  test("should throw an error when dividing by zero", () => {
    expect(() => {
      calculator.divide(6, 0);
    }).toThrow("Cannot divide by zero");
  });

  test("should mock the add method", () => {
    // Create a Sinon spy to mock the 'add' method
    const addSpy = sinon.spy(calculator, "add");

    // Call the add method
    calculator.add(1, 2);

    // Check if the spy was called with the expected arguments
    expect(addSpy.calledOnceWith(1, 2)).toBe(true);

    // Optionally verify the result, though the main focus is on the spy
    addSpy.restore();
  });
});
