var arrayOfClass = ["Ryan", "Brandon", "Rebecca", "Richard", "Jessica", "Brian", "Antoinne", "Grace", "Zee", "Ibrahim"];

function sortTripSeats(array) {
    //Ibrahim feels unwell and asks if he can sit at the back of the bus. Move Ibrahim to the back.
    let arrayLength = array.length;
    // let atTheBack = array[0];
    // console.log(atTheBack);
    indexForIb = array.indexOf("Ibrahim");
    // let removedItem = 
    array.splice(0, 1, "Ibrahim");
    // console.log(array);
    // console.log(removedItem);
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
}

sortTripSeats(arrayOfClass);


//REFACTORED VER

//Finally, you can use the splice() array method. You can use this method to remove one or more element(s) from an array and replace the element(s) with any specified element.

//array.splice(index, howmany, element1, ....., elementX)

function betterSortBus(array) {

}

betterSortBus(arrayOfClass);