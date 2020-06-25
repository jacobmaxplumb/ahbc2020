let form = document.querySelector("form");
let colorBtn = document.querySelector(".color-btn");
let listBtn = document.querySelector(".list-btn");
let title = document.querySelector("h1");
let list = document.querySelector(".list");

form.addEventListener("click", (e) => {
  //cant use a "submit" event listener because that targets the whole form and I wouldnt be able to target the buttons individually with the if statements
  e.preventDefault();
  let data = new FormData(form);
  if ((e.target.className = "color-btn")) {
    title.style.color = data.get("color");
    console.log(e);
  }
  if ((e.target.className = "list-btn")) {
    let item = document.createElement("li");
    item.innerText = data.get("list");
    list.append(item);
  }
});

list.addEventListener("click", (e) => {
  e.target.remove();
});
