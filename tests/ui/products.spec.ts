import { test } from "../../fixtures/testFixtures";


test('Search for product', async ({ productsPage, page }) => {
    await page.goto('https://automationexercise.com/');
    await productsPage.gotoProductsPage();
    const searchTerm = "dress"
    await productsPage.search(searchTerm)
    await productsPage.verifySearchResults(searchTerm)

})

test('Add product to cart', async ({ productsPage, page }) => {
    await page.goto('https://automationexercise.com/');
    await productsPage.gotoProductsPage();
    await productsPage.addProductToCart("Blue Top");
    await productsPage.continueShopping();
    await productsPage.addProductToCart("Men Tshirt");
    await productsPage.goToCart();
    await productsPage.verifyCartItem("Blue Top");
    await productsPage.verifyCartItem("Men Tshirt");

})