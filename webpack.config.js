const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/", // для коррекции путей для SPA
        clean: true, // очистка dist перед каждой сборкой
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "public"), // dist или public
        },
        historyApiFallback: true, // для React Router
        port: 3001,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(ico|png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    filename: "fonts/[name][ext][query]",
                },
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"], // если требуется импорт без расширений
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            favicon: "./src/assets/favicon.ico",
        }),
    ],
};
