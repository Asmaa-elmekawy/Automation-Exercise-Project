import { expect, test } from "../../fixtures/testFixtures";




test('contact us', async ({ contactUsPage, page }) => {
    await page.goto('https://automationexercise.com/');
    await contactUsPage.gotoContactUsPage();
    await contactUsPage.fillContactUsForm();
    await expect(contactUsPage.successMessage).toBeVisible();
})