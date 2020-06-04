const temp = require('./temp');

describe('temp.js', () => {
    test('convertToF will return 113 when the celius is 45', () => {
        const expected = 113;
        const actual = temp.convertToF(45);
        expect(actual).toBe(expected);
    })

    test('convertToC will return 45 when the F is 113', () => {
        expect(temp.convertToC(113)).toBe(45);
    })
});