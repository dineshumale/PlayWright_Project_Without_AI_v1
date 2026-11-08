import { Configuration } from "../utils/config";
import { LoginPage } from "../pages/LoginPage";
import {test} from '@playwright/test'
import { Digital } from "../pages/Digital";

let config:Configuration;
let login_obj:LoginPage;

test.beforeEach(async({page})=>{
    config=new Configuration();
    await page.goto(config.appURL)

})

test.afterEach(async({page})=>{
    await page.close()
})

test('Digital Test',async({page})=>{
    login_obj=new LoginPage(page);

    await login_obj.click_Login_Link()
    await login_obj.Email_Provided(config.email)
    await login_obj.Password_Provided(config.password)
    await login_obj.Login()

    let  Digital_obj:Digital;
    Digital_obj=new Digital(page)
    await Digital_obj.Click_digital_Link()
    await Digital_obj.PrintItems()
    await Digital_obj.PrintPrices()


})