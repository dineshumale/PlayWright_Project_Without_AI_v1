
import {Page,Locator} from '@playwright/test'
export class PassWordMasking
{
    private readonly page:Page;
    private readonly registerLinK:Locator;
    private readonly userPasstxt:Locator;
    private readonly confirmPasstxt:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.registerLinK=page.getByRole('link',{name:'Register'})
        this.userPasstxt=page.locator("#Password")
        this.confirmPasstxt=page.locator("#ConfirmPassword")
    }

    async Click_RegisterLink()
    {
        this.registerLinK.click()
    }

    async UserMaskedPassword()
    {
        let userMasktype=await this.userPasstxt.getAttribute('type')
        let confimMaskedType=await this.confirmPasstxt.getAttribute('type')
        if(userMasktype && confimMaskedType ==='password')
        {
            console.log('Password is masked for both passwords.. ')
        }
        else
        {
            console.log('Password is not masked..')
        }
    }
}