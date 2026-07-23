class CartPage{

    constructor(page){
        this.page = page;
        this.products = page.locator("h4.media-heading a");
        this.cartRows = page.locator("tbody tr");

    }

    async hasProduct(productName){
        return await this.products.filter({hasText : productName}).isVisible();
    }

    async getProductPrice(productName){
        const productRow = this.cartRows.filter({ hasText: productName});
        return await productRow.locator("td").nth(2).textContent();
    }

}
module.exports = { CartPage };