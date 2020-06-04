function convertToCelcius(tempInF) {
    return (tempInF - 32) * (5 / 9);
}

function convertToFarenheit(tempInC) {
    return (tempInC * (9 / 5)) + 32;
}

module.exports = {
    convertToCelcius,
    convertToFarenheit
}