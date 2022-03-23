import ps from "prompt-sync";

class Calculator {
  add = (a: number, b: number) => {
    return a + b;
  };
  minus = (a: number, b: number) => {
    return a - b;
  };
  multiply = (a: number, b: number) => {
    return a * b;
  };
  divide = (a: number, b: number) => {
    return a / b;
  };
}

class PromtCmd {
  calculator = new Calculator();

  opa: string;
  num1: number;
  num2: number;

  constructor(opa: string, num1: number, num2: number) {
    this.opa = opa;
    this.num1 = num1;
    this.num2 = num2;
  }

  displayCalc = () => {
    var result;
    switch (this.opa) {
      case "+":
        result = this.calculator.add(this.num1, this.num2);
        console.log(`${this.num1} ${this.opa} ${this.num2} = ${result}`);
        break;
      case "-":
        result = this.calculator.minus(this.num1, this.num2);
        console.log(`${this.num1} ${this.opa} ${this.num2} = ${result}`);
        break;
      case "*":
        result = this.calculator.multiply(this.num1, this.num2);
        console.log(`${this.num1} ${this.opa} ${this.num2} = ${result}`);
        break;
      case "/":
        result = this.calculator.divide(this.num1, this.num2);
        console.log(`${this.num1} ${this.opa} ${this.num2} = ${result}`);
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
