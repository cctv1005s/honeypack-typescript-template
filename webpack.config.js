const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: [
    './src/index.tsx'
  ],
  resolve:{
    extensions: [
      '.web.ts',
      '.ts',
      '.web.tsx',
      '.tsx',
    ],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: path.join(__dirname, './src'),
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              transpileOnly: true,
            },
          },
        ],
      }      
    ],
  }
}