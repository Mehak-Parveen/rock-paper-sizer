const wordList = ["mehak", "mayank", "golu", "khushboo", "rehan"];
const hangmanStages = [
    `\n+---+\n|   |\n    |\n    |\n    |\n    |\n==========\n`,
    `\n+---+\n|   |\nO   |\n    |\n    |\n    |\n==========\n`,
    `\n+---+\n|   |\nO   |\n|   |\n    |\n    |\n==========\n`,
    `\n+---+\n|   |\nO   |\n/|  |\n    |\n    |\n==========\n`,
    `\n+---+\n|   |\nO   |\n/|\\ |\n    |\n    |\n==========\n`,
    `\n+---+\n|   |\nO   |\n/|\\ |\n/   |\n    |\n==========\n`,
    `\n+---+\n|   |\nO   |\n/|\\ |\n/ \\ |\n    |\n==========\n`
];

let chosenWord, wordDisplay, guessedLetters, lives, gameOver;

function initGame() {
    chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
    wordDisplay = "_".repeat(chosenWord.length);
    guessedLetters = [];
    lives = 6;
    gameOver = false;

    document.getElementById("wordDisplay").innerText = wordDisplay.split("").join(" ");
    document.getElementById("hangmanStage").innerText = hangmanStages[0];
    document.getElementById("message").innerText = "";

    let lettersHTML = "";
    for (let i = 97; i <= 122; i++) { // ASCII values for a-z
        lettersHTML += `<button class="letter-btn" onclick="guessLetter('${String.fromCharCode(i)}')">${String.fromCharCode(i)}</button>`;
    }
    document.getElementById("letters").innerHTML = lettersHTML;
}

function guessLetter(letter) {
    if (gameOver || guessedLetters.includes(letter)) return;

    guessedLetters.push(letter);

    if (chosenWord.includes(letter)) {
        let newDisplay = "";
        for (let i = 0; i < chosenWord.length; i++) {
            newDisplay += guessedLetters.includes(chosenWord[i]) ? chosenWord[i] : "_";
        }
        wordDisplay = newDisplay;
        document.getElementById("wordDisplay").innerText = wordDisplay.split("").join(" ");
    } else {
        lives--;
        document.getElementById("hangmanStage").innerText = hangmanStages[6 - lives];
    }

    checkGameStatus();
}

function checkGameStatus() {
    if (!wordDisplay.includes("_")) {
        document.getElementById("message").innerText = "🎉 You Win!";
        gameOver = true;
    } else if (lives === 0) {
        document.getElementById("message").innerText = `😢 You Lose! The word was: ${chosenWord}`;
        gameOver = true;
    }
}

function resetGame() {
    initGame();
}

initGame();
