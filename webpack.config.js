const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ESLintPlugin = require("eslint-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const webpackBar = require('webpackbar')
const Friendly = require("@nuxt/friendly-errors-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")

const aliasPath = require('./tsconfig.json').compilerOptions.paths;
module.exports = {
    mode: "development",
    entry: __dirname + '/src/main.js',//入口文件
    output: {//出口
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        // filename:'[name].[hash:8].js'，
        // publicPath: "./"
    },
    devServer: {
        historyApiFallback: true,
        compress: true,//gzip压缩
        port: 9090,
        hot: true,
        // open: true,
        proxy: {//反向代理,解决跨域
            "/api": {
                target: "https://slapibf.com/api.php",
                pathRewrite: { "^/api": "" },
            }
        }
    },
    //loader
    module: {
        //配置loader规则
        rules: [{
            test: /\.css|scss$/,
            use: [MiniCssExtractPlugin.loader, {
                loader: "css-loader",
                options: {
                    modules: true,//开启css模块化
                }
            }, "postcss-loader"],//调用的loader,从左往右依次
            // exclude: /node_modules/, //排除目录
            include: [path.resolve(__dirname, "src"), path.resolve(__dirname, "node_modules/antd")], // 包含目录，，提高打包速度
        },

        {
            test: /\.(png|jpg|gif|webp|jpeg|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: 'static/images/[name].[hash:8].[ext]',
                    esModule: true//允许require引入
                }
            }
        },
        {
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
                cacheDirectory: true,//缓存
            }
        }]
    },
    //插件
    plugins: [new HtmlWebpackPlugin({
        filename: "index.html",//打包后文件名
        template: "./public/index.html",
        favicon: "./public/favicon.ico",
        minify: {
            removeComments: true,//移出注释
            collapseWhitespace: true,//删除空白符合换行符
            removeAttributeQuotes: true,//移除属性引号
        }
    }),
    new CleanWebpackPlugin(),//每次打包先清空dist文件夹
    new ESLintPlugin(),
    new MiniCssExtractPlugin({
        filename: "static/css/[name].[contenthash:5].css",
        chunkFilename: 'static/css/[name].[contenthash:5].css',
    }),
    new webpack.HotModuleReplacementPlugin(),//热更新
    // new webpack.ProvidePlugin({
    //     process: "process/browser"
    // }), //webpack5 删除了process 等node补丁 可以采用如下注入业务环境
    new webpack.DefinePlugin({ 
        "NODE_ENV": JSON.stringify(process.env.NODE_ENV) //`'${process.env.NODE_ENV}'`
    }),
    // @ts-ignore
    new webpackBar({
        name: "咻咻咻咻-------",
        color: 'green',
        basic: false,
        // reports:[]//自定义
    }),
    new Friendly({
        compilationSuccessInfo: {
            messages: ['  localhost: http://localhost:9090']
        }
    })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            "@": path.resolve("src")
        }
        //  Object.keys(aliasPath).reduce((alias, key) => { //同步别名 tsconfig下paths
        //      alias[key] = path.resolve(aliasPath[key][0]) + '';
        //      return alias;
        //  }, {})
    },
    stats: 'errors-only',

    // optimization: {// terser-webpack-plugin压缩js  production下webpack默认集成开启
    //     minimizer: [
    //         new TerserWebpackPlugin()
    //     ],
    // }
}

