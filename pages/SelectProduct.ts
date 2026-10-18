import {Page,Locator} from '@playwright/test'

export class SelectMyProduct
{
    private readonly page:Page;
    private readonly BookURL:Locator;
    private readonly myLink:Locator
    private readonly addToCart:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.BookURL=page.locator("(//a[normalize-space()='Books'])[1]")
        this.myLink=page.locator("//h2[@class='product-title']//a[normalize-space()='Computing and Internet']")
        this.addToCart=page.locator('#add-to-cart-button-13');
    }

    async Click_Book_Link()
    {
        await this.BookURL.click()
    }

    async Click_MyProduct()
    {
        await this.myLink.click()
    }

    async ProductAddedToCart()
    {
        await this.addToCart.click()
    }
}