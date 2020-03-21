module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jest": true

  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "sourceType": "module"
  },
  "plugins": [],
  "rules": {
    "react/prop-types": 0
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
