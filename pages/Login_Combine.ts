import{Page,Locator, expect} from '@playwright/test'
export class LoginCombine
{

    private readonly page:Page;
    private readonly login_link:Locator;
    private readonly user_Email:Locator;
    private readonly user_Password:Locator;
    private readonly login_Button:Locator;
    

    constructor(page:Page)
    {
        this.page=page;
        this.login_link=page.getByRole('link',{name:'Log in'})
        this.user_Email=page.locator('#Email');
        this.user_Password=page.locator('#Password')
        this.login_Button=page.locator("//input[@value='Log in']")
      
    }

    async MyCombineLogin(combine_email:string,combine_password:string)
    {
        await this.login_link.click()
        await this.user_Email.fill(combine_email)
        await this.user_Password.fill(combine_password)
        await this.login_Button.click()

    }


}