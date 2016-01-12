module.exports = {
    'extends': [
        'eslint-config-apehead/base',
        'eslint-config-apehead/rules/strict'
    ].map(require.resolve),
    rules: {}
};
