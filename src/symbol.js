export default class Symbol {
    constructor(x, y, speed, color) {
        this.x = x
        this.y = y
        this.speed = speed
        this.color = color
        this.interval = round(random(2, speed))
        this.setRandomValue()
    }

    setRandomValue() {
        this.value = round(random(0, 1))
    }

    draw() {
        fill(this.color)
        text(this.value, this.x, this.y)
    }

    update() {
        if (frameCount % this.interval == 0)
            this.setRandomValue()
        this.y = (this.y + this.speed) % height
    }
}