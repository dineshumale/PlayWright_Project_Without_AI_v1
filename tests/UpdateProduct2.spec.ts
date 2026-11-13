import{test,expect} from '@playwright/test'
import { updateProductQunatity } from '../pages/UpdateQunatityPage'
import { Configuration } from '../utils/config'

test.beforeEach(async({page})=>{
    let config=new Configuration()
    await page.goto(config.appURL)
})

test.afterEach(async({page})=>{
    await page.close()
})

test('Update qunatity and display subtotal',async({page})=>{
    let update=new updateProductQunatity(page)
    await update.click_BookLink()
    await update.update_ProductQunatity("3")
    await update.AddToCartLink()
    await update.verifySubTotal("30.00")
    await page.waitForTimeout(3000)
})