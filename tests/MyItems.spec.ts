import{test} from '@playwright/test'
import { LoginCombine } from '../pages/Login_Combine';
import{MyItems} from '../pages/printItems'
import { Config } from '@playwright/test'
import { Configuration } from '../utils/config';

let Log_obj:LoginCombine;
let print_obj:MyItems;
let config_obj:Configuration;


test.beforeEach(async({page})=>{
    config_obj=new Configuration()
    await page.goto(config_obj.appURL)
})

test.afterEach(async({page})=>{
    await page.close()
})

test('Print items',async({page})=>{
    Log_obj=new LoginCombine(page);
    print_obj=new MyItems(page)

    await Log_obj.MyCombineLogin(config_obj.email,config_obj.password)
    await print_obj.MyProductLink()
    await page.waitForTimeout(4000)
    await print_obj.PrintSub_Items()

})