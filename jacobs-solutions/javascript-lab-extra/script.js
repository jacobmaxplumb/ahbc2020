function printSquare(width) {
    let line = '';
    for (let i = 0; i < width; i++) {
        line += '#';
    }
    for (let i = 0; i < width; i++) {
        console.log(line);
    }
}

const printTriangle = (width) => {
    let line = '';
    for (let i = 0; i < width; i++) {
        line += '#';
        console.log(line);
    }
}

console.log(Math.round(Math.random()));

function doSomething(one, two) {
    // did something function declaration
}

const doSomething = (one, two) => {
    // did something arrow function
}

const doSomething = function(one, two) {
    // did something function expression
}