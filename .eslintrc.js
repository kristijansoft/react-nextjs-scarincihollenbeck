module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'max-len': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'import/no-unresolved': 'off',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'react/no-danger': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-prototype-builtins': 'off',
    'no-nested-ternary': 'off',
    'react/jsx-props-no-spreading': 'off',
    'linebreak-style': 'off',
    'no-tabs': 'off',
    'no-return-assign': 'off',
    'no-param-reassign': 'off',
    'no-await-in-loop': 'off',
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'no-console': [
      2,
      {
        allow: ['warn', 'error'],
      },
    ],
  },
};
