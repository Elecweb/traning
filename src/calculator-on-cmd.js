class Calculator {
  operator;
  num1;
  num2;

  //Constructor
  constructor(operator, num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    this.operator = operator;
  }

  //Method
  displayCalc = function () {
    var result;
    switch (this.operator) {
      case "+":
        result = this.num1 + this.num2;
        console.log(`${this.num1} ${this.operator} ${this.num2} = ${result}`);
        break;
      case "-":
        result = this.num1 - this.num2;
        console.log(`${this.num1} ${this.operator} ${this.num2} = ${result}`);
        break;
      case "*":
        result = this.num1 * this.num2;
        console.log(`${this.num1} ${this.operator} ${this.num2} = ${result}`);
        break;
      case "/":
        result = this.num1 / this.num2;
        console.log(`${this.num1} ${this.operator} ${this.num2} = ${result}`);
        break;
      default:
        console.log("Invalid Operator!");
        break;
    }
  };
}

const ps = require("prompt-sync");
const prompt = ps();

const showcase = new Calculator(
  prompt("Please Choose operator (+, -, *, /): "),
  parseFloat(prompt("Enter 1st number: ")),
  parseFloat(prompt("Enter 2nd number: "))
);

showcase.displayCalc();
