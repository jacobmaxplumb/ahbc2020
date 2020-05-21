function findSeason(date) {
  if (date === 12 && date >= 1 && date <= 2) {
    console.log(`The season is Winter`);
  } else if (date >= 3 && date <= 5) {
    console.log(`The season is Spring`);
  } else if (date > 5 && date < 9) {
    console.log(`The season is Summer`);
  } else if (date > 9 && date < 12) {
    console.log(`The season is Fall`);
  }
}
function findLongestWord(wordList) {
  longestWord = "";
  for (let word of wordList) {
    if (word.length > longestWord.length) {
      longestWord = word;
    } else {
      longestWord;
    }
  }
  return longestWord;
}
function hasFourCharacters(string) {
  if (string.length === 4) {
    return true;
  } else {
    return false;
  }
}
function countLetterE(string) {
  numE = 0;
  for (let char of string) {
    if (char === "e" || char === "E") {
      numE++;
    }
  }
  return `There are ${numE} e's in ${string}`;
}
let words = ["Nicole", "Michigan", "shoe", "travel", "Switzerland"];
findSeason(6);
console.log(findLongestWord(words));
console.log(hasFourCharacters("home"));
console.log(countLetterE("Nicole Alexandra"));

let cityInfo = [
  { city: "Bangkok", country: "Thailand", population: 8250000 },
  { city: "Washington DC", country: "USA", population: 702500 },
  { city: "Paris", country: "France", population: 2150000 },
  { city: "Mumbai", country: "India", population: 18400000 },
];
console.log(cityInfo[2].country);

function getCityInfo(array, city) {
  let object;
  array.forEach((info) => {
    if (info.city === city) {
      object = info;
    }
  });
  return object;
}
function addNewCity(array, city, country, pop) {
  array.push({ city: city, country: country, population: pop });
}
function deleteCity(array, city) {
  array.forEach((item, index) => {
    if (item.city === city) {
      array.splice(index, 1);
    }
  });
}
function findLargestCity(array) {
  let largestCity = array[0];
  array.forEach((item) => {
    if (item.population > largestCity.population) {
      largestCity = item;
    } else {
      largestCity;
    }
  });
  return largestCity;
}
console.log(getCityInfo(cityInfo, "Washington DC"));
addNewCity(cityInfo, "Detroit", "USA", 700000);
deleteCity(cityInfo, "Paris");
console.log(cityInfo);
console.log(findLargestCity(cityInfo));
