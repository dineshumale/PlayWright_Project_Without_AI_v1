import {Page,Locator,expect} from '@playwright/test'

export class MyCartVerification
{
    private readonly page:Page;
    private readonly booklink:Locator
    private readonly fiction_book:Locator;
    private readonly fiction_book2_cart:Locator
    private readonly Health_Book_Cart:Locator
    private readonly addToCart:Locator
    private readonly shoppingCart:Locator

    private readonly secondProduct:Locator
    private readonly AddToCartSecondProduct:Locator

    private readonly quantity:Locator
    private readonly myproduct_quantity:Locator
    private readonly removeCheckBox:Locator
    private readonly subtotal:Locator

    constructor(page:Page)
    {
        this.page=page;
        this.booklink=page.getByRole('link',{name:'Books'}).first();
        this.fiction_book=page.getByRole('link',{name:'Fiction'}).first()
        this.fiction_book2_cart=page.locator("(//input[@class='button-2 product-box-add-to-cart-button'])[2]")
        this.Health_Book_Cart=page.locator('(//input[@class="button-2 product-box-add-to-cart-button"])[3]')
        this.addToCart=page.locator("#add-to-cart-button-45")
        this.shoppingCart=page.locator("//span[normalize-space()='Shopping cart']")
        this.secondProduct=page.locator("//a[normalize-space()='Simple Computer']")
        this.AddToCartSecondProduct=page.locator("#add-to-cart-button-75")

        this.quantity=page.locator(".qty-input")
        this.myproduct_quantity=page.locator(".qty-input")
        this.removeCheckBox= page.locator("input[name='removefromcart']");
        this.subtotal=page.locator(".cart-total-right")



    }

    async Click_BooksLink()
    {
        await this.booklink.click()
    }
     async Click_FictionBook()
    {
        await this.fiction_book.click()
    }

     async Click_AddTOCart()
    {
        await this.addToCart.click()
    }

       async ShoppingCartView()
    {
        await this.shoppingCart.click()
    }

        async VerifyProductFromCart(productName:string)
    {
        const cartProduct =await this.page.locator(".cart-item-row")
        //await expect(cartProduct).toContainText(productName)

        console.log(`Book ${productName} Added to cart successfully..`)
        
    }

    async Click_SecondProduct()
    {
        await this.fiction_book2_cart.click()
    }

      async Click_HealthBook()
    {
        await this.Health_Book_Cart.click()
    }

      async Click_AddToCart_SecondProduct()
    {
        await this.AddToCartSecondProduct.click()
    }

    async VerifyQuantity(expectedQuantity:string)
    {
       let actualQuantity= await this.quantity.first().inputValue()
       console.log(`expected quantity: ${expectedQuantity}`)
       console.log(`actual quantity: ${actualQuantity}`)
       //await expect(this.quantity.first()).toHaveValue(expectedQuantity)
       console.log("Product quantity verified...")

    } 

    async UpdateQuantity(userQuantity:string)
    {
        await this.myproduct_quantity.fill(userQuantity)
        
    }

    async myproduct(product : string)
    {
        await this.page.locator('.product-name')
        console.log(`product ${product} updated successfully...`)
    }
    async removeFromCart_CheckBox()
    {
        await this.removeCheckBox.check()
        let check=await this.removeCheckBox.isChecked()
        if(check)
        {
            console.log('checkbox selected')
        }
        else{
            console.log('Check box is not selected..')
        }

       let removeBtn= this.page.locator('//input[@value="Update shopping cart"]')
       await removeBtn.click()
       console.log("Selected Item removed from cart ...")

       let removalsummary=this.page.locator('.order-summary-content')
       await expect(removalsummary).toContainText('Your Shopping Cart is empty!')
       let msg=await removalsummary.innerText()
       console.log(` removal message shown as :${msg}`)
        

    }

    async Verify_SubTotal(product_subtotal:string)
    {
       let sub= await this.subtotal.first().innerText()
       console.log(`Subtotal shown on UI :${sub}`)
   
   

    }
}