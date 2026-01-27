

function getMiddleChars(wordToProcess) {
    let wordLength = wordToProcess.length;
    console.log(wordLength);
    let indexStartCutoff = (wordLength/2) - 1;
    let indexEndCutoff = (wordLength/2) + 1;
    let middleChars = wordToProcess.substring(indexStartCutoff, indexEndCutoff);
    console.log(middleChars);
    return middleChars;
}


getMiddleChars("Practice");