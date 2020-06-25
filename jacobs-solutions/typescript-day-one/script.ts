// const greeter = (person: Person): void => {
//     console.log(person.firstName);
// }

// const person: Person = {
//     firstName: 'jacob',
//     lastName: 'plumb'
// }

// greeter(person);

class Person {
    private lastName: string;
    private firstName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName;
    }
}

const myFunction = (variable: Person);
