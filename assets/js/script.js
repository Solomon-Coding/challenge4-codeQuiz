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
  correctOption:3,
};

var q2={
  index:1,
  prompt:"Commonly used data types DO NOT include:",
  options:["strings",
          "booleans",
          "alerts",
          "numbers"],
  correctOption:3,
};

var q3={
  index:2,
  prompt:"Inside which HTML element do we put the JavaScript?",
  options:["<js>",
          "<script>",
          "<javascript>",
          "<scripting>"],
  correctOption:2,
};

var q4={
  index:3,
  prompt:'What is the correct syntax for referring to an external script called "xxx.js"?',
  options:['<script stylesheet="xxx.js">',
          '<script name="xxx.js">',
          '<script src="xxx.js">',
          '<script href="xxx.js">'],
  correctOption:3,
};

const questions=[q1,q2,q3,q4];

function quizQuestions(i) {
  pEl.textContent = questions[i].prompt;
  liEls[0].textContent = questions[i].options[0];
  liEls[1].textContent = questions[i].options[1];
  liEls[2].textContent = questions[i].options[2];
  liEls[3].textContent = questions[i].options[3];
  
  liEls[0].addEventListener("click",function handleClick(){
    var a=0;
    console.log(a);
    return a;
  });
  liEls[1].addEventListener("click",function handleClick(){
    var a=1;
    console.log(a);
    return a;
  });
  liEls[2].addEventListener("click",function handleClick(){
    var a=2;
    console.log(a);
    return a;
  });
  a[3]=liEls[3].addEventListener("click",function handleClick(){
    var a=3;
    console.log(a);
    return a;
  });
console.log(a)
  if (a==questions[i].correctOption){
    answerResponseEl.textContent("Correct");
  }else {
    answerResponseEl.textContent("Wrong");
  }
  i++;
  quizQuestions(i)
}

quizQuestions(i);

// Selects element by class
var timeEl = document.querySelector(".time");

var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      timeEl.textContent = " ";

    //   sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " ";

}

setTime();
