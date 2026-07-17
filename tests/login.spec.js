const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../pageobjects/LoginPage');
const users = require('../testdata/users.json');

test('Test01 - Successful Login',async ({browser,page})=>
    {
        const username = "rahulshettyacademy";
        const password = "Learning@830$3mK2";

        const loginPage = new LoginPage(page);
        await loginPage.goTo();
        await loginPage.login(users.validUser.username, users.validUser.password);
        await expect(page).toHaveURL("https://rahulshettyacademy.com/angularpractice/shop");
        await expect(page.locator('.card')).toHaveCount(4);
    }
);

test('Test02 - Invalid Login', async({page}) =>
    {
        const loginPage = new LoginPage(page);

        await loginPage.goTo();
        await loginPage.login(users.invalidUser.username , users.invalidUser.password);
        await expect(loginPage.errorMessage).toContainText('Incorrect');

    }
);