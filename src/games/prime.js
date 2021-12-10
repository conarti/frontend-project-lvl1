import { generateRandomInt } from '../utils.js';

const rules = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const makeRound = () => {
  const number = generateRandomInt(1, 10);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = number.toString();

  return {
    question,
    correctAnswer,
  };
};

export default {
  rules,
  makeRound,
};
