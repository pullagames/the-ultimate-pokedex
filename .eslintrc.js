module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/strongly-recommended',
    '@vue/airbnb',
  ],
  settings: {
    'import/resolver': 'webpack',
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'import/no-unresolved': 'off',
  },
};
