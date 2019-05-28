import path from 'path';
import webpack from 'webpack';

export default function() {
    return {
        entry: {
            'app': './src/index.js'
        },

        mode: 'development',

        output: {
            path: path.resolve(__dirname, 'dist/'),
            filename: '[name].js',
            publicPath: '/',
            libraryTarget: 'umd'
        },

        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.ProvidePlugin({
                'React': 'react',
                'ReactDOM': 'react-dom'
            })
        ],

        devServer: {
            contentBase: './',
            hot: true
        },

        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                // exclude: /node_modules/,
                resolve: { 
                    extensions: ['.js', '.jsx'] 
                },
                use: {
                    loader: 'babel-loader'
                }
            }]
        },

        stats: { colors: true },

        devtool: false
    }
};