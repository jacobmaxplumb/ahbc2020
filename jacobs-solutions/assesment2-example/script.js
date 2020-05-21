const students = [
    { id: 1, name: 'jon', grade: 90, passing: true },
    { id: 2, name: 'jacob', grade: 80, passing: true },
    { id: 3, name: 'hillary', grade: 80, passing: true },
    { id: 4, name: 'sadie', grade: 50, passing: false },
    { id: 5, name: 'alyssa', grade: 70, passing: true },
    { id: 6, name: 'kaleb', grade: 42, passing: false },
    { id: 7, name: 'marie', grade: 60, passing: true },
    { id: 8, name: 'james', grade: 30, passing: false },
    { id: 9, name: 'jon', grade: 80, passing: true },
];

const numArray = [1, 2, 3, 4]

// function that takes an array and a grade, and returns the object that has that grade property
function findGrade(array, grade) {
    return array.find(element => element.grade === grade);
}

// function that takes an array and isPassing, and it returns a list of the objects that have passing grades
function getPassingStudents(array, isPassing) {
    return array.filter(element => element.passing === isPassing);
}

function getStudentsByName(array, name) {
    return array.filter(element => element.name === name);
}

//console.log(findGrade(students, 42));
//console.log(getPassingStudents(students, true));
console.log(getStudentsByName(students, 'jon'));