//let selectedDiv = document.getElementById('jacobs-div');
// let selectedDiv = document.querySelector('#jacobs-div');
// console.log(selectedDiv);

// let ptags = document.querySelectorAll('p');
// console.log(ptags);

//document.getElementsByClassName('this-class')
// document.querySelector('.this-class');

// let element = document.getElementById('jacobs-div');
// element.classList.toggle('highlight');
// if (element.classList.contains("something1")) {
//     element.classList.toggle('highlight');
// }

// let linkElement = document.getElementById('my-link');
// console.log(linkElement.getAttribute('href'));

// linkElement.setAttribute('href', 'https://google.com');
// console.log(linkElement.getAttribute('href'));
// element.innerHTML = 'something else';
// element.classList.add('highlight');
// console.log(element);

// document.getElementById('my-link').setAttribute('href', 'https://google.com');

const element1 = document.getElementById('jacobs-div-1');
const element2 = document.getElementById('jacobs-div-2');
element1.innerHTML = "<h1>Title</h1>";
element2.innerText = "<h1>Title</h1>";

const newElement = document.createElement('h1');
newElement.innerHTML = "hello";

let numberArray = [1, 2, 3, 4, 5];
let ulElement = document.getElementById('list-one');



let newH1Element = document.createElement('h1');
newH1Element.innerText = 'Im H1';
document.body.append(newH1Element);
newH1Element.style.backgroundColor = 'yellow';
//newH1Element.remove();

//document.body.removeChild(newH1Element);


ulElement.append(document.createElement('h1'));

numberArray.forEach(element => {
    let newListItem = document.createElement('li');
    newListItem.innerText = element;
    ulElement.append(newListItem);
})


document.body.append(newElement);