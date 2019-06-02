import path from 'path';
import webpack from 'webpack';

export default () => ({
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'app.js',
        publicPath: '/',
        libraryTarget: 'umd'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        contentBase: './',
        hot: true
    },

    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            resolve: { 
                extensions: ['.js', '.jsx'] 
            }
        }]
    }
});