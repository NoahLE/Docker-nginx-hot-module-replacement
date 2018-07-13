const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    context: path.join(__dirname, 'src'),
    entry: {
        webapp: path.join(__dirname, 'src/app.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/webapp.js',
    },
    resolve: {
        extensions: ['.js', '.vue'],
        modules: ['node_modules'],
        alias: {
            'vue': 'vue/dist/vue.esm.js'
        }
    },
    devtool: 'eval-source-map',
    target: 'web',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        inline: true,
        open: false,
        historyApiFallback: true,
        public: 'localhost:3000',
        host: '0.0.0.0',
        port: 3000
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    hot: true
                }
            },
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin({
            transformAssetUrls: {
                video: ['src'],
                source: 'src',
                img: 'src',
                images: 'xlink:href'
            }
        }),
        new HtmlWebpackPlugin({
          template: 'html/index.html'
        })
    ]
};