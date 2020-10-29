const uxPinConfig = require('@madoc/services/madoc-ts/uxpin.config');

const newCategories = uxPinConfig.components.categories.map(category => {
    return {
        ...category,
        include: category.include.map(file => `node_modules/@madoc/services/madoc-ts/${file}`),
    }
})

module.exports = {
    components: {
        categories: newCategories,
        wrapper: 'node_modules/@madoc/services/madoc-ts/src/uxpin-merge/UXPinWrapper.js',
        webpackConfig: './webpack.uxpin.js',
    },
    name: 'Madoc components',
};
