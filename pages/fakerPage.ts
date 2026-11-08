import {Page,Locator} from '@playwright/test'
import { faker } from '@faker-js/faker'

export class fakerTest
{
    private readonly page:Page;
    private readonly RegisterButton:Locator;
    private readonly firstNameTxt:Locator
    private readonly lastNametxt:Locator
    private readonly emailtxt:Locator
    person: any;
    internet: any;

    constructor(page:Page)
    {
        this.page=page;
        this.RegisterButton=page.locator("//a[normalize-space()='Register']")
        this.firstNameTxt=page.locator("#FirstName")
        this.lastNametxt=page.locator("#LastName")
        this.emailtxt=page.locator("#Email")

    }
     async Click_RegisterLink()
    {
        await this.RegisterButton.click()
    }
    async fakerInput()
    {
       let fakerFirstName= faker.person.firstName()
       let fakerLastName=faker.person.lastName()
       let fakeremail=faker.internet.email()

       await this.firstNameTxt.fill(fakerFirstName)
       await this.lastNametxt.fill(fakerLastName)
       await this.emailtxt.fill(fakeremail)

       console.log(fakerFirstName)
       console.log(fakerLastName)
       console.log(fakeremail)


    }
      
}