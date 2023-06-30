import { test, expect, chromium } from '@playwright/test';

test("Interaction with Inputs", async ()=> {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageInput = page.locator("input#user-message");
    await messageInput.scrollIntoViewIfNeeded();
    console.log(await messageInput.getAttribute("placeholder"));
    await expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message");
    console.log(await messageInput.inputValue());
    await messageInput.type("Hi Amit");
    await expect(messageInput).toHaveValue("Hi Amit Shokeen");
})

test("Sum", async ({page}) => {
    // const browser = await chromium.launch({
    //     headless: false
    // });
    // const context = await browser.newContext();
    // const page = await context.newPage();

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const sum1Input = page.locator("#sum1");
    const sum2Input = page.locator("#sum2");
    const getSumBtn = page.locator("form#gettotal>button");
    let num1 = 12;
    let num2 = 13;
    await sum1Input.type(num1.toString());
    await sum2Input.type(num2.toString());
    await getSumBtn.click();
    const addMessage = page.locator("#addmessage");
    let expectedResult = num1 + num2;
    await expect(addMessage).toHaveText(expectedResult.toString());


})