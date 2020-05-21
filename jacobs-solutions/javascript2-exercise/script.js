(function() {
    const player = {
        position: 0,
        isPositiveDirection: true,
        moveForward(spaces) {
            this.isPositiveDirection ?
                this.position += spaces : this.position -= spaces;
        },
        moveBackward(spaces) {
            this.isPositiveDirection ?
                this.position -= spaces : this.position += spaces;
        },
        turnAround() {
            this.isPositiveDirection = !this.isPositiveDirection;
        },
        printLocation() {
            console.log(`The players current position is: ${this.position}`)
        }
    }

    player.moveForward(5);
    player.moveBackward(3);
    player.printLocation();
    player.turnAround();
    player.moveForward(10);
    player.moveBackward(5);
    player.printLocation();
    console.log('\n==================end of 1=======================\n')
})();