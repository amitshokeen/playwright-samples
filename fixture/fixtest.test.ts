import { test } from "./myFixture";

test("fixture demo", async({ page, email, age }) => {
    console.log(age, email);
    page.goto("https://www.easyhindityping.com/");
})