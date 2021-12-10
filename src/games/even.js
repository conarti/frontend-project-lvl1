import { generateRandomInt } from '../utils.js';

const isEven = (num) => num % 2 === 0;

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeRound = () => {
  const question = generateRandomInt(1, 20);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return {
    question,
    correctAnswer
  };
};

export default {
  rules,
  makeRound,
};
