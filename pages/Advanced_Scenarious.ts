import { th } from '@faker-js/faker';
import { Page, Locator } from '@playwright/test'

export class Advanced_Scenarious {
    private readonly page: Page;
    private readonly computerLink: Locator
    private readonly all_Titles: Locator;
    private readonly all_prices: Locator


    constructor(page: Page) {
        this.page = page;
        this.computerLink = page.locator("//a[normalize-space()='Computers']").first()
        this.all_Titles = page.locator(".product-title a")
        this.all_prices = page.locator(".prices .price.actual-price")
    }

    async mylink() {
        let show;
        let show_allprices;

        await this.computerLink.hover()
        await this.page.locator("(//a[normalize-space()='Desktops'])[1]").click()

        let headers = await this.all_Titles.count()

        for (let i = 0; i < headers; i++) {
            show = await this.all_Titles.nth(i).innerText()
            console.log(show)
        }

        console.log("Print prices")
        let prices = await this.all_prices.count()

        for (let i = 0; i < prices; i++) {
            show_allprices = await this.all_prices.nth(i).innerText()
            console.log(show_allprices)
        }

        console.log("Print Product and prices together")

        let headers1 = await this.all_Titles.count();
        let prices1 = await this.all_prices.count();

        for (let i = 0; i < headers1; i++) {
            let show = await this.all_Titles.nth(i).innerText();

            let show_allprices = await this.all_prices.nth(i).innerText();

            console.log(`Product: ${show} || Price: ${show_allprices}`);
        }
    }




}