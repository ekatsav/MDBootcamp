// Write a program that:
// Returns "fizz" if the number is a multiple of 3
// Returns "buzz" if it’s a multiple of 5
// Returns "fizzbuzz" if the number is divisible by both 3 and 5.
// If the number is not divisible by either 3 or 5 then it should just return the number itself.

// Added challenge: Enhance your program to print out the outcome if provided a range of numbers 1 to 20 (i.e. a min and a max). For example it should print:
// 1 2 fizz 4 buzz fizz ...

//      PLAN
//      1. Loop over given num of iterations in a for loop
//      2. If and if elses to check if each iteration meets criteria (0 remainder)
//      3. Check fizzbuzz first, as it's inclusive of both

function fizzBuzz(num) {
    for(let i = 1; i <= num; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            console.log("FizzBuzz");
        }
        else if(i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}

fizzBuzz(20);