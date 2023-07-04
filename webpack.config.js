require('dotenv').config({ path: '.env' })
const DotEnv = require('dotenv-webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const app = process.env.APP_NAME
const isDev = process.env.NODE_ENV === 'development'

const entry = ['./src/index.tsx']
const plugins = [
  new DotEnv(),
  new HtmlWebpackPlugin({
    template: './public/index.html',
    favicon: './public/favicon.ico'
  }),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, 'src/assets/fonts'),
        to: './fonts'
      }
    ]
  })
]

isDev
  ? plugins.push(new ReactRefreshWebpackPlugin())
  : plugins.push(new CleanWebpackPlugin())

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry,
  plugins,
  devtool: 'inline-source-map',
  output: {
    clean: true,
    filename: 'bundle.[chunkhash].js',
    chunkFilename: 'chunk.bundle.[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: isDev ? '/' : `/${app}/`
  },
  optimization: {
    chunkIds: 'named',
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        reactVendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          name: 'vendor-react',
          chunks: 'all',
        },
        corejsVendor: {
          test: /[\\/]node_modules[\\/](core-js)[\\/]/,
          name: 'vendor-corejs',
          chunks: 'all',
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s?css$/,
        use: [
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'react-svg-loader',
            options: {
              svgo: {
                plugins: [
                  {
                    removeViewBox: false,
                  },
                ],
              }
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/'
          }
        }]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.*', '.tsx', '.ts', '.jsx', '.js'],
    alias: {
      "@": path.resolve(__dirname, 'src')
    }
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  devServer: {
    host: process.env.LOCAL_IP,
    port: process.env.LOCAL_PORT,
    open: false,
    hot: true,
    historyApiFallback: true,
    proxy: {
      ...['/api', '/socket.io'].reduce((obj, key) => ({
        ...obj,
        [key]: `http://${process.env.LOCAL_IP}:${process.env.SERVER_PORT}`
      }), {}),
      '/static': `https://${process.env.LOCAL_IP}:${process.env.VOLUME_PORT}`,
      secure: true,
      changeOrigin: true
    }
  }
}
