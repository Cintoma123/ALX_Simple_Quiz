// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select the button from the DOM
    const submitButton = document.getElementById("submit-answer");

    // Add a click event listener to the button.
    // 'checkAnswer' is passed as a callback function.
    submitButton.addEventListener('click', checkAnswer);
});

function checkAnswer() {
    const correctAnswer = "4";

    // Find the radio button that the user has checked
    const selectedOption = document.querySelector("input[name='quiz']:checked");
    const feedbackElement = document.getElementById("feedback");

    // Check if an answer was selected
    if (selectedOption) {
        const userAnswer = selectedOption.value;
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red";
        }
        document.getElementById("submit-answer").disabled = true;
    } else {
        feedbackElement.textContent = "Please select an answer.";
        feedbackElement.style.color = "orange";
    }
}
