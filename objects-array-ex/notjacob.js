while (true) {
    // print out the name and health of the 3 characters
    for (const c of characters) {
        console.log(`health: ${c.health}, name: ${c.name}`);
    }
    // print out the name and health of the opponent
    console.log(`health: ${opponent.health}, name: ${opponent.name}`);
    // ask the user to select char 1, 2, or 3
    let response = prompt('select a character (1, 2, 3): ');

    if (response === '') { // if the response is blank, we exit the loop
        console.log('game is over');
        break;
    } else if (response === '1') { // if the response is 1, we subtract 5 from the opponent and the first charecter
        characters[0].health = characters[0].health - 5;
        opponent.health = opponent.health - 5;
    } else if (response === '2') { // if the response is 2, we subtract 5 from the opponent and the second charecter
        characters[1].health = characters[1].health - 5;
        opponent.health = opponent.health - 5;
    } else if (response === '3') { // if the response is 3, we subtract 5 from the opponent and the third charecter
        characters[2].health = characters[2].health - 5;
        opponent.health = opponent.health - 5;
    }
    console.log('-------------------------------')
}