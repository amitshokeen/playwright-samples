import { test, expect, chromium } from '@playwright/test';

test("login test demo", async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
    //await page.click("text=Login");
    await page.click("'Login'");
    await page.fill("#input-email", "amit.shokeen@gmail.com");
    await page.fill("#input-password", "Pass123");
    await page.click("input[value='Login']");
    await page.waitForTimeout(2000);

    // to do stuff in a different page or a different site altogether
    const newContext = await browser.newContext();
    const newPage = await newContext.newPage();
    await newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
    await expect(page).toHaveURL("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")
    await page.waitForTimeout(5000);
});

test('test', async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://ecommerce-playground.lambdatest.io/');
    await page.getByRole('button', { name: ' My account' }).click();
    await page.getByPlaceholder('E-Mail Address').click();
    await page.getByPlaceholder('E-Mail Address').fill('amit.shokeen@gmail.com');
    await page.getByPlaceholder('E-Mail Address').press('Tab');
    await page.getByPlaceholder('Password').fill('Pass123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: ' Edit your account information' }).click();
    await page.getByPlaceholder('Telephone').click();
    await page.getByPlaceholder('Telephone').fill('00011122233');
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');
  });