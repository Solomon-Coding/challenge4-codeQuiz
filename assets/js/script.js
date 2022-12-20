// Variables and Constants
const pEl = document.querySelector("p");
const liEls = document.querySelectorAll("li");
const answerResponseEl = document.querySelector("#answerResponse");

var currentScore = [];
var i = 0;
var initialText="Coding Quiz Challenge";



// Quiz Questions
var q1={
  index:0,
  prompt:"Arrays in JavaScript can be used to store ____.",
  options:["numbers and strings",
          "other arrays",
          "booleans",
          "all of the above"],
  correctOption:2,
};

var q2={
  index:1,
  prompt:"Commonly used data types DO NOT include:",
  options:["strings",
          "booleans",
          "alerts",
          "numbers"],
  correctOption:2,
};

var q3={
  index:2,
  prompt:"Inside which HTML element do we put the JavaScript?",
  options:["<js>",
          "<script>",
          "<javascript>",
          "<scripting>"],
  correctOption:1,
};

var q4={
  index:3,
  prompt:'What is the correct syntax for referring to an external script called "xxx.js"?',
  options:['<script stylesheet="xxx.js">',
          '<script name="xxx.js">',
          '<script src="xxx.js">',
          '<script href="xxx.js">'],
  correctOption:2,
};

const questions=[q1,q2,q3,q4];
// quizQuestions(i);
function quizQuestions(index) {
  pEl.textContent = questions[index].prompt;
  console.log(questions[index].prompt)

  for (var n=0;n<4;n++) {
    liEls[n].textContent = questions[index].options[n];
  }

  liEls[0].addEventListener("click", function() {
    if (0 == questions[index].correctOption) {
      answerResponseEl.textContent="Correct";
      currentScore++;
    }else {
      answerResponseEl.textContent="Wrong";
      secondsLeft = secondsLeft-5;
    }
    index++;
    quizQuestions(index)
  });
  liEls[1].addEventListener("click", function() {
    if (1 == questions[index].correctOption) {
      answerResponseEl.textContent="Correct";
      currentScore++;
    }else {
      answerResponseEl.textContent="Wrong";
      secondsLeft = secondsLeft-5;
    }
    index++;
    quizQuestions(index)
  });
  liEls[2].addEventListener("click", function() {
    if (2 == questions[index].correctOption) {
      answerResponseEl.textContent="Correct";
      currentScore++;
    }else {
      answerResponseEl.textContent="Wrong";
      secondsLeft = secondsLeft-5;
    }
    index++;
    quizQuestions(index)
  });
  liEls[3].addEventListener("click", function() {
    if (3 == questions[index].correctOption) {
      answerResponseEl.textContent="Correct";
      currentScore++;
    }else {
      answerResponseEl.textContent="Wrong";
      secondsLeft = secondsLeft-5;
    }
    index++;
    quizQuestions(index)
  });
}

function answerSelection(m){
  liEls[m].addEventListener("click", function() {
    if (m == questions[index].correctOption) {
      answerResponseEl.textContent="Correct";
      currentScore++;
    }else {
      answerResponseEl.textContent="Wrong";
    }
    index++;
    quizQuestions(index)
  });
}

// Selects element by class
var timeEl = document.querySelector(".time");

var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
  quizQuestions(i)
  var timerInterval = setInterval(function() {
    
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if(secondsLeft <= 0) {
      // Stops execution of action at set interval
      
      clearInterval(timerInterval);
      timeEl.textContent = " ";

    //   sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " ";

}

setTime();
