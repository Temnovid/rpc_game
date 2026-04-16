function getComputerChoice() {
    let n = Math.floor(Math.random() * 3)
    switch (n) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors"
    }
}

function getHumanChoice() {
    return prompt("Rock, Paper or Scissors?:");
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toUpperCase();
        let displayChoice = humanChoice.charAt(0) + humanChoice.slice(1).toLowerCase();
        resultString = "";
        let draw = "It's a draw!";
        let loss = `You lose! ${computerChoice} beats ${displayChoice}!`;
        let win = `You won! ${displayChoice} beats ${computerChoice}!`;
        switch (humanChoice) {
            case "ROCK":
                if (computerChoice === "Rock") {
                    resultString = draw;
                } else if (computerChoice === "Paper") {
                    resultString = loss;
                    computerScore++;
                } else {
                    resultString = win;
                    humanScore++;
                }
                break;
            case "PAPER":
                if (computerChoice === "Rock") {
                    resultString = win;
                    humanScore++;
                } else if (computerChoice === "Paper") {
                    resultString = draw;
                } else {
                    resultString = loss;
                    computerScore++;
                }
                break;
            case "SCISSORS":
                if (computerChoice === "Rock") {
                    resultString = loss;
                    computerScore++;
                } else if (computerChoice === "Paper") {
                    resultString = win;
                    humanScore++;
                } else {
                    resultString = draw;
                }
                break;
        }
        console.log(resultString);
    }
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (computerScore > humanScore) {
        console.log(`Computer wins with ${computerScore} points.`);
    } else if (computerScore < humanScore) {
        console.log(`Human wins with ${humanScore} points.`);
    } else {
        console.log(`It's a draw, everyone has ${humanScore} points.`)
    }
}

playGame();
