export default () => ({
  resolve: { 
    extensions: ['.js', '.jsx', '.json']
  },

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
});