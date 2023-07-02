/*

//variables
var scores = 0;
var time left = 200;
var questions = (questions array)
var answers = (answers array)

//selectors
var questions E1 = document.questySelector("#currentQuestion");

//functions

function start(){
    //triggered when they pressed bbutton (event listener)
    //starts the timer
        //set interval
        //once the timer hits 0, call endGame function
    //hide the start button
    //reveal the options, questions
}

function nextQuestion(event){
    //triggered by the answering of a question
    //figure out what answer the user chose
        //figure out if the answer is right or wrong
        //if its wrong, remove time from the clock
        //if its right, continue to next question
    
    //show correct answer
    //Increment the current question
        //change the question
        //change the choices
}

function endGame(){
    //triggered either when timeLeft becomes 0, or when the user finishes all questions
    //Prompts the user for initials
    //display the score
    //hide the question
    //reveal the options, questions
}

//function save Initials(){
    //triggered when the user submitted their initials
    //save the scores and their initials to the local storage
        //read (save them to another var) the existing score
        //ad the new scores to the end of the array
        //now overwrite the scores with the new array
    //take the user to the highscore.html page
}

*/

//var MCQ = {
var questions = [
  "Which of the following is not a programming language?",
  "What does HTML stand for?",
  "Which tag is used to define a paragraph in HTML?",
  "What does CSS stand for?",
  "Which property is used to change the text color in CSS?",
  "Which command is used to initialize a Git repository?",
  "Which command is used to stage changes in Git?",
  "What is the purpose of the 'document.getElementById()' method in JavaScript?",
  "Which of the following is not a JavaScript data type?",
  "How do you declare a variable in JavaScript?",
  "Which CSS property is used to add spacing between HTML elements?",
  "Which HTML tag is used to link an external JavaScript file?",
  "What does the 'git pull' command do?",
  "Which of the following is a JavaScript framework/library?",
  "How do you comment a single line in JavaScript?",
  "Which CSS property is used to make text bold?",
  "What is the purpose of the 'addEventListener' method in JavaScript?",
  "Which command is used to create a new branch in Git?",
  "Which of the following is not a valid CSS selector?",
  "What does the 'console.log()' function do in JavaScript?",
];

const answers = [
  ["a) HTML", "b) CSS", "c) JavaScript", "d) Git"],
  [
    "a) HyperText Markup Language",
    "b) HyperText Makeup Language",
    "c) Hyper Transfer Markup Language",
    "d) Hyper Tool Markup Language",
  ],

  [
    "a) Cascading Style Sheet",
    "b) Creative Style Sheet",
    "c) Computer Style Sheet",
    "d) Colorful Style Sheet",
  ],
  ["a) background-color", "b) font-color", "c) text-color", "d) color"],
  ["a) git add", "b) git init", "c) git commit", "d) git clone"],
  ["a) git add", "b) git init", "c) git commit", "d) git push"],
  [
    "a) To get the value of an input field",
    "b) To retrieve an element from the DOM",
    "c) To create a new HTML element",
    "d) To append an element to the DOM",
  ],
  ["a) String", "b) Boolean", "c) Integer", "d) Object"],
  ["a) var", "b) const", "c) let", "d) All of the above"],
  ["a) padding", "b) margin", "c) space", "d) spacing"],

  [
    "a) Pushes changes to a remote repository",
    "b) Fetches and merges changes from a remote repository",
    "c) Creates a new branch in Git",
    "d) Discards all local changes and resets the repository",
  ],
  ["a) React", "b) Django", "c) Express", "d) Flask"],
  [
    "'a) // Comment'",
    "b) <!-- Comment -->",
    "c) /* Comment */",
    "d) ** Comment **",
  ],
  ["a) font-weight", "b) text-style", "c) font-style", "d) text-bold"],
  [
    "a) To add a new HTML element to the DOM",
    "b) To add an event handler to an HTML element",
    "c) To modify the style of an HTML element",
    "d) To remove an HTML element from the DOM",
  ],
  ["a) git add", "b) git init", "c) git branch", "d) git commit"],
  ["a) .class-name", "b) #id-name", "c) $name", "d) element-name"],
  [
    "a) Displays output in the console",
    "b) Prints a message to the user's screen",
    "c) Shows a pop-up message",
    "d) Executes a JavaScript function]",
  ],
];
const correctAns = [3, 0, 0, 0, 3, 1, 0, 1, 2, 3, 2, 0, 1, 0, 0, 0, 1, 2, 2, 0];

var timerEl = document.getElementById("Timer");
var header = document.getElementsByName("body");
var CurrentQuestionE1 = document.getElementById("currentQuestion");
var currentScoreEL = document.getElementById("currentScore");

var ansContainer = document.getElementById("answer");
var AnsAEl = document.getElementById("AnsA");
var AnsBEl = document.getElementById("AnsB");
var AnsCEl = document.getElementById("AnsC");
var AnsDEl = document.getElementById("AnsD");

var ansButtons = [AnsAEl, AnsBEl, AnsCEl, AnsDEl];
var questionIndex = 1;
var timeLeft = 60;
var score = 0;

function updateColor(event){
    event.target.style.backgroundColor = white;
}

function startQuiz() {
  //countdown();
  CurrentQuestionE1.innerHTML = questions[0];
  for (ansbut in ansButtons) {
    ansButtons[ansbut].addEventListener("click", nextQuestion);
    ansContainer.children[ansbut].textContent = answers[0][ansbut];
    
  }
}

function nextQuestion(event) {
    ansButtons[correctAns[questionIndex-1]].style.borderColor = "green";
  //console.log(event.target);
  //console.log(ansButtons[correctAns[questionIndex-1]].firstChild);
  if(event.target == ansButtons[correctAns[questionIndex-1]]){
    //event.target.setAttribute("class", "correct");
    score += 10;
    updateScore();
  }else{
    timeLeft -= 5;
    //event.target.setAttribute("class", "incorrect");
    event.target.style.borderColor = "red";
    console.log("time decreased");
  }
  setTimeout(function () {

    questionIndex += 1;
    console.log(questions[questionIndex]);
    CurrentQuestionE1.innerHTML = questions[questionIndex];

    for (ansbut in ansButtons) {
        ansContainer.children[ansbut].textContent = answers[questionIndex][ansbut];
        ansButtons[ansbut].style.borderColor = "white";
      }
  }, 300);



  event.target.removeAttribute("correct");
  event.target.removeAttribute("incorrect");
  
  event.stopPropagation();
}

function updateScore(){
    currentScoreEL.innerHTML = "Score: " + score;
}

function countdown() {
  

  var timeInterval = setInterval(function () {
    timerEl.innerHTML = "Time: " + --timeLeft;
    if (timeLeft == 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
}

startQuiz();
countdown();