module.exports = {
    'extends': [
        'eslint-config-apehead/legacy',
        'eslint-config-apehead/rules/es6',
    ].map(require.resolve),
    'rules': {}
};
