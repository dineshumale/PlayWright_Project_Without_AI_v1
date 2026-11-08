import{test} from '@playwright/test'
import { LoginCases } from '../pages/Valid_Invalid_page';
import { Configuration } from '../utils/config'

let config:Configuration;


test.beforeEach(async({page})=>{
    config=new Configuration()
    await page.goto(config.appURL)
})

test.afterEach(async({page})=>{
    await page.close()
})

test('valid- login test',async({page})=>{
    let logincases_Obj=new LoginCases(page);
    await logincases_Obj.LoginButtonClick();
    await logincases_Obj.Combine_Login(config.email,config.password)
    await logincases_Obj.click_LoginButton()
    //await logincases_Obj.getErrorMsg()
    console.log("Login successful with Username and Password as ",config.email,config.password)

})

test('verify invalid login',async({page})=>{

    let logincases_Obj=new LoginCases(page);
    await logincases_Obj.LoginButtonClick();
    await logincases_Obj.Combine_Login(
        'invalidemail@gmail.com',
        'wrongpass@123'
    )
    await logincases_Obj.click_LoginButton()

  let error= await logincases_Obj.getErrorMsg()
  console.log('Error at login',error)


})