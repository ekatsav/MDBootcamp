// Write a calculator function that takes a string of numbers and performs addition with the rules:
// The function should accept 0, 1, or 2 numbers; an empty string should return an empty string.
// It should handle an unknown number of numbers but ignore numbers larger than 1000.
// Throw an exception for any negative numbers.
// Be prepared to discuss your code on return

//      PLAN
//      1. Create a function that takes in a string as an argument.
//      2. If the string is empty, return an empty string. 
//      3. If the string is not empty, split the string into an array of numbers (using comma as a separator).
//      4. Iterate over the array of numbers, converting each string to a number and adding it to an overall sum variable.
//      5. If any number is negative, throw an exception.
//      6. If any number is larger than 1000, ignore it (do not add it to the sum).
//      7. Return the overall sum.



