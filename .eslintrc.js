module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  rules: {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-multiple-empty-lines': 0,
    'no-trailing-spaces': 0,
    'no-mixed-spaces-and-tabs': 0,
    'no-duplicates': 0,
    'no-tabs': 0,
    indent: 0,
    semi: 0,
    quotes: [0],
    camelcase: 0,
    curly: [0],
    'semi-spacing': 0,
    'no-labels': 0,
    'vue/valid-v-else': 0,
    'vue/no-use-v-if-with-v-for': 'off',
    'space-before-function-paren': [0],
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    App: true,
    Page: true,
    wx: true,
    uni: true,
    getApp: true,
    getPage: true,
    getCurrentPages: true,
    requirePlugin: true
  }
};
