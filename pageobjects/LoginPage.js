class LoginPage {

    constructor(page){
        this.page = page;
        this.username = page.locator("#username");
        this.password = page.locator("#password");
        this.loginButton = page.locator("#signInBtn");
        this.errorMessage = page.locator(".alert-danger");
    }

    async goTo()
    {
        await this.page.goto("/loginpagePractise");
    }

    async login(username,password)
    {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async getErrorMessage()
    {
        return this.errorMessage;
    }
}
module.exports = {LoginPage};
