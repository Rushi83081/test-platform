function showCharacterStage(stage) {
    localStorage.setItem("characterStage", stage);

    if (typeof window.setCharacterStage === "function") {
        window.setCharacterStage(stage);
    } else {
        window.dispatchEvent(new CustomEvent("character-stage-change", {
            detail: { stage }
        }));
    }
}

function goToSelection() {
    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();

    if (!name || !surname) {
        alert("Please enter your name and surname.");
        window.triggerBoyExpression?.("look-down");
        return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("surname", surname);

    document.getElementById("userForm").classList.add("hidden");
    document.getElementById("testSelection").classList.remove("hidden");

    showCharacterStage("selection");
    window.triggerBoyExpression?.("thinking");
}

function selectTest(type) {
    localStorage.setItem("testType", type);
    localStorage.removeItem("devopsTool");

    document.getElementById("testSelection").classList.add("hidden");

    if (type === "devops") {
        document.getElementById("devopsOptions").classList.remove("hidden");
        showCharacterStage("selection");
        window.triggerBoyExpression?.("thinking");
        return;
    }

    showStart(type);
}

function selectDevops(tool) {
    localStorage.setItem("devopsTool", tool);
    document.getElementById("devopsOptions").classList.add("hidden");
    showStart(`DevOps - ${tool}`);
}

function showStart(testName) {
    document.getElementById("startSection").classList.remove("hidden");
    document.getElementById("selectedTestText").textContent =
        `You selected: ${testName.toUpperCase()}`;

    showCharacterStage("selection");
    window.triggerBoyExpression?.("walk");
}

function startTest() {
    if (!localStorage.getItem("testType")) {
        alert("Please select a test first.");
        return;
    }

    const overlay = document.getElementById("countdownOverlay");
    const countdownDisplay = document.getElementById("countdownDisplay");
    const wishTextDisplay = document.getElementById("wishTextDisplay");

    overlay.classList.add("active");
    countdownDisplay.classList.remove("hidden");
    wishTextDisplay.classList.add("hidden");

    let count = 3;
    countdownDisplay.textContent = count;
    window.triggerBoyExpression?.("thumbs-up");

    const timer = setInterval(() => {
        count -= 1;

        if (count > 0) {
            countdownDisplay.textContent = count;
            return;
        }

        clearInterval(timer);
        countdownDisplay.classList.add("hidden");
        wishTextDisplay.classList.remove("hidden");
        window.triggerBoyExpression?.("thumbs-up");

        setTimeout(executeRouting, 1500);
    }, 1000);
}

function executeRouting() {
    const type = localStorage.getItem("testType");
    const tool = localStorage.getItem("devopsTool");

    const routes = {
        aws: "tests/aws/aws.html",
        linux: "tests/linux/linux.html"
    };

    if (routes[type]) {
        window.location.href = routes[type];
        return;
    }

    if (type === "devops") {
        const devopsRoutes = {
            git: "tests/devops/git/git.html",
            docker: "tests/devops/docker/docker.html",
            kubernetes: "tests/devops/kubernetes/k8s.html",
            terraform: "tests/devops/terraform/terraform.html",
            jenkins: "tests/devops/jenkins/jenkins.html",
            all: "tests/devops/all/devops-all.html"
        };

        window.location.href = devopsRoutes[tool] || devopsRoutes.all;
        return;
    }

    alert("We couldn't find that test. Please select a test again.");
    document.getElementById("countdownOverlay").classList.remove("active");
}

async function sendToGoogleSheet(score, testName) {
    const name = localStorage.getItem("name");
    const surname = localStorage.getItem("surname");

    if (!name || !surname) {
        console.error("Score not saved: student name or surname is missing.");
        return;
    }

    const testKey = String(testName).trim().toLowerCase();
    const payload = {
        name,
        surname,
        score: Number(score)
    };

    const columnByTest = {
        linux: "linux",
        aws: "aws",
        git: "git",
        docker: "docker",
        kubernetes: "kubernetes",
        terraform: "terraform",
        jenkins: "jenkins",
        devops: "devops",
        "devops all": "devops"
    };

    const field = columnByTest[testKey];
    if (!field) {
        console.error("Score not saved: unknown test name.", testName);
        return;
    }

    payload[field] = Number(score);

    try {
        await fetch(
            "https://script.google.com/macros/s/AKfycbx2JJwjZMROBznRcegXYyJT2JiDfevnG1AbVwyYibGwrxgCnxPO9YO1K2LBmCQOZhfe/exec",
            {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                },
                body: new URLSearchParams(payload)
            }
        );

        console.info(`Score submitted for ${testName}.`);
    } catch (error) {
        console.error("Could not submit score:", error);
    }
}

