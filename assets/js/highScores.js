var userInput = document.querySelector("#user-text");
var userForm = document.querySelector("#user-form");
var userList = document.querySelector("#user-list");

var users = [];
var scores = [];

userForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var userText = userInput.value.trim();

  if (userText === "") {
    return;
  }

  users.push(userText);
  userInput.value = "";

  storeusers();
  sortArray(0);

  renderusers();
  userForm.parentElement.removeChild(userForm);
});

function storeusers() {
  localStorage.setItem("users", JSON.stringify(users));
}

function sortArray(index) {
  if (scores.length <= 1) return;
  for (var i = index; i < scores.length - 1; i++) {
    if (scores[i] > scores[i + 1]) {
      var temp = scores[i];
      scores[i] = scores[i + 1];
      scores[i + 1] = temp;

      var temp2 = users[i];
      users[i] = users[i + 1];
      users[i + 1] = temp2;

      sortArray(index + 1);
    }
  }
}
function renderusers() {
  userList.innerHTML = "";

  for (var i = users.length - 1; i >= 0; i--) {
    var user = users[i];
    var score = scores[i];
    var li = document.createElement("li");
    li.textContent = users.length - i + ". " + user + " :     " + score;

    li.setAttribute("data-index", i);

    userList.appendChild(li);
  }
}

init(); //entry point

function init() {
  var storedusers = JSON.parse(localStorage.getItem("users"));
  var storedScores = JSON.parse(localStorage.getItem("scores"));

  if (storedusers !== null && storedScores !== null) {
    users = storedusers;
    scores = storedScores;
  }

  renderusers();
}
