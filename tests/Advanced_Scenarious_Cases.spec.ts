import{test} from '@playwright/test'
import { Advanced_Scenarious } from '../pages/Advanced_Scenarious'
import { Configuration } from '../utils/config'



let config = new Configuration()

test.beforeEach(async ({ page }) => {

    await page.goto(config.appURL)
})

test.afterAll(async ({ page }) => {
    await page.close()
})


test('Different links Handling',async({page},testInfo)=>{

    console.log('Test title=>',testInfo.title)
    await page.getByRole('link',{name:'Sitemap'}).click()
    await page.locator("//a[normalize-space()='Shipping & Returns']").click()
    await page.locator('a:has-text("About us")').click()
    await page.locator("//a[text()='Contact us']").click()
    await page.getByText("Search").nth(1).click()
    await page.locator('//a[normalize-space()="Computers"]').first().click()
})


test('Verify product prices',async({page},testInfo)=>{

    console.log('Test title=>',testInfo.title)
    let advanced=new Advanced_Scenarious(page)
    await advanced.mylink()
   

    
})