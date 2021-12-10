import { generateRandomInt } from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGcd = (firstNumber, secondNumber) => {
  if (firstNumber % secondNumber === 0) {
    return secondNumber;
  }

  return getGcd(secondNumber, firstNumber % secondNumber);
};

const makeRound = () => {
  const firstNumber = generateRandomInt(1, 100);
  const secondNumber = generateRandomInt(1, 100);

  const correctAnswer = getGcd(firstNumber, secondNumber).toString();
  const question = `${firstNumber} ${secondNumber}`;

  return {
    question,
    correctAnswer,
  };
};

export default {
  rules,
  makeRound,
};
