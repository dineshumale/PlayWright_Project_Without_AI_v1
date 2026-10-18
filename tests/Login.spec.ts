import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { Configuration } from '../utils/config';

let LoginPage_obj:LoginPage;
let config_obj:Configuration;

test.beforeEach(async({page})=>{

    LoginPage_obj=new LoginPage(page)

    config_obj=new Configuration()
    await page.goto(config_obj.appURL)
})

test.afterEach(async({page})=>{
    await page.close()
})

test('Login Page',async({page})=>{

    //await page.goto(config_obj.appURL);
    await LoginPage_obj.click_Login_Link();
    await LoginPage_obj.Email_Provided(config_obj.email);
    await LoginPage_obj.Password_Provided(config_obj.password);
    await LoginPage_obj.Login()

    await LoginPage_obj.mylogo()
    console.log('Login successful and logo verified successfully...')
    
})