import {Page,Locator} from '@playwright/test'


export class EmailExists
{
    private readonly page:Page;
    private readonly RegisterButton:Locator;
    private readonly genderradio:Locator
    private readonly firstNameTxt:Locator
    private readonly lastNametxt:Locator
    private readonly emailtxt:Locator
    private readonly passtxt:Locator
    private readonly confirmPassTxt:Locator
    private readonly RegisterButtonLink:Locator
    private readonly ErrorMsg:Locator;
    private readonly withoutEmailTxt:Locator;

    constructor(page:Page)
    {

        this.page=page;
        this.RegisterButton=page.locator("//a[normalize-space()='Register']")
        this.genderradio=page.locator("#gender-male")
        this.firstNameTxt=page.locator("#FirstName")
        this.lastNametxt=page.locator("#LastName")
        this.emailtxt=page.locator("#Email")
        this.passtxt=page.locator("#Password")
        this.confirmPassTxt=page.locator("#ConfirmPassword")
        this.RegisterButtonLink=page.locator("#register-button")
        this.ErrorMsg=page.locator(".validation-summary-errors")
        this.withoutEmailTxt=page.locator("//span[@for='Email']")

    }
    async Click_RegisterLink()
    {
        await this.RegisterButton.click()
    }
    async MyGender()
    {
        await this.genderradio.check();
       let maleRadio= await this.genderradio.isChecked()

        if(maleRadio===true)
        {
            console.log('Gender selected')
        }
        else
        {
            console.log('Gender is not selected..')
        }

    }
    async MyFirstNameHardCode()
    {
        await this.firstNameTxt.fill('Dinesh')
    }

     async MyFirstName_Dynamic(firstName:string)
    {
        await this.firstNameTxt.fill(firstName)
    } 
     async MyLastNameHardCode()
    {
        await this.lastNametxt.fill('Umale')
    }

     async MyLastName_Dynamic(lastName:string)
    {
        await this.lastNametxt.fill(lastName)
    } 


     async MyEMailHardCode()
    {
        await this.emailtxt.fill('dineshplaywrightautomation@gmail.com')

    }

     async MyEMail_Dynamic(email:string)
    {
        await this.emailtxt.fill(email)

    }

      async MyEMailNotProvided()
    {
        let EmailValidation=await this.withoutEmailTxt.innerText();
        if(EmailValidation==='Email is required.')
        {
            console.log("User does not provide email..Please provide new Email to proceed")
        }
        else{
            console.log("Email valdation is not  found")
        }


    }
    async MyPassHardCode()
    {
        await this.passtxt.fill('dddddxxxxxx')

    }

     async MyPass_Dynamic(userpass:string)
    {
        await this.passtxt.fill(userpass)

    }

    async MyConfirmPassHardCode()
    {
        await this.confirmPassTxt.fill('dddddxxxxxx')

    }

     async MyConfirmPass_Dynamic(userConfirmPass:string)
    {
        await this.confirmPassTxt.fill(userConfirmPass)

    }

     async Click_RegisterButton()
    {
        await this.RegisterButtonLink.click()
        /*
       let myerr= await this.ErrorMsg.innerText()
       if( myerr=='The specified email already exists')
       {
        console.log("Email exists !! Please try with new Email")

       }
       else{
        console.log("Email validation message not found")
       }
        */

    }

    
   
}