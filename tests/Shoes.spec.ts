import {test} from '@playwright/test'
import { Configuration } from '../utils/config'
import { LoginPage } from '../pages/LoginPage'
import { Shoes } from '../pages/Shoes';

let config:Configuration;
let login_obj:LoginPage;

test.beforeEach(async({page})=>{

   config=new Configuration;
   await page.goto(config.appURL)

})

test.afterEach(async({page})=>{

    await page.close()
})

test('Shoes Test',async({page})=>{
    login_obj=new LoginPage(page);
    await login_obj.click_Login_Link()
    await login_obj.Login_Combine(config.email,config.password)
    //await login_obj.Login();
    console.log('Login successful..')
    console.log("Enetered Username is :",config.email);
    console.log('"Entered Password is ',config.password)
    let shoes_obj=new Shoes(page)
    await shoes_obj.ClickShoesButton()
    await shoes_obj.DisplayAllShoes()
    await shoes_obj.DisplayShoesPrices()
    await shoes_obj.Combine_Prices_Headings()


})