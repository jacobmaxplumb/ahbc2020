// 


// let personArray = [
//     { name: 'person1', age: 12 },
//     { name: 'person2', age: 12 },
//     { name: 'person3', age: 12 }
// ]

// personArray[2]

// let numbersArray = [1, 2, 3];

// function logPersonArrayAtIndex(index) {
//     console.log(personArray[2]);
// }

// function logNumberAtIndex(index) {
//     console.log(numbersArray[index]);
// }
// logPersonArrayAtIndex(2)

// logNumberAtIndex(1);

let madeUpArray = [
    { name: 'name1', score: 79, passing: true },
    { name: 'name2', score: 60, passing: false },
    { name: 'name3', score: 52, passing: true },
    { name: 'name4', score: 99, passing: false },
];

function findLowestScore(array) {
    let lowestScoreObject = array[0];
    // for (let obj of array) {
    //     if (obj.score < lowestScoreObject.score) {
    //         lowestScoreObject = obj;
    //     }
    // }
    array.forEach((obj) => {
        if (obj.score < lowestScoreObject.score) {
            lowestScoreObject = obj;
        }
    });
    return lowestScoreObject;
}

function filterPassing(array) {
    //[{ name: 'name1', score: 79, passing: true }] => [{ name: 'name1', score: 79, passing: true },{ name: 'name2', score: 60, passing: false },.....]
    let newArray = array.filter(item => item.passing === true);
    //array.find(item => item.passing === true) -> { name: 'name1', score: 79, passing: true }
    //array.filter(item => item.passing === true); -> [{ name: 'name1', score: 79, passing: true }]
    return newArray;
}


let people = [
    { name: 'jacob', age: 29, level: 100 },
    { name: 'james', age: 29, level: 100 },
    { name: 'jon', age: 30, level: 100 },
    { name: 'marie', age: 26, level: 100 },
    { name: 'michelle', age: 58, level: 100 },
    { name: 'david', age: 60, level: 100 },
    { name: 'alyssa', age: 29, level: 100 },
];