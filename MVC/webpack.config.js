const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CheckerPlugin} = require("awesome-typescript-loader");
const path = require("path");

const basePath = __dirname;

module.exports = {
    context: path.join(basePath, "./"),
    resolve: {
        alias: {
            controllers: path.resolve(basePath, "./src/controllers"),
            views: path.resolve(basePath, "./src/views/"),
            models: path.resolve(basePath, "./src/models"),
            services: path.resolve(basePath, "./src/services"),
        },
        extensions: [".js", ".ts", ".tsx"]
    },
    entry: ['babel-polyfill', "./src/App.ts"],
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
                    useCache: true,
                    babelCore: "@babel/core"
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: "file-loader",
                options: {
                    name: "assets/img/[name].[ext]?[hash]"
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