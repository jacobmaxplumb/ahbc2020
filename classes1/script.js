class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printName() {
        console.log(this.name);
    }
    printAge() {
        console.log(this.age);
    }
}

class FrontEndStudent extends Student {
    constructor(name, age, specality) {
        super(name, age);
        this.specality = specality;
    }
    printSpec() {
        console.log(this.specality);
    }
}

let student1 = new Student('name1', 23);
let student2 = new FrontEndStudent('jacob plumb', 45, 'spec');
// console.log(student2.hasOwnProperty("specality"))
// console.log(student2);
// student1.printName();

let arrayOne = ['one', 'two', 'four'];
arrayOne.unshift('zero');
arrayOne.push('five');
console.log(arrayOne);
let first = arrayOne.shift();
console.log(first);
console.log(arrayOne);

const drinks = ["Tea", "Coffee", "Soda",
    "Water"
];
drinks.splice(2, 0, "Pop");
console.log(drinks);