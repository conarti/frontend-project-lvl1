import readlineSync from 'readline-sync';

export default (game) => {
  console.log('Welcome to the Brain Games!');
  const roundsCount = 3;

  const name = readlineSync.question('May I have your name? ');
  const { rules, makeRound } = game;

  console.log(`Hello, ${name}`);
  console.log(rules);

  const iter = (roundsLeft) => {
    if (roundsLeft === 0) {
      console.log(`Congratulations, ${name}!`);
      return;
    }

    const { question, correctAnswer } = makeRound();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    iter(roundsLeft - 1);
  };

  iter(roundsCount);
};
