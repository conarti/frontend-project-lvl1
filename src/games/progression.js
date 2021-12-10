import { generateRandomInt } from '../utils.js';

const rules = 'What number is missing in the progression?';

const makeProgression = (start, length, step) => (new Array(length))
  .fill(start)
  .map((element, currentIndex) => (element + step * currentIndex));

const makeRound = () => {
  const startNumber = generateRandomInt(1, 50);
  const progressionLength = 10;
  const hiddenElementIdx = generateRandomInt(0, progressionLength - 1);
  const progressionStep = generateRandomInt(1, 5);

  const progression = makeProgression(startNumber, progressionLength, progressionStep);

  const correctAnswer = progression[hiddenElementIdx].toString();

  progression[hiddenElementIdx] = '..';
  const question = progression.join(' ');

  return {
    question,
    correctAnswer,
  };
};

export default {
  rules,
  makeRound,
};
