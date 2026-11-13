import {test,expect} from '@playwright/test'
import { ReadCSV } from '../pages/ReadCSV';
import { Configuration } from '../utils/config'

const loginData = ReadCSV();
let config=new Configuration()

for(const data of loginData)
{

    test(`login test-${data.email}`,async({page})=>{
        await page.goto(config.appURL)
        await page.getByRole('link',{name:'Log in'}).click()
        await page.locator('#Email').fill(data.email)
        await page.locator('#Password').fill(data.password)
        await page.locator("//input[@value='Log in']").click()

        if(data.expectedResults==='successful')
        {

            await expect(page.getByRole('link',{name:'Log out'})).toBeVisible()
            console.log("Login successful..")
        }
        else{
            let errs= page.locator('.validation-summary-errors')
            await expect(errs).toBeVisible()
            console.log('Login failed as expected')
        }
    })
}