import 'p5';
import Stream from './stream'

const symbolFont = 'Anonymous Pro'
const symbolSize = 14
const symbolColors = {
    'normal': Array(5, 124, 160), // blue green
    'bright': Array(50, 246, 232) // green blue bright
}

let streams = Array()
window.setup = () => {
    createCanvas(windowWidth, windowHeight)
    background(0)
    textFont(symbolFont)
    textSize(symbolSize)

    window.binaryRainEpsilon = height * 0.99999 // small error
    const columnSize = symbolSize * 0.7
    const totalColumns = width / columnSize
    let x = 0;
    for (let i = 0; i <= totalColumns; i++) {
        streams.push(
            new Stream(x, random(-2000, 0), symbolSize, symbolColors)
        )
        x += columnSize
    }
}

window.draw = () => {
    background(0, 0, 10, 150)
    streams.forEach(stream => stream.draw())
}
