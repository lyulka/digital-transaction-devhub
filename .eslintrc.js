module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/extensions': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/no-danger': 0,
    'react/jsx-one-expression-per-line': 0,
  },
};
