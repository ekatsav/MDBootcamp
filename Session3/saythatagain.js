/*Given a string and non-negative number, return a larger string that is N copies of the original string.
    Refer to yesterday's material --- append method equivalent maybe?
*/

let text = 'hellauurruurururur';
let times = 5;
// the result should be 'hellohellohello'

function textRepeater(text, repeats) {
    let repeatedArray = [];
    let arrayToText;
    for (let i = 0; i <= repeats - 1; i++) {
        repeatedArray.push(text);
        arrayToText = repeatedArray.join("");
    }
    console.log(arrayToText);
    return arrayToText;
}

textRepeater(text, times);