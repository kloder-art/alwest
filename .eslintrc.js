module.exports = {
  root: true,
  globals: {
    page: true,
    browser: true,
    context: true
  },
  extends: [
    'plugin:react/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
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
