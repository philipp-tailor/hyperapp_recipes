const conf = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        serviceworker: true
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:react/recommended'],
    parserOptions: {
        allowImportExportEverywhere: true,
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 9,
        impliedStrict: true,
        sourceType: 'module'
    },
    plugins: ['import', 'prettier', 'react']
}

export default conf
