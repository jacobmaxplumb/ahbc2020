// let value = 6;

// if (value === 9) {
//     console.log('yay');
// }

// let name = "Adam";
// let tired = false;
// if (name === "Adam" && !tired && false) {
//  console.log("Adam is not tired");
// } else {
//  console.log("Something is not right...");
// }
// const number1 = 2;
// const string1 = prompt("get user input");
// let anotherNumber;

// if (number1 === 2) {
//     anotherNumber = 3;
//     console.log('onething');
//     // solve the meaning life
// } else {
//     anotherNumber = 0;
// }

// anotherNumber = number1 === 2 ? 3 : 0;


// const state = prompt("enter a state");
// const stateCapitalized = state.toLowerCase();
// console.log(stateCapitalized);

// switch (state) {
//     case "michigan":
//     case "ohio":
//     case "new york":
//         console.log('the user type goodbye');
//         break;
//     case "hello":
//         console.log("the user typed in hello");
//         break;
//     default:
//         console.log('log the default');
// }

// Loops (i++ is the same as i = i + 1, i-- is the same as i = i - 1)
// for (let i = 1; i < 11; i = i + 1) {
//     console.log(i);
// }

// for (let i = 1; i < 11; i++) {
//     if (i === 3) {
//         break;
//     }
//     console.log(i);
// }

// let isWantingToPlay;
// do {
//     let response = prompt('enter 1 to play new game, enter 2 to contiue, enter 3 to quit');
//     if (response === '3') {
//         isWantingToPlay = false;
//     } else {
//         isWantingToPlay = true;
//     }
// } while (isWantingToPlay);

// for while making someone enter a number;
// let number = 0;
// do {
//     number = parseInt(prompt('Enter a number, enter 0 to quit'));
// } while (number != 0);

let string1 = 'string value';
let stringArrary = ['string1', 'string2', 'string3'];
let product = { id: 1, name: 'eggs' };
let product2 = { id: 2, name: 'milk' };

let products = [product, product2];

for (let p of products) {
    console.log(p.id);
}

products.forEach(p => {
    console.log(p);

});

// for (let i = 0; i < stringArrary.length; i++) {
//     console.log(stringArrary[i]);
// }

// for (let stringValue of stringArrary) {
//     console.log(stringValue);
// }

let thing = {
    id: 2,
    name: 'someting',
    location: 'detroit'
};

for (let prop in thing) {
    console.log(prop);
}