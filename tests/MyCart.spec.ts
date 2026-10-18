import{test} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { SelectMyProduct } from '../pages/SelectProduct'
import { MyCart } from '../pages/CartPage'
import { Configuration } from '../utils/config'

let login_obj: LoginPage
let product_obj:SelectMyProduct;
let cart_obj:MyCart;

let config_obj:Configuration;

test.beforeEach(async({page})=>{
    config_obj=new Configuration();
    await page.goto(config_obj.appURL)

    login_obj=new LoginPage(page)
    product_obj=new SelectMyProduct(page)

    cart_obj=new MyCart(page);


})

test.afterEach(async({page})=>{
    await page.close()
})

test('Login Page',async({page})=>{

    
    await login_obj.click_Login_Link();
    await login_obj.Email_Provided(config_obj.email);
    await login_obj.Password_Provided(config_obj.password);
    await login_obj.Login()

    await product_obj.Click_Book_Link()
    await product_obj.Click_MyProduct()
    await product_obj.ProductAddedToCart()

    await page.waitForTimeout(4000)

    await cart_obj.cart_link()

    await cart_obj.cart_CheckBox1()
    await cart_obj.cart_CheckBox2()
     
    await cart_obj.cart_CheckOut()
    await cart_obj.cart_ExistingAddress()
    await cart_obj.firstNameInput()
    await cart_obj.lastNameInput()
    await cart_obj.emailInput()
    
    await cart_obj.CompanyDetails()
    await cart_obj.SelectCountry()
    await page.waitForTimeout(3000)
    await cart_obj.CityText()
    await cart_obj.Address1Text()
    await cart_obj.Address2Text()
    await cart_obj.ZipCode_Details()
    await cart_obj.Phone_Details()
    await cart_obj.Fax_Details()
    
    await cart_obj.Continue_Details()
    await page.waitForTimeout(3000)
    await cart_obj.PickUp_Details()
    await cart_obj.Continue2_Details()
    await page.waitForTimeout(3000)
    await cart_obj.Payment_Details()
    

    await cart_obj.ContinueCTA_Payment()
    await cart_obj.PO_Number_Details()
    

    await cart_obj.Continue3_Details()
    await cart_obj.LastContunueBtn_Details()
    await page.waitForTimeout(1000)
    console.log('Order confirmed successfully...')
     
})

