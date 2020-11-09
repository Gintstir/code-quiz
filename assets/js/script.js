//intro page
var startButton = document.querySelector(".start-button");
var introPage = document.querySelector(".intro-page")
//quiz area
var quizContainer = document.querySelector(".quiz-container");
var quizQuestion = document.getElementById("quiz-question");
var quizChoice1 = document.getElementById("button-one");
var quizChoice2 = document.getElementById("button-two");
var quizChoice3 = document.getElementById("button-three");
var quizChoice4 = document.getElementById("button-four");
var currentQuestion = 0;
//timer
var quizTimer = document.getElementById("quiz-timer");
var counter = 100;

//variables for highscore page
var initialEntryForm = document.getElementById("initial-entry");
var highscoreEl = document.getElementById("highscores")
var subButtEl = document.getElementById("submit-button");
var playAgainButtEl = document.getElementById("play-again")
var clearHSButtonEl = document.getElementById("clear-hs")


//array of questions, choices, and correct responses
var quizQuestionArray = [
    {
        question: "In JavaScript there are two ways to create a function they are:",
        choices: [
            "1. Function expression and function declaration",
            "2. Function extrusion and function induction",
            "3. Function exhaltation and function demarcation",
            "4. Function examination and function extrapolation"
        ],
        correct: "1. Function expression and function declaration"
    },
    {
        question: "Commentary in JavaScript can be marked(but not displayed in the browser) with which of the following notations?",
        choices: [
            "1. --><--",
            "2. //",
            "3. /**/",
            "4. b and c"
        ],
        correct: "4. b and c"
    },
    {
        question: "Which is the correct example of 'camel casing'?",
        choices: [
            "1. thiSiScameLcasinG",
            "2. tHiSiScAmElCaSiNg",
            "3. thisIsCamelCasing",
            "4. thiIScamelCASING"
        ],
        correct: "3. thisIsCamelCasing"
    },
    {
        question: "DOM is an acronym for:",
        choices: [
            "1. Digital Object Method",
            "2. Document Object Model",
            "3. Design Occurence Module",
            "4. Disk Overwrite Matrix"
        ],
        correct: "2. Document Object Model"
    },
    {
        question: "There are 7 Primitive Data types.  These include Boolean, Null, Undefined, BigInt, String, Symbol, and __________.",
        choices: [
            "1. Object",
            "2. Cardinal",
            "3. Number",
            "4. None of the above"
        ],
        correct: "3. Number"
    },
    {
        question: "Which of these is the strict ineqality operator?",
        choices: [
            "1. >=",
            "2. ===",
            "3. !=",
            "4. !=="
        ],
        correct: "4. !=="
    },
    {
        question: "Which of the following JavaScript methods executes the callback repeatedly at set interims?",
        choices: [
            "1. setTimeout()",
            "2. clearInterval()",
            "3. setInterval()",
            "4. getIterim()"
        ],
        correct: "3. setInterval()"
    },
    {
        question: "Which Math function in JavaScript returns the largest integer less than or equal to a given number?",
        choices: [
            "1. Math.random()",
            "2. Math.ceiling()",
            "3. Math.round()",
            "4. Math.floor()"
        ],
        correct: "4. Math.floor()"
    },
    {
        question: "JSON is a acronym for:",
        choices: [
            "1. JQuery Syntax Object Network",
            "2. Java Symbol Organization Node",
            "3. JavaScript Object Notation",
            "4. JavaScript Order Note"
        ],
        correct: "3. JavaScript Object Notation"
    },
    {
        question: "Which of is a way to see all the properties of a specified JavaScript object in the console?",
        choices: [
            "1. console.dir()",
            "2. console.log()",
            "3. console.trace()",
            "4. console.group()"
        ],
        correct: "1. console.dir()"
    }
];

//Timer function
var timerScore = function() {
    var timeInterval = setInterval(function() {
        if (counter >= 0) {
            quizTimer.textContent = "Time: " + counter;
            counter--;
        }

        else {
            clearInterval(timeInterval);
            pageRedirect();
        }

    }, 1000);
};    

var pageRedirect = function() {
    window.location.href = "./highscore.html"  
};

var answerHandler = function(event) {
    var buttonAnswer = event.target.textContent;
    var arrayAnswer = quizQuestionArray[currentQuestion].correct;
    
    if (buttonAnswer === arrayAnswer) {
        alert("That's right!")
    }else {
        alert("That's wrong!");
        counter = counter - 10;
    }
    if (currentQuestion < quizQuestionArray.length - 1) {
        currentQuestion++;
        loadQuestions(currentQuestion);
    } else {
        alert("All done, your score is " + counter + " !!!!");
        pageRedirect();
    }
}


var takeQuiz = function() {
    quizContainer.classList.remove("hidden");
    loadQuestions(currentQuestion);
    timerScore();
}

var loadQuestions = function(index) {
    quizQuestion.textContent = quizQuestionArray[index].question;
    quizChoice1.textContent = quizQuestionArray[index].choices[0];
    quizChoice2.textContent = quizQuestionArray[index].choices[1];
    quizChoice3.textContent = quizQuestionArray[index].choices[2];
    quizChoice4.textContent = quizQuestionArray[index].choices[3];
}

var submitInitials = function() {
    initialEntryForm.classList.add('hidden');

}

startButton.addEventListener("click", function() {
    introPage.classList.add('hidden');
    takeQuiz();    
});

quizChoice1.addEventListener("click", answerHandler);
quizChoice2.addEventListener("click", answerHandler);
quizChoice3.addEventListener("click", answerHandler);
quizChoice4.addEventListener("click", answerHandler);
subButtEl.addEventListener("click", submitInitials);

 

