// const actualTemp = 90;
// const desiredTemp = 80;

// if (actualTemp > desiredTemp) {
//     console.log('Run A/C');
// } else if (actualTemp < desiredTemp) {
//     console.log('Run Heat')
// } else {
//     console.log('Standby');
// }


const tempC = parseInt(prompt("Enter Celcius: "));
const targetUnit = prompt("Enter in C, K, or F");
let finalTemp;

switch (targetUnit) {
    case "C":
        finalTemp = tempC;
        console.log(finalTemp);
        break;
    case "K":
        finalTemp = tempC + 273.15;
        console.log(finalTemp);
        break;
    case "F":
        finalTemp = (tempC * (9 / 5)) + 32;
        console.log(finalTemp);
        break;
    default:
        console.log("You didn't type in a C, K, or F");
}