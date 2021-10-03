// console.log("hello");
var formButton = document.getElementById('Btn');
var timerEl = document.getElementById('Timer');
var questionBox = document.getElementById('Question-box');
var gameRules = document.getElementById('Game-rules');

//when start button is clicked the timer starts running and the first question appears


var startQuiz = function(event) {
    event.preventDefault();
    
    createQuestonForm();

    countdown();
}

function createQuestonForm() {

    var questionForm1 = document.createElement('div');
    var question1 = document.createElement('form');
    question1.textContent = "Question Form";
    
    var answer1 = document.createElement('input');
    answer1.setAttribute("type", "radio");
    
    var answer2 = document.createElement('input')
    answer2.setAttribute("type", "radio")
    
    var answer3 = document.createElement('input')
    answer3.setAttribute("type", "radio")
    
    var answer4 = document.createElement('input')
    answer4.setAttribute("type", "radio")
    
    gameRules.textContent = "";


    question1.appendChild(answer1)
    question1.appendChild(answer2)
    question1.appendChild(answer3)
    question1.appendChild(answer4)
    questionBox.appendChild(gameRules);
    questionBox.appendChild(question1);
    questionBox.appendChild(questionForm1);
    }


//function to start timer

function countdown() {

    var timeLeft = 5;

    var timerCountdown = setInterval(function() {
        if (timeLeft > 0) {

            timerEl.textContent = timeLeft;
            timeLeft--;
        } else {
            //endgame                       
        }
    }, 1000)
};


formButton.addEventListener("click", startQuiz);


//when a question is answered another question appears



//if a question is answered incorectly then time is subtracted from the timer



//when all questions are answered or the timer reaches 0 then the game is over




//when the game is over I can save my initials and score.