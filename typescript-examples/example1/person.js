var personList = [
    { name: 'jacob', age: 29, hasArms: true },
    { name: 'cocoa', age: 1, hasArms: false },
    { name: 'jacob', age: 17, hasArms: true }
];
function findPerson(personsName) {
    return personList.filter(function (x) { return x.name === personsName; });
}
var peopleNamedJacob = findPerson('jacob');
var peopleNamedCocoa = findPerson('cocoa');
var peopleNamedBob = findPerson('bob');
console.log(peopleNamedBob);
