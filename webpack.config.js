var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "public/src");

var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["react", "es2015", "stage-2"]
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: "index.html",
            template: "public/index.html",
            title: "ReactApp"
        })
    ]
};

module.exports = config;