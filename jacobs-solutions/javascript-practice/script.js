// takes two integers and returns the larger
function getTheLargerOfTwoNumbers(one, two) {
    if (one > two) {
        return one;
    }
    return two;
}
//console.log(getTheLargerOfTwoNumbers(11, 5));


// takes 3 numbers and display the sign (- or +) of the product
function findTheSign(one, two, three) {
    // want to get product
    const product = one * two * three;
    if (product < 0) {
        alert('the sign is -');
    } else {
        alert('the sign is +');
    }
}
// findTheSign(1, 2, 3);


// takes an array of values and returns the largest number
function biggestNumber(a) {
    let biggest = a[0]; // biggest = 6
    for (let x of a) {
        // x = 6
        if (x > biggest) {
            biggest = x;
        }
    }
    alert(biggest);
}
// biggestNumber([1, 2, 4, 6, 3]);


// make a loop go through 0 to 15 and in that loop call a function that prints and odd or even number
for (let i = 0; i < 16; i++) {
    // oddOrEven(i);
}

function oddOrEven(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even.`);
    } else {
        console.log(`${number} is odd.`);
    }
}


// get an array of grades, one function is going to return the average (return) and
// another function is going to display the grade (dislay the number and letter grade)
let grades = [80, 67, 90, 100, 85];
let average = getAverage(grades);
displayGrade(80);

// this function takes an array of grades, adds them up, then divides them by the length
function getAverage(grades) {
    /* 
    add all the grade starting out with the total being 0,
    everytime we loop through the array we add that number to the total
    return the total / the length of the array
    */
    let total = 0;
    for (let grade of grades) {
        total = total + grade;
    }
    return total / grades.length;
}

// this function takes in the average, then displays the result to the console based off the conditional
function displayGrade(average) {
    if (average < 60) {
        console.log(`The average is ${average} which is an F`);
    } else if (average < 70) {
        console.log(`The average is ${average} which is an D`);
    } else if (average < 80) {
        console.log(`The average is ${average} which is an C`);
    } else if (average < 90) {
        console.log(`The average is ${average} which is an B`);
    } else if (average < 100) {
        console.log(`The average is ${average} which is an A`);
    } else {
        console.log('its weird you got a different grade');
    }
}