/*
 * @Author: kingford
 * @Date: 2021-04-17 19:48:45
 * @LastEditTime: 2021-04-17 21:11:40
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['eslint:recommended', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    indent: ['off'],
    quotes: ['off'],
    'space-before-function-paren': 0,
    semi: ['error', 'always']
  }
};
