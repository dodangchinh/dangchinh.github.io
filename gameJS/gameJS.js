const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();

}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
 //******HOAN THIEN CAC CAU HOI*********************
const questions = [
  {
    question: 'Who is the best player of all time in football history?',
    answers: [
      { text: 'Maradona', correct: false },
      { text: 'Zinedie Zidan', correct: false },
      { text: 'Lionel Messi', correct: true},
      { text: 'Johan Cruff', correct: false}
    ]
  },
  {
    question: 'The current leader of Russia? ',
    answers: [
      { text: 'Joe Bidden', correct: false },
      { text: 'Grigo Meveded', correct: false },
      { text: 'Josef Bacman', correct:  false},
      { text: 'Vladimir Puttin', correct: true  }
    ]
  },
  {
    question: 'Which country is known as the chocolate kingdom?',
    answers: [
      { text: 'Belgium', correct: true  },
      { text: 'Hungary', correct: false  },
      { text: 'iceland', correct: false  },
      { text: 'The United start American', correct: false  }
    ]
  },
  {
    question: 'Which of the following is a toxic substance?',
    answers: [
      { text: 'Amoniac', correct: false },
      { text: 'Kali Diaxua', correct: true }
    ]
  }
]