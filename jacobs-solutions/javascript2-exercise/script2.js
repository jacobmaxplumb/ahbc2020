(function() {
    const player = {
        north: 0,
        east: 0,
        direction: 'north',
        turnLeft() {
            switch (this.direction) {
                case 'north':
                    this.direction = 'west';
                    break;
                case 'east':
                    this.direction = 'north';
                    break;
                case 'south':
                    this.direction = 'east';
                    break;
                case 'west':
                    this.direction = 'south';
                    break;
                default:
                    throw 'error';
            }
        },
        turnRight() {
            switch (this.direction) {
                case 'north':
                    this.direction = 'east';
                    break;
                case 'east':
                    this.direction = 'south';
                    break;
                case 'south':
                    this.direction = 'west';
                    break;
                case 'west':
                    this.direction = 'north';
                    break;
                default:
                    throw 'error';
            }
        },
        moveForward(spaces) {
            switch (this.direction) {
                case 'north':
                    this.north += spaces;
                    break;
                case 'east':
                    this.east += spaces;
                    break;
                case 'south':
                    this.north -= spaces;
                    break;
                case 'west':
                    this.east -= spaces;
                    break;
                default:
                    throw 'error';
            }
        },
        moveBackwards(spaces) {
            switch (this.direction) {
                case 'north':
                    this.north -= spaces;
                    break;
                case 'east':
                    this.east -= spaces;
                    break;
                case 'south':
                    this.north += spaces;
                    break;
                case 'west':
                    this.east += spaces;
                    break;
                default:
                    throw 'error';
            }
        },
        printLocation() {
            console.log(`${this.north} N, ${this.east} E`);
        }
    }

    player.moveForward(5);
    player.turnRight();
    player.moveForward(2);
    player.printLocation();
    player.turnLeft();
    player.turnLeft();
    player.moveForward(7);
    player.turnRight();
    player.moveBackwards(3);
    player.printLocation();
})();