const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../pageobjects/LoginPage');
const users = require('../testdata/users.json');
const {ShopPage} = require('../pageobjects/ShopPage');
const {CartPage} = require('../pageobjects/CartPage');

test.describe("Shopping Workflow", () => {

    test('Add product to cart', async({page}) => {
        const loginPage = new LoginPage(page);
        const shopPage = new ShopPage(page);
        const cartPage = new CartPage(page);

        await loginPage.goTo();
        await loginPage.login(users.validUser.username , users.validUser.password);     

        await shopPage.addProduct("iphone X");
        const count = await shopPage.getCartCount();
        expect(count).toBe("1");

        await shopPage.openCart();

        expect (await cartPage.hasProduct("iphone X")).toBeTruthy();
        const price = await cartPage.getProductPrice("iphone X");
        expect(price).toBe("₹. 100000");
        
    });

});
