// Select level buttons and the modal
const levelButtons = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const questionText = document.getElementById('size');
const numInput = document.getElementById('num');
const okayButton = document.getElementById('okay-button');

// Generate a question based on the level
function generateQuestion(level) {
    const a = Math.floor(Math.random() * 5);
    const b = Math.floor(Math.random() * 6);
    const c = Math.floor(Math.random() * 7);
    const d = Math.floor(Math.random() * 10);
    const e = Math.floor(Math.random() * 3); // For exponents
    let question = '';
    let correctAnswer;

    if (level.startsWith("easy")) {
        correctAnswer = a + b;
        question = `${a} + ${b}`;
    } else if (level.startsWith("medium")) {
        correctAnswer = a + b * c;
        question = `${a} + ${b} * ${c}`;
    } else if (level.startsWith("hard")) {
        correctAnswer = a + b / c * d;
        question = `${a} + ${b} / ${c} * ${d}`;
    } else if (level.startsWith("expert")) {
        correctAnswer = Math.pow(a + b, e);
        question = `${a + b} ^ ${e}`;
    } else {
        correctAnswer = a + b - c * d;
        question = `${a} + ${b} - ${c} * ${d}`;
    }

    return { question, correctAnswer };
}

// Display modal with generated question
function showModal(level) {
    const { question, correctAnswer } = generateQuestion(level);
    questionText.textContent = question;

    // Show the modal and overlay
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    // Handle the "okay" button click to hide the modal
    okayButton.onclick = () => {
        const userAnswer = parseInt(numInput.value);
        if (userAnswer === correctAnswer) {
            alert('Correct! Moving to next question.');
        } else {
            alert(`Wrong! The correct answer was ${correctAnswer}`);
        }
        // Clear the input field
        numInput.value = '';

        // Close the modal and go to next level
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    };
}

// Attach event listeners to each level button
levelButtons.forEach(button => {
    button.addEventListener('click', () => {
        const level = button.id;  // e.g., 'easy1', 'medium4'
        showModal(level);
    });
});

// Close modal when overlay is clicked
overlay.addEventListener('click', () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});
