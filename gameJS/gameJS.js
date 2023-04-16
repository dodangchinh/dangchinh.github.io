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
    question: 'Khẩu sung có độ giật cao nhất trong PUBG?',
    answers: [
      { text: 'AKM', correct: false },
      { text: 'M249', correct: false },
      { text: 'GROZA', correct: true},
      { text: 'DP-28', correct: false}
    ]
  },
  {
    question: 'PUBG được phát hành vào năm nào? ',
    answers: [
      { text: '2010', correct: false },
      { text: '2017', correct: true },
      { text: '2018', correct:  false},
      { text: '2011', correct: false }
    ]
  },
  {
    question: 'Một mùa PUBG kéo dài bao lâu?',
    answers: [
      { text: '2 Tháng', correct: true  },
      { text: '1 Tháng', correct: false  },
      { text: '3 Tháng', correct: false  },
      { text: '5 Tháng', correct: false  }
    ]
  },
  {
    question: 'Rank cao nhất trong PUBG là gì?',
    answers: [
      { text: 'Quán Quân', correct: false },
      { text: 'Cao Thủ', correct: false },
      { text: 'Bậc Thầy', correct: false },
      { text: 'Chí tôn', correct: true }
    ]
  }
]
