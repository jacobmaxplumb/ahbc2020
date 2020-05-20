function whatMealIsIt(hours) {
    if (hours < 12) {
        console.log('breakfast time');
    } else {
        console.log('dinner time');
    }
}

// whatMealIsIt(12);

function findShortestWord(wordArray) {
    let shortestWord = wordArray[0];
    for (const word of wordArray) {
        if (word.length < shortestWord.length) {
            shortestWord = word;
        }
    }
    return shortestWord;
}

//const madeUpArray = ['one', 'two', 'three', 'to'];

// console.log(findShortestWord(madeUpArray));

function getIsDisivisableByTwoArray(numberArray) {
    let returnArray = []; // undefined != [] -> ['whatever value we want'] because of => returnArray.push('whatever value we want')
    for (const num of numberArray) {
        if (num % 2 === 0) {
            returnArray.push(num);
        }
    }
    return returnArray;
}

// const numArray = [1, 3, 5, 7, 2, 4];

// console.log(getIsDisivisableByTwoArray(numArray));

const peopleArray = [
    { name: 'Beyonce', profession: 'Singer', age: 38 },
    { name: 'Mae Jemison', profession: 'Astronaut', age: 63 },
    { name: 'Patrick Stewart', profession: 'Actor', age: 79 },
    { name: 'Greta Thunberg', profession: 'Activist', age: 15 }
];

function getPersonInfo(name) {
    // 1
    // for (let i = 0; i < peopleArray.length; i) {
    //     if (peopleArray[i].name === name) {
    //         return peopleArray[i];
    //     }
    // }

    // let p;
    // for (const person of peopleArray) {
    //     if (person.name === name) {
    //         p = person;
    //     }
    // }
    // return p;



    return peopleArray.find(x => x.name === name);
}

// console.log(getPersonInfo('Beyonce'));

function addNewPerson(array, name, profession, age) {
    const newPerson = { name: name, profession: profession, age: age };
    array.push(newPerson);
}

// addNewPerson(peopleArray, 'jacob', 'software developer', 29);
// console.log(peopleArray);

function deletePerson(array, name) {
    const indexOfPerson = array.indexOf(x => x.name === name);
    array.splice(indexOfPerson, 1);

    // let indOfPerson;
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i].name === name) {
    //         indOfPerson = i;
    //     }
    // }

    // array.splice(indOfPerson, 1);
}

// deletePerson(peopleArray, 'Beyonce');
// console.log(peopleArray);

function findOldestPerson(array) {
    let oldestPerson = array[0];
    for (const person of array) {
        if (oldestPerson.age < person.age) {
            oldestPerson = person;
        }
    }
    return oldestPerson;
}