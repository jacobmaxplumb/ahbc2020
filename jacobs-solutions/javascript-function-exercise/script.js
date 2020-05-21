function getAreaOfCircle(radius) {
    return Math.PI * (radius * radius);
}

function getCircumferenceOfCircle(radius) {
    return 2 * Math.PI * radius;
}

function getAreaOfSquare(side) {
    return side * side;
}

function getAreaOfTriangle(base, height) {
    let area = (base * height) / 2;
    return area;
}

console.log(getAreaOfTriangle(1, 2));

let r = 15;

let areaOfCircle = getAreaOfCircle(r);
let circumferenceOfCircle = getCircumferenceOfCircle(r);

console.log(`the area of a circle with a radius of ${r} is ${areaOfCircle} and the circumference is ${circumferenceOfCircle}`);