import { test as myTest } from "@playwright/test";

type amit = {
    age: number,
    email: string
};

const myFixtureTest = myTest.extend<amit>({
    age: 47,
    email: "amit@amit.kom"
});

export const test = myFixtureTest;
