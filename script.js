// ==========================================
// 🎨 AVATAR STATE ENGINE CONTROL
// ==========================================
function setAvatarState(stateClassName) {
    const avatar = document.getElementById("avatarSvg");
    if (!avatar) return;
    
    // Clear out previous active animation/position classes
    avatar.classList.remove('look-down', 'thinking', 'thumbs-up');
    
    // Add the new active status if one is passed
    if (stateClassName) {
        avatar.classList.add(stateClassName);
    }
}

// ==========================================
// 🚀 STEP 1: GO TO TEST SELECTION
// ==========================================
function goToSelection(){
    let name = document.getElementById("name").value.trim();
    let surname = document.getElementById("surname").value.trim();

    if(name === "" || surname === ""){
        alert("Please enter name and surname");
        return;
    }

    // SAVE USER DATA TO STORAGE
    localStorage.setItem("name", name);
    localStorage.setItem("surname", surname);

    // HIDE FORM & VISUALIZE NEXT STAGE
    document.getElementById("userForm").classList.add("hidden");
    document.getElementById("testSelection").classList.remove("hidden");
    
    // Switch character into thinking loop mode
    setAvatarState('thinking');
}

// ==========================================
// 📋 STEP 2: SELECT MAIN TEST CATEGORY
// ==========================================
function selectTest(type){
    localStorage.setItem("testType", type);

    // HIDE MAIN SELECTION TRACK
    document.getElementById("testSelection").classList.add("hidden");

    // IF DEVOPS ROUTE -> BURST OUT DETAILED TOOLS
    if(type === "devops"){
        document.getElementById("devopsOptions").classList.remove("hidden");
        setAvatarState('thinking'); // Keep the character thinking during submenu
    } else {
        showStart(type);
    }
}

// ==========================================
// 🛠️ STEP 3: SELECT DEVOPS SPECIFIC TOOL
// ==========================================
function selectDevops(tool){
    localStorage.setItem("devopsTool", tool);

    // HIDE THE SUBCATEGORY MENU CONTAINER
    document.getElementById("devopsOptions").classList.add("hidden");

    // SHOW FINAL START PROMPT
    showStart("devops - " + tool);
}

// ==========================================
// 🏁 STEP 4: PREPARE AND SHOW START SELECTION
// ==========================================
function showStart(text){
    setAvatarState(''); // Return the character to clean neutral stance
    document.getElementById("startSection").classList.remove("hidden");
    document.getElementById("selectedTestText").innerText = "You selected: " + text.toUpperCase();
}

// ==========================================
// ⏱️ STEP 5: START TEST (CINEMATIC COUNTDOWN)
// ==========================================
function startTest(){
    const overlay = document.getElementById("countdownOverlay");
    const countdownDisplay = document.getElementById("countdownDisplay");
    const wishTextDisplay = document.getElementById("wishTextDisplay");
    const overlayAvatarBox = document.getElementById("overlayAvatarBox");
    const originalAvatar = document.getElementById("avatarSvg");

    // Clone the character block cleanly to render inside overlay space
    overlayAvatarBox.innerHTML = "";
    const clonedAvatar = originalAvatar.cloneNode(true);
    clonedAvatar.id = "overlayAvatar";
    overlayAvatarBox.appendChild(clonedAvatar);

    // Activate overlay container views
    overlay.classList.add("active");
    
    let count = 3;
    countdownDisplay.innerText = count;
    wishTextDisplay.classList.add("hidden");
    countdownDisplay.classList.remove("hidden");

    // Sequential 3.. 2.. 1.. Clock Beat Tick Interval Execution
    let timer = setInterval(() => {
        count--;
        if (count > 0) {
            countdownDisplay.innerText = count;
        } else if (count === 0) {
            clearInterval(timer);
            
            // Hide running clock, set thumbs-up animation, fire off wish text banner
            countdownDisplay.classList.add("hidden");
            clonedAvatar.classList.remove('look-down', 'thinking');
            clonedAvatar.classList.add('thumbs-up');
            wishTextDisplay.classList.remove("hidden");

            // Pause frame briefly for user engagement before routing execution
            setTimeout(() => {
                executeRouting();
            }, 1500);
        }
    }, 1000);
}

