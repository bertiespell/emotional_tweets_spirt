const path = require('path');

module.exports = (env) => { // run differently depending on which environment you're in - production or 
    return {
        context: path.join(__dirname, 'src'),// where to look for files from an absolute path
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