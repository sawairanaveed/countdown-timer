let countdown;
let isRunning = false;
let secondsRemaining;

function startTimer(seconds) {
    if (isRunning) return;

    secondsRemaining = seconds;
    isRunning = true;

    countdown = setInterval(function() {
        displayTime(secondsRemaining);
        if (secondsRemaining <= 0) {
            clearInterval(countdown);
            isRunning = false;
        }
        secondsRemaining--;
    }, 1000);
}

function stopTimer() {
    clearInterval(countdown);
    isRunning = false;
}

function resetTimer() {
    clearInterval(countdown);
    isRunning = false;
    secondsRemaining = 0; // Reset the remaining seconds to zero
    displayTime(secondsRemaining);
}

function displayTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const display = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    document.getElementById('display').textContent = display;
}

document.getElementById('start').addEventListener('click', function() {
    startTimer(3600); // Start timer with 1 hour (3600 seconds)
});

document.getElementById('stop').addEventListener('click', stopTimer);

document.getElementById('reset').addEventListener('click', resetTimer);
