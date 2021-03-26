module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      "camelcase": "off",
      "react/destructuring-assignment": "off",
      "jsx-a11y/no-noninteractive-tabindex": "off",
      "jsx-a11y/no-noninteractive-element-interactions": "off"
    }
};
