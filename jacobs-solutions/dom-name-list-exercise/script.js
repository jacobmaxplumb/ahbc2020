const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const nameList = document.getElementById('name-list');
let number = 1;

function addNameToList() {
    const liElement = document.createElement('li');
    liElement.innerText = `${number}. ${firstName.value} ${lastName.value}`;
    liElement.classList.add('yellow');
    liElement.setAttribute('lang', 'en')
    nameList.appendChild(liElement);
    number++;
}

nameList.addEventListener('click', (event) => {
    event.target.remove();
})