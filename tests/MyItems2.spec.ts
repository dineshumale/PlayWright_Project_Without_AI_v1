import {test} from '@playwright/test'
import { LoginCombine } from '../pages/Login_Combine'
import { Configuration } from '../utils/config'
import { print2 } from '../pages/PrintItem2';

let config_obj:Configuration;
let combine_obj:LoginCombine;
let print_obj2:print2

test.beforeEach(async({page})=>{
    config_obj=new Configuration()
    await page.goto(config_obj.appURL)
})

test.afterEach(async({page})=>{
    await page.close()
})

test("my test",async({page})=>{
    combine_obj=new LoginCombine(page)
    print_obj2=new print2(page)

    await combine_obj.MyCombineLogin(config_obj.email,config_obj.password)

    await print_obj2.mainProductLink()
  //  await page.waitForTimeout(3000)
    await print_obj2.SubProductLink2()
   // await page.waitForTimeout(3000)
    await print_obj2.PrintAllSubProd()

})
