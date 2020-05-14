// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.grade = [];
//     }
//     printName() {
//         console.log(this.name);
//     }
//     printAge() {
//         console.log(this.age);
//     }
// }

// const student = new Student('name1', 'age');

// class FrontEndStudent extends Student {
//     constructor(name, age, specality) {
//         super(name, age);
//         this.specality = specality;
//     }
//     printSpec() {
//         console.log(this.specality);
//     }
// }

// let student1 = new Student('name1', 23);
// let student2 = new FrontEndStudent('jacob plumb', 45, 'spec');
// // console.log(student2.hasOwnProperty("specality"))
// // console.log(student2);
// // student1.printName();

// function addGrade(grade) {
//     grades.push(grade);
// }

// function addGrades(gradeArray) {
//     gradeArray.forEach(x => {
//         grades.push(x);
//     })
// }

// let grades = [];
// console.log(grades);


class Rectangle {
    constructor(width, length) {
        newRect.width = width;
        newRect.length = length;
        console.log(j.width);
    }
    returnArea() {
        return this.width * this.length;
    }
    printArea() {
        console.log(`the area is: ${this.returnArea}`);
    }
}

let rect1 = new Rectangle(10, 10);
rect1.printArea();

class House {
    kitchenSize;
    bedRoomSize;
    isLightOn;
    constructor() {
        this.kitchenSize = null;
        this.bedRoomSize = null;
        this.isLightOn = false;
    }
    printStuff() {
        console.log('');
    }
    flipSwitch() {
        this.isLightOn = !this.isLightOn;
    }
}

let house1 = new House();


class Person {
    name;
    constructor() {
        this.name = null;
    }
    setName(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello ${this.name}`);
    }
}

const joe = new Person();
joe.sayHello();
joe.setName('Joe'); // joe.name = 'Joe'
joe.sayHello();