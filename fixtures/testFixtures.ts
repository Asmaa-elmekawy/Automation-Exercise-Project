import { LoginPage } from "../pages/loginPage"
import { test as base } from "@playwright/test";
import { SignUpPage } from "../pages/signUpPage";
import { ContactUsPage } from "../pages/contactUsPage";
import { ProductsPage } from "../pages/productsPage";

type testFixtures = {
    loginPage: LoginPage,
    signUpPage: SignUpPage,
    contactUsPage: ContactUsPage
    productsPage: ProductsPage
}

export const test = base.extend<testFixtures>({
    page: async ({ page }, use) => {

        await page.route('**/*', route => {
            const url = route.request().url();

            if (
                url.includes('googlesyndication.com') ||
                url.includes('doubleclick.net') ||
                url.includes('googleadservices.com') ||
                url.includes('adservice.google.com')
            ) {
                return route.abort();
            }

            return route.continue();
        });

        await use(page);
    },
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
    },
    productsPage: async ({ page }, use) => {
        const productsPage = new ProductsPage(page);
        await use(productsPage);
    }

});

export { expect } from "@playwright/test";