let currentLevel = 1;
let currentQuestion = 0;
let totalCorrect = 0;
const totalLevels = 8;
const questionsPerLevel = 5;

const levels = [
    // Taso 1
    [
        {
            question: "Mikä on pääkaupunki Suomessa?",
            options: ["Helsinki", "Tampere", "Turku", "Oulu"],
            correctAnswer: 1
        },
        {
            question: "Mikä on Suomen kansallislaulu?",
            options: ["Maamme", "Suomi mainen", "Finnlandia", "Linnunradan laulu"],
            correctAnswer: 1
        },
        {
            question: "Mikä on Suomen virallinen kieli?",
            options: ["Ruotsi", "Suomi", "Englanti", "Saksa"],
            correctAnswer: 2
        },
        {
            question: "Kuka on Suomen presidentti?",
            options: ["Sauli Niinistö", "Tarja Halonen", "Juha Sipilä", "Matti Vanhanen"],
            correctAnswer: 1
        },
        {
            question: "Mikä on Suomen pisin joki?",
            options: ["Kemijoki", "Oulujoki", "Vuoksi", "Tornejoki"],
            correctAnswer: 1
        }
    ],
    // Lisää tasot ja kysymykset...
];

function loadQuestion() {
    const currentLevelQuestions = levels[currentLevel - 1];
    if (currentQuestion < currentLevelQuestions.length) {
        const questionData = currentLevelQuestions[currentQuestion];
        document.getElementById("question").innerText = questionData.question;
        const buttons = document.getElementById("choices").getElementsByTagName("button");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].innerText = questionData.options[i];
        }
        document.getElementById("result").innerText = "";
        document.getElementById("next").style.display = "none";
    } else {
        if (currentLevel < totalLevels) {
            document.getElementById("level").innerText = `Taso ${currentLevel + 1}`;
            currentLevel++;
            currentQuestion = 0;
            loadQuestion();
        } else {
            document.getElementById("question").innerText = "Onneksi olkoon, olet suorittanut pelin!";
            document.getElementById("choices").style.display = "none";
            document.getElementById("next").style.display = "none";
        }
    }
}

function checkAnswer(selectedAnswer) {
    const currentLevelQuestions = levels[currentLevel - 1];
    const questionData = currentLevelQuestions[currentQuestion];
    if (selectedAnswer === questionData.correctAnswer) {
        totalCorrect++;
        document.getElementById("result").innerText = "Oikein!";
    } else {
        document.getElementById("result").innerText = "Väärin, yritä uudelleen.";
    }
    document.getElementById("next").style.display = "inline-block";
}

function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}

loadQuestion();
