import { Page } from "@playwright/test";



export default class LoginPage {
    constructor(public page: Page) {}
    
    async enterEmailAddress(email: string) {
        await this.page.locator("#input-email")
                    .type(email);
    }

    async enterPassword(password: string) {
        await this.page.locator("#input-password")
                    .type(password);
    }

    async clickLoginBtn() {
        await this.page.click("input[type='submit']");
    }
}