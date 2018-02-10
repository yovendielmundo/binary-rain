import Symbol from './symbol'

export default class Stream {
    constructor(x, y, symbolSize, symbolColors) {
        this.x = x
        this.y = y
        this.symbolSize = symbolSize
        this.symbolColors = symbolColors
        this.symbols = Array()
        this.generateSymbols()
    }

    draw() {
        this.symbols.forEach(symbol => {
            symbol.draw()
            symbol.update()
        })

        if (this.errorInMatrix()) {
            console.log("errorInMatrix")
            this.generateSymbols()
        }
    }

    generateSymbols() {
        let y = this.y
        let totalSymbols = round(random(6, 42))
        let speed = random(2, 25)
        let opacity = Stream.opacity

        this.symbols = Array(new Symbol(this.x, y, speed, this.randomFirstColor()))
        y -= this.symbolSize
        // first symbol

        for (let i = 1; i < totalSymbols; i++) {
            this.symbols.push(
                new Symbol(this.x, y, speed, this.symbolColors.normal.concat(opacity))
            )
            opacity -= (255 / totalSymbols) / Stream.fadeInterval
            y -= this.symbolSize
        }
    }

    randomFirstColor() {
        return (round(random(0, 4)) == 0) ? this.symbolColors.bright : this.symbolColors.normal
    }

    errorInMatrix() {
        return this.symbols[0].y > Stream.error
    }

    static get error() { return height * 0.99999 }
    static get opacity() { return 255 }
    static get fadeInterval() { return 1.8 }
}