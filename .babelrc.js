module.exports = {
    presets: [["@babel/preset-env",{
        "useBuiltIns":"usage",
        "corejs":3
    }], "@babel/preset-react", '@babel/preset-typescript'],
    plugins: [
        ["@babel/plugin-proposal-decorators", { "legacy": true }], //解析装饰器
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        ["@babel/plugin-proposal-private-methods", { "loose": true }],
        ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
        ["@babel/plugin-transform-runtime"]
    ],
}