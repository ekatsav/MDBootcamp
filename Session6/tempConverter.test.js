//TDD TESTS COME FIRST

const temperatureConverter = require('./tempConverter.js');

describe('Temperature Converter', () => {
    //First test - there is a return value to the function
    it('Should return a value', () => {
        expect(temperatureConverter("30", "c")).toBeTruthy();
    });
    //Second Test(s group)- When given a numerical value and the scale of OG value, a converted value is output
    it('Should return an accurate converted value when given a temperature', () => {
        expect(temperatureConverter("30", "c")).toEqual(86);
    });
})

