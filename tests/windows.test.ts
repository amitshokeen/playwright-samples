import { test, expect, chromium, Page } from "@playwright/test";

let facebookPage: Page;

test("Interact with multiple tabs", async ({page}) => {
    // const browser = await chromium.launch({
    //     headless: false
    // });
    // const context = await browser.newContext();
    // const page = await context.newPage();

    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
    console.log(page.url());

    const [newWindow] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("'Follow On Twitter'")
    ]);

    console.log(newWindow.url());

    //now you can work with the newWindow and locate elements and work with them.
})

test("Interact with button that causes multiple tabs to open", async ({page}) => {
    // const browser = await chromium.launch({
    //     headless: false
    // });
    // const context = await browser.newContext();
    // const page = await context.newPage();

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

    

    // now to interact with the pages, you may use index numbers that denote the individual page.
    // see the example below:
    // await pages[1].fill("<some locator>", "Amit");

    for (let index = 0; index < pages.length; index++) {
        const element = pages[index];
        const url = pages[index].url()
        if(url == "https://www.facebook.com/lambdatest/") {
            facebookPage = pages[index];
        }
    }
    const text = await facebookPage.textContent("h1");
    console.log(text);
})