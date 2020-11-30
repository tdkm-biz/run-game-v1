const path = require("path");

module.exports = {
    mode: "development",
    entry : "./src/main.js",
    devServer: {
        contentBase: "public",
        open: true,
        // 仮想JSの出力先
        publicPath: '/js/'
    },
    output: {
        // 出力ファイル
        filename: "bundle.js",
        path: path.resolve(__dirname, 'public/js')
    },
    performance: {
        maxEntrypointSize: 500000,
        maxAssetSize: 500000,
    },
};