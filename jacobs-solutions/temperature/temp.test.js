const temp = require('./temp');

describe('temp', () => {
    test('when the temp is 45 and the unit is C we expect convertTemp to return 113', function() {
        let expected = 113;
        let actual = temp.convertTemp(45, "C");
        expect(actual).toBe(expected);
    })
});