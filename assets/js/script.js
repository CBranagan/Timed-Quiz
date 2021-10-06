//list of global variables and object array
var playerPoints = 0
var timeLeft = 60;

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
        realanswer: "Chad"       
},
{
    question: "What is your favorite color?",
        answer1: "red",
        answer2: "blue",
        answer3: "green",
        answer4: "yellow",
        realanswer: "red"  
},
{
    question: "What is your favorite food?",
        answer1: "pizza",
        answer2: "tacos",
        answer3: "pasta",
        answer4: "stir fry", 
        realanswer: "tacos"  
},
{
    question: "What is your favorite drink?",
        answer1: "coke",
        answer2: "water",
        answer3: "juice",
        answer4: "milk", 
        realanswer: "coke"  
},
{
    question: "What is your favorite car?",
        answer1: "jeep",
        answer2: "ford",
        answer3: "dodge",
        answer4: "toyota", 
        realanswer: "jeep"  
}
]

//when start button is clicked the timer starts running and the first question appears


var startQuiz = function(event) {
    event.preventDefault();

    createQuestionForm();

    countdown();
}

function createQuestionForm() {

    // for(i=0; i < questionList.length; i++) {
        
    //create question and answers and append them to the webpage

    question.textContent = questionList[0].question;
        
    var answer1 = document.createElement("li")
    answer1.classList.add("answer")
    answer1.textContent = questionList[0].answer1

    var answer2 = document.createElement("li")
    answer2.classList.add("answer")
    answer2.textContent = questionList[0].answer2

    var answer3 = document.createElement("li")
    answer3.classList.add("answer")   
     answer3.textContent = questionList[0].answer3

    var answer4 = document.createElement("li")
    answer4.classList.add("answer")
    answer4.textContent = questionList[0].answer4
    
    
    
    answerList.appendChild(answer1)
    answerList.appendChild(answer2)
    answerList.appendChild(answer3)
    answerList.appendChild(answer4)



    //listen for the click and return the text content of the item clicked


    answerList.addEventListener("click", function(event) {

        
        var isQuestion = event.target.textContent;
       
        
      //compare the returned textContent and compare it to the real answer. if true award the player 5 points
      //and move on to the next question. If wrong subtract 3pts from player score, minus 5 sec from countdown and move
      //on to next question.  

        if(isQuestion === questionList[0].realanswer) { 

            playerPoints = playerPoints + 5;
            console.log(playerPoints)
            
        } else {
            
            playerPoints = playerPoints - 3;
            console.log(playerPoints)
            timeLeft = timeLeft - 10;

        }
    })

    
    
}



//function to start timer

function countdown() {

    

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