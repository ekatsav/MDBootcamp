/* Test Ideas:
        1. Work out a few examples on paper to run through (exp such and such result)
        2. Is the result an int
        3. Is the result a POSITIVE INT
        4. Expect to throw error if h < 1.5 ---> Done
*/

import { numberOfBallPassesByWindow }  from './bouncingball';

//Test 1: Does function return numberOfBouncesObserved? 
// test('numberOfBallBouncesByWindow returns numberOfBallBouncesObserved', () => {
//     const numberOfBallBouncesObserved = jest.fn(() => true);
//     numberOfBallBouncesObserved();
//     expect(numberOfBallBouncesObserved).toHaveReturned();
// }) //This whole thing doesn't work - figure out why later. Can you even test a dummy return?

//Test 2: Does h < 1.5 throw an error?
test('should throw Error if height < windowHeight', () => {
    expect(() => numberOfBallPassesByWindow(1)).toThrow('Height of drop must be higher than window height!');
});

//Test 3: Expected outcome @ 10m height = 9 passes of window

//Test 4: Expected @ 15m = 11 passes of window

//Test 5: Positive int result?
// test('return must be positive int', () => {
//     expect()
// });