import { test, expect, chromium } from "@playwright/test";

test("Interact with frames", async ({page}) => {
    // const browser = await chromium.launch({
    //     headless: false
    // });
    // const context = await browser.newContext();
    // const page = await context.newPage();
    
    await page.goto("https://letcode.in/frame");
    const allFrames = page.frames();
    console.log("No. of frames: " + allFrames.length);
    const myFrame = page.frame("firstFr");
    await myFrame?.fill("input[name='fname']", "Amit");
    await myFrame?.fill("input[name='lname']", "Shokeen");
    expect(await myFrame?.locator("p.has-text-info").textContent()).toContain("You have entered")

    await page.waitForTimeout(5000);
})

test("Another way to interact with frames", async ({page}) => {
    // const browser = await chromium.launch({
    //     headless: false
    // });
    // const context = await browser.newContext();
    // const page = await context.newPage();
    
    await page.goto("https://letcode.in/frame");
    const allFrames = page.frames();
    console.log("No. of frames: " + allFrames.length);

    const frame = page.frameLocator("#firstFr");
    await frame.locator("input[name='fname']").fill("Aditya");
    await frame.locator("input[name='lname']").fill("Singh");
    expect(await frame?.locator("p.has-text-info").textContent()).toContain("You have entered")

    await page.waitForTimeout(5000);
})