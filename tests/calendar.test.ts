import { test, expect, chromium } from '@playwright/test';
import moment from "moment";

test("Calendar demo using fill function", async () => {
    // I'm using the below three const values becuase the usual way of async ({ page } => {}) 
    //is somehow not working properly for me. Maybe I'll dwell on that issue later.
    
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    // In the browser console, you may have to do this: > document.getElementById("birthday").value
    // If the value is filled up manually in the date box, you might be returned a value like '2023-06-27'
    // This will help you know the format that the box accepts.
    //let date = "17/10/2022"; >> this may not work
    let date = '2023-06-27' // this will work

    await page.fill("#birthday", date);
    await page.waitForTimeout(3000);
})

test("Calendar demo using moment", async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    let date = "";
    await page.click("input[placeholder='Start date']");
    await selectDate(17, "June 2023");


    async function selectDate(date: number, monthYear: string) {
        const mmYY = page.locator("(//th[@class='datepicker-switch'])[1]");
        const prev = page.locator("(//th[@class='prev'])[1]");
        const next = page.locator("(//th[@class='next'])[1]");

        const thisMonth = moment(monthYear, "MMMM YYYY").isBefore(); //returns a boolean value

        while (await mmYY.textContent() != monthYear) {
            if (thisMonth) {
                await prev.click();
            } else {
                await next.click();
            }
        }
        await page.click(`(//td[@class='day'][text()='${date}'])[1]`);
    }
})