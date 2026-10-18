import {Page,Locator} from '@playwright/test'

export class MyCart
{
    private readonly page1:Page;
    private readonly cartLink:Locator;
    private readonly checkbox1:Locator
    private readonly checkbox2:Locator
    private readonly checkout:Locator;
    private readonly previousAddress;

    private readonly firstName:Locator
    private readonly lastName:Locator
    private readonly email:Locator

    private readonly companyText;
    private readonly country;
    private readonly city;
    private readonly address1;
    private readonly address2;
    private readonly zipcode;
    private readonly phone;
    private readonly fax;
    
    private readonly continue;
    private readonly pickup;
    private readonly continue2;

    private readonly paymentMethod;
    private readonly continue_Payment;
    private readonly PO_Number;
    private readonly continue3;
    private readonly lastcontinue;
    
    constructor(page1:Page)
    {
        this.page1=page1;
        this.cartLink=page1.locator('#topcartlink')
        this.checkbox1=page1.locator("//input[@name='removefromcart']")
        this.checkbox2=page1.locator('#termsofservice')
        this.checkout=page1.locator('#checkout')
        this.previousAddress=page1.locator('#billing-address-select')
        this.firstName=page1.locator('#BillingNewAddress_FirstName')
        this.lastName=page1.locator('#BillingNewAddress_LastName')
        this.email=page1.locator('#BillingNewAddress_Email')
        
        this.companyText=page1.locator('#BillingNewAddress_Company')
        this.country=page1.locator('#BillingNewAddress_CountryId')
        this.city=page1.locator('#BillingNewAddress_City')
        this.address1=page1.locator('#BillingNewAddress_Address1')
        this.address2=page1.locator('#BillingNewAddress_Address2')
        this.zipcode=page1.locator('#BillingNewAddress_ZipPostalCode')
        this.phone=page1.locator('#BillingNewAddress_PhoneNumber')
        this.fax=page1.locator('#BillingNewAddress_FaxNumber')
        this.continue=page1.locator('//input[@onclick="Billing.save()"]')

        this.pickup=page1.locator('#PickUpInStore')
        this.continue2=page1.locator("//input[@onclick='Shipping.save()']")
        this.paymentMethod=page1.locator("#paymentmethod_3")
        this.continue_Payment=page1.locator("//input[@class='button-1 payment-method-next-step-button']")
        this.PO_Number=page1.locator('#PurchaseOrderNumber')
        this.continue3=page1.locator("input[class='button-1 payment-info-next-step-button']")
        this.lastcontinue=page1.locator("//input[@value='Confirm']")


    }

    async cart_link()
    {
        await this.cartLink.click()
    }

    
    async cart_CheckBox1()
    {
        await this.checkbox1.click()
    }

       async cart_CheckBox2()
    {
        await this.checkbox2.click()
    }

      async cart_CheckOut()
    {
        await this.checkout.click()
    }

      
      async cart_ExistingAddress()
    {
        await this.previousAddress.selectOption('New Address')
    }

      
      async firstNameInput()
    {
        await this.firstName.fill('ddddddd')
    }
      async lastNameInput()
    {
        await this.lastName.fill('Umadddddle')
    }

      async emailInput()
    {
        await this.email.fill('test@gmail.com')
    }



       async CompanyDetails()
    {
        await this.companyText.fill('Test Company ')
    }

        async SelectCountry()
    {
       await this.country.selectOption('India')
    }

        async CityText()
    {
       await this.city.fill('Pune')
    }

        async Address1Text()
    {
       await this.address1.fill('Main road')
    }

       async Address2Text()
    {
       await this.address2.fill('Near Viman Nagar')
    }

       async ZipCode_Details()
    {
       await this.zipcode.fill('212111')
    }

      async Phone_Details()
    {
       await this.phone.fill('9811223737')
    }

       async Fax_Details()
    {
       await this.fax.fill('123455')
    }

         async Continue_Details()
    {
       await this.continue.click()
    }

       async PickUp_Details()
    {
       await this.pickup.check()
    }

     async Continue2_Details()
    {
       await this.continue2.click()
    }

     async Payment_Details()
    {
       await this.paymentMethod.click()
    }

     async ContinueCTA_Payment()
    {
       await this.continue_Payment.click()
    }

      async PO_Number_Details()
    {
       await this.PO_Number.fill('1234')
    }

     async Continue3_Details()
    {
       await this.continue3.click()
    }

     async LastContunueBtn_Details()
    {
       await this.lastcontinue.click()
    }





     

   






}