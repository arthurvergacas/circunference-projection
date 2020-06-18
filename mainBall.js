class MainBall {
    constructor(x, y) {
        this.pos = createVector(x, y);

        this.speed = 0.6;

    }

    show() {
        fill(255);
        noStroke();
        ellipse(this.pos.x, this.pos.y, 15);
    }

    update() {
        this.pos.rotate(this.speed);

    }
}