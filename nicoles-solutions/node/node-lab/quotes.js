let quotes = [
  "Never go to bed mad. Stay up and fight.",
  "When life gives you lemons, squirt someone in the eye.",
  "If a book about failures doesn't sell, is it a success?",
  "According to most studies, peoples number one fear is public speaking. Number two is death. Death is number two. Does that seem right? That means to the average person, if you have to go to a funeral, youre better off in the casket than doing the eulogy.",
  "Not sure which is harder on a relationship: sharing a dresser for three years or sharing an iPhone charger for one day.",
  "Whoever established the high road and how high it should be should be fired.",
];
function randomQuote(array) {
  return array[Math.floor(Math.random() * array.length)];
}

module.exports = { randomQuote, quotes };
