const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../pageobjects/LoginPage');
const users = require('../testdata/users.json');

test.describe("Login Tests", () => {
    test('Valid Login @smoke @regression',async ({browser,page})=> {
        const loginPage = new LoginPage(page);
        await loginPage.goTo();
        await loginPage.login(users.validUser.username, users.validUser.password);
        await expect(page).toHaveURL("https://rahulshettyacademy.com/angularpractice/shop");
        await expect(page.locator('.card')).toHaveCount(4);
    });

    for (const user of users.invalidUsers){
      test(`${user.testCase} @regression`, async ({page}) => {
            const loginPage = new LoginPage(page);
            await loginPage.goTo();
            await loginPage.login(user.username , user.password);
            await expect(loginPage.errorMessage).toContainText(user.expectedMessage);
        });
    }
});