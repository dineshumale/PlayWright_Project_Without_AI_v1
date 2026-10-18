import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { Configuration } from '../utils/config';
import { SelectMyProduct } from '../pages/SelectProduct'

let LoginPage_obj:LoginPage;
let config_obj:Configuration;
let selectProduct_obj:SelectMyProduct

test.beforeEach(async({page})=>{

    LoginPage_obj=new LoginPage(page)

    config_obj=new Configuration()
    await page.goto(config_obj.appURL)

    selectProduct_obj=new SelectMyProduct(page)

})

//test.afterEach(async({page})=>{
   // await page.close()
//})

test('Login Page',async({page})=>{

    
    await LoginPage_obj.click_Login_Link();
    await LoginPage_obj.Email_Provided(config_obj.email);
    await LoginPage_obj.Password_Provided(config_obj.password);
    await LoginPage_obj.Login()

    await selectProduct_obj.Click_Book_Link()
    await selectProduct_obj.Click_MyProduct()
    await selectProduct_obj.ProductAddedToCart()
  
})