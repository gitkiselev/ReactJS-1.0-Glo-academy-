module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'script.js',
    path: __dirname + '/dist/'
  },
  watch: false,

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader?optional[]=runtime',
          options: {
            presets: [
              ["@babel/env", {
                targets: {
                  edge: "17",
                  firefox: "60",
                  chrome: "67",
                  safari: "11.1",
                  ie: "11"
                },
                useBuiltIns: "usage"
              }]
            ]
          }
        }
      }
    ]
  }
};