

const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../pageobjects/LoginPage');
const users = require('../testdata/users.json');

test.describe("Login User Workflow", () => {

    test('Complete Login User Form', async({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goTo();
        await loginPage.enterUsername(users.validUser.username);
        await loginPage.enterPassword(users.validUser.password);

        await loginPage.selectRole('user');
        await expect(loginPage.userPopUpOK).toBeVisible();

        await loginPage.confirmUserPopup();

        await loginPage.selectAccountType("Consultant");
        await expect(loginPage.selectDropdown).toHaveValue("consult");
        
        await loginPage.acceptTerms();
        await expect(loginPage.termsCheckbox).toBeChecked();
        
        await loginPage.clickSignIn();
        await expect(page).toHaveURL("https://rahulshettyacademy.com/angularpractice/shop");

    })

});
