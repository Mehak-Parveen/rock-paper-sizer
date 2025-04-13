function playGame(userChoice) {
    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = Math.floor(Math.random() * 3);  // Random choice between 0-2

    // Display User and Computer choices
    document.getElementById("userChoice").innerText = `You chose: ${choices[userChoice]}`;
    document.getElementById("computerChoice").innerText = `Computer chose: ${choices[computerChoice]}`;

    let result = "";

    // Determine winner
    let score = 0;
    while(true){
        if (userChoice === computerChoice) {
            result = "It's a tie! 🤝";
        } else if (
            (userChoice === 0 && computerChoice === 2) || // Rock beats Scissors
            (userChoice === 1 && computerChoice === 0) || // Paper beats Rock
            (userChoice === 2 && computerChoice === 1)    // Scissors beats Paper
        ) {
            result = "You win! 🎉";
            score +=1;
        } else {
            result = "Computer wins! 😢";
        }

        // Display Result
        document.getElementById("result").innerText = result;
        // document.getElementById("score").innerText = score;
    }
}
// function reset_score(){
//     let res_score = 0;
//     document.getElementById("reset").innerText = res_score;
    

// }
