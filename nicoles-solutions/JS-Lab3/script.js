let submissions = [
  { name: "Jane", score: 95, date: "2020-01-24", passed: true },
  { name: "Joe", score: 77, date: "2018-05-14", passed: true },
  { name: "Jack", score: 59, date: "2019-07-05", passed: false },
  { name: "Jill", score: 88, date: "2020-04-22", passed: true },
];

function addSubmission(array, newName, newScore, newDate) {
  array.push({
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  });
}
// addSubmission(submissions, "Nicole", 99, "2020-06-23");
// console.log(submissions);

function deleteSubmissionByIndex(array, index) {
  array.splice(index, 1);
}
// deleteSubmissionByIndex(submissions, 2);
// console.log(submissions);

function deleteSubmissionByName(array, name) {
  nameIndex = array.findIndex((item) => item.name === name);
  array.splice(nameIndex, 1);
}
// deleteSubmissionByName(submissions, "Jill");
// console.log(submissions);

function editSubmission(array, index, score) {
  array[index].score = score;
  array[index].passed = score >= 60;
}
// editSubmission(submissions, 0, 70);
// console.log(submissions);

function findSubmissionByName(array, name) {
  let person = array.find((item) => item.name === name);
  return person;
}
// console.log(findSubmissionByName(submissions, "Jane"));

function findLowestScore(array) {
  let lowestScore = array[0];
  array.forEach((item) => {
    if (item.score < lowestScore.score) {
      lowestScore = item;
    }
  });
  return lowestScore;
}
// console.log(findLowestScore(submissions));

function findAverageScore(array) {
  let total = 0;
  for (let item of array) {
    total += item.score;
  }
  return total / array.length;
}
// console.log(findAverageScore(submissions));

function filterPassing(array) {
  let passing = array.filter((item) => item.passed);
  return passing;
}
// console.log(filterPassing(submissions));

function filter90AndAbove(array) {
  let above90 = array.filter((item) => item.score >= 90);
  return above90;
}
// console.log(filter90AndAbove(submissions));
