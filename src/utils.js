const generateRandomInt = (min, max) => {
  const num = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(num);
};

const getRandomElement = (elements) => {
  const idx = generateRandomInt(0, elements.length - 1);
  return elements[idx];
};

export {
  generateRandomInt,
  getRandomElement,
};
