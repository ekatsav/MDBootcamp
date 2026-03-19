/*
    Rock paper scissors logic:
    Either hold options in array and break from there, or assign 3 variables. If comp score is 3, it's paper etc etc.

    1. Generate comp choice. Store.
    2. Ask user their choice. Store.
    3. Switch statements for win, loss, draw conditions.
    4. Add prompt to repeat if draw?
    5. Best of three?
*/

const options = ["Rock", "Paper", "Scissors"];
let optionRandom = options[Math.floor(Math.random() * options.length)];
console.log(optionRandom);

//TODO: Check for correct input, type and only the three options

function gameGo(playerChoice) {
  if (optionRandom === playerChoice) {
    console.log(
      `The computer also chose ${optionRandom}, this is a draw!!`,
    );
  } else if (optionRandom === "Rock" && playerChoice == "Scissors") {
    console.log(`The computer chose ${optionRandom}, you lost!`);
  } else if (optionRandom === "Rock" && playerChoice == "Paper") {
    console.log(`The computer chose ${optionRandom}, you won!`);
  } else if (optionRandom === "Scissors" && playerChoice == "Rock") {
    console.log(`The computer chose ${optionRandom}, you won!`);
  } else if (optionRandom === "Scissors" && playerChoice == "Paper") {
    console.log(`The computer chose ${optionRandom}, you lost!`);
  } else if (optionRandom === "Paper" && playerChoice == "Rock") {
    console.log(`The computer chose ${optionRandom}, you lost!`);
  } else if (optionRandom === "Paper" && playerChoice == "Scissors") {
    console.log(`The computer chose ${optionRandom}, you won!`);
  }
}

gameGo("Scissors");

//TODO: Add in a best of three limit
