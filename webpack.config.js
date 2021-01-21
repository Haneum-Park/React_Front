const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const port = process.env.PORT || 3000;

module.exports = {
  // 개발환경 고정
  mode: 'development',
  // 진입점. 생략가능. 생략시 ./src로 인지한다.
  entry: './src/index.js',
  // 컴파일된 파일을 저장할 경로
  output: {
    // [hash]로 지정하면 다시컴파일 될때마다 웹팩에서 생성된 해시로 변경되어 캐싱에 도움이 된다.
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },
  // 디버깅을 도와줌. 개발시에만 사용되는 inline-source-map
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // html 템플릿과 favicon 을 지정
    new HtmlWebpackPlugin({
      template: './public/index.html',
      // favicon: 'public/img/layout/favicon.ico'
    }),
  ],
  devServer: {
    hot: true,
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-laoder'
          },
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4000,
              name: 'images/[name].[ext]',
              esModule: false
            }
          }
        ]
      }
    ]
  }
}