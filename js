const generateRandomNumber = () => {
  return Math.round(Math.random() * 100);
}

const isEven = (number) => {
  return number % 2 === 0;
}

const startRound = () => {

const randomNumber = generateRandomNumber();
const answer = prompt(`Является ли число ${randomNumber} четным? Ответь "да" или "нет"`);
const correctAnswer = isEven(randomNumber) ? "да" : "нет";

if (answer.toLowerCase() === correctAnswer) {
  alert ("Ответ правильный!");
  return true;
} else {
  alert (`Ответ неправильный! Правильный ответ: "${correctAnswer}".`);
  return false;
}
}

let correctAnswers = 0;

const startGame = () => {
for (let i = 0; i < 3; i++ ) {
  const isCorrect = startRound();
  if (!isCorrect) {
    alert ("Вы проиграли!");
    return;
  // break;
  }
 // correctAnswers += 1;
//  if (correctAnswers === 3) {
      }
  alert ("Поздравляем с победой!")
}

//startGame();
