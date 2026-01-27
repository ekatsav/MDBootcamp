/*A child is playing with a ball on the nth floor of a tall building. 
The height h of this floor is known. He drops the ball out of the window. The ball bounces to two thirds of it's height, i.e. 0.66. His mother looks on from a window that is 1.5m from the ground.

How many times will the mother see the ball pass her window (including the time the ball falls and whilst its bouncing)?
    Assume you have the following arguments to your function:
        >h is a float that is greater than 0 
        >bounce is a float that is greater than 0 and less than 1 
        >window must be less than h
    If all of the above argument criterias are matched, return the outcome of occurrences, as an integer, otherwise return -1
*/

/*PSEUDOCODE/GAMEPLAN
        >Work out logic on paper

            >If h > 1.5 THEN go into logic, otherwise throw error
            >Each bounce is 2/3 of previous > this will be formatted by a for loop. Can also be done with a while bounceHeight >= 1.5?
            >No, has to be a while loop I think?
            >for (let i = h; i >= 1.5; ??? )
            >set bounceHeight to 0, track. Has to be higher than 1.5. If lower, exit loop
            > On first bounce, it only adds one pass, therefore bounces has to be started at 1?
            > On consequent bounces, up to height of 1.5, adds 2.
            > on last bounce (if 1.5 exactly?) only adds 1.
            > Cound not loop at all and just use switch statements? 2 ways technically, switches prob easier.
*/

    function numberOfBallPassesByWindow(height) {
    let numberOfBallBouncesObserved = -1; //To account for first instance only passing 1.5m once, fall only.
    let bounceHeight = height;
    const windowHeight = 1.5;
    if (height < windowHeight) {
        throw new Error('Height of drop must be higher than window height!');
    } while (bounceHeight > windowHeight) {
        bounceHeight = bounceHeight * 0.66;
        console.log(bounceHeight);
        numberOfBallBouncesObserved += 2;
        console.log(numberOfBallBouncesObserved);
    }
    console.log(numberOfBallBouncesObserved);
    return numberOfBallBouncesObserved;
}

numberOfBallPassesByWindow(1.6);