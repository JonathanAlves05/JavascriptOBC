
const path = require('path')
module.exports = {
    entry: {
        index: './src/index.js'
       // hello: './src/hello.js'
    },
    // output: {
    //     path: path.resolve(__dirname, 'public'),
    //    // filename: '[name].bundle.min.js'
    // },
    mode: 'development',
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    }
}