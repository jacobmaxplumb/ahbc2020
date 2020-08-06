function getQuote() {
    const quotes = [
        'If your not first, your last',
        'Quote2',
        'Quote3'
    ];
    const quoteIndex = Math.floor(Math.random() * quotes.length); 
    // 0 to 1 Math.random()
    // 0.3 * 3 = 0.9
    // Math.floor(0.9) = 0
    // 0.4 * 3 = 1.2
    // Math.floor(1.2) = 1
    // 0.9 * 3 = 2.7
    // Math.floor(2.7) = 2
    return quotes[quoteIndex];
}

// module.exports = getQuote - this way =
// const randomQuote = require('./random-quote');
// randomQuote() - return on of the quotes

module.exports = { // this way =
    getQuote
}
// const randomQuote = require('./random-quote');
// randomQuote.getQuote()