let time = 1800;
let timer;

const quiz = document.getElementById("quiz");
const navigatorDiv = document.getElementById("navigator");
const resultDiv = document.getElementById("result");


// =======================
// RANDOMIZE (FIXED)
// =======================
function shuffleQuestions(){

questions.sort(() => Math.random() - 0.5);

questions.forEach(q => {
let correct = q.options[q.answer];
q.options.sort(() => Math.random() - 0.5);
q.answer = q.options.indexOf(correct);
});

}


// =======================
// TIMER
// =======================
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


// =======================
// NAVIGATOR
// =======================
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


// =======================
// LOAD QUIZ (FIXED)
// =======================
function loadQuiz(){

let html = "";

questions.forEach((q,index)=>{

html += `<div class="question-block">
<h4>${index+1}. ${q.question}</h4>`;

q.options.forEach((option,i)=>{
html += `
<label>
<input type="radio" name="q${index}" value="${i}" onchange="markAnswered(${index})">
${option}
</label>`;
});

html += "</div>";

});

quiz.innerHTML = html;
}


// =======================
// MARK ANSWER
// =======================
function markAnswered(index){
navigatorDiv.children[index].style.background = "#ffcc80";
}


// =======================
// SUBMIT QUIZ
// =======================
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


// =======================
// RESULT + REPORT BUTTON
// =======================
resultDiv.innerHTML = `
<h2>${name} ${surname}</h2>
<h2 class="score">Score: ${score}/${questions.length}</h2>

<button onclick="reportIssue('Terraform')">🐞 Report Issue</button>

${resultHTML}
`;


// =======================
// SEND DATA (FROM script.js)
// =======================
sendToGoogleSheet(score, "Terraform");

resultDiv.scrollIntoView({behavior:"smooth"});
}


// =======================
// INIT (IMPORTANT ORDER)
// =======================
shuffleQuestions();   // 🔥 MUST FIRST
startTimer();
createNavigator();
loadQuiz();
