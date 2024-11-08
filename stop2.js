// Variables to store time values
let hours = 0;
let minutes = 0;
let seconds = 0;

// Variable to store interval ID
let timerInterval;

// Select display elements for hours, minutes, and seconds
const hourDisplay = document.getElementById("btn1");
const minuteDisplay = document.getElementById("btn2");
const secondDisplay = document.getElementById("btn3");

// Select the buttons
const startButton = document.getElementById("size"); // Start button
const stopButton = document.querySelectorAll(".size1")[0]; // Stop button
const resetButton = document.querySelectorAll(".size2")[0]; // Reset button

// Event listeners for buttons
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

// Function to start the timer
function startTimer() {
    // Prevent multiple intervals by checking if one is already running
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            seconds++;

            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }

            updateDisplay();
        }, 1000); // Update every second
    }
}

// Function to stop the timer
function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null; // Reset interval ID
}

// Function to reset the timer
function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null; // Reset interval ID
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
}

// Function to update the display
function updateDisplay() {
    hourDisplay.textContent = String(hours).padStart(2, "0") + " : HOUR";
    minuteDisplay.textContent = String(minutes).padStart(2, "0") + " : MINUTE";
    secondDisplay.textContent = String(seconds).padStart(2, "0") + " : SECOND";
}
