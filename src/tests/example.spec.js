import { test } from "@playwright/test";

test("should open login page - example", async ({ page }) => {
    await page.goto("/prihlaseni");
    console.log(await page.title());
});
