module.exports = {
    components: {
        categories: [
            {
                name: 'Test',
                include: ['node_modules/@madoc/services/madoc-ts/src/uxpin-merge/Button/Button.tsx'],
            },
        ],
        wrapper: 'node_modules/@madoc/services/madoc-ts/src/uxpin-merge/UXPinWrapper.js',
        webpackConfig: './webpack.uxpin.js',
    },
    name: 'Madoc components',
};
