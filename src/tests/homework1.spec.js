import { test } from "@playwright/test";

test ("Open registration page", async ({page}) => {
await page.goto("/registrace");
console.log("Check: I am on registration page.");
console.log(await page.title());

await page.setViewportSize({width: 1920, height: 1080});
await page.screenshot({path: "screenshotOfRegistrationPage.png"});

});
