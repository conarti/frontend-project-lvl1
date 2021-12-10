import { generateRandomInt } from '../utils.js';

const rules = 'What number is missing in the progression?';

const generateProgression = (start, length, ratio, result = []) => {
  if (length === 0) {
    return result;
  }

  result.push(start);
  return generateProgression(start + ratio, length - 1, ratio, result);
};

const generateQuestion = (progression) => {
  const answerIdx = generateRandomInt(0, progression.length - 1);
  const correctAnswer = progression[answerIdx].toString();
  progression[answerIdx] = '..';
  const question = progression.join(' ');

  return {
    question,
    correctAnswer,
  };
};

const makeRound = () => {
  const startNumber = generateRandomInt(1, 20);
  const progressionLength = 10;
  const progressionRatio = generateRandomInt(1, 10);

  const progression = generateProgression(startNumber, progressionLength, progressionRatio);

  const { question, correctAnswer } = generateQuestion(progression);

  return {
    question,
    correctAnswer,
  };
};

export default {
  rules,
  makeRound,
};
