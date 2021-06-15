module.exports = targets => {
    targets.of('@magento/venia-ui').routes.tap(routes => {
        routes.push({
            name: 'CheckoutPage',
            pattern: '/checkout',
            path: require.resolve('../components/CheckoutPage/checkoutPage.js')
        });
        return routes;
    });
};
