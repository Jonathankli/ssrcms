const path = require("path");

module.exports = (options) => {
    return {
        mode: 'development',
        entry: "./dist/frontend/index.js",
        output: {
            path: path.join(__dirname, 'build', 'assets'),
            filename: 'bundle.js',
        },
        resolve: {
            extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ]
        }
    }
}