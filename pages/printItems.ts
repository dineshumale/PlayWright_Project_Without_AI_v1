import {Page,Locator} from '@playwright/test'

export class MyItems
{
    private readonly page:Page;
    private readonly my_Product_link;
    private readonly sub_prod;
    private readonly subItems;
    
    constructor(page:Page)
    {
        this.page=page;
        this.my_Product_link=page.locator("(//a[normalize-space()='Electronics'])[1]")
        this.sub_prod=page.getByRole('link',{name:'Cell phones'})
        this.subItems=page.locator('.product-title a')
    }

    async MyProductLink()
    {
        await this.my_Product_link.hover()
        await this.sub_prod.click()
        

    }

        async PrintSub_Items()
    {
       const texts=await this.subItems.allInnerTexts()
       for(const text of texts)
       {
        //console.log(text.trim())
        console.log(text)
       }

       console.log("Itms prints successfully...")
        

    }



}