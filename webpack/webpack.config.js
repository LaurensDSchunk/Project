const webpack = require("webpack");

module.exports = {
    entry: "./app/src/index.js",
    output: {
        path: __dirname + "/app/dist",
        filename: "bundle.js"
    }
};