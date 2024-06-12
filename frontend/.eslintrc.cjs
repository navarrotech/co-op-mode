module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Allow any
    '@typescript-eslint/no-explicit-any': 'off',
    // Allow ts-ignore
    '@typescript-eslint/ban-ts-comment': 'off',
    // Allow banned types
    '@typescript-eslint/ban-types': 'off',
  },
}
