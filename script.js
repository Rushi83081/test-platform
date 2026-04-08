// =======================
// STEP 1: GO TO TEST SELECTION
// =======================
function goToSelection(){

let name = document.getElementById("name").value;
let surname = document.getElementById("surname").value;

if(name === "" || surname === ""){
alert("Please enter name and surname");
return;
}

// SAVE USER DATA
localStorage.setItem("name", name);
localStorage.setItem("surname", surname);

// SHOW TEST OPTIONS
document.getElementById("userForm").style.display = "none";
document.getElementById("testSelection").classList.remove("hidden");
}


// =======================
// STEP 2: SELECT MAIN TEST
// =======================
function selectTest(type){

localStorage.setItem("testType", type);

// HIDE MAIN OPTIONS
document.getElementById("testSelection").classList.add("hidden");

// IF DEVOPS → SHOW TOOLS
if(type === "devops"){
document.getElementById("devopsOptions").classList.remove("hidden");
}
else{
showStart(type);
}
}


// =======================
// STEP 3: SELECT DEVOPS TOOL
// =======================
function selectDevops(tool){

localStorage.setItem("devopsTool", tool);

// HIDE TOOL OPTIONS
document.getElementById("devopsOptions").classList.add("hidden");

// SHOW START BUTTON
showStart("devops - " + tool);
}


// =======================
// STEP 4: SHOW START BUTTON
// =======================
function showStart(text){

document.getElementById("startSection").classList.remove("hidden");

document.getElementById("selectedTestText").innerText =
"You selected: " + text.toUpperCase();
}


// =======================
// STEP 5: START TEST (ROUTING)
// =======================
function startTest(){

let type = localStorage.getItem("testType");
let tool = localStorage.getItem("devopsTool");

// AWS TEST
if(type === "aws"){
window.location.href = "tests/aws/aws.html";
}

// LINUX TEST
else if(type === "linux"){
window.location.href = "tests/linux/linux.html";
}

// DEVOPS TEST
else if(type === "devops"){

if(tool === "git"){
window.location.href = "tests/devops/git/git.html";
}
else if(tool === "docker"){
window.location.href = "tests/devops/docker/docker.html";
}
else if(tool === "kubernetes"){
window.location.href = "tests/devops/kubernetes/k8s.html";
}
else if(tool === "terraform"){
window.location.href = "tests/devops/terraform/terraform.html";
}
else if(tool === "jenkins"){
window.location.href = "tests/devops/jenkins/jenkins.html";
}
else{
window.location.href = "tests/devops/all/devops-all.html";
}

}
}


// =======================
// 🔥 SEND DATA TO GOOGLE SHEET
// =======================
function sendToGoogleSheet(score, testName){

let name = localStorage.getItem("name");
let surname = localStorage.getItem("surname");

if(!name || !surname){
alert("Name or surname missing!");
return;
}

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


// =======================
// 🐞 REPORT ISSUE FUNCTION
// =======================
function reportIssue(testName){

let name = localStorage.getItem("name");
let surname = localStorage.getItem("surname");

let issue = prompt("Describe the issue you found:");

if(!issue) return;

fetch("https://script.google.com/macros/s/AKfycbzE4SYIXjT2miAjT20YN0iSAordk1uQtoktJG8dhUel4-xTDYgHYdwBsfU-wKQA0PW5/exec", {
method: "POST",
body: JSON.stringify({
name: name,
surname: surname,
test: testName,
score: "ISSUE: " + issue
})
});

alert("✅ Issue reported. Thank you!");
}
// =======================
// RESULT FEEDBACK
// =======================
function showFeedback(score, total){

let percent = (score / total) * 100;

if(percent >= 85){

// 🎉 Create overlay
let div = document.createElement("div");
div.id = "celebration";
div.innerHTML = `
<div style="
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.5);
display:flex;
justify-content:center;
align-items:center;
z-index:9999;
flex-direction:column;
color:white;
font-size:28px;
font-weight:bold;
">
🎉 Congratulations! 🎉
<p style="font-size:18px;margin-top:10px;">Excellent Performance 🚀</p>
<canvas id="confettiCanvas"></canvas>
</div>
`;

document.body.appendChild(div);

// 🎆 Confetti animation
let canvas = document.getElementById("confettiCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");

let confetti = [];

for(let i=0;i<150;i++){
confetti.push({
x: Math.random()*canvas.width,
y: Math.random()*canvas.height,
r: Math.random()*6+2,
d: Math.random()*150,
color: `hsl(${Math.random()*360},100%,50%)`,
tilt: Math.random()*10-5
});
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);

confetti.forEach(c=>{
ctx.beginPath();
ctx.fillStyle = c.color;
ctx.fillRect(c.x,c.y,c.r,c.r);
});

update();
}

function update(){
confetti.forEach(c=>{
c.y += Math.cos(c.d) + 2;
c.x += Math.sin(c.d);

if(c.y > canvas.height){
c.y = -10;
c.x = Math.random()*canvas.width;
}
});
}

let animation = setInterval(draw, 20);

// ⏳ Remove after 4 sec
setTimeout(()=>{
clearInterval(animation);
document.getElementById("celebration").remove();
},4000);

}
else if(percent >= 70){

alert("👍 Good job! Review a few topics and improve.");

}
else{

alert("⚠️ You need more practice. Go through the concepts again.");

}

}
