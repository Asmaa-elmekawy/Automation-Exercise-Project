import { expect, test } from "../../fixtures/testFixtures";


test("sign up successfully", async ({ loginPage, page, signUpPage }) => {
    await page.goto('https://automationexercise.com/');

    await loginPage.gotoLoginPage();
    await loginPage.enterSignUpNameAndEmail('asmaa', 'asmaa199@gmail.com');

    await expect(signUpPage.nameInput).toHaveValue('asmaa');
    await expect(signUpPage.emailInput).toHaveValue('asmaa199@gmail.com');

    await signUpPage.fillSignUpForm();
    await expect(signUpPage.accountCreatedMessage).toBeVisible();
})