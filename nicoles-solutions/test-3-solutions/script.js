let color = document.querySelector(".color-button");
color.addEventListener("click", (e) => {
  document.body.classList.toggle("show-color");
});

let counter = 1;
let boxes = document.querySelector(".boxes");
let boxButton = document.querySelector(".box-button");
boxButton.addEventListener("click", (e) => {
  let boxDiv = document.createElement("div");
  boxDiv.setAttribute("title", "I'm a box!");
  boxDiv.classList.add("box");
  boxDiv.innerText = counter;
  boxes.append(boxDiv);
  counter++;
});

boxes.addEventListener("click", (e) => {
  e.target.remove();
});
