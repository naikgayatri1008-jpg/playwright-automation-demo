class LoginPage {

    constructor(page){
        this.page = page;

        // Login elements
        this.username = page.locator("#username");
        this.password = page.locator("#password");
        this.signInButton = page.locator("#signInBtn");
        this.errorMessage = page.locator(".alert-danger");

        //Additional form elements
        this.adminRadio = page.locator("input[value='admin']");
        this.userRadio = page.locator("input[value='user']");
        this.selectDropdown = page.locator("select.form-control");
        this.termsCheckbox = page.locator("#terms");
        this.userPopUpOK = page.locator("#okayBtn");
        this.userPopUpCancel = page.locator("#cancelBtn");
        
    }

    async goTo()
    {
        await this.page.goto("/loginpagePractise");
    }

    async enterUsername(username) 
    {
    await this.username.fill(username);
    }

    async enterPassword(password) 
    {
    await this.password.fill(password);
    }

    async clickSignIn() 
    {
    await this.signInButton.click();
    }

    async login(username,password)
    {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickSignIn();
    }

    async selectAccountType(accountType){
        await this.selectDropdown.selectOption({label : accountType});
        }


    async selectRole(role){
        if(role=='admin')
        {
            await this.adminRadio.click();
        }
        else if(role=='user')
        {
            await this.userRadio.click();
        }
    }

    async confirmUserPopup() {
        await this.userPopUpOK.click();
    }

    async cancelUserPopup() {
    await this.userPopUpCancel.click();
    }


    async acceptTerms(){
         await this.termsCheckbox.check();
    }

}
module.exports = {LoginPage};
