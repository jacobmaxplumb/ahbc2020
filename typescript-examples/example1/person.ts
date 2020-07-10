interface Person {
    name: string;
    age: number;
    hasArms: boolean;
}

let personList: Person[] = [
    {name: 'jacob', age: 29, hasArms: true},
    {name: 'cocoa', age: 1, hasArms: false},
    {name: 'jacob', age: 17, hasArms: true}
];

function findPerson(personsName: string): Person[] {
    return personList.filter(x => x.name === personsName);
}

let peopleNamedJacob = findPerson('jacob');
let peopleNamedCocoa = findPerson('cocoa');
let peopleNamedBob = findPerson('bob');

console.log(peopleNamedBob);