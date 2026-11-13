import {test} from '@playwright/test'
import {Configuration} from '../utils/config'
import { higherPrice } from '../pages/HighestPrice'

test.beforeEach(async({page})=>{
    let config=new Configuration()
    await page.goto(config.appURL)
})

test.afterEach(async({page})=>{
    await page.close()
})

test('Finds higher price',async({page})=>{

    let higher=new higherPrice(page)
    await higher.click_MainBookLink()
    await higher.VerifyTitle_Prices()
    
})

test('Finds lowest price',async({page})=>{

    let higher=new higherPrice(page)
    await higher.click_MainBookLink()
    await higher.VerifyLowerPrice()
    
})