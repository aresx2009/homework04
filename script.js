// Alert
var name = prompt("Please enter your name");
alert("You get 1 minutes!")

var submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", function (main) {


    function main() {
        var questionArray = new Array("Q1", "Q2", "Q3", "Q4", "Q5");
        var resultArray = new Array();
        var rightArray = new Array();
        // set answer D, C, A, C, B
    }
    var aryAns = new Array(4, 3, 1, 3, 2);
    for (var i = 0; i < questionArray.length; i++) {
        if (name(questionArray[i] != 10)) {
            resultArray[i] = Name(questionArray[i]);
        } else {
            alert("You missed " + (i + 1));
            return false;
        }
    }
    var right_number = 0;
    for (var i = 0; i < questionArray.length; i++) {
        if (aryAns[i] == resultArray[i]) {
            right_number++;
            rightArray[i] = 1;
        } else {
            rightArray[i] = 0;
        }
    }
    var right_question = " ";
    var error_question = " ";
    for (var i = 0; i < rightArray.length; i++) {
        if (rightArray[i] == 1) {
            right_question += i + 1 + ",";
        } else {
            error_question += i + 1 + ",";
        }


    }
    document.getElementById("right_number").innerText = right_number;
    if (right_question != " ") {
        document.getElementById("right_question").innerText = right_question;
    }
    if (error_question != " ") {
        document.getElementById("error_question").innerText = error_question;
    }

});

// localStorage.setItem("name", user);
// localStorage.setItem("score", right_question);

// timer
var count = 60;

var counter = setInterval(timer, 1000);

function timer() {
    count -= 1;
    if (count <= 0) {
        showResults();
        clearInterval(counter);
    }
    document.getElementById("timer").innerHTML = count + " secs";
}

