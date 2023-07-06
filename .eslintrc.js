module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:mobx/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ["tsconfig.json"],
  },
  plugins: [
    'react',
    'mobx'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/array-type": 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-confusing-void-expression': 'off',
    "arrow-body-style": ["error", "as-needed"],
    "max-len": ["error", { "code": 180 }],
    "no-tabs": ["error", { "allowIndentationTabs": true }],
    "space-after-keywords": "off",
    "keyword-spacing": [2, {"before": true, "after": true}],
    //mobx options
    "mobx/exhaustive-make-observable": "warn",
    "mobx/unconditional-make-observable": "error",
    "mobx/missing-make-observable": "error",
    "mobx/missing-observer": "off",
    "mobx/no-anonymous-observer": "off"
  },
  "settings": {
    "componentWrapperFunctions": [
      "observer"
    ]
  }
}
