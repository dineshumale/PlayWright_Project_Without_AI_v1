import {Page,Locator} from '@playwright/test'
export class print2
{

    private readonly page:Page
    private readonly mainProduct:Locator;
    private readonly sub_prod2:Locator
    private readonly sub_prod_all:Locator

    constructor(page:Page)
    {
        this.page=page;
        this.mainProduct=page.locator("(//a[normalize-space()='Computers'])[1]")
        this.sub_prod2=page.locator("(//a[normalize-space()='Desktops'])[1]")
        this.sub_prod_all=page.locator(".product-title a")


    }

    async mainProductLink()
    {
        await this.mainProduct.hover()

    }
      async SubProductLink2()
    {
        await this.sub_prod2.click()

    }
      async PrintAllSubProd()
    {
        
        const texts2= await this.sub_prod_all.allInnerTexts();
        for(const text2  of texts2)
        {
            console.log(text2.trim())
        }



    }

}