function reportIssue(testName) {
    const issue = prompt("Describe the issue you found:");
    if (!issue || !issue.trim()) return;

    alert(
        `Thanks for reporting an issue with ${testName}. ` +
        "Submission storage is not configured yet."
    );
}

function showFeedback(score, total) {
    if (!Number.isFinite(score) || !Number.isFinite(total) || total <= 0) {
        alert("We couldn't calculate your result.");
        return;
    }

    const percent = (score / total) * 100;
    showCharacterStage("results");
    window.triggerBoyExpression?.("dance");

    if (percent >= 85) {
        showCelebration();
    } else if (percent >= 70) {
        alert("Good job! Review a few topics and keep improving.");
    } else {
        alert("Keep practicing. Review the concepts and try again.");
    }
}

function showCelebration() {
    document.getElementById("celebration")?.remove();
    document.getElementById("celebrationStyles")?.remove();

    const style = document.createElement("style");
    style.id = "celebrationStyles";
    style.textContent = `
        #celebration {
            position: fixed;
            z-index: 100000;
            inset: 0;
            display: grid;
            place-items: center;
            padding: 20px;
            color: white;
            background: rgba(5, 7, 15, 0.82);
            backdrop-filter: blur(12px);
        }
        .celebration-content {
            position: relative;
            text-align: center;
        }
        .celebration-title {
            font-size: clamp(28px, 7vw, 48px);
            font-weight: 900;
        }
        .celebration-content p {
            color: #7dd3fc;
            font-size: 20px;
        }
        #fireworksCanvas {
            position: fixed;
            inset: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }
        #closeCelebration {
            position: relative;
            z-index: 1;
            margin-top: 12px;
        }
    `;

    document.head.appendChild(style);

    const celebration = document.createElement("div");
    celebration.id = "celebration";
    celebration.setAttribute("role", "dialog");
    celebration.setAttribute("aria-modal", "true");
    celebration.innerHTML = `
        <div class="celebration-content">
            <div class="celebration-title">🎉 Congratulations! 🎉</div>
            <p>Excellent performance 🚀</p>
            <canvas id="fireworksCanvas" aria-hidden="true"></canvas>
            <button type="button" id="closeCelebration">Continue</button>
        </div>
    `;

    document.body.appendChild(celebration);

    document.getElementById("closeCelebration").addEventListener("click", () => {
        celebration.remove();
        style.remove();
    });

    const canvas = document.getElementById("fireworksCanvas");
    const context = canvas.getContext("2d");
    const particles = [];

    function resizeCanvas() {
        const ratio = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = window.innerWidth * ratio;
        canvas.height = window.innerHeight * ratio;
        context.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    function createFirework() {
        const originX = Math.random() * window.innerWidth;
        const originY = Math.random() * window.innerHeight * 0.55;

        for (let index = 0; index < 45; index += 1) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 3 + 1;

            particles.push({
                x: originX,
                y: originY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life: 70,
                color: `hsl(${Math.random() * 360}, 100%, 65%)`
            });
        }
    }

    let animationFrame;
    let startTime = 0;

    function drawFireworks(time) {
        if (!startTime) startTime = time;

        context.clearRect(0, 0, window.innerWidth, window.innerHeight);

        particles.forEach((particle) => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.vy += 0.025;
            particle.life -= 1;

            context.globalAlpha = Math.max(particle.life / 70, 0);
            context.fillStyle = particle.color;
            context.beginPath();
            context.arc(particle.x, particle.y, 2.5, 0, Math.PI * 2);
            context.fill();
        });

        context.globalAlpha = 1;

        for (let index = particles.length - 1; index >= 0; index -= 1) {
            if (particles[index].life <= 0) particles.splice(index, 1);
        }

        if (time - startTime < 4500 && document.body.contains(celebration)) {
            animationFrame = requestAnimationFrame(drawFireworks);
        }
    }

    function closeCelebration() {
        cancelAnimationFrame(animationFrame);
        window.removeEventListener("resize", resizeCanvas);
        celebration.remove();
        style.remove();
    }

    document.getElementById("closeCelebration").addEventListener("click", closeCelebration);

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    const fireworkTimer = setInterval(createFirework, 550);
    animationFrame = requestAnimationFrame(drawFireworks);

    setTimeout(() => clearInterval(fireworkTimer), 5000);
}

window.addEventListener("load", () => {
    setTimeout(() => {
        window.triggerBoyExpression?.("wave");
    }, 500);
});
