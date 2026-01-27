//A colony of 800 puffins is increasing at the rate of 4% annually. When will their population first exceed 1200?

const growthRate = 0.04; // 4%
let population = 800; // initial population
let year = 0; // zero, i.e. present time
while (population <= 1200) {
    let tempPopulation = population * (1 + growthRate);
    population = tempPopulation;
    year++;
}
console.log(`Population first goes over 1200 after ${year} years`);
console.log(`Population is: ${population}`);

//Ask the user for input and continue until the user decides to exit or provides an answer that the program requires to exit

// program to find the sum of positive numbers
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum
let sum = 0;
// take input from the user
let number = parseInt(prompt('Enter a number: '));
while(number >= 0) {
    sum += number; // add all positive numbers
    // take input again if the number is positive
    number = parseInt(prompt('Enter a number: '));
}
console.log(`The sum is ${sum}.`); // display the sum

