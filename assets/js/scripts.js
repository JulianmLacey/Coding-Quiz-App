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
  "How many programmers does it take to change a lightbulb?",
  "What do you call a programmer who's good with a bow and arrow?",
  "What do you call a coding spider?",
  "Why did the programmer quit his job?",
  "What is a programmer's favorite beverage?",
  "How does a programmer fish?",
  "What do you call a coding dinosaur?",
  "Why did the developer go broke?",

  "Why did the computer go to the doctor?",
  "What's a programmer's favorite song?",
];

const answers = [
  [
    "a) None, that's a hardware issue",
    "b) Only one, but they'll need to Google it first",
    "c) Two, but they'll blame it on each other's code",
    "d) It depends on the framework they're using",
  ],
  [
    "a) A code archer",
    "b) A hack-tivist",
    "c) Robin Root",
    "d) The Legen-dary Coder",
  ],

  [
    "a) A web developer",
    "b) An eight-bit bug",
    "c) A hacker-in-the-web",
    "d) The Arachno-Coder",
  ],

  [
    "a) He couldn't debug his boss",
    "b) He was tired of the Ctrl+Alt+Del routine",
    "c) He wanted to be a byte-sized comedian",
    "d) He couldn't find his 'Shift' key anymore",
  ],

  ["a) Java", "b) Code Brew", "c) Ctrl + Coffee", "d) Python Punch"],

  [
    "a) By coding a fish-catching algorithm",
    "b) With a keyboard hooked to the fishing line",
    "c) By sending an email to the fish",
    "d) By telling the fish a 'C#-ret' joke",
  ],

  [
    "a) A prehistoric programmer",
    "b) A Megabyte-saur",
    "c) A Jurassic Coder",
    "d) A Dinoscript Expert",
  ],

  [
    "a) He spent all his money on debugging tools",
    "b) He couldn't escape the infinite loop of online shopping",
    "c) He invested in 'Bit'coin instead of Bitcoin",
    "d) He kept giving away code for free (open-source style)",
  ],

  [
    "a) It had a bad case of malware-aise",
    "b) It needed a Java-ectomy",
    "c) It wanted to upgrade to the latest operating system",
    "d) It had a CAPS LOCKS virus",
  ],

  [
    "a) 'The Code-ly in the Wind'",
    "b) 'Don't Stop Coding'",
    "c) 'I Will Always Debug You'",
    "d) 'Byte Me Maybe'",
  ],
];
const correctAns = [2, 2, 0, 0, 2, 2, 3, 2, 1, 2];

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
var timeLeft = 5;
var score = 0;

function startQuiz() {
  CurrentQuestionE1.innerHTML = questions[0];
  for (ansbut in ansButtons) {
    ansButtons[ansbut].addEventListener("click", nextQuestion);
    ansButtons[ansbut].textContent = answers[0][ansbut];
  }
}

function nextQuestion(event) {
  ansButtons[correctAns[questionIndex - 1]].style.borderColor = "green";

  if (event.target == ansButtons[correctAns[questionIndex - 1]]) {
    score += 10;
    updateScore();
  } else {
    timeLeft -= 5;
    event.target.style.borderColor = "red";
    console.log("time decreased");
  }

  setTimeout(function () {
    questionIndex += 1;
    console.log(questions[questionIndex]);
    CurrentQuestionE1.innerHTML = questions[questionIndex];
    for (ansbut in ansButtons) {
      ansButtons[ansbut].textContent = answers[questionIndex][ansbut];
      ansButtons[ansbut].style.borderColor = "white";
    }
  }, 300);
  event.stopPropagation();
}

function updateScore() {
  currentScoreEL.innerHTML = "Score: " + score;
}

function saveScore() {
  var storedScores = JSON.parse(localStorage.getItem("scores"));
  if (storedScores == null) {
    storedScores = [];
  }
  console.log(typeof storedScores[0]);
  storedScores.push(score);
  console.log(storedScores);
  localStorage.setItem("scores", JSON.stringify(storedScores));
}

function countdown() {
  var timeInterval = setInterval(function () {
    timerEl.innerHTML = "Time: " + --timeLeft;
    if (timeLeft <= 0 || questionIndex == 10) {
      console.log("game done");

      clearInterval(timeInterval);
      saveScore();
      window.location.href = "./highscore.html";

      return;
    }
  }, 1000);
}

startQuiz();
countdown();
