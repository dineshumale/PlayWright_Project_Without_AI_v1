import { Page, Locator, expect } from '@playwright/test'

export class CheckoutCases {
    private readonly page: Page;
    private readonly SelectCheckBox: Locator
    private readonly checkoutBtn: Locator
    private readonly termscheckbox: Locator
    private paymentMethod: Locator;
    private readonly PONumber: Locator
    private readonly total: Locator


    constructor(page: Page) {
        this.page = page;
        this.SelectCheckBox = page.locator("//input[@name='removefromcart']")
        this.checkoutBtn = page.locator("#checkout")
        this.termscheckbox = page.locator("#termsofservice")
        this.PONumber = page.locator("#PurchaseOrderNumber")
        this.total = page.locator(".product-subtotal")



    }

    async click_CheckBox() {
        await this.SelectCheckBox.check()
    }

    async click_CheckOutButton() {
        await this.termscheckbox.check()
        await this.checkoutBtn.click()
    }

    async VerifyTermsCheckBox() {
        await this.page.locator("input[onclick='Billing.save()']").click()
        await this.page.locator("#PickUpInStore").check()
        await this.page.locator("//input[@onclick='Shipping.save()']").click()

    }

    async VerifyPaymentMethod(paymentMethodID: string) {
        this.paymentMethod = this.page.locator(`#${paymentMethodID}`);
        await this.paymentMethod.check()
        let selectedMethod = await this.paymentMethod.getAttribute('value')
        console.log(`Selected Method:${selectedMethod}`)

        await this.page.locator("//input[@class='button-1 payment-method-next-step-button']").click()

    }

    async VerifyPONumber(po: string) {
        await this.PONumber.fill(po);

        await expect(this.PONumber).toHaveValue(po);

        await this.page.locator("input[onclick='PaymentInfo.save()']").click();

    }

       async VerifyTotal(total: string) {
       
        let mytotal=await this.total.innerText()
        console.log(`total shown UI :${mytotal}`)

    }

}