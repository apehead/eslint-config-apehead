# eslint-config-apehead

[![npm version](https://badge.fury.io/js/eslint-config-apehead.svg)](http://badge.fury.io/js/eslint-config-apehead)

**Warning: work in progress!**

This package provides apehead's .eslintrc as an extensible shared config.

## Usage

This package exports three ESLint configurations for your usage.

### eslint-config-apehead

The default export contains all ESLint rules, including ES6+. It requires `eslint`.

1. `npm install --save-dev eslint-config-apehead eslint`
2. Add `"extends": "apehead"` to your .eslintrc

### eslint-config-apehead/base

Lints ES6+. It requires `eslint`.

1. `npm install --save-dev eslint-config-apehead eslint`
2. Add `"extends": "apehead/base"` to your .eslintrc

### eslint-config-apehead/legacy

Lints ES5 and below. It requires `eslint`.

1. `npm install --save-dev eslint-config-apehead eslint`
2. Add `"extends": "apehead/legacy"` to your .eslintrc
