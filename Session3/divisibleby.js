/*Iterate from numbers 1 to 500 inclusive and sum up the numbers that are divisible by ONLY 3 or 5.
Also print these numbers as well as the total at the end.*/

let divByThreeAndFive = [];
let sum = 0;

for (let i = 0; i < 501; i++) {
    if (i % 2 != 0 && i % 7 != 0 || i % 3 === 0 || i % 5 === 0) {
        divByThreeAndFive.push(i);
        sum += i;
        i ++;
    } 
}

console.log(divByThreeAndFive);
console.log(sum);
