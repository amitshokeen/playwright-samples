import { test, expect, chromium } from '@playwright/test';

test('test', async () => {
  const browser = await chromium.launch({
    headless: false
});
const context = await browser.newContext();
const page = await context.newPage();
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.getByRole('button', { name: ' My account' }).click();
  await expect(page).toHaveURL("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('amit.shokeen@gmail.com');
  await page.getByPlaceholder('E-Mail Address').press('Tab');
  await page.getByPlaceholder('Password').fill('Pass123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL("https://ecommerce-playground.lambdatest.io/index.php?route=account/account")
  await page.getByRole('link', { name: ' Edit your account information' }).click();
  await expect(page).toHaveURL("https://ecommerce-playground.lambdatest.io/index.php?route=account/edit")
  await page.getByPlaceholder('Telephone').click();
  await page.getByPlaceholder('Telephone').fill('00011122233');
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');
});