import { test, expect } from "../base/pomFixture";
import * as data from "../test-data/registerAndLogin-data.json";

test.use({
        browserName: "webkit"
    })

test.describe("Page object test demo", async() => {
   
    test("Register test_01", async ({ page, baseURL, registerPage }) => {
        //const register = new RegisterPage(page);
        await page.goto(`${baseURL}route=account/register`);
        await registerPage.enterFirstName(data.firstname);
        await registerPage.enterLastName(data.lastmane);
        await registerPage.enterEmail(data.email);
        await registerPage.enterTelephone(data.phone_number);
        await registerPage.enterPassword(data.password);
        await registerPage.enterConfirmPassword(data.password);
        await expect(registerPage.isSubscribeChecked()).toBeChecked();
        await registerPage.clickTermAndConditon();
        await registerPage.clickContinueToRegister(`${baseURL}route=account/success`);
       
        
    })
    
    test("login test_02", async ({ page, baseURL, loginPage }) => {
        await page.goto(`${baseURL}route=account/login`);
        await loginPage.enterEmailAddress(data.email);
        await loginPage.enterPassword(data.password);
        await loginPage.clickLoginBtn();
        expect(page.title()).toBe("My Account");
        
    })
})


//Since tests are isolated, they have to authenticate each time...
// But you can store the auth state ... this will enable your tests to start already authenticated.
// Go through this for more: https://playwright.dev/docs/auth