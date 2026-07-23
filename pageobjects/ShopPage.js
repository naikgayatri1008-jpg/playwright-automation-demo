class ShopPage{
    constructor(page){
        this.page = page;

        this.products = page.locator(".card");
        this.cartButton = page.locator("a.nav-link.btn.btn-primary");
    }
        
    async addProduct(productName)
    {
        await this.products.first().waitFor();
        const product = this.products.filter({ hasText : productName});
        await product.locator("button").click();
            

        /* 
        Another way to implement the same
        const productCount = await this.products.count();
        console.log("count=", productCount);
        for (let i =0 ; i< productCount ; i++){
            const product = this.products.nth(i);
            const name = await product.locator(".card-title a").textContent();
            if(name.trim() == productName)
            {
                await product.locator("button").click();
                break;
            }
        }
        */
        

    }

    async getCartCount()
    {
        const text = await this.cartButton.textContent();
        const match = text.match(/\(\s*(\d+)\s*\)/);
        return match ? match[1] : "0";
    }

    async openCart(){
        await this.cartButton.click();        
    }

    }

module.exports = {ShopPage};


