function sayHello() {
    console.log('hello');
}

const myNumber = 1;

module.exports = {
    sayHello,
    myNumber
};

// module.exports = {
//     sayHello: sayHello,
//     myNumber: myNumber
// }

// module.exports = {
//     sayHelloFunction: () => {
//         console.log('hello was called')
//     },
//     add: (one, two) => {
//         return one + two
//     },
//     myNumber: 4
// }