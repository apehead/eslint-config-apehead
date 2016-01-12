module.exports = {
    'extends': [
        'eslint-config-apehead/rules/best-practices',
        'eslint-config-apehead/rules/errors',
        'eslint-config-apehead/rules/legacy',
        'eslint-config-apehead/rules/node',
        'eslint-config-apehead/rules/style',
        'eslint-config-apehead/rules/variables'
    ].map(require.resolve),
    'env': {
        'browser': true,
        'node': true,
        'amd': false,
        'mocha': false,
        'jasmine': false
    },
    'ecmaFeatures': {},
    'globals': {},
    'rules': {}
};
