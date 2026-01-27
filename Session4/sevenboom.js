/* Create a function that takes an array of numbers and returns the word ‘Boom!’ if the number 7 appears in the array. Otherwise return ‘No booming here’.

Examples:
sevenBoom([1, 2, 3, 5, 7]) => ‘Boom!’
sevenBoom([1, 2, 3, 5, 9]) => ‘No booming here’
sevenBoom([1, 2, 3, 5, 97]) => ‘Boom!’
*/

let array1Test = [1, 2, 3, 5, 7];
let array2Test = [1, 2, 3, 5, 9];
let array3Test = [1, 2, 3, 5, 97];

// function sevenBoom(array) {
//     if (array.includes(7)) {
//         console.log("Boom!");
//         return "Boom!"; //Technically not necessary, just checking if a 7 is present on its own.
//     } else {
//         let stringifiedArray = []; //Empty array for upcoming string conversion
//         for (let i = 0; i < array.length; i++) {
//             stringifiedArray.push(array[i].toString());
//         }
//         for (let i = 0; i < stringifiedArray.length; i++) {
//             if (stringifiedArray[i].includes("7")) {
//                 console.log("Boom!");
//                 return "Boom!";
//             }           
//         }
//         console.log("No booming here!");
//         return "No booming here!"; //Must make sure this is outside of the for loop or it will only check index 0 and return negative result.
//     }
// }


function sevenBoom(array) {
    return array.some(num => num.toString().includes("7")) ? console.log("Boom!") : console.log("No booming here!");
}

sevenBoom(array3Test);


/*Notes:
    -To meet criteria 3, I would need to split each array item into a string, and check if contains '7'.
*/


/*Further:
    -Could make a second parameter for number, so it's not always 7.
        -Could use 'some' method to avoid the two loops?? ----> Done
*/
