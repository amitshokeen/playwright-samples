import { test, expect, chromium } from "@playwright/test";

test("handling dropdown", async ({page}) => {
    // const browser = await chromium.launch({
    //     headless: false
    // });
    // const context = await browser.newContext();
    // const page = await context.newPage();

    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#select-demo", {
        //label: "Tuesday"
        //OR
        //value: "Tuesday"
        //OR
        index: 3
    })
    await page.waitForTimeout(3000);

    await page.selectOption("#multi-select", [{
        label: "Texas"
    },{
        index: 2
    },{
        value: "Washington"
    }])
    await page.waitForTimeout(5000);
})

test.skip("Jquery dropdown search demo", async ({page}) => {
    // const browser = await chromium.launch({
    //     headless: false
    // });
    // const context = await browser.newContext();
    // const page = await context.newPage();

    page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    page.click("#country");
    //page.
})