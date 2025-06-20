const path = require("path");
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        clean: true,
    },
    devServer: {
        static: "./public",
        historyApiFallback: true,
        port: 3000
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
        }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }, {
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: "asset/resource"
        }]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
};
