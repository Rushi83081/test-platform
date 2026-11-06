let time = 1800;
let timer;
let quizSubmitted = false;
let minuteNoticeTimer;
let questionsShuffled = false;

const quiz = document.getElementById("quiz");
const navigatorDiv = document.getElementById("navigator");
const resultDiv = document.getElementById("result");

function shuffleQuestions() {
    if (questionsShuffled) return;
    questionsShuffled = true;

    for (let index = questions.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [questions[index], questions[swapIndex]] =
            [questions[swapIndex], questions[index]];
    }

    questions.forEach((question) => {
        const correctAnswer = question.options[question.answer];

        for (let index = question.options.length - 1; index > 0; index -= 1) {
            const swapIndex = Math.floor(Math.random() * (index + 1));
            [question.options[index], question.options[swapIndex]] =
                [question.options[swapIndex], question.options[index]];
        }

        question.answer = question.options.indexOf(correctAnswer);
    });
}

function formatTime(secondsRemaining) {
    const minutes = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    timerElement.textContent = formatTime(time);

    timer = setInterval(() => {
        if (quizSubmitted) {
            clearInterval(timer);
            return;
        }

        time -= 1;
        timerElement.textContent = formatTime(Math.max(time, 0));

        if (time === 60) {
            showMinuteNotice();
        }

        if (time <= 0) {
            time = 0;
            timerElement.textContent = "00:00";
            clearInterval(timer);
            finishQuiz();
        }
    }, 1000);
}

function showMinuteNotice() {
    const notice = document.getElementById("minuteNotice");
    if (!notice) return;

    notice.classList.add("show");
    clearTimeout(minuteNoticeTimer);

    minuteNoticeTimer = setTimeout(() => {
        notice.classList.remove("show");
    }, 2200);
}

function createNavigator() {
    navigatorDiv.replaceChildren();

    questions.forEach((question, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = String(index + 1);
        button.className = "nav-btn unanswered";
        button.setAttribute("aria-label", `Question ${index + 1}, unanswered`);

        button.addEventListener("click", () => {
            document.getElementById(`question-${index}`)?.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        });

        navigatorDiv.appendChild(button);
    });

    updateAnswerStatus();
}
function setupNavigatorPosition() {
    const navigatorPanel = document.getElementById("questionNavigator");
    const fourthQuestion = document.getElementById("question-3");

    if (!navigatorPanel || !fourthQuestion) return;

    function updatePosition() {
        if (window.innerWidth <= 760) {
            navigatorPanel.classList.remove("rail-mode");
            return;
        }

        const fourthQuestionTop = fourthQuestion.getBoundingClientRect().top;
        navigatorPanel.classList.toggle("rail-mode", fourthQuestionTop <= 120);
    }

    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition);
    updatePosition();
}

function loadQuiz() {
    quiz.replaceChildren();

    questions.forEach((question, questionIndex) => {
        const card = document.createElement("article");
        card.className = "question-block";
        card.id = `question-${questionIndex}`;

        const heading = document.createElement("h2");
        heading.className = "question-title";
        heading.textContent = `Question ${questionIndex + 1}`;

        const questionText = document.createElement("p");
        questionText.className = "question-text";
        questionText.textContent = question.question;

        const options = document.createElement("div");
        options.className = "answer-options";

        question.options.forEach((option, optionIndex) => {
            const label = document.createElement("label");
            label.className = "answer-option";

            const input = document.createElement("input");
            input.type = "radio";
            input.name = `q${questionIndex}`;
            input.value = String(optionIndex);
            input.addEventListener("change", updateAnswerStatus);

            const text = document.createElement("span");
            text.className = "option-text";
            text.textContent = option;

            label.append(input, text);
            options.appendChild(label);
        });

        card.append(heading, questionText, options);
        quiz.appendChild(card);
    });
}

function updateAnswerStatus() {
    let answeredCount = 0;

    questions.forEach((question, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        const button = navigatorDiv.children[index];
        const card = document.getElementById(`question-${index}`);

        if (selected) {
            answeredCount += 1;
            button?.classList.add("answered");
            button?.classList.remove("unanswered");
            button?.setAttribute("aria-label", `Question ${index + 1}, answered`);
            card?.classList.add("is-answered");
        } else {
            button?.classList.add("unanswered");
            button?.classList.remove("answered");
            button?.setAttribute("aria-label", `Question ${index + 1}, unanswered`);
            card?.classList.remove("is-answered");
        }
    });

    const summary = document.getElementById("answerSummary");
    if (summary) {
        const unansweredCount = questions.length - answeredCount;
        summary.textContent =
            `${answeredCount} of ${questions.length} answered · ${unansweredCount} unanswered`;
    }
}

