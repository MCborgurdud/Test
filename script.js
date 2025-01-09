document.getElementById('submitGuess').addEventListener('click', function() {
    let userGuess = parseInt(document.getElementById('userGuess').value);
    let answer = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    let resultText = document.getElementById('result');

    if (userGuess < 1 || userGuess > 10 || isNaN(userGuess)) {
        resultText.textContent = "Please pick a number within the range of 1 to 10.";
        return;
    }

    if (userGuess === answer) {
        resultText.textContent = `You won! The number was ${answer}.`;
    } else {
        resultText.textContent = `Sorry, the correct number was ${answer}.`;
    }

    document.getElementById('submitGuess').style.display = 'none';
    document.getElementById('playAgain').style.display = 'inline';
});

document.getElementById('playAgain').addEventListener('click', function() {
    document.getElementById('userGuess').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('submitGuess').style.display = 'inline';
    document.getElementById('playAgain').style.display = 'none';
});
