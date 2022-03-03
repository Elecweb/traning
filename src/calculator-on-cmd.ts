import ps from "prompt-sync";

class Calculator {
  add = (num1: number, b: number) => {
    return num1 + b;
  };
  minus = (num1: number, b: number) => {
    return num1 - b;
  };
  multiply = (num1: number, b: number) => {
    return num1 * b;
  };
  divide = (num1: number, b: number) => {
    return num1 / b;
  };
}

class PromtCmd {
  calculator = new Calculator();

  operator: string;
  num1: number;
  num2: number;

  constructor(operator: string, num1: number, num2: number) {
    this.operator = operator;
    this.num1 = num1;
    this.num2 = num2;
  }

  displayCalc = () => {
    var result;
    switch (this.operator) {
      case "+":
        result = this.calculator.add(this.num1, this.num2);
        console.log(`${this.num1} ${this.operator} ${this.num2} = ${result}`);
        break;
      case "-":
        result = this.calculator.minus(this.num1, this.num2);
        console.log(`${this.num1} ${this.operator} ${this.num2} = ${result}`);
        break;
      case "*":
        result = this.calculator.multiply(this.num1, this.num2);
        console.log(`${this.num1} ${this.operator} ${this.num2} = ${result}`);
        break;
      case "/":
        result = this.calculator.divide(this.num1, this.num2);
        console.log(`${this.num1} ${this.operator} ${this.num2} = ${result}`);
        break;
      default:
        console.log("Invalid Operator!");
        break;
    }
  };
}

const prompt = ps();

const showcase = new PromtCmd(
  prompt("Please Choose operator (+, -, *, /): "),
  parseFloat(prompt("Enter 1st number: ")),
  parseFloat(prompt("Enter 2nd number: "))
);

showcase.displayCalc();
