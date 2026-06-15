const questions = [
  {
    category: "Math",
    question: "What is 2 + 2?",
    choices: ["3", "4", "5"],
    answer: "4"
  },
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Venus"],
    answer: "Mars"
  },
  {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["Berlin", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    category: "History",
    question: "Who was the first president of the USA?",
    choices: ["Abraham Lincoln", "George Washington", "Thomas Jefferson"],
    answer: "George Washington"
  },
  {
    category: "Programming",
    question: "What language runs in a web browser?",
    choices: ["Python", "JavaScript", "C++"],
    answer: "JavaScript"
  }
];

function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}
