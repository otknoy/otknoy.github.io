module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jest": true

  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  "parserOptions": {
    "sourceType": "module"
  },
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "react/prop-types": 0,
    "prettier/prettier": [
      "error",
      {
	"singleQuote": true,
	"semi": false,
	"trailingComma": "all"
      }
    ]
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
