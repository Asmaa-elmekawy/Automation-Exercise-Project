import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {

    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;


    constructor(readonly page: Page) {
        this.emailInput = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async gotoLoginPage() {
        await this.page.getByRole('listitem').filter({ hasText: 'Signup / Login' }).click();
        await expect(this.page).toHaveURL('https://automationexercise.com/login');
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
    async expectLogoutVisible() {
        await expect(
            this.page.getByRole('link', { name: /Logout/i })
        ).toBeVisible();
    }

}