
let time = 1800; // 30 minutes
let timer;

const quiz = document.getElementById("quiz");
const navigatorDiv = document.getElementById("navigator");
const resultDiv = document.getElementById("result");

// =======================
// ✅ ADD THIS FUNCTION (NEW)
// =======================
function sendToGoogleSheet(score, testName){

let name = localStorage.getItem("name");
let surname = localStorage.getItem("surname");

fetch("https://script.google.com/macros/s/AKfycbzE4SYIXjT2miAjT20YN0iSAordk1uQtoktJG8dhUel4-xTDYgHYdwBsfU-wKQA0PW5/exec", {
  method: "POST",
  body: JSON.stringify({
    name: name,
    surname: surname,
    test: testName,
    score: score
  })
});
}

// TIMER
function startTimer(){
timer = setInterval(function(){

let minutes = Math.floor(time / 60);
let seconds = time % 60;

document.getElementById("timer").innerText =
(minutes < 10 ? "0" + minutes : minutes) + ":" +
(seconds < 10 ? "0" + seconds : seconds);

time--;

if(time === 600) alert("⚠️ 10 minutes left!");
if(time === 300) alert("⚠️ 5 minutes left!");

if(time < 0){
clearInterval(timer);
submitQuiz();
}

},1000);
}

// ✅ PROPER SHUFFLE (Fisher-Yates)
function shuffleArray(array){
for(let i = array.length - 1; i > 0; i--){
let j = Math.floor(Math.random() * (i + 1));
[array[i], array[j]] = [array[j], array[i]];
}
}

// ✅ RANDOMIZE QUESTIONS + OPTIONS
function randomizeQuestions(){
shuffleArray(questions);

questions.forEach(q => {
let correct = q.options[q.answer];
shuffleArray(q.options);
q.answer = q.options.indexOf(correct);
});
}

// NAVIGATOR
function createNavigator(){
questions.forEach((q,index)=>{
let btn = document.createElement("button");
btn.innerText = index + 1;
btn.className = "nav-btn";

btn.onclick = function(){
document.querySelectorAll(".question-block")[index].scrollIntoView({
behavior:"smooth",
block:"center"
});
};

navigatorDiv.appendChild(btn);
});
}

// LOAD QUIZ
function loadQuiz(){

let html = "";

questions.forEach((q,index)=>{

html += `<div class="question-block">
<h4>${index+1}. ${q.question}</h4>`;

q.options.forEach((option,i)=>{
html += `
<label>
<input type="radio" name="q${index}" value="${i}" onchange="markAnswered(${index})">
&nbsp;${option}
</label>
`;
});

html += "</div>";

});

quiz.innerHTML = html;
}

// MARK ANSWER
function markAnswered(index){
navigatorDiv.children[index].style.background = "#ffcc80";
}

// SUBMIT
function submitQuiz(){

clearInterval(timer);

let score = 0;
let resultHTML = "";
let btns = navigatorDiv.children;

document.getElementById("quizSection").style.display = "none";

questions.forEach((q,index)=>{

let selected = document.querySelector(`input[name="q${index}"]:checked`);
let userAnswer = selected ? parseInt(selected.value) : null;

if(userAnswer === q.answer){
score++;
btns[index].style.background = "green";
btns[index].style.color = "white";
}else{

btns[index].style.background = "red";
btns[index].style.color = "white";

let userText = userAnswer !== null ? q.options[userAnswer] : "Not Answered";

resultHTML += `
<div class="wrong-block">
<h4>Question ${index+1}</h4>
<p><b>${q.question}</b></p>
<p style="color:red">Your: ${userText}</p>
<p style="color:green">Correct: ${q.options[q.answer]}</p>
</div>`;
}

});

let name = localStorage.getItem("name");
let surname = localStorage.getItem("surname");

resultDiv.innerHTML = `
<h2>${name} ${surname}</h2>
<h2 class="score">Score: ${score}/${questions.length}</h2>
${resultHTML}
`;

// =======================
// ✅ ADD THIS LINE (VERY IMPORTANT)
// =======================
sendToGoogleSheet(score, "Terraform");
  
resultDiv.scrollIntoView({behavior:"smooth"});
}

// INIT
randomizeQuestions(); // 🔥 IMPORTANT
startTimer();
createNavigator();
loadQuiz();
