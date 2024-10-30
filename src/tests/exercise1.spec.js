import { test } from "@playwright/test";

test ("Open login page", async ({page}) => {
await page.goto("/prihlaseni");
console.log("Check: I am on login page.");
console.log(await page.title());

await page.setViewportSize({width: 800, height: 600});
await page.screenshot({path: "screenshotOfLoginPage.png"});

await page.setViewportSize({width: 1920, height: 1080});
await page.screenshot({path:"screenshotOfLoginPage2.png"});

});
