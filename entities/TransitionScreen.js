class TransitionScreen {
    constructor(level, game, x, y, gameOver) {
        Object.assign(this, { game, level , x, y, gameOver });
        this.elapsedTime = 0;
    };

    update() {
        this.elapsedTime += this.game.clockTick;

        if (this.elapsedTime > 2) {

            this.game.camera.loadLevel(this.level, this.x, this.y, false, this.gameOver);
        }
    };

    draw(ctx) {
        // if (this.gameOver == false){
        // ctx.fillStyle = "Red";
        // ctx.fillRect(0, 0, PARAMS.CANVAS_WIDTH, PARAMS.CANVAS_HEIGHT);
        // ctx.font = 50  + "px " + "robotoCondensed"
        // ctx.fillStyle = "White";
        // ctx.fillStyle = "White";
        // ctx.fillText("GOLD#3", 200, 400);
        // }
        if (this.gameOver) {
            ctx.fillText("GAME OVER", 600, 384);
            this.game.camera.loadLevel(1,400, 300, false, true);

        }
        else{
            ctx.drawImage(this.game.player.animator, 400, 600);
        }

        
    }
};

