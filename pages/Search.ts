import { Page, Locator, expect } from '@playwright/test'
import { Expect } from '@playwright/test';

export class SearchProducts {
    private readonly page: Page;
    private readonly search_txt: Locator
    private readonly search_btn: Locator;
    private readonly allSearch_results: Locator;
    private readonly searchErr:Locator

    constructor(page: Page) {
        this.page = page;
        this.search_txt = page.locator("#small-searchterms")
        this.search_btn = page.locator("input[class='button-1 search-box-button']")
        this.allSearch_results = page.locator("#ui-id-1")
        this.searchErr=page.locator(".result")
    }

    async Search_text() {
        await this.search_txt.fill('Computing and Internet')
    }

    async Search_Sequentially() {
        await this.search_txt.pressSequentially("Computing and Internet", { delay: 100 });
    }

    async Display_allSearch() {
        await this.allSearch_results.first().waitFor();
        const all = await this.allSearch_results.allInnerTexts();

        for (const result of all) {
            console.log(result);
        }
    }

    async invalid_Search()
    {
         await this.search_txt.fill('ssasa')

    }

      async Display_SearchError()
    {
        let errormsg= await this.searchErr.innerText()
        console.log(errormsg)
        await expect(errormsg).toContain('No products were found that matched your criteria.')
    }




    async Click_SearchBtn() {
        await this.search_btn.click()
    }
}