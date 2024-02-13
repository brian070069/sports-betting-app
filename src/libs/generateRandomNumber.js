export const generateRandomNumber = () => {
  const intLetters = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "m",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let randomNumber = "";

  for (let i = 0; i <= 5; i++) {
    const randomValue = Math.ceil(Math.random() * intLetters?.length) - 1;

    randomNumber += intLetters[randomValue];
  }

  return randomNumber;
};
