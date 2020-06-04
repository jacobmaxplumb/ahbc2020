let file = require('./script');

describe('test', function() {
    test('test one', function() {
        expect(true).toEqual(true);
    })

    test('two plus two is four', function() {
        let actual = 2 + 2;
        expect(actual).toEqual(expected);
    })
})