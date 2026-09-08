import { Locator, Page } from "@playwright/test";


export class ContactUsPage {
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly subjectInput: Locator;
    readonly messageInput: Locator;
    readonly submitButton: Locator;
    readonly successMessage: Locator;


    constructor(readonly page: Page) {
        this.nameInput = this.page.getByPlaceholder('Name');
        this.emailInput = this.page.getByRole('textbox', { name: 'Email', exact: true })
        this.subjectInput = this.page.getByPlaceholder('Subject');
        this.messageInput = this.page.getByPlaceholder('Message');
        this.submitButton = this.page.getByRole('button', { name: 'Submit' });
        this.successMessage = this.page.locator('#contact-page').getByText('Success! Your details have');

    }

    async gotoContactUsPage() {
        await this.page.getByRole('listitem').filter({ hasText: 'Contact us' }).click();
    }

    async fillContactUsForm() {
        await this.nameInput.fill('Asmaa');
        await this.emailInput.fill('asmaa@gmail.com');
        await this.subjectInput.fill('Test');
        await this.messageInput.fill('Test');
        this.page.once('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.accept();
        });
        await this.submitButton.click();


    }

}
