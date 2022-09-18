const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ESLintPlugin = require("eslint-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

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
        // hot:true,
        // open: true,
        proxy: {//反向代理,解决跨域
            "/api": {
                target: "http://image.baidu.com",
                pathRewrite: { "^/api": "" }
            }
        }
    },
    //loader
    module: {
        //配置loader规则
        rules: [{
            test: /\.css|scss$/,
            use: ['style-loader', 'css-loader', "postcss-loader"],//调用的loader,从左往右依次
            // include:"",//包含目录,
            exclude: /node_modules/ //排除目录
        }, {
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
            test: /\.js|jsx$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
                plugins: [["@babel/plugin-proposal-class-properties", { "loose": true }]]
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
    }), new CleanWebpackPlugin(),//每次打包先清空dist文件夹
    new ESLintPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            "@": path.resolve(__dirname, 'src')
        }
    }
}