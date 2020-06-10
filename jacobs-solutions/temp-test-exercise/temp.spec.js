const temp = require('./temp');

describe('temp', () => {
    test('convert to celcius function to return 45 if the f is 113', () => {
        expect(temp.convertToCelcius(113)).toBe(45);
    })

    test('convert to farenteit function to return 113 if the celius is 45', () => {
        expect(temp.convertToFarenheit(45)).toBe(113);
    })
});