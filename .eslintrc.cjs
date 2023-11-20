module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
    ],

    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh'],
    rules: {
        // 'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        // 'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 2, maxEOF: 0 }],
        'no-undef': 0,
        'no-var': 0,
        'no-unused-vars': 0,
        'no-console': 0,
        indent: 0,
        'react/prop-types': 0,
        'linebreak-style': 0,
        'no-case-declarations': 0,
        // 'react-refresh/only-export-components': 0,
    },
};
