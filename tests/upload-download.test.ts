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

test("Upload files", async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
    await page.setInputFiles("input[type='file']", 
        [
            "uploaded_files/Lord Hanuman.jpeg", 
            "uploaded_files/Lord-Hanuman-Statute.jpeg"
        ]);
    await page.waitForTimeout(3000);
})

test.only("Upload files based in filechooser", async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://blueimp.github.io/jQuery-File-Upload/");

    const [uploadFiles] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.click("input[type='file']")
    ])
    const isMultiple = uploadFiles.isMultiple();
    console.log(isMultiple);
    uploadFiles.setFiles(
        [
            "uploaded_files/Lord_Hanuman.jpeg", 
            "uploaded_files/Lord-Hanuman-Statue.jpeg"
        ]
    );
})