function getMiddleChars(wordToProcess) {
    let wordLength = wordToProcess.length;
    console.log(wordLength);
    let indexStartCutoff = (wordLength/2) - 1;
    let indexEndCutoff = (wordLength/2) + 1;
    let middleChars = wordToProcess.substring(indexStartCutoff, indexEndCutoff);
    console.log(middleChars);
    return middleChars;
}

getMiddleChars("Potato");

//Works as expected for words with an even length.
//As expected, but not as desired for words with an odd length - should take just 1 letter from middle ideally.

function betterGetMiddleChars(wordToProcess) {
    let wordLength = wordToProcess.length;
    if (wordLength % 2 === 0) {
        let indexStartCutoff = (wordLength/2) - 1;
        let indexEndCutoff = (wordLength/2) + 1;
        let middleChars = wordToProcess.substring(indexStartCutoff, indexEndCutoff);
        console.log(middleChars);
        return middleChars;
    } else {
        let indexStartCutoff = Math.floor(wordLength/2);
        console.log(indexStartCutoff);
        let middleChar = wordToProcess.charAt(indexStartCutoff);
        console.log(middleChar);
        return middleChar;
    }
}

betterGetMiddleChars("Seventeen");