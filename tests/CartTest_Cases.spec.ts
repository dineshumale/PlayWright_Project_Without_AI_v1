import {test,expect} from '@playwright/test'
import { MyCartVerification } from '../pages/CartPage1'
import { LoginCombine } from '../pages/Login_Combine'
import { Configuration } from '../utils/config'


let config=new Configuration()

test.beforeEach(async({page})=>{
    
    await page.goto(config.appURL)
})

test.afterAll(async({page})=>{
    await page.close()
})

test('one product in cart',async({page},testInfo)=>{
     
    console.log("Current test Title-->",testInfo.title)
    console.log("Current test status-->",testInfo.status)

    let login=new LoginCombine(page)
    await login.MyCombineLogin(config.email,config.password)

    let cart=new MyCartVerification(page)
    await cart.Click_BooksLink()
    await cart.Click_FictionBook()
    await cart.Click_AddTOCart()
    await cart.ShoppingCartView()
    await cart.VerifyProductFromCart('Fiction')
    await page.waitForTimeout(3000)
})

test('two products in cart',async({page},testInfo)=>{

    console.log("Test Title",testInfo.title)
    console.log("Test Status",testInfo.status)

     let login=new LoginCombine(page)
    await login.MyCombineLogin(config.email,config.password)

    let cart=new MyCartVerification(page)
    await cart.Click_BooksLink()
    await cart.Click_SecondProduct()
    await cart.Click_HealthBook()

    await cart.ShoppingCartView()
    //await page.waitForTimeout(3000)
    await cart.VerifyProductFromCart('Health Book')
})


test('Verify quantity in cart',async({page},testInfo)=>{

    console.log("Test Title",testInfo.title)
    console.log("Test Status",testInfo.status)

     let login=new LoginCombine(page)
    await login.MyCombineLogin(config.email,config.password)

    let cart=new MyCartVerification(page)
    await cart.Click_BooksLink()
    await cart.Click_FictionBook()
    await cart.Click_AddTOCart()
    await cart.ShoppingCartView()
    await cart.VerifyQuantity('1')
  
})


test('Verify update quantity in cart',async({page},testInfo)=>{

    console.log("Test Title",testInfo.title)
    console.log("Test Status",testInfo.status)

     let login=new LoginCombine(page)
    await login.MyCombineLogin(config.email,config.password)

    let cart=new MyCartVerification(page)
    await cart.Click_BooksLink()
    await cart.Click_FictionBook()
    await cart.UpdateQuantity('2')
    await page.waitForTimeout(2000)


    await cart.Click_AddTOCart()
    await cart.ShoppingCartView()
    await cart.VerifyQuantity('2')
    await cart.myproduct('Fiction')

    //remove product from cart
    await cart.removeFromCart_CheckBox()
    await page.waitForTimeout(2000) 
})

test('Verify SubTotal in cart',async({page},testInfo)=>{

    console.log("Test Title",testInfo.title)
    console.log("Test Status",testInfo.status)

     let login=new LoginCombine(page)
    await login.MyCombineLogin(config.email,config.password)

    let cart=new MyCartVerification(page)
    await cart.Click_BooksLink()
    await cart.Click_FictionBook()
     await cart.Click_AddTOCart()
    await cart.ShoppingCartView()
    
    await cart.Verify_SubTotal('24')
    
  
})
