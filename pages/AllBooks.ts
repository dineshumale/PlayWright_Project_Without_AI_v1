import { Page,Locator } from "@playwright/test";

export class BookDetails
{
    private readonly page:Page;
    private readonly BookLink:Locator;
    private readonly all_Book_titles:Locator
    private readonly all_Book_Prices:Locator;

    constructor(page)
    {
        this.page=page;
        this.BookLink=page.locator("(//a[normalize-space()='Books'])[1]")
        this.all_Book_titles=page.locator(".product-title a")
        this.all_Book_Prices=page.locator(".prices .price.actual-price")
    }

    async Click_BookLink()
    {
        await this.BookLink.click()
    }
    
    async Print_AllBooks()
    {
       let allBooks= await this.all_Book_titles.count()
       console.log("All books count",allBooks)
       console.log("All books and prices together")
       for(let i=0;i<allBooks;i++)
       {
        let books=await this.all_Book_titles.nth(i).innerText()
        let prices=await this.all_Book_Prices.nth(i).innerText()
        console.log(books)
        console.log(prices)
       }
    }

    async individual_price_Verify()
    {
        console.log("--->Individual price--->")
        let expectedBooks="Computing and Internet"
        let expectedPrice="$10.00"
        let allBooks= await this.all_Book_titles.count()

         for(let i=0;i<allBooks;i++)
       {
        let bookName=await this.all_Book_titles.nth(i).innerText()

        if(bookName.trim()===expectedBooks)
        {
            let actualPrice =await this.all_Book_Prices.nth(i).innerText()

            console.log("Book Name:", bookName);
            console.log("Expected Price:", expectedPrice);
            console.log("Actual Price:", actualPrice);
            console.log("Price verified successfully!");
            return;
        }
            
       }
    }  
}