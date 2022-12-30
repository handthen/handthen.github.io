module.exports ={
    "root":true,
    "env":{
        "node":true,
        "browser":true,
        "es6":true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parser": "@babel/eslint-parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module",
    },
    "plugins": [
        "react"
    ],
    "rules":{
        // 'no-console':"error",//eslint规则
    }
}