import { test, expect } from '@playwright/test'
import { MyCartVerification } from '../pages/CartPage1'
import { LoginCombine } from '../pages/Login_Combine'
import { Configuration } from '../utils/config'
import { CheckoutCases } from '../pages/CheckoutPage'


let config = new Configuration()

test.beforeEach(async ({ page }) => {

    await page.goto(config.appURL)
})

test.afterAll(async ({ page }) => {
    await page.close()
})

test('Checkout without terms', async ({ page }, testInfo) => {

    console.log("Current test Title-->", testInfo.title)
    console.log("Current test status-->", testInfo.status)

    let login = new LoginCombine(page)
    await login.MyCombineLogin(config.email, config.password)

    let cart = new MyCartVerification(page)
    await cart.Click_BooksLink()
    await cart.Click_FictionBook()
    await cart.Click_AddTOCart()
    await cart.ShoppingCartView()

    let checkout = new CheckoutCases(page)
    await checkout.click_CheckBox()
    await checkout.click_CheckOutButton()
    await page.waitForTimeout(3000)
})

test('Checkout with terms', async ({ page }, testInfo) => {

    console.log("Current test Title-->", testInfo.title)
    console.log("Current test status-->", testInfo.status)

    let login = new LoginCombine(page)
    await login.MyCombineLogin(config.email, config.password)

    let cart = new MyCartVerification(page)
    await cart.Click_BooksLink()
    await cart.Click_FictionBook()
    await cart.Click_AddTOCart()
    await cart.ShoppingCartView()

    let checkout = new CheckoutCases(page)
    await checkout.click_CheckBox()

    await checkout.click_CheckOutButton()
    await checkout.VerifyTermsCheckBox()

    await checkout.VerifyPaymentMethod("paymentmethod_3")
    await checkout.VerifyPONumber("111")
    await checkout.VerifyTotal('24')


   // await page.waitForTimeout(4000)
})