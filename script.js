const data = [
  {
    question: "Who is making the Web standarts",
    a: "Google",
    b: "Microsoft",
    c: "Mozzila",
    d: "World Wide Web Consortium",
    correct: "d",
  },
  {
    question: "Choose the correct HTML element for the largest heading:",
    a: "<head>",
    b: "<heading>",
    c: "<h1>",
    d: "<h6>",
    correct: "c",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const OptionA = document.getElementById("optionA");
const OptionB = document.getElementById("optionB");
const OptionC = document.getElementById("optionC");
const OptionD = document.getElementById("optionD");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = data[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  OptionA.innerText = currentQuizData.a;
  OptionB.innerText = currentQuizData.b;
  OptionC.innerText = currentQuizData.c;
  OptionD.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === data[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < data.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2>You Answered ${score}/${data.length} Questions Correctly</h2>

    <button onclick="location.reload()">Do it Again</button>'
    `;
    }
  }
});
