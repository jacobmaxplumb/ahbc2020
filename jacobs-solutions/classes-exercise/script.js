class GradeBook {
    constructor() {
        this.grades = [];
    }

    printAverage() {
        let total = 0;
        const count = this.grades.length;
        this.grades.forEach(grade => {
            total += grade;
        })
        const average = total / count;
        console.log(`The average is: ${average}`);
    }

    addGrade(grade) {
        this.grades.push(grade);
    }
}

let gradeBook = new GradeBook();
gradeBook.addGrade(90);
gradeBook.addGrade(100);
gradeBook.addGrade(90);
gradeBook.addGrade(80);
gradeBook.printAverage();

class Teacher {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

let teacher1 = {
    id: 1,
    name: 'teacher 1'
}

let teacher2 = {
    id: 2
}

let teacherArray = [
    { id: 1, name: 'teacher 1' },
    new Teacher(2, 'teacher 2')
];

let object1 = {
    id: 1,
    name: 'something'
}

let object2 = {
    id: 2,
    name: 'something else'
}

let objectArray = [object1, object2];

let oArray = [
    { id: 1, prop1: 'something', isCool: true },
    { id: 1, prop1: 'something', isCool: true },
    { id: 1, prop1: 'something', isCool: true }
]