// select relevant element
const colorInput = document.getElementById('color');
const shapeInput = document.getElementById('shape');
const shapeArea = document.getElementById('shape-area');
const countDisplay = document.getElementById('theCount');

// make to hold count
let count = 0;

countDisplay.innerText = count;

function makeShape() {
    // get the values of the inputs
    const color = colorInput.value;
    const shape = shapeInput.value;

    // make a shape element and set its background color and class
    const shapeElement = document.createElement('div');
    shapeElement.style.backgroundColor = color;
    shapeElement.classList.add(shape);

    // append to the shapeArea div
    shapeArea.appendChild(shapeElement);

    // add count to counter and redisplay on screen
    count++;
    countDisplay.innerText = count;
}

shapeArea.addEventListener('click', (e) => {
    e.target.remove();
    count--;
    countDisplay.innerText = count;
})