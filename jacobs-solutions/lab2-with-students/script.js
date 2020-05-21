"use strict";

// function to return random damage
const randomDamage = () => {
    let result = Math.floor((Math.random() * 10) + 1);
    return result;
}


// this randomizes one to two options put in as arguments
const chooseOption = (opt1, opt2) => {
    const randNum = Math.round(Math.random());
    return randNum === 0 ? opt1 : opt2;
}

{
    let variable = 'something';
}

// its going to take in a health and its going to subtract that from
// whatever is returned from the randomDamage function
const attackPlayer = function(health) {
    return health - randomDamage();
}

// print out a players health to the console window
const logHealth = (player, health) => {
    console.log(`${player} health: ${health}`);
}

// is going to log that the winner defeated to loser to the console window
const logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
}

const isDead = (health) => {
        if (health <= 0) {
            return true;
        }
        return false;
    }
    // this is going to be the function that runs the game
function fight(player1, player2, player1Health, player2Health) {
    const name = 'name';
    // need a loop that continuous until break is hit
    while (true) {
        // setting the attacker
        const attacker = chooseOption(player1, player2);

        // if attacker is player1
        if (attacker === player1) {
            // taking health from player2
            player2Health = attackPlayer(player2Health);
            // log player2 and their health
            logHealth(player2, player2Health);
            // going to check if player2 is dead
            if (isDead(player2Health)) {
                logDeath(player1, player2);
                break;
            }
        } else {
            // taking health from player1
            player1Health = attackPlayer(player1Health);
            // log player1 and their health
            logHealth(player1, player1Health);
            // going to check if player1 is dead
            if (isDead(player1Health)) {
                logDeath(player2, player1);
                break;
            }
        }
    }
}