import Symbol from './symbol'

export default class Stream {
    constructor(x, y, symbolSize, symbolColors) {
        this.totalSymbols = round(random(6, 42))
        this.speed = random(2, 20)
        this.symbols = Array(new Symbol(x, y, this.speed, this.chooseColor(symbolColors)))
        y -= symbolSize

        let opacity = 255
        let fadeInterval = 1.8

        for (let i = 1; i < this.totalSymbols; i++) {
            this.symbols.push(
                new Symbol(x, y, this.speed, symbolColors.normal.concat(opacity))
            )
            opacity -= (255 / this.totalSymbols) / fadeInterval
            y -= symbolSize
        }
    }

    draw() {
        this.symbols.forEach(symbol => {
            symbol.draw()
            symbol.update()
        })
    }

    chooseColor(symbolColors) {
        return (round(random(0, 4)) == 0) ? symbolColors.bright : symbolColors.normal
    }
}