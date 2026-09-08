import { expect, Locator, Page } from "@playwright/test";





export class ProductsPage {
    searchBar: Locator;
    searchIconButton: Locator;
    productCards: Locator;

    constructor(readonly page: Page) {
        this.searchBar = this.page.getByRole('textbox', { name: 'Search Product' })
        this.searchIconButton = this.page.locator('#submit_search')
        this.productCards = this.page.locator('.single-products');

    }
    async gotoProductsPage() {
        await this.page.getByRole('listitem').filter({ hasText: 'Products' }).click();
        await expect(this.page).toHaveURL('https://automationexercise.com/products');

    }

    async search(product: string) {
        await this.searchBar.fill(product);
        await this.searchIconButton.click();
    }
    async verifySearchResults(searchTerm: string) {
        const count = await this.productCards.count();
        if (count > 0) {
            for (let i = 0; i < count; i++) {
                await expect(this.productCards.nth(i)).toContainText(new RegExp(searchTerm, 'i'));
            }
        } else {
            console.error("No results found");
            return false;
        }

    }

}

