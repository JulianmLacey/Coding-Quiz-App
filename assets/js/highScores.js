var scoreInput = document.querySelector("#userInitials");
var initialForm = document.querySelector("#userInitialsForm");
var scoreList = document.querySelector("#scores");


var scores = [];

function renderScore(){

    scoreList.innerHTML = "";

    for(var i = 0; i<scores.length; i++){
        var score = scores[i];

        var li = document.createElement("li");
        li.textContent = 
    }


}