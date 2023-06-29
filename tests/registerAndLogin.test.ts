import { test, expect, chromium } from '@playwright/test';
import RegisterPage from '../pages/registerPage';
import LoginPage from '../pages/loginPage';
import HomePage from '../pages/homePage';


test("Register test_01", async ({ baseURL }) => {
    // I'm using the below three const values becuase the usual way of async ({ page } => {}) 
    // is somehow not working properly for me. Maybe I'll dwell on that issue later.
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    const register = new RegisterPage(page);
    await page.goto(`${baseURL}route=account/register`);
    await register.enterFirstName("Tom");
    await register.enterLastName("Hanks");
    await register.enterEmail("tom.hanks123@gmail.com");
    await register.enterTelephone("123456");
    await register.enterPassword("pass123");
    await register.enterConfirmPassword("pass123");
    await expect(register.isSubscribeChecked()).toBeChecked();
    await register.clickTermAndConditon();
    await register.clickContinueToRegister(`${baseURL}route=account/success`);

})