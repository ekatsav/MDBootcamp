/*
    Rock paper scissors logic:
    Either hold options in array and break from there, or assign 3 variables. If comp score is 3, it's paper etc etc.

    1. Generate comp choice. Store.
    2. Ask user their choice. Store.
    3. Switch statements for win, loss, draw conditions.
    4. Add prompt to repeat if draw?
    5. Best of three?
*/

function computerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    let optionRandom = options[Math.floor(Math.random() * options.length)];
    console.log(optionRandom);
}

function playerChoice() {
    let optionPlayer = prompt("Enter your choice: Rock, Paper, or Scissors?"); //TODO: Check for correct input, type and only the three options
    console.log(optionPlayer);
    return optionPlayer;
}

//Switch statements begin

if (computerChoice() === playerChoice()) {
    let drawAlert = alert(`The computer also chose ${optionRandom}, this is a draw!!`);
}
else if (computerChoice() === "Rock" && playerChoice() == "Scissors") {
    let lossAlert = alert(`The computer chose ${optionRandom}, you lost!`);
}
else if (computerChoice() === "Scissors" && playerChoice()== "Rock") {
    let winAlert = alert(`The computer chose ${optionRandom}, you won!`);
}