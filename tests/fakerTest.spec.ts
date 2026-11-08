import{test} from '@playwright/test'
import { Configuration } from '../utils/config'
import { fakerTest } from '../pages/fakerPage'


test.beforeEach(async({page})=>{
   let  config=new Configuration()
   await page.goto(config.appURL)

})

test.afterEach(async({page})=>{
    await page.close()
})



test("Faker Test",async({page})=>{
    let faker=new fakerTest(page)
    await faker.Click_RegisterLink()
    await faker.fakerInput()
    await page.waitForTimeout(4000)
    
})