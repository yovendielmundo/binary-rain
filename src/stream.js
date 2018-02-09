import Symbol from './symbol'

export default class Stream {
    constructor(x, y, symbolSize, symbolColor) {
        this.totalSymbols = round(random(5, 35))
        this.speed = random(1, 5)
        //this.speed = random(5, 22)
        this.symbols = Array(new Symbol(x, y, this.speed, symbolColor.bright))
        y -= symbolSize

        let opacity = 255
        let fadeInterval = 1.6

        for (let i = 1; i < this.totalSymbols; i++) {
            this.symbols.push(
                new Symbol(x, y, this.speed, symbolColor.normal.concat(opacity))
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
}