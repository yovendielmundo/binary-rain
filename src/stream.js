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

        if (this.errorInMatrix())
            this.generateSymbols()
    }

    generateSymbols() {
        const totalSymbols = round(random(6, 42))
        const speed = random(2, 25)
        // first symbol
        this.symbols = Array(
            new Symbol(this.x, this.y, speed, this.randomFirstColor())
        )

        let y = this.y - this.symbolSize
        let opacity = Stream.opacity
        for (let i = 1; i < totalSymbols; i++) {
            this.symbols.push(
                new Symbol(this.x, y, speed, this.symbolColors.normal.concat(opacity))
            )
            opacity -= (255 / totalSymbols) / 1.8
            y -= this.symbolSize
        }
    }

    randomFirstColor() {
        return (round(random(0, 4)) == 0) ? this.symbolColors.bright : this.symbolColors.normal
    }

    errorInMatrix() {
        return this.symbols[0].y > window.binaryRainEpsilon
    }

    static get opacity() { return 255 / random(1, 3)}
}