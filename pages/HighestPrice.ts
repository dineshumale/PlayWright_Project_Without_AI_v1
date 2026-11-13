import {Page,Locator} from '@playwright/test'


export class higherPrice
{
    private readonly page:Page
    private readonly mainBooklink:Locator
    private readonly productTitles:Locator
    private readonly productPrices:Locator
    

    constructor(page:Page)
    {
        this.page=page;
        this.mainBooklink=page.getByRole('link',{name:'Books'})
        this.productTitles=page.locator('.product-title a')
        this.productPrices=page.locator('.prices .price.actual-price')
    }

    async click_MainBookLink()
    {
        await this.mainBooklink.first().click()
    }

     async VerifyTitle_Prices()
    {
        const count=await this.productPrices.count()
        let highestPrice=0;
        let highestProduct;

        for(let i=0;i<count;i++)
        {
            const name=(await this.productTitles.nth(i).innerText()).trim()
            const priceText=await this.productPrices.nth(i).innerText()
            const price = Number(priceText.replace('$', '').trim());
            console.log(`${name} : $${price}`);

            if(price>highestPrice)
            {
                highestPrice=price;
                highestProduct=name;

            }
        }

        console.log("---------------------")
        console.log('Highest priced product:', highestProduct);
        console.log('Highest price: $' + highestPrice);

    }

    async VerifyLowerPrice()
    {
        const count=await this.productPrices.count()
        let lowestPrices=100;
        let lowestProduct;

        for(let i=0;i<count;i++)
        {
            const name=(await this.productTitles.nth(i).innerText()).trim()
            const priceText=await this.productPrices.nth(i).innerText()
            const price=Number(priceText.replace('$','').trim())
            console.log(`${name} : $${price}`);

            if(price<lowestPrices)
            {
                lowestPrices=price;
                lowestProduct=name;
            }


        }

        console.log("---------------------")
        console.log('Lowest priced product:', lowestProduct);
        console.log('Lowest price: $' + lowestPrices);

    }
    
}