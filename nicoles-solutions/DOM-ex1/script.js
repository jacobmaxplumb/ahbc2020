//You can set the selector to a variable if you will be using it multiple times or...see line 14
let growMe = document.querySelector("#grow-me");
let shrinkMe = document.querySelector("#shrink-me");
let li = document.querySelectorAll("li");
let link = document.querySelector(".link");
function main() {
  growMe.classList.add("big");
  shrinkMe.classList.remove("big");
  li.forEach((item) => {
    console.log(item.textContent);
  });
  link.setAttribute("href", "https://www.example.com");
  link.innerText = "somewhere";
  document.querySelector("#hide-me").style.display = "none"; //can do it all in one line if you're only going to make one edit to this element, id, class etc.
  document.querySelector("#show-me").style.display = "block";
  document.querySelector("h1").innerText =
    "Welcome, " + document.querySelector("#name").value; //same here, you can do it all in one step, sometimes it can look a bit confusing if you do that though.
}
