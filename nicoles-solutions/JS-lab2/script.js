const randomDamage = () => {
  return Math.floor(Math.random() * 10) + 1;
};
const chooseOption = (opt1, opt2) => {
  let randNum = Math.floor(Math.random() * 2);
  return randNum === 0 ? opt1 : opt2;
};
const attackPlayer = function (health) {
  return health - randomDamage();
};
const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};
const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};
const isDead = (health) => {
  return health <= 0;
};

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    let attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      isDead(player1Health);
      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}
// fight("Nicole", "Mitch", 100, 100);

// const randNum = () => {
//   return Math.floor(Math.random() * 10) + 1;
// };

// Math.floor(Math.random() * 2);
// Math.random(); //generates a random num between 0 and 1
// console.log(attackPlayer(100));

//function
//declare a variable

const makeSquare = (width) => {
  let hash = "";
  for (let i = 0; i < width; i++) {
    hash = hash + "#";
  }
  for (let i = 0; i < width; i++) {
    console.log(hash);
  }
};
const makeTriangle = (width) => {
  hash = "";
  for (let i = 0; i < width; i++) {
    hash = hash + "#";
    console.log(hash);
  }
};
console.log(makeSquare(4));
console.log(makeTriangle(3));
