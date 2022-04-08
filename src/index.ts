
import { type } from "os";
import { question } from "readline-sync";

type operator = "+" | "-" | "*" | "/";
//Question inputs for fetching numbers and operators
const main = (): void => {
  const firstStr: string = question("Enter First Number:\n");
  const operator: string = question("Enter Operator: \n");
  const secondStr: string = question("Enter Second Number\n");

  const validInput: boolean =
    isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);

  if (validInput) {
    console.log('is valid');
    
    // const firstNum: number = parseInt(firstStr);
    // const secondNum: number = parseInt(secondStr);
    // const result = calculate(firstNum, operator as operator, secondNum);

    // console.log(result);
  } else {
    console.log("\ninvalid input\n");
    main();
  }
};

// calculate processes the mathematical operation with the inputs
const calculate = (firstNum: number, operator: operator, secondNum: number) => {
  switch (operator) {
    case "+":
      return firstNum + secondNum;
    case "-":
      return firstNum - secondNum;
    case "*":
      return firstNum * secondNum;
    case "/":
      return firstNum / secondNum;
  }
};

// isOperator checks the input mathematical signs to ensure they are correct
const isOperator = (operator: string): boolean => {
  switch (operator) {
    case "+":
    case "-":
    case "*":
    case "/":
      return true;
    default:
      return false;
  }
};

// isNumber checks if the input is a number or a string and return true or false
const isNumber = (str: string): boolean => {
  const maybeNum = parseInt(str);
  const isNum: boolean = !isNaN(maybeNum);
  return isNum;
};

main();
