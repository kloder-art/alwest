module.exports = {
  root: true,
  env: {
    jest: true
  },
  globals: {
    page: true,
    browser: true,
    context: true
  },
  extends: [
    'plugin:jest/recommended',
    'plugin:react/recommended'
  ],
  settings: {
    react: {
      version: '16.8'
    }
  },
  rules: {
    quotes: ['error', 'single'],
    semi: 'error'
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  }
};
