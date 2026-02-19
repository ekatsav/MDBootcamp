// Write a program that calculates the number of points obtained by a football team over a given season.
// A score is denoted by “X:Y” where X is the home score and Y is the away score. Assume we played our games at home all season.
// Input: an array of 38 strings.
// All score combinations should be covered.
// Points are tallied as such:
//  Home Score > Away Score = 3 points
//  Home Scoare < Away Score = 0 points
//  Home Score = Away Score = 1 point

//      PLAN 
// Split into two functions - one to generate the randomised score array, and one to actually tally the score of that generated array.
// Alternatively, pass the array function directly into the score tally function
// 
