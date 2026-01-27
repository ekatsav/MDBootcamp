/*
Write a program that produces the Fibonacci sequence: 

0, 1, 1, 2, 3, 5, 8, 13, 21, ...
*/




function fibonacciSequence(repeats) {
    let arrayOfFibonacci = [0, 1];
    let sumOfFibonacci = 1;
    for (let i = 2; i < repeats; i++) {
        arrayOfFibonacci.push(arrayOfFibonacci[i - 1] + arrayOfFibonacci[i - 2]);
        sumOfFibonacci += arrayOfFibonacci[i];
        console.log(sumOfFibonacci);
        console.log(arrayOfFibonacci);
    }
}

fibonacciSequence(20);


// function fibonacciSequence(repeats) {
//     let arrayOfFibonacci = [];
//     let sumOfFibonacci = 0;
//     let num = 0;
//     for (let i = 0; i <= repeats - 1; i++) {
//         arrayOfFibonacci.push(num);
//         num += i;
//         sumOfFibonacci += i;
//         console.log(sumOfFibonacci);
//         console.log(arrayOfFibonacci);
//         //console.log(i);
//     }
// 


/*
Needs another counter starting at 1???

How to get the previous 2 numbers consistently. Will exist in array already, use index. Idk how to use counter method.

Is there even a way without index??
*/