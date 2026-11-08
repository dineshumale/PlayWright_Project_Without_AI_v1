import{test,expect} from '@playwright/test'
import { Configuration } from '../utils/config'
import { SearchProducts } from '../pages/Search'

test.beforeEach(async({page})=>{
    let config=new Configuration()
    await page.goto(config.appURL)
})

test.afterEach(async({page})=>{
    await page.close()
})

test('Search cases',async({page})=>{

    let search=new SearchProducts(page)
    await search.Search_text()
    await search.Click_SearchBtn()
    
})

test('Search sequentially',async({page})=>{

    let search=new SearchProducts(page)
    await search.Search_Sequentially()
    await search.Display_allSearch()
    //await search.Click_SearchBtn()
    
})

test('Invalid Search ',async({page},testInfo)=>{

    console.log("Current Test:", testInfo.title);
    console.log("Test Status:", testInfo.status);


    let search=new SearchProducts(page)
    await search.invalid_Search()
    await page.waitForTimeout(3000)
    await search.Click_SearchBtn()
    await page.waitForTimeout(3000)
    await search.Display_SearchError()
    
})