const wear = require('./wear');
const { whatToWear } = wear;
// const {whatToWear, anotherFunction} = require('./wear');

const formalAnd33 = "since its 33 degrees and its formal you should wear a suit and a coat"

describe('wear', () => {
    test('if its 33 degress and its a formal thing, whatToWear should return: since its 33 degrees and its formal you should wear a suit and a coat', () => {
        const expected = formalAnd33;
        const actual = wear.whatToWear(33, 'formal');
        expect(actual).toBe(expected);
    })
});