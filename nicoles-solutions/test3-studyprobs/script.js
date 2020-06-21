//classList.add() adds a class to existing class, keeps any others already there
//className = wipes out any existing classes and replaces them

let form = document.querySelector(".form-container");
let shapes = document.querySelector(".shape-container");
let circle = document.querySelector(".circle");
let square = document.querySelector(".square");
let shapeBtn = document.querySelector(".make-shape");
let colorBtn = document.querySelector(".toggle-color");

form.addEventListener("click", (e) => {
  e.preventDefault();
  let data = new FormData(form);
  console.log(e);
  if (e.target.className === "make-shape") {
    if (data.get("shape") === "circle") {
      let circle = document.createElement("div");
      circle.classList.add("circle");
      circle.style.backgroundColor = data.get("color");
      circle.innerText = data.get("word");
      shapes.append(circle);
    }
    if (data.get("shape") === "square") {
      let square = document.createElement("div");
      square.classList.add("square");
      square.style.backgroundColor = data.get("color");
      square.innerText = data.get("word");
      shapes.append(square);
    }
  } else if (e.target.className === "toggle-color") {
    let circles = document.querySelectorAll(".circle");
    let squares = document.querySelectorAll(".square");
    circles.forEach((item) => {
      item.classList.toggle("no-color");
    });
    squares.forEach((item) => {
      item.classList.toggle("no-color");
    });
  }
});
shapes.addEventListener("click", (e) => {
  e.target.remove();
});
