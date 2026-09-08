import { test } from "../../fixtures/testFixtures";


test('Search for product', async ({ productsPage, page }) => {
    await page.goto('https://automationexercise.com/');
    await productsPage.gotoProductsPage();
    const searchTerm = "dress"
    await productsPage.search(searchTerm)
    await productsPage.verifySearchResults(searchTerm)

})