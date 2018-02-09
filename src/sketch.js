import 'p5';
import Stream from './stream'

let symbolSize = 24
let symbolColor = {
    'normal': Array(5, 124, 160), // blue green
    'bright': Array(5, 236, 222) // green blue bright
}
let stream

window.setup = () => {
    createCanvas(windowWidth, windowHeight)
    background(0)
    textFont('Courier')
    textSize(symbolSize)

    stream = new Stream(width/2, height/2, symbolSize, symbolColor)
}

window.draw = () => {
    background(0, 0, 10, 150)

    stream.draw()
}
