import { Page } from "@playwright/test";


export class SignUpPage {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

}