// ==========================================
// 🧭 STEP 6: DIRECT ROUTING INTERFACES
// ==========================================
function executeRouting() {
    let type = localStorage.getItem("testType");
    let tool = localStorage.getItem("devopsTool");

    // AWS PATHWAYS
    if(type === "aws"){
        window.location.href = "tests/aws/aws.html";
    }
    // LINUX PATHWAYS
    else if(type === "linux"){
        window.location.href = "tests/linux/linux.html";
    }
    // DEVOPS TOOLS PATHWAYS
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

// ==========================================
// 🔥 SEND AGGREGATED SCORE TO GOOGLE SHEETS
// ==========================================
function sendToGoogleSheet(score, testName){
    let name = localStorage.getItem("name");
    let surname = localStorage.getItem("surname");

    if(!name || !surname){
        alert("Name or surname missing!");
        return;
    }

    fetch("https://google.com", {
        method: "POST",
        body: JSON.stringify({
            name: name,
            surname: surname,
            test: testName,
            score: score
        })
    });
}

// ==========================================
// 🐞 THE INTEGRATED BUG REPORT ENGINE
// ==========================================
function reportIssue(testName){
    let name = localStorage.getItem("name");
    let surname = localStorage.getItem("surname");

    let issue = prompt("Describe the issue you found:");
    if(!issue) return;

    fetch("https://google.com", {
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

// ==========================================
// 🎉 FINAL RESULT CELEBRATION DISPLAYS
// ==========================================
function showFeedback(score, total){
    let percent = (score / total) * 100;

    if(percent >= 85){
        // Dynamic Celebrations Overlay
        let div = document.createElement("div");
        div.id = "celebration";
        div.innerHTML = `
        <div style="
        position:fixed;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background:rgba(15, 23, 42, 0.6);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        z-index:9999;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        color:white;
        font-size:28px;
        font-weight:bold;
        font-family: 'Segoe UI', sans-serif;
        ">
        🎉 Congratulations! 🎉
        <p style="font-size:18px;margin-top:10px;color:#38bdf8;">Excellent Performance 🚀</p>
        <canvas id="fireworksCanvas" style="position:absolute;top:0;left:0;pointer-events:none;z-index:-1;"></canvas>
        </div>
        `;

        document.body.appendChild(div);

        // Canvas Particles Initialization Loops
        let canvas = document.getElementById("fireworksCanvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let ctx = canvas.getContext("2d");
        let particles = [];

        function createFirework(){
            let x = Math.random() * canvas.width;
            let y = Math.random() * (canvas.height / 2);

            for(let i=0;i<80;i++){
                particles.push({
                    x: x,
                    y: y,
                    angle: Math.random() * 2 * Math.PI,
                    speed: Math.random() * 5 + 2,
                    radius: 2,
                    life: 100,
                    color: `hsl(${Math.random()*360},100%,60%)`
                });
            }
        }

        function draw(){
            ctx.fillStyle = "rgba(15, 23, 42, 0.2)";
            ctx.fillRect(0,0,canvas.width,canvas.height);

            particles.forEach((p, index)=>{
                p.x += Math.cos(p.angle) * p.speed;
                p.y += Math.sin(p.angle) * p.speed;
                p.life--;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI*2);
                ctx.fillStyle = p.color;
                ctx.fill();

                if(p.life <= 0){
                    particles.splice(index,1);
                }
            });
        }

        let fireInterval = setInterval(createFirework, 600);
        let animation = setInterval(draw, 20);

        // Self-destruct frame component overlay tracking loops after completion
        setTimeout(()=>{
            clearInterval(animation);
