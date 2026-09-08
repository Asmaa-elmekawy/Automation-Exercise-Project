import { LoginPage } from "../pages/loginPage"
import { test as base } from "@playwright/test";
import { SignUpPage } from "../pages/signUpPage";

type testFixtures = {
    loginPage: LoginPage,
    signUpPage: SignUpPage
}

export const test = base.extend<testFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    signUpPage: async ({ page }, use) => {
        const signUpPage = new SignUpPage(page);
        await use(signUpPage);
    }
});

export { expect } from "@playwright/test";