const path = require('path');

module.exports = {
    entry: './qrGenerator.js',
    output: {
        filename: 'qrGenerator.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'QRGenerator',
        libraryTarget: 'umd',
    },
    externals: {
        qrcode: 'QRCode'
    },
};