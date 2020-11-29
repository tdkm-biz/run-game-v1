const path = require("path");
module.exports={
    mode:'development',
    devServer:{
        open:true,
        openPage:"index.html",
        contentBase: path.join(__dirname, 'public'),
        publicPath: path.resolve(__dirname, 'js'),
        watchContentBase:true,
        port:8080
    },
    entry : './src/main.js',
    output : {
        filename: 'bundle.js',
        path:path.resolve(__dirname, 'public/js')
    },
    devtool : 'inline-source-map',
    performance: {
        maxEntrypointSize: 500000,
        maxAssetSize: 500000,
    },
}
