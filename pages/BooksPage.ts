import { Page, Locator } from '@playwright/test'

export class Books {
    private readonly page: Page;
    private readonly BookLink: Locator;
    private readonly all_BooksList: Locator
    private readonly ElectronicLink:Locator;
    private readonly ElectronicsList:Locator


    constructor(page: Page) {
        this.page = page;
        this.BookLink = page.locator("(//a[normalize-space()='Books'])[1]")
        this.all_BooksList = page.locator(".product-title a")
        this.ElectronicLink=page.locator("(//a[normalize-space()='Electronics'])[1]")
        this.ElectronicsList=page.locator(".title a")

    }

    async Book_Link_Button() {
        await this.BookLink.click()
    }


    async Display_AllBooks() {
        /*
        await this.all_BooksList.first().waitFor();

        let total = await this.all_BooksList.count();

        for (let i = 0; i < total; i++) {
            let heading = await this.all_BooksList.nth(i).innerText();
            console.log(heading);
        }
            */

            let myitem= await this.all_BooksList.allInnerTexts();
            console.log(myitem)
    }

    async Click_Electronics()
    {
        await this.ElectronicLink.click()
       
    }

        async Display_ElectronicsItem()
    {
        await this.ElectronicsList.first().waitFor()
        let total1=await this.ElectronicsList.count()

        for(let i=0;i<total1;i++)
        {
           let heading= await this.ElectronicsList.nth(i).innerText()
           console.log(heading)
        }

        //using different links
        //method 1
        await this.page.locator("//a[normalize-space()='My account']").click()
        //await this.page.waitForTimeout(5000)
        //method 2
        await this.page.getByRole('link',{name:'Blog'}).click()
       // await this.page.waitForTimeout(5000)

        //method 3
        await this.page.locator("a:has-text('Privacy Notice')").click()
       // await this.page.waitForTimeout(5000)

        //method 4
        await this.page.getByText('About us').click()
        //await this.page.waitForTimeout(5000)

        //method 5
        await this.page.locator("//a[text()='New products']").click()

        //method 6
       // await this.page.locator("//a[normalize-space()='Computers']").last().click()
       await this.page.locator("//a[normalize-space()='Computers']").nth(2).click()
        
        
       
    }
        
}