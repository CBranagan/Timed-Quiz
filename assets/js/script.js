//list of global variables and object array
var playerPoints = 0
var timeLeft = 30;
var questionIndex = 0;
var highScore = 0;

var formButton = document.getElementById('Btn');
var timerEl = document.getElementById('Timer');
var questionBox = document.getElementById('Question-box');
var question = document.getElementById('Question');
var answerList = document.getElementById("Answer-list");
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
];

var createQuestionForm = function(current) {

    formButton.setAttribute("style", "display: none")
    
    if(questionIndex > questionList.length || timeLeft < 1) { 

        endGame();
    } else {
    
    //create question and answers and append them to the webpage 
    console.log(current)
    question.textContent = current.question;
    
    var answer1 = document.createElement("li")
    answer1.classList.add("answer")
    answer1.textContent = current.answer1
    
    var answer2 = document.createElement("li")
    answer2.classList.add("answer")
    answer2.textContent = current.answer2
    
    var answer3 = document.createElement("li")
    answer3.classList.add("answer")   
    answer3.textContent = current.answer3
    
    var answer4 = document.createElement("li")
    answer4.classList.add("answer")
    answer4.textContent = current.answer4
    
    
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
        
        if(isQuestion === current.realanswer) { 
            
            playerPoints = playerPoints + 5;
            console.log(playerPoints)

            answerList.removeChild(answer1);
            answerList.removeChild(answer2);
            answerList.removeChild(answer3);
            answerList.removeChild(answer4);
            question.textContent = "";
            
        } else {

            answerList.removeChild(answer1);
            answerList.removeChild(answer2);
            answerList.removeChild(answer3);
            answerList.removeChild(answer4);
            question.textContent = "";
            
            playerPoints = playerPoints - 3;
            console.log(playerPoints)
            timeLeft = timeLeft - 10;
            
        } 

        questionIndex = ++questionIndex

        createQuestionForm(questionList[questionIndex])
    })    
}};
    

//when start button is clicked the timer starts running and the first question appears


var startQuiz = function() {
    
    countdown();
        
            var pickedQuestion = questionList[questionIndex]
            
            createQuestionForm(pickedQuestion);  
        
};


//function to start timer

function countdown() {

    var timerCountdown = setInterval(function() {
        if (timeLeft > -1) {

            timerEl.textContent = timeLeft;
            timeLeft--;
            console.log(timeLeft);
        }
    }, 1000)
};

//end game functionality, need to add compare to high score, if higher than previous or is no score, offer to save 
//high score. If yes set to local storage, if no prompt new game??


var endGame = function() {
    alert("game over");

    alert("you scored" + playerPoints + " points!");

};


formButton.addEventListener("click", startQuiz);