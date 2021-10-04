// console.log("hello");
var formButton = document.getElementById('Btn');
var timerEl = document.getElementById('Timer');
var questionBox = document.getElementById('Question-box');
var gameRules = document.getElementById('Game-rules');

//when start button is clicked the timer starts running and the first question appears


var startQuiz = function(event) {
    event.preventDefault();
    
    createQuestionForm();

    countdown();
}

function createQuestionForm() {

    var questionForm1 = document.createElement('div');
    var question1 = document.createElement('form');
    question1.textContent = "Question Form";
    
    var answer1Box = document.createElement('div');
    var answer1 = document.createElement('input');
    answer1.setAttribute("type", "radio");
    var answer1Text = document.createElement('span');
    answer1Text.textContent = " answer1";
    
    
    
    var answer2Box = document.createElement('div');
    var answer2 = document.createElement('input');
    answer2.setAttribute("type", "radio");
    var answer2Text = document.createElement('span');
    answer2Text.textContent = " answer2";
    
    var answer3Box = document.createElement('div');
    var answer3 = document.createElement('input');
    answer3.setAttribute("type", "radio");
    var answer3Text = document.createElement('span');
    answer3Text.textContent = " answer3";
    
    var answer4Box = document.createElement('div');
    var answer4 = document.createElement('input');
    answer4.setAttribute("type", "radio");
    var answer4Text = document.createElement('span');
    answer4Text.textContent = " answer4";
    
    gameRules.textContent = "";

    
    answer1Box.appendChild(answer1)
    answer1Box.appendChild(answer1Text)
    
    answer2Box.appendChild(answer2)
    answer2Box.appendChild(answer2Text)
    
    answer3Box.appendChild(answer3)
    answer3Box.appendChild(answer3Text)

    answer4Box.appendChild(answer4)
    answer4Box.appendChild(answer4Text)
    
    
    questionBox.appendChild(gameRules);
    questionBox.appendChild(question1);

    questionBox.appendChild(questionForm1);
    questionBox.appendChild(answer1Box)
    questionBox.appendChild(answer2Box)
    questionBox.appendChild(answer3Box)
    questionBox.appendChild(answer4Box)


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