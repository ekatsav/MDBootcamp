var arrayOfClass = ["Ryan", "Brandon", "Rebecca", "Richard", "Jessica", "Brian", "Antoinne", "Grace", "Zee", "Ibrahim"];

function sortTripSeats(array) {
    //Ibrahim feels unwell and asks if he can sit at the back of the bus. Move Ibrahim to the back.
    let arrayLength = array.length;
    indexForIb = array.indexOf("Ibrahim");
    array.splice(0, 1, "Ibrahim");
    array.splice(indexForIb, 1, "Ryan");
    //Rebecca is singing and upsetting the rest. To resolve this, move Rebecca to the front of the bus.
    let indexOfRebecca = array.indexOf("Rebecca");
    array.splice((arrayLength - 1), 1, "Rebecca");
    array.splice(indexOfRebecca, 1, "Ryan");
    //Richard and Antoinne are best friends and are talking loudly across the bus. The teacher has decided it's best to separate them. Move Richard to sit behind Antoinne.
    let indexOfAntoinne = array.indexOf("Antoinne");
    let indexOfRichard = array.indexOf("Richard");
    array.splice(indexOfAntoinne, 0, "Richard");
    array.splice(indexOfRichard, 1);
    //Ryan wants to sit at the front where he can enjoy the trip more. However, Rebecca must remain right at the front. Rearrange the array to move Ryan directly behind Rebecca.
    array.splice((arrayLength - 1), 0, "Ryan");
    let indexOfRyan = array.indexOf("Ryan");
    array.splice(indexOfRyan, 1);
    console.log(array);
    return array;
}

sortTripSeats(arrayOfClass);
