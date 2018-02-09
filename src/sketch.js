import 'p5';
import Stream from './stream'

let symbolSize = 14
let symbolColors = {
    'normal': Array(5, 124, 160), // blue green
    'bright': Array(50, 246, 232) // green blue bright
}
let streams = Array()

window.setup = () => {
    createCanvas(windowWidth, windowHeight)
    background(0)
    textFont('Anonymous Pro')
    textSize(symbolSize)

    let x = 0;
    let columnSize = symbolSize * 0.85
    let totalColumns = width / columnSize
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
