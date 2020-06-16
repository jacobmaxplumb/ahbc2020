const h1TitleElement = document.getElementById('title');
const colorInputElement = document.getElementById('title-color');
const listItemInputElement = document.getElementById('list-item');
const itemsListElement = document.getElementById('items-list');

function changeTitleColor() {
    // got the color from the color input element
    const color = colorInputElement.value;

    // changed the h1 elements style of color to that color
    h1TitleElement.style.color = color;
}

function addListItem() {
    const listInputValue = listItemInputElement.value;
    const listElement = document.createElement('li');
    // const myNumber = 1 + parseFloat(listInputValue);
    // console.log(myNumber);
    listElement.innerText = listInputValue;
    // listElement.addEventListener('click', (event) => {
    //     listElement.remove();
    // })
    listElement.classList.add('make-pointer');
    itemsListElement.appendChild(listElement);
}

itemsListElement.addEventListener('click', (event) => {
    event.target.remove();
})