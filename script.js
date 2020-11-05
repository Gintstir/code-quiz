var startButton = document.querySelector(".start-button");
var quizArea = document.querySelector(".quiz-area");
var currentQuestion = 0;
var quizQuestions = [
    {
        title: 'how r u?',
        choices: ['ans1', 'ans2', 'ans3', 'ans4'],
        correct: 'ans1'
    },
    {
        title: 'how r u2?',
        choices: ['ans1', 'ans2', 'ans3', 'ans4'],
        correct: 'ans1'
    },
    {
        title: 'how r u3?',
        choices: ['ans1', 'ans2', 'ans3', 'ans4'],
        correct: 'ans1'
    }
]




startButton.addEventListener("click", function(){
    quizArea.innerHTML = "<h1>" + quizQuestions[currentQuestion].title + "</h1>" +
                        "<p class='ansrChoice'>" + quizQuestions[currentQuestion].choices[0] + "</p>" +
                        "<p class='ansrChoice'>" + quizQuestions[currentQuestion].choices[1] + "</p>" +
                        "<p class='ansrChoice'>" + quizQuestions[currentQuestion].choices[2] + "</p>" +
                        "<p class='ansrChoice'>" + quizQuestions[currentQuestion].choices[3] + "</p>" ;
                        
});

// bc ansr choices are created with js we must first listen to a static element and then specify in the addEvenListener
quizArea.addEventListener('click',  function(e) {
    if(e.target.tagName.toLowerCase() === 'p') {
        currentQuestion++;
        quizArea.innerHTML = "<h1>" + quizQuestions[currentQuestion].title + "</h1>" +
        "<p class='ansrChoice'>" + quizQuestions[currentQuestion].choices[0] + "</p>" +
        "<p class='ansrChoice'>" + quizQuestions[currentQuestion].choices[1] + "</p>" +
        "<p class='ansrChoice'>" + quizQuestions[currentQuestion].choices[2] + "</p>" +
        "<p class='ansrChoice'>" + quizQuestions[currentQuestion].choices[3] + "</p>" ;
    }
})

