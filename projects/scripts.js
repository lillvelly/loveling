console.log("Script loaded successfully");

const questions = [
    {
        question: "What’s her favorite color?",
        answers: ["Blue", "pink", "Green", "Yellow"],
        correct: "pink"
    },
    {
        question: "What’s her favorite food?",
        answers: ["Banku and Okra", "fried plantain", "Indomie", "FuFu"],
        correct: "FuFu"
    },
    {
        question: "What’s her favorite book?",
        answers: ["The Alchemist", "The Bible", "The Quran", "The Secret"],
        correct: "The Bible"
    }
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let correctAnswers = 0;

function loadQuestion(index) {
    const questionElement = document.getElementById('quiz-question');
    const buttons = document.querySelectorAll('.quiz button');
    const resultElement = document.getElementById('quiz-result');

    questionElement.textContent = `Question: ${questions[index].question}`;
    buttons.forEach((button, i) => {
        button.textContent = questions[index].answers[i];
        button.onclick = () => checkAnswer(questions[index].answers[i]);
    });
    resultElement.textContent = '';
}

function checkAnswer(answer) {
    const correctAnswer = questions[currentQuestionIndex].correct;
    const resultElement = document.getElementById('quiz-result');

    if (answer === correctAnswer) {
        resultElement.textContent = 'Correct!';
        correctAnswers++;
    } else {
        resultElement.textContent = 'Try again!';
    }
    setTimeout(nextQuestion, 1000); // Wait 1 second before showing the next question
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion(currentQuestionIndex);
    } else {
        showScoreboard();
    }
}

function showScoreboard() {
    const quizContainer = document.getElementById('quiz-container');
    const scoreboard = document.getElementById('scoreboard');
    quizContainer.innerHTML = '<p>Quiz completed!</p>';
    scoreboard.textContent = `You got ${correctAnswers} out of ${questions.length} questions correct.`;
}

// Load the first question when the page loads
window.onload = () => loadQuestion(currentQuestionIndex);
