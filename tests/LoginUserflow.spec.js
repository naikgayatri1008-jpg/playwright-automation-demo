

const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../pageobjects/LoginPage');
const users = require('../testdata/users.json');

test.describe("Login User Workflow", () => {

    test('Complete Login User Form', async({browser,page}) => {
        const loginpage = new LoginPage(page);
        await loginpage.goTo();
        await loginpage.enterUsername(users.validUser.username);
        await loginpage.enterPassword(users.validUser.password);

        await loginpage.selectRole('user');
        await expect(loginpage.userPopUpOK).toBeVisible();

        await loginpage.confirmUserPopup();

        await loginpage.selectAccountType("Consultant");
        await expect(loginpage.selectDropdown).toHaveValue("consult");
        
        await loginpage.acceptTerms();
        await expect(loginpage.termsCheckbox).toBeChecked();
        
        await loginpage.clickSignIn();
        await expect(page).toHaveURL("https://rahulshettyacademy.com/angularpractice/shop");
    
    })

});
