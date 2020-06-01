// select all relevant elements
const menuButton = document.getElementById('menu-button');
const letters = document.getElementById('letters');
const numbers = document.getElementById('numbers');
const shownLetters = document.getElementById('shownLetters');
const shownNumbers = document.getElementById('shownNumbers');
const menu = document.getElementById('menu');

// set event listeners
menuButton.addEventListener('click', buttonClicked);
letters.addEventListener('click', linkClicked);
numbers.addEventListener('click', linkClicked);

function runFunction(event) {
    console.log(event);
}

function buttonClicked(event) {
    menu.classList.toggle('hide');
}

function linkClicked(event) {
    event.preventDefault();
    console.log(event);
    if (event.target.text === "Letters") {
        console.log(event.target);
        shownLetters.style.display = 'block';
        shownNumbers.style.display = 'none';
    } else if (event.target.id === "numbers") {
        shownLetters.style.display = 'none';
        shownNumbers.style.display = 'block';
    }
}