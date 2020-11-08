var startButton = document.querySelector(".start-button");
var quizArea = document.querySelector(".quiz-area");
var 
var currentQuestion = 0;






var quizQuestions = [
    {
        question: "In JavaScript there are two ways to create a function they are:",
        choices: [
            "1. Function expression and function declaration",
            "2. Function extrusion and function induction",
            "3. Function exhaltation and function demarcation",
            "4. Function examination and function extrapolation"
        ],
        correct: "1. function expression and function declaration"
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
    }
];
 

startButton.addEventListener("click", function(){
    quizArea.innerHTML = "<h1>" + quizQuestions[currentQuestion].question + "</h1>" +
                        "<p class='ansrChoice'>" + quizQuestions[currentQuestion].choices[0] + "</p>" +
                        "<p class='ansrChoice'>" + quizQuestions[currentQuestion].choices[1] + "</p>" +
                        "<p class='ansrChoice'>" + quizQuestions[currentQuestion].choices[2] + "</p>" +
                        "<p class='ansrChoice'>" + quizQuestions[currentQuestion].choices[3] + "</p>" ;
                        
});

// bc ansr choices are created with js we must first listen to a static element and then specify in the addEvenListener
quizArea.addEventListener("click",  function(e) {
    if(e.target.tagName.toLowerCase() === "p") {
        currentQuestion++;
        quizArea.innerHTML = "<h1>" + quizQuestions[currentQuestion].question + "</h1>" +
        "<p class='ansrChoice'>" + quizQuestions[currentQuestion].choices[0] + "</p>" +
        "<p class='ansrChoice'>" + quizQuestions[currentQuestion].choices[1] + "</p>" +
        "<p class='ansrChoice'>" + quizQuestions[currentQuestion].choices[2] + "</p>" +
        "<p class='ansrChoice'>" + quizQuestions[currentQuestion].choices[3] + "</p>" ;
    }
    
})



//-----------------------------------------------------------------------------------------------------------------------------
//Timer function
function startTimer() {
    var counter =80;
    setInterval(function() {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("timeremaining");
            span.innerHTML = counter;
        }
        if(counter === 0) {
            alert("Sorry, you are out of time");
            clearInterval(counter);
        }
    }, 1000);    
}
function start() {
    document.getElementById("timeremaining").style="color:red;";
    startTimer();
};
