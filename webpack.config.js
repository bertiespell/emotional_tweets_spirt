const path = require('path');

module.exports = (env) => {
    return {
        context: path.join(__dirname, 'src'),
        entry: './index.js',
        output: {
            filename: 'bundle.js',
            path: path.join(__dirname, 'public')
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    include: path.join(__dirname, 'src'),
                    test: /\.jsx?/
                }
            ]
        }
    }
};