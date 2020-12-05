//timer variable
let timeremaining = 100;

//start button
const startButton = document.querySelector("#start-button");

//question array
const quizQuestionArray = [
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

startButton.addEventListener('click', () => {
    //console.log('button was pressed');

    //define quiz container
    let subcontainerEl = document.querySelector("#subcontainer");
    //add hidden css class quiz container
    subcontainerEl.classList.add('hidden');
    
    let quizContainerEl = document.querySelector("#quiz-container")

    let question = document.createElement("h1")
    let questionNode = document.createTextNode("hello");
    question.appendChild(questionNode);
    quizContainerEl.appendChild(question);




})



