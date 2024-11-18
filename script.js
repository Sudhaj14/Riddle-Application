const riddles = [
    {
        question: "What has keys but can't open locks?",
        answer: "keyboard",
        hint: "This object is used to type letters and numbers on a computer or phone."
    },
    {
        question: "What has a head, a tail, is brown, and has no legs?",
        answer: "penny",
        hint: "It's a type of coin commonly used in some countries."
    },
    {
        question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
        answer: "m",
        hint: "Think of the spelling of these words."
    },
    {
        question: "What can you catch, but not throw?",
        answer: "cold",
        hint: "It's something related to health, often caught in winter."
    },
    {
        question: "I’m tall when I’m young, and I’m short when I’m old. What am I?",
        answer: "candle",
        hint: "It’s an object that burns and provides light."
    }
];

let currentQuestionIndex = 0;

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const feedbackElement = document.getElementById('feedback');

    if (userAnswer === riddles[currentQuestionIndex].answer) {
        feedbackElement.textContent = 'Correct! Well done!';
        feedbackElement.style.color = 'green';
    } else {
        feedbackElement.textContent = 'Incorrect, try again! Hint: Check the hint section.';
        feedbackElement.style.color = 'red';
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    const feedbackElement = document.getElementById('feedback');

    if (currentQuestionIndex < riddles.length) {
        document.getElementById('question-header').textContent = `Question - ${currentQuestionIndex + 1}`;
        document.getElementById('riddle-content').textContent = riddles[currentQuestionIndex].question;
        document.getElementById('hint').textContent = riddles[currentQuestionIndex].hint;
        document.getElementById('answer').value = ''; 
        feedbackElement.textContent = ''; 
        
        
        const progressBar = document.getElementById('progress-bar');
        progressBar.value = currentQuestionIndex;
    } else {
        feedbackElement.textContent = 'You have completed all the riddles! Great job!';
        feedbackElement.style.color = 'blue';
        document.getElementById('answer').disabled = true; 
        document.querySelector('button[onclick="nextQuestion()"]').disabled = true; 
    }
}