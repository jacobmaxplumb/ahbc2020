const convertToF = (c) => {
    return (c * (9 / 5)) + 32;
}

const convertToC = (f) => {
    return (f - 32) * (5 / 9);
}

module.exports = {
    convertToF,
    convertToC
}