// Par = expected strokes
// Strokes - real n of attempts

const shotNames = ["Hole in one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey" , "Quit"]; 

function golfScore(array, par, strokes) {
    if (strokes === 1) {
        console.log(`${array[0]}! Good job!`);
    } else if (strokes <= (par - 2)) {
        console.log(`${array[1]}! Good job!`);
    } else if (strokes === (par - 1)) {
        console.log(`${array[2]}! Good job!`);
    } else if (strokes === par) {
        console.log(`${array[3]}! Nice work!`);
    } else if (strokes === (par + 1)) {
        console.log(`${array[4]}! Work harder!`);
    } else if (strokes === (par + 2)) {
        console.log(`${array[5]}! Work harder!`);
    } else {
        console.log(`${array[6]}! Golf isn't for you!`);
    }
}

golfScore(shotNames, 3, 1);