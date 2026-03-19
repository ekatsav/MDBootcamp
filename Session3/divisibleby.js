/*Iterate from numbers 1 to 500 inclusive and sum up the numbers that are divisible by ONLY 3 or 5.
Also print these numbers as well as the total at the end.*/

//Should not be divisible by both 3 and 5.
//Put it in a function so you aren't confined to only counting to 500.

function divByThreeAndFive(maxNum) {
    let divByThreeAndFiveArray = [];
    let sum = 0;
    for (let i = 0; i < maxNum; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            i++;
        } else if ( i % 3 === 0 || i % 5 === 0) {
            divByThreeAndFiveArray.push(i);
            sum += i;
            i++;
        }
    }
    console.log(divByThreeAndFiveArray);
    console.log(sum);
    return divByThreeAndFiveArray;
}

divByThreeAndFive(500);