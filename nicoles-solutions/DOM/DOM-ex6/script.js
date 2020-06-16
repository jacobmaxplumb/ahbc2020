let gridContainer = document.querySelector(".grid-container");
let redBtn = document.querySelector(".red-btn");
let blueBtn = document.querySelector(".blue-btn");
let greenBtn = document.querySelector(".green-btn");
let clearBtn = document.querySelector(".clear-btn");

for (let i = 1; i <= 100; i++) {
  let square = document.createElement("div");
  square.classList.add("square");
  //   square.setAttribute("index", i);
  gridContainer.append(square);
}

redBtn.addEventListener("click", (event) => {
  gridContainer.addEventListener("click", (e) => {
    if (e.target.className === "square") {
      e.target.style.backgroundColor = "red";
    }
  });
});
greenBtn.addEventListener("click", (event) => {
  gridContainer.addEventListener("click", (e) => {
    if (e.target.className === "square") {
      e.target.style.backgroundColor = "green";
    }
  });
});
blueBtn.addEventListener("click", (event) => {
  gridContainer.addEventListener("click", (e) => {
    if (e.target.className === "square") {
      e.target.style.backgroundColor = "blue";
    }
  });
});
clearBtn.addEventListener("click", (e) => {
  let squares = document.querySelectorAll(".square");
  squares.forEach((item) => {
    item.removeAttribute("style");
  });
});
