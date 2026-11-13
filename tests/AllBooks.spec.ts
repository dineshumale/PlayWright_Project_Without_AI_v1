import{test,expect} from '@playwright/test'
import { BookDetails } from '../pages/AllBooks'
import { Configuration } from '../utils/config'


test.beforeEach(async({page})=>{
    let config=new Configuration()
    await page.goto(config.appURL)
})

test.afterEach(async({page})=>{
    await page.close()
})

test('Book prices and heading',async({page})=>{

    let books=new BookDetails(page)
    await books.Click_BookLink()
    await books.Print_AllBooks()
    await books.individual_price_Verify()
})