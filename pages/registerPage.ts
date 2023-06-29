import { Page,expect } from "@playwright/test";

export default class RegisterPage {
    
    constructor(public page: Page) {}

    async enterFirstName(firstname: string) {
        await this.page.locator("#input-firstname")
                    .type(firstname);
    }
    async enterLastName(lastname: string) {
        await this.page.locator("#input-lastname")
                    .type(lastname);
    }
    async enterEmail(email: string) {
        await this.page.locator("#input-email")
                    .type(email);
    }
    async enterTelephone(telephone: string) {
        await this.page.locator("#input-telephone")
                    .type(telephone);
    }
    async enterPassword(password: string) {
        await this.page.locator("#input-password")
                    .type(password);
    }
    async enterConfirmPassword(confirmPassword: string) {
        await this.page.locator("#input-confirm")
                    .type(confirmPassword);
    }
    
    isSubscribeChecked() {
        return this.page.locator("#input-newsletter-no");
    }

    async clickTermAndConditon() {
        //await thispage.click("#input-agree");
        await this.page.click("label[for='input-agree']");
    }

    async clickContinueToRegister(url: string) {
        await this.page.click("input[type='submit']");
        await Promise.all([
            this.page.waitForURL(url)
        ]);
    }
}