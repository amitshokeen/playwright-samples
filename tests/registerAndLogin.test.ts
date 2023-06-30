import { test, expect, chromium } from '@playwright/test';
import RegisterPage from '../pages/registerPage';
import LoginPage from '../pages/loginPage';
import HomePage from '../pages/homePage';

test.describe("Page object test demo", async() => {
    test("Register test_01", async ({ page, baseURL }) => {
        const register = new RegisterPage(page);
        await page.goto(`${baseURL}route=account/register`);
        await register.enterFirstName("Tom");
        await register.enterLastName("Hanks");
        await register.enterEmail("tom.hanks1234567@gmail.com");
        await register.enterTelephone("123456");
        await register.enterPassword("pass123");
        await register.enterConfirmPassword("pass123");
        await expect(register.isSubscribeChecked()).toBeChecked();
        await register.clickTermAndConditon();
        await register.clickContinueToRegister(`${baseURL}route=account/success`);
    
    })
    
    test("login test", async ({ page }) => {
        //you know quite well what to do here...
    })
})


//Since tests are isolated, they have to authenticate each time...
// But you can store the auth state ... this will enable your tests to start already authenticated.
// Go through this for more: https://playwright.dev/docs/auth