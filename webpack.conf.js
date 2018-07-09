const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    context: path.join(__dirname, 'src'),
    entry: {
        webapp: path.join(__dirname, 'src/app.js')
    },
    output: {
        filename: 'js/webapp.js',
        path: path.join(__dirname, 'dist')
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
        port: 3000
        // historyApiFallback: true,
        // host:
        // public:
        // public:
        //
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
        })
    ]
};