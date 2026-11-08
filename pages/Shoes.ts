import {Page,Locator} from '@playwright/test'

export class Shoes
{
    private readonly page:Page;
    private readonly shoesLink:Locator
    private readonly allShoes:Locator
    private readonly allShoesPrices:Locator
    

    constructor(page:Page)
    {
        this.page=page;
        this.shoesLink=page.locator("(//a[normalize-space()='Apparel & Shoes'])[3]")
        this.allShoes=page.locator('.product-title a')
        this.allShoesPrices=page.locator('.prices span')
        
    }

    async ClickShoesButton()
    {
        await this.shoesLink.click()
    }
    async DisplayAllShoes()
    {
        //const allshoes_Headings=await this.allShoes.allInnerTexts()
        //console.log(allshoes_Headings)

        const total22=await this.allShoes.count()
        console.log('<---All shoes individual headings--->')

        for(let i=0;i<total22;i++)
        {
           const allShoes_Headings22= await this.allShoes.nth(i).innerText()
          
           console.log(allShoes_Headings22)
        }


    }

    async DisplayShoesPrices()
    {
        let shoesPrices=await this.allShoesPrices.count()
        console.log('<---All individual Shoes Prices--->')

        for(let i=0;i<shoesPrices;i++)
        {
            let prices=await this.allShoesPrices.nth(i).innerText()
            console.log(prices)
        }
    }

    
    async Combine_Prices_Headings()
    {
        console.log('Combine products and prices')
        let total=await this.allShoes.count()
        for(let i=0;i<total;i++)
        {
           let all_Shoes_products= await this.allShoes.nth(i).innerText()
           let all_Shoes_prices=await this.allShoesPrices.nth(i).innerText()
           console.log("Product Name:",all_Shoes_products,"| Price:",all_Shoes_prices)
        }

    }


}