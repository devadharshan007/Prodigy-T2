let minutes = 0, seconds = 0, milliseconds = 0;
let timer;
let running = false;

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            milliseconds += 10;
            if (milliseconds >= 1000) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }
            updateDisplay();
        }, 10);
    }
}

function pauseTimer() {
    running = false;
    clearInterval(timer);
}

function resetTimer() {
    running = false;
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
}

/* Update the Display */
function updateDisplay() {
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
    document.getElementById("milliseconds").innerText = String(milliseconds / 10).padStart(2, '0');
}

/* Button Event Listeners */
document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
