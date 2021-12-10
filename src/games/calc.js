import { generateRandomInt, getRandomElement } from '../utils.js'

const rules = 'What is the result of the expression?';

const getCorrectAnswer = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      throw new Error('Unknown operator');
  }
};

const makeRound = () => {
  const firstOperand = generateRandomInt(0, 10);
  const secondOperand = generateRandomInt(0, 10);
  const operator = getRandomElement(['+', '-', '*']);

  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = getCorrectAnswer(firstOperand, secondOperand, operator).toString();

  return {
    question,
    correctAnswer,
  };
};

export default {
  rules,
  makeRound,
};
