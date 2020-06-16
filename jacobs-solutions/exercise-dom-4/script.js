const moneyForm = document.getElementById("money-form");
const coinsArea = document.getElementById("coins-area");

console.log(moneyForm);
// function addMoney()

moneyForm.addEventListener("submit", (e) => {
  console.log(e);
  e.preventDefault();

  let data = new FormData(moneyForm);

  let coinCount = parseInt(data.get("count"));

  for (let i = 0; i < coinCount; i++) {
    let coin = document.createElement("div");
    coin.classList.add("coin");
    coin.innerText = data.get("coin");
    coinsArea.append(coin);
  }
});

coinsArea.addEventListener("click", (e) => {
  console.log(e);
  e.target.remove();
});
