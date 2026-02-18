let timerDisplay = document.getElementById("timer");

if (timerDisplay) {

    let timeLeft = 25 * 60;
    let timerInterval = null;

    const startBtn = document.getElementById("startBtn");
    const pauseBtn = document.getElementById("pauseBtn");
    const resetBtn = document.getElementById("resetBtn");

    function updateDisplay() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        timerDisplay.textContent = minutes + ":" + seconds;
    }

    function startTimer() {
        if (timerInterval !== null) return;

        timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timerInterval);
                alert("Time's up! Take a break 🎉");
            }
        }, 1000);
    }

    function pauseTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    function resetTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
        timeLeft = 25 * 60;
        updateDisplay();
    }

    startBtn.addEventListener("click", startTimer);
    pauseBtn.addEventListener("click", pauseTimer);
    resetBtn.addEventListener("click", resetTimer);

    updateDisplay();
}

function checkExplanation() {
    let text = document.getElementById("explainBox").value;
    let feedback = document.getElementById("feedback");

    if (text.length < 50) {
        feedback.textContent = "Try explaining in more detail!";
    } else {
        feedback.textContent = "Great! Now try simplifying it further.";
    }
}

function checkExplanation() {

    let textArea = document.getElementById("explainBox");
    let feedback = document.getElementById("feedback");

    if (!textArea) return; // prevents errors on other pages

    let text = textArea.value.trim();

    if (text.length < 30) {
        feedback.textContent = "❌ Too short! Try explaining in more detail.";
        feedback.style.color = "red";
    } 
    else if (text.split(" ").length > 100) {
        feedback.textContent = "⚠️ Good length, but try simplifying your explanation.";
        feedback.style.color = "orange";
    } 
    else {
        feedback.textContent = "✅ Great! Your explanation looks clear and simple.";
        feedback.style.color = "green";
    }
}
