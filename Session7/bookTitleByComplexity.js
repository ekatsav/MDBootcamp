// You have been asked to help a librarian sort a list of book titles. The library wants to order the books by the "complexity" of their titles. The complexity is calculated by the sum of the ASCII values of each character in the title. If two titles have the same complexity, they should be sorted alphabetically.

// For example, given the following book titles:

// "The Catcher in the Rye", "To Kill a Mockingbird", "1984", "Moby Dick"

// "The Catcher in the Rye" has a complexity of 2091
// "To Kill a Mockingbird" has a complexity of 2030
// "1984" has a complexity of 200
// "Moby Dick" has a complexity of 816
// The sorted output should be:

// "1984", "Moby Dick", "To Kill a Mockingbird", "The Catcher in the Rye"

// Write a function that orders book titles based on their complexity.

//      PLAN
//      1. Iterate over the length of the array containing the book titles. 
//      2. Per entry, create a second array which splits the book titles into singular characters.
//      3. Iterate over that array, adding each ASCII value to an overall score.
//      4. Then evaluate whether the ASCII value of the array entry is larger than the entry at i[0]. If yes, check i[1] etc.

var unsortedArray = ["The Catcher in the Rye", "To Kill a Mockingbird", "1984", "Moby Dick"];

function bookByTitleComplexitySort(array) {
    let sortedTitleArray = [];
    let sortedComplexityArray = [];
    for (let i = 0; i < array.length; i++) {
        let currentBookTitle = array[i];
        let overallAsciiValueOfCharacters = 0;
        for (let a = 0; a < currentBookTitle.length; a++) {
            overallAsciiValueOfCharacters += currentBookTitle.charCodeAt(a);
        }
        let insertIndex = 0;
        while (insertIndex < sortedComplexityArray.length && overallAsciiValueOfCharacters > sortedComplexityArray[insertIndex]) {
            insertIndex++;
        }
        sortedComplexityArray.splice(insertIndex, 0, overallAsciiValueOfCharacters);
        sortedTitleArray.splice(insertIndex, 0, currentBookTitle);
    }
    console.log(sortedTitleArray);
    return sortedTitleArray;
}

bookByTitleComplexitySort(unsortedArray);
