export default () => ({
  entry: './src/index.js',

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