function submitQuiz() {
    if (quizSubmitted) return;

    const unansweredCount = questions.reduce((count, question, index) => {
        return count + (document.querySelector(`input[name="q${index}"]:checked`) ? 0 : 1);
    }, 0);

    if (unansweredCount > 0) {
        openSubmitDialog(unansweredCount);
        return;
    }

    finishQuiz();
}

function openSubmitDialog(unansweredCount) {
    const dialog = document.getElementById("submitDialog");
    const message = document.getElementById("submitDialogMessage");

    if (!dialog || !message) {
        if (confirm(`You have ${unansweredCount} unanswered questions. Submit anyway?`)) {
            finishQuiz();
        }
        return;
    }

    message.textContent =
        `You have ${unansweredCount} unanswered ` +
        `${unansweredCount === 1 ? "question" : "questions"}. ` +
        "Would you like to go back and answer them, or submit your test now?";

    dialog.classList.remove("hidden");
    document.querySelector(".secondary-button")?.focus();
}

function closeSubmitDialog() {
    document.getElementById("submitDialog")?.classList.add("hidden");
    document.getElementById("submitButton")?.focus();
}

function confirmSubmit() {
    document.getElementById("submitDialog")?.classList.add("hidden");
    finishQuiz();
}

function finishQuiz() {
    if (quizSubmitted) return;

    quizSubmitted = true;
    clearInterval(timer);
    clearTimeout(minuteNoticeTimer);

    let score = 0;
    const wrongAnswers = [];
    const correctAnswers = [];

    questions.forEach((question, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        const selectedAnswer = selected ? Number(selected.value) : null;

        if (selectedAnswer === question.answer) {
            score += 1;
            correctAnswers.push(`
                <article class="correct-review-block">
                    <h3>Question ${index + 1}</h3>
                    <p class="review-question">${escapeHTML(question.question)}</p>
                    <p class="correct-answer">
                        Your correct answer: ${escapeHTML(question.options[selectedAnswer])}
                    </p>
                </article>
            `);
        } else {
            const givenAnswer = selectedAnswer === null
                ? "Not answered"
                : question.options[selectedAnswer];

            wrongAnswers.push(`
                <article class="wrong-block">
                    <h3>Question ${index + 1}</h3>
                    <p class="review-question">${escapeHTML(question.question)}</p>
                    <p class="your-answer">Your answer: ${escapeHTML(givenAnswer)}</p>
                    <p class="correct-answer">
                        Correct answer: ${escapeHTML(question.options[question.answer])}
                    </p>
                </article>
            `);
        }
    });

    const name = escapeHTML(localStorage.getItem("name") || "Student");
    const surname = escapeHTML(localStorage.getItem("surname") || "");
    const incorrectCount = questions.length - score;

    document.getElementById("quizSection")?.classList.add("hidden");

    resultDiv.innerHTML = `
        <div class="result-card">
            <p class="eyebrow">Assessment complete</p>
            <h2>${name} ${surname}</h2>
            <p class="score">${score}<span> / ${questions.length}</span></p>
            <p class="result-caption">Your AWS test score</p>
            <button class="secondary-button" type="button" onclick="reportIssue('AWS')">
                Report an issue
            </button>
        </div>

        <div class="review-controls">
            <button
                class="review-toggle active"
                type="button"
                data-review="incorrect"
                onclick="showReview('incorrect')">
                Incorrect / skipped (${incorrectCount})
            </button>
            <button
                class="review-toggle"
                type="button"
                data-review="correct"
                onclick="showReview('correct')">
                Correct answers (${score})
            </button>
        </div>

        <section id="incorrectReview" class="review-section">
            <h2>Incorrect and unanswered questions</h2>
            ${wrongAnswers.length
                ? wrongAnswers.join("")
                : `<p class="all-correct">No incorrect or unanswered questions.</p>`
            }
        </section>

        <section id="correctReview" class="review-section hidden">
            <h2>Questions you answered correctly</h2>
            ${correctAnswers.length
                ? correctAnswers.join("")
                : `<p class="review-empty">There are no correctly answered questions to show.</p>`
            }
        </section>
    `;

    resultDiv.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showReview(type) {
    const showCorrect = type === "correct";

    document.getElementById("incorrectReview")
        ?.classList.toggle("hidden", showCorrect);
    document.getElementById("correctReview")
        ?.classList.toggle("hidden", !showCorrect);

    document.querySelectorAll(".review-toggle").forEach((button) => {
        button.classList.toggle("active", button.dataset.review === type);
    });
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (character) => {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return entities[character];
    });
}

shuffleQuestions();
loadQuiz();
createNavigator();
updateAnswerStatus();
startTimer();
