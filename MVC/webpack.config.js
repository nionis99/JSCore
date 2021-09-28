const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CheckerPlugin} = require("awesome-typescript-loader");
const path = require("path");

const basePath = __dirname;

module.exports = {
    context: path.join(basePath, "./"),
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    entry: ["./src/App.ts"],
    devtool: "source-map",
    devServer: {
        liveReload: true,
        hot: true,
        open: true,
        port: 8080,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: "awesome-typescript-loader",
                options: {
                    useBabel: true,
                    babelCore: "@babel/core"
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./public/index.html"
        }),
        new CheckerPlugin()
    ]
};