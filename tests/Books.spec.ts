import {test} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import {Configuration} from '../utils/config'
import { Books } from '../pages/BooksPage';


let config:Configuration;

test.beforeEach(async({page})=>{
    config=new Configuration()
    await page.goto(config.appURL)

})


test.afterEach(async({page})=>{
    await page.close()
})

test('Gift Card tests',async({page})=>{

    let login_obj:LoginPage;
    let book_obj:Books;

    login_obj=new LoginPage(page)
    await login_obj.click_Login_Link()
    await login_obj.Email_Provided(config.email)
    await login_obj.Password_Provided(config.password)
    await login_obj.Login()

    book_obj=new Books(page)
    await book_obj.Book_Link_Button()
    await book_obj.Display_AllBooks()

    await page.waitForTimeout(4000)

    await book_obj.Click_Electronics()
    await book_obj.Display_ElectronicsItem()
})

