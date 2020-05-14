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