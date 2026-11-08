import {Page,Locator} from '@playwright/test'

export class Digital
{
    private readonly page:Page;
    private readonly digitalLink:Locator;
    private readonly allItems;
    private readonly allprices;

    constructor(page:Page)
    {
        this.page=page;
        this.digitalLink=page.locator("(//a[normalize-space()='Digital downloads'])[1]")
        this.allItems=page.locator('.product-grid a')
        this.allprices=page.locator('.prices span')
    }

    async Click_digital_Link()
    {
        await this.digitalLink.click()
    }
      async PrintItems()
    {
       // let myitem= await this.allItems.allInnerTexts();
       // console.log(myitem)

       //using traditional loop
       console.log('Printing Using traditional loop')

       let myitem= await this.allItems.allInnerTexts();
       for(let i=0;i<myitem.length;i++)
       {
        console.log(myitem[i])
       }
    }

     async PrintPrices()
    {
      let myprices= await this.allprices.allInnerTexts()
      console.log("---------Prices------->")
      console.log(myprices)

    }
}