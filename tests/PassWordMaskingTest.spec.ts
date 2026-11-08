import{test,expect} from '@playwright/test'
import { PassWordMasking } from '../pages/PasswordMask'
import { Configuration } from '../utils/config'

test.beforeEach(async({page})=>{
    let config=new Configuration()
    await page.goto(config.appURL)
})

test.afterEach(async({page})=>{
    await page.close()
})

test('Password Masking',async({page})=>{

    let mask=new PassWordMasking(page)
    await mask.Click_RegisterLink();
    await mask.UserMaskedPassword()  
})