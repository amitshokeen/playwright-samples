import { test, expect, chromium } from "@playwright/test";

test("Download files", async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
    await page.type("#textbox", "This is a test...");
    await page.click("#create");
    const [download] = await Promise.all([
        page.waitForEvent("download"),
        await page.click("#link-to-download")
    ]);
    const filename = download.suggestedFilename();
    await download.saveAs(filename);
    // const path = await download.path();
    // console.log(path);
})