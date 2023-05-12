module.exports = {
    "env": {
      "browser": true,
      "es2021": true
    },
    "extends": "plugin:react/recommended",
    "overrides": [
    ],
    "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
    },
    "plugins": [
      "react"
    ],
    "rules": {
      "react/prop-types": 0 // prop-types를 정의하지 않고 실행 가능하게 해줌
    }
}
