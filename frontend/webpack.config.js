module.exports = {
  entry: [
    './src/main.js'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders:
    [
      {exclude: /node_nodules/,loader: 'babel'},
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  resolve: {
    extensions: ['','.js','.jsx']
  }
};
