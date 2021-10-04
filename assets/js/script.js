// console.log("hello");
var formButton = document.getElementById('Btn');
var timerEl = document.getElementById('Timer');
var questionBox = document.getElementById('Question-box');
var question = document.getElementById('Question');
var answerList = document.getElementById("Answer-list")
var questionList = [
    {
        question: "What is your name?",
        answer1: "Chad",
        answer2: "Liam",
        answer3: "Lucas",
        answer4: "Kate",
        realanswer: "answer1"       
},
{
    question: "What is your favorite color?",
        answer1: "red",
        answer2: "blue",
        answer3: "green",
        answer4: "yellow"  
},
{
    question: "What is your favorite food?",
        answer1: "pizza",
        answer2: "tacos",
        answer3: "pasta",
        answer4: "stir fry"  
},
{
    question: "What is your favorite drink?",
        answer1: "coke",
        answer2: "water",
        answer3: "juice",
        answer4: "milk"  
},
{
    question: "What is your favorite car?",
        answer1: "jeep",
        answer2: "ford",
        answer3: "dodge",
        answer4: "toyota"  
}
]

//when start button is clicked the timer starts running and the first question appears


var startQuiz = function(event) {
    event.preventDefault();

    createQuestionForm();

    countdown();
}

function createQuestionForm() {

    question.textContent = questionList[0].question;
        
    var answer1 = document.createElement("li")
    answer1.class = "answer1"
    answer1.textContent = questionList[0].answer1

    var answer2 = document.createElement("li")
    answer2.class = "answer2"
    answer2.textContent = questionList[0].answer2

    var answer3 = document.createElement("li")
    answer3.class = "answer3"
    answer3.textContent = questionList[0].answer3

    var answer4 = document.createElement("li")
    answer4.class = "answer4"
    answer4.textContent = questionList[0].answer4
    
    answerList.appendChild(answer1)
    answerList.appendChild(answer2)
    answerList.appendChild(answer3)
    answerList.appendChild(answer4)


    answer1.addEventListener("click", function(evt){
        if(this.class === questionList[0].realanswer) {

            console.log("your right")   
        } else {
            console.log("your wrong")
        }

    })
    answer2.addEventListener("click", function(evt){
        console.log(this.class)      
    })
    answer3.addEventListener("click", function(evt){
        console.log(this.class)      
    })
    answer4.addEventListener("click", function(evt){
        console.log(this.class)      
    })
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