const jsExtensions = ['.js', '.jsx'];
const tsExtensions = ['.ts', '.tsx'];
const allExtensions = jsExtensions.concat(tsExtensions);

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier/@typescript-eslint',
    "prettier/react",
    "prettier/standard"
  ],
  parserOptions: {
    ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
    sourceType: 'module',  // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,  // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: "detect",
    },
    // Workaround for https://github.com/benmosher/eslint-plugin-import/issues/1285
    'import/extensions': allExtensions,
    'import/parsers': {
      '@typescript-eslint/parser': tsExtensions,
    },
    'import/resolver': {
      'node': {
        'extensions': allExtensions,
      },
    },
  },
  plugins: [
    "jest",
    "import",
    "json"
  ],
  env: {
    "browser": true,
    "node": true,
    "jest": true,
    "es6": true,
    "jest/globals": true
  },
  rules: {
    "react/destructuring-assignment": "warn",
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-wrap-multilines": 0,
    "lines-between-class-members": 0,
    "camelcase": 0,
    "react/no-danger": 0,
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "react/jsx-no-target-blank": 0,
    "react/sort-comp": 0,
    "react/jsx-closing-tag-location": 0,
    "object-curly-newline": 0,
    "jsx-quotes": 0,
    "max-len": 0,
    "global-require": 0,
    "no-underscore-dangle": 0,
    "no-console": 0,
    "jsx-a11y/href-no-hash": 0,
    "react/no-array-index-key": 0,
  }
};
