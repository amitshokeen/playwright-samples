import { test, expect, chromium } from "@playwright/test";

test("Interact with multiple tabs", async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
    console.log(page.url());

    const [newWindow] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("'Follow On Twitter'")
    ]);

    console.log(newWindow.url());

    //now you can work with the newWindow and locate elements and work with them.
})

test("Interact with button that causes multiple tabs to open", async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
    const [multiPage] = await Promise.all([
        page.waitForEvent("popup"),
        page.click('#followboth')
    ])
    await page.waitForLoadState();
    const pages = multiPage.context().pages();
    console.log('No. of tabs: ' + pages.length);

    
    pages.forEach(tab => {
        console.log(tab.url());
    })
})