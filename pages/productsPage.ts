import { expect, Locator, Page } from "@playwright/test";


export class ProductsPage {
    searchBar: Locator;
    searchIconButton: Locator;
    productCards: Locator;
    continueShoppingBtn: Locator;


    constructor(readonly page: Page) {
        this.searchBar = this.page.getByRole('textbox', { name: 'Search Product' })
        this.searchIconButton = this.page.locator('#submit_search')
        this.productCards = this.page.locator('.product-image-wrapper');
        this.continueShoppingBtn = this.page.getByRole('button', { name: 'Continue Shopping' })
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

    async addProductToCart(productName: string) {
        const productCard = this.productCards.filter({ hasText: productName });
        await productCard.getByText('Add to cart').first().click();
    }

    async continueShopping() {
        await this.continueShoppingBtn.click();

    }
    async goToCart() {
        await this.page.getByRole('link', { name: 'View Cart' }).click();

    }
    async verifyCartItem(productName: string) {
        await expect(this.page.getByRole('link', { name: productName })).toBeVisible()
    }

    async viewProductDetails(productName: string) {
        const productCard = this.productCards.filter({ hasText: productName });
        await productCard.getByText('View Product').click();

    }
    async changeQuantity(quantity: string) {
        await this.page.locator('#quantity').fill(quantity);
    }
    async addToCartButton() {
        await this.page.getByRole('button', { name: 'Add to cart' }).click();
    }
    async verifyCartQuantity(quantity: string) {
        expect(this.page.getByRole('button', { name: quantity })).toBeVisible();
    }


}

