// Either: 
// if 1 = Monday etc etc OR create an array and query the index

function dayOfWeekActivity(day) {
    //let weekday = false;
    if (day <= 5) {
        let weekday = "weekday";
        console.log("Today is a weekday.");
        if (day === 2) {
            console.log("On a Tuesday I go to the gym.")
        } else if (day === 4) {
            console.log("On a Thursday I go to the gym.");
        }
    } else {
        let weekday = "weekend";
        console.log("Today is the weekend.");
        if (day === 7) {
            console.log("On a Sunday I do gardening.");
        }
    }
}

dayOfWeekActivity(7);

//REFACTOR

/* Ideas:
    1. Hold weekdays in array and iterate over each index (+1).
        Drawback is it may actually be messier... if day === 1, dayName is Monday etc etc. But could attach weekday status immediately in that switch statement.
*/

//TODO: Add statement of today's day. Eg today is monday.