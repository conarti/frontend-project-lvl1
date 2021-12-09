import readlineSync from 'readline-sync';

const getRandomNumber = () => {
  const num = 0 - 0.5 + Math.random() * (100 + 1);
  return Math.round(num);
};

const isEven = (num) => num % 2 === 0;

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  const roundsCount = 3;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const iter = (roundsLeft) => {
    if (roundsLeft === 0) {
      return console.log(`Congratulations, ${name}!`);
    }

    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${name}`);
    }

    console.log('Correct!');
    return iter(roundsLeft - 1);
  };

  iter(roundsCount);
};
