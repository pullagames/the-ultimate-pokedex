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
    'import/extensions': 'off',
    'label-has-for': 'off',
    'vuejs-accessibility/form-control-has-label': 'off',
    'no-unused-vars': 'off',
    'vue/max-attributes-per-line': 'off',
    'max-len': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
  },
};
