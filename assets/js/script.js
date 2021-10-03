// console.log("hello");
var formButton = document.getElementById('Btn');
var timerEl = document.getElementById('Timer');


//when start button is clicked the timer starts running and the first question appears


var startQuiz = function(event) {
    event.preventDefault();
    

    countdown();
}

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
    console.log(timeLeft)
};


formButton.addEventListener("click", startQuiz);


//when a question is answered another question appears



//if a question is answered incorectly then time is subtracted from the timer



//when all questions are answered or the timer reaches 0 then the game is over




//when the game is over I can save my initials.