var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];
var scores = [];
// TODO: What is the purpose of this function?
//this function 
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  //todos.push("Julian")
  todoList.innerHTML = "";
  
  // TODO: Describe the functionality of the following `for` loop.
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];
    var score = scores[i];
    var li = document.createElement("li");
    li.textContent = (i+1)+". "+todo + ":     " +score;
    console.log(score);
    console.log(todo);

    li.setAttribute("data-index", i);

    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function? 

//gets the todos from local storage from stringafied version to variables
function init() {
    var sc = [0, 1, 2, 3];
    localStorage.setItem("scores", sc);

  // TODO: What is the purpose of the following line of code?
  //saves the parsed todos as an object instead of 
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  var storedScores = localStorage.getItem("scores");
  // TODO: Describe the functionality of the following `if` statement.

  //check if the todos exist
  if ((storedTodos !== null)&&(storedScores !== null)) {
    todos = storedTodos;
    scores = storedScores;
  }
  // TODO: Describe the purpose of the following line of code.
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  localStorage.setItem("todos", JSON.stringify(todos));
  
}
// TODO: Describe the purpose of the following line of code.
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  if (todoText === "") {
    return;
  }
 // TODO: Describe the purpose of the following lines of code.
  todos.push(todoText);
  todoInput.value = "";
 
  // TODO: What will happen when the following functions are called?
  storeTodos();
  renderTodos();
  //todoForm.parentElement.removeChild(todoForm);
});

// TODO: Describe the purpose of the following line of code.
todoList.addEventListener("click", function(event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    storeTodos();
    renderTodos();
  }
});

init(); //entry point 
