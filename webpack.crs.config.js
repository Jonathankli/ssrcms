const path = require("path");
const config = require("./webpack.config");

module.exports = (options) => {

    const _config = config(options);

    return {
        ..._config,
        entry: "./dist/frontend/indexCsr.js",
        output: {
            path: path.join(__dirname, 'build', 'assets'),
            filename: 'bundleCsr.js',
        }
    }
}