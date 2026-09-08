import { Locator, Page } from "@playwright/test";


export class SignUpPage {
    emailInput: Locator;
    nameInput: Locator;

    readonly titleMrs: Locator;
    readonly passwordInput: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly addressInput: Locator;
    readonly countryInput: Locator;
    readonly stateInput: Locator;
    readonly cityInput: Locator;
    readonly zipcodeInput: Locator;
    readonly mobileNumberInput: Locator;
    readonly createAccountButton: Locator;
    readonly accountCreatedMessage: Locator


    constructor(readonly page: Page) {
        this.titleMrs = this.page.getByRole('radio', { name: 'Mrs.' });
        this.passwordInput = this.page.getByRole('textbox', { name: 'Password *' });
        this.nameInput = this.page.getByRole('textbox', { name: 'Name *', exact: true });
        this.emailInput = this.page.getByRole('textbox', { name: 'Email *' });
        this.firstNameInput = this.page.getByRole('textbox', { name: 'First name *' });
        this.lastNameInput = this.page.getByRole('textbox', { name: 'Last name *' });
        this.addressInput = this.page.getByRole('textbox', { name: 'Address * (Street address, P.' });
        this.countryInput = this.page.getByLabel('Country *');
        this.stateInput = this.page.getByRole('textbox', { name: 'State *' });
        this.cityInput = this.page.getByRole('textbox', { name: 'City * Zipcode *' });
        this.zipcodeInput = this.page.locator('#zipcode');
        this.mobileNumberInput = this.page.getByRole('textbox', { name: 'Mobile Number *' });
        this.createAccountButton = this.page.getByRole('button', { name: 'Create Account' });

        this.accountCreatedMessage = this.page.getByText('ACCOUNT CREATED!');
    }
    async fillSignUpForm() {
        await this.titleMrs.check();
        await this.passwordInput.fill('123456789');
        await this.firstNameInput.fill('Asmaa');
        await this.lastNameInput.fill('Elmekawy');
        await this.addressInput.fill('123 Main St');
        await this.countryInput.selectOption('Canada');
        await this.stateInput.fill('Ontario');
        await this.cityInput.fill('Toronto');
        await this.zipcodeInput.fill('123456');
        await this.mobileNumberInput.fill('123456789');
        await this.createAccountButton.click();
    }

}