import { test, expect, chromium } from "@playwright/test";

test("handling alerts", async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    page.on("dialog", async (alert) => {
        const text = alert.message();
        console.log(text);
        await alert.accept();
    })
    await page.locator("button:has-text('Click Me')").nth(0).click();
})

test("handling some more alerts", async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    page.on("dialog", async (alert) => {
        const text = alert.message();
        console.log(text);
        await alert.dismiss();
    })
    await page.locator("button:has-text('Click Me')").nth(1).click();
    await expect(page.locator("#confirm-demo")).toContainText("Cancel!");
})

test("handling yet more alerts", async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    page.on("dialog", async (alert) => {
        const text = alert.defaultValue();
        console.log(text);
        await alert.accept("Amit");
    })
    await page.locator("button:has-text('Click Me')").nth(2).click();
    await expect(page.locator("#prompt-demo")).toContainText("'Amit'");
})

test("handling modal alerts", async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
    await page.click("button[data-target='#myModal']");
    await page.click("(//button[text()='Save Changes'])[1]");
})