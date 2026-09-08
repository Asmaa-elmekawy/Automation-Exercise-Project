import { LoginPage } from "../pages/loginPage"
import { test as base } from "@playwright/test";
import { SignUpPage } from "../pages/signUpPage";
import { ContactUsPage } from "../pages/contactUsPage";

type testFixtures = {
    loginPage: LoginPage,
    signUpPage: SignUpPage,
    contactUsPage: ContactUsPage
}

export const test = base.extend<testFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    signUpPage: async ({ page }, use) => {
        const signUpPage = new SignUpPage(page);
        await use(signUpPage);
    },
    contactUsPage: async ({ page }, use) => {
        const contactUsPage = new ContactUsPage(page);
        await use(contactUsPage);
    }

});

export { expect } from "@playwright/test";