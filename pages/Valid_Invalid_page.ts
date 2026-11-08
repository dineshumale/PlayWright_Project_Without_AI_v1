import {Page,Locator} from '@playwright/test'

export class LoginCases
{
    private readonly page:Page;
    private readonly loginlink:Locator
    private readonly user_Email:Locator;
    private readonly user_pass:Locator;
    private readonly loginButton:Locator
    private readonly errormsg:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.loginlink=page.getByRole('link',{name:'Log in'})
        this.user_Email=page.locator('#Email')
        this.user_pass=page.locator('#Password')
        this.loginButton=page.locator("//input[@value='Log in']")
        this.errormsg=page.locator("//div[@class='validation-summary-errors']")


    }
    async LoginButtonClick()
    {
        await this.loginlink.click()
    }
    async Combine_Login(email:string,password:string)
    {
        await this.user_Email.fill(email);
        await this.user_pass.fill(password)
    }

    async click_LoginButton()
    {
        await this.loginButton.click()
    }
    async getErrorMsg()
    {
         await this.errormsg.waitFor({state:'visible'});
        return await this.errormsg.innerText();
    }



}