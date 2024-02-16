let playerName = prompt("Please enter a username:");

while (playerName.length >= 10) {
    playerName = prompt("Please enter a name fewer than 10 characters.");
}

let playerConfirmPlay = confirm(`Hi, ${playerName}! Would you like to play?`);

let gamesPlayed = 0;
let playerWin = 0;
let playerLoss = 0;
let draw = 0;

while(playerConfirmPlay === true) {

    let playerMove = prompt("Please type in rock, paper or scissors.");
    let randomNumber = Math.floor(Math.random() * 3);
    let computerMove;

    if (randomNumber === 0) {
        computerMove = "rock";
    } else if (randomNumber === 1) {
        computerMove = "paper";
    } else {
        computerMove = "scissors";
    }

    function gameRound(playerMove, computerMove) { 
        playerMove = playerMove.toLowerCase();
        if (playerMove === computerMove) {
            alert("It's a draw!");
            draw++;
        } else if (playerMove === "rock" && computerMove === "paper") {
            alert("You lose!");
            playerLoss++;
        } else if (playerMove === "rock" && computerMove === "scissors") {
            alert("You win!");
            playerWin++;
        } else if (playerMove === "paper" && computerMove === "rock") {
            alert("You win!");
            playerWin++;
        } else if (playerMove === "paper" && computerMove === "scissors") {
            alert("You lose!");
            playerLoss++;
        } else if (playerMove === "scissors" && computerMove === "rock") {
            alert("You lose!");
            playerLoss++;
        } else if (playerMove === "scissors" && computerMove === "paper") {
            alert("You win!");
            playerWin++;
        }
    }

    gameRound(playerMove, computerMove);
    gamesPlayed++;
    alert(`${playerName}'s Game Stats \nGames played: ${gamesPlayed} \nDraws: ${draw} \nWins: ${playerWin} \nLosses: ${playerLoss}`);
    playerConfirmPlay = confirm ("Would you like to play again?");

}