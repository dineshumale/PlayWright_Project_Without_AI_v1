import{Page,Locator, expect} from '@playwright/test'
export class LoginPage
{

    private readonly page:Page;
    private readonly login_link:Locator;
    private readonly user_Email:Locator;
    private readonly user_Password:Locator;
    private readonly login_Button:Locator;
    private readonly logo:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.login_link=page.getByRole('link',{name:'Log in'})
        this.user_Email=page.locator('#Email');
        this.user_Password=page.locator('#Password')
        this.login_Button=page.locator("//input[@value='Log in']")
        this.logo=page.getByAltText('Tricentis Demo Web Shop')
    }

    async click_Login_Link()
    {
        await this.login_link.click()
    }

    async Email_Provided(email:string)
    {
        await this.user_Email.fill(email)
    }
    async Password_Provided(password1:string)
    {
        await this.user_Password.fill(password1)
    }

    async Login()
    {
        await this.login_Button.click()
    }

    async mylogo()
    {
        await expect(this.logo).toBeVisible()
    }
}