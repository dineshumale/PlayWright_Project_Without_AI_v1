import {Page,Locator, expect} from '@playwright/test'
 export class updateProductQunatity
 {
    private readonly page:Page;
    private readonly BookLink:Locator
    private readonly updateQuantity:Locator
    private readonly AddToCart:Locator
    private readonly SubTotal:Locator

    constructor(page:Page)
    {
        this.page=page;
        this.BookLink=page.getByRole('link',{name:'Books'})
        this.updateQuantity=page.locator('.qty-input')
        this.AddToCart=page.locator("#add-to-cart-button-13")
        this.SubTotal=page.locator(".product-price")

    }

    async click_BookLink()
    {
        await this.BookLink.first().click()
        await this.page.locator("//a[normalize-space()='Computing and Internet']").first().click()
    }

    async update_ProductQunatity(update:string)
    {
        let input_Quantity=await this.updateQuantity.fill(update)
        console.log(`Quantity updated to number:${update}`)
    }

    async AddToCartLink()
    {
        await this.AddToCart.click()
        await this.page.locator("#topcartlink").click()
    }

    async verifySubTotal(subtotal:string)
    {
        
        let myprice=await this.SubTotal.first().innerText()
        console.log(`Actual subtotal found ${myprice}`)
         expect(myprice.trim()).toBe(subtotal)

    }

 }