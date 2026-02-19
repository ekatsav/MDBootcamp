
//      GENERATE AN ARRAY OF SEASON SCORES

//      PLAN
//  Function which outputs 38 lots of scores (as strings) in X:Y format. The scores can range from 0 to 3. X is Home score (which you want to keep track of), Y is Away score (enemy teams)
//      1. Create a random number generator that ranges from 0 to 3.
//      2. Create an empty placeholder array.
//      3. Create a for loop (repeating 38 times).
//      4. Each loop, create a string of two randomly generated scores in the 'X:Y' format.
//      5. Append the score strings to your array.
//      6. Return array. For extra cred(??) we *could* export the arrays into a .json file for storage, and pass that into the tally function instead of the function itself.

function scoreArrayGenerator() {
    let seasonScoreArray = [];
    for (let i = 0; i < 38; i++) {
        let scoreEntry = `${Math.floor((Math.random() * 4 ))}:${Math.floor((Math.random() * 4 ))}`;
        seasonScoreArray.push(scoreEntry);
    }
    return seasonScoreArray;
}

// scoreArrayGenerator();

//      GENERATE AN OVERALL SCORE FOR THE HOME TEAM 

//      PLAN
//      1. Iterate over the array, which you will pass in as an argument to the new function.
//      2. Create an 'empty' teamScore variable.
//      3. For the length of the array:
//          Take the index[0] of the string and compare if it is larger, smaller, or equal to index[2] (Points 3, 0 and 1).
//          Append the resulting points to your teamScore variable.

function seasonScoreTally(array) {
    console.log(array);
    let teamScore = 0;
    for (let i = 0; i < array.length; i++) {
        let homeScore = array[i].charAt(0);
        let awayScore = array[i].charAt(2);
        if (homeScore > awayScore) {
            teamScore += 3;
        } else if (homeScore == awayScore) {
            teamScore++;
        }
    }
    console.log(teamScore);
    return teamScore;
}

seasonScoreTally(scoreArrayGenerator());