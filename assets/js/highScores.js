var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");

var todos = [];
var scores = [];

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();

  if (todoText === "") {
    return;
  }

  todos.push(todoText);
  todoInput.value = "";

  storeTodos();
  sortArray(0);
  console.log("Array Sorted");
  renderTodos();
  todoForm.parentElement.removeChild(todoForm);
});

function storeTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function sortArray(index) {
  if (scores.length <= 1) return;
  for (var i = index; i < scores.length - 1; i++) {
    if (scores[i] > scores[i + 1]) {
      var temp = scores[i];
      scores[i] = scores[i + 1];
      scores[i + 1] = temp;

      var temp2 = todos[i];
      todos[i] = todos[i + 1];
      todos[i + 1] = temp2;

      sortArray(index + 1);
    }
  }
}
function renderTodos() {
  todoList.innerHTML = "";

  for (var i = todos.length - 1; i >= 0; i--) {
    var todo = todos[i];
    var score = scores[i];
    var li = document.createElement("li");
    li.textContent = todos.length - i + ". " + todo + " :     " + score;
    console.log(score);
    console.log(todo);

    li.setAttribute("data-index", i);

    todoList.appendChild(li);
  }
}

init(); //entry point

function init() {
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  var storedScores = JSON.parse(localStorage.getItem("scores"));

  if (storedTodos !== null && storedScores !== null) {
    todos = storedTodos;
    scores = storedScores;
  }

  renderTodos();
}
