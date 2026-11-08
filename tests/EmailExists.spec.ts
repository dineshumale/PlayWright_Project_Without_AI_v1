import{test} from '@playwright/test'
import { EmailExists } from '../pages/ExistingEmail'
import { Configuration } from '../utils/config'



test.beforeEach(async({page})=>{
   let  config=new Configuration()
   await page.goto(config.appURL)

})

test.afterEach(async({page})=>{
    await page.close()
})

test('Email exists Scenario',async({page})=>{
    let email=new EmailExists(page);
    await email.Click_RegisterLink()
    await email.MyGender()
    await email.MyFirstNameHardCode()
    await email.MyLastNameHardCode()
    await email.MyEMailHardCode()
    await email.MyPassHardCode()
    await email.MyConfirmPassHardCode()
    await email.Click_RegisterButton()
    //await page.waitForTimeout(4000)

})

test('Dynamic Inputs',async({page})=>{
    let email=new EmailExists(page);
    await email.Click_RegisterLink()
    await email.MyGender()
    await email.MyFirstName_Dynamic('Kaustubh')
    await email.MyLastName_Dynamic('Wakade')
    await email.MyEMail_Dynamic('Kaustubh.com')
    await email.MyPass_Dynamic('wqwqqqqq')
    await email.MyConfirmPass_Dynamic('wqwqqqqq')
    await email.Click_RegisterButton()
    console.log("Dynamic Inputs taken from User successfully...")
    await page.waitForTimeout(4000)

})

test('Dynamic Input from Class',async({page})=>{

    let email=new EmailExists(page);
    await email.Click_RegisterLink()
    await email.MyGender()
    //UserFirstName and UserLastName taken from config class
    let  config=new Configuration()
    await email.MyFirstName_Dynamic(config.FirstName)
    await email.MyLastName_Dynamic(config.LastName)
    await page.waitForTimeout(4000)
    
})


test('Register without Email',async({page})=>{
    let email=new EmailExists(page);
    await email.Click_RegisterLink()
    await email.MyGender()
    await email.MyFirstNameHardCode()
    await email.MyLastNameHardCode()
    //await email.MyEMailNotProvided()
    await email.MyPassHardCode()
    await email.MyPassHardCode()
    await email.Click_RegisterButton()
    await email.MyEMailNotProvided()
    
});
