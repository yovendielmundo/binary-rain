const path = require('path');

module.exports = {
    entry: './src/sketch.js',
    output: {
        filename: 'sketch.bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};