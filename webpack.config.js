const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "umd",
        clean: true
    },
    resolve: {
        extensions: [".ts", ".tsx"]
    },
    externals: {
        react: "react",
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: ["ts-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less/,
                use: ["style-loader", "css-loader", "less-loader"]
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "src/styles", to: "styles" },
            ]
        })
    ],
    watchOptions: {
        ignored: /node_modules/,
    }
}