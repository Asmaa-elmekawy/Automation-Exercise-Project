import { test } from "../../fixtures/testFixtures";


test('login successfully', async ({ loginPage, page }) => {
    await page.goto('https://automationexercise.com/');
    await loginPage.gotoLoginPage();
    await loginPage.login('asmaa1182004@gmail.com', 'Asmaaelmekawy!1');
    await loginPage.expectLogoutVisible()
})