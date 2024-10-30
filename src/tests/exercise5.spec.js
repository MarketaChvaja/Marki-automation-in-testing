import {expect, test} from "@playwright/test";
import {
    username,
    password,
    userFullName,
    applicationsSearchText,
    applicationsPageSize,
} from "../fixtures/fixtures.js"
import {RegExp} from "../fixtures/regular-expressions";


test("login page full test", async ({ page }) => {

    await page.goto("/prihlaseni");
    console.log(await page.title());


    const emailField = page.getByLabel("Email");
    const passwordField = page.getByLabel("Heslo");
    const loginButton = page.getByRole("button", { name: "Přihlásit"});

    
    await expect(page.locator("h1")).toContainText("Přihlášení");
    await expect(emailField, "email field should be visible").toBeVisible();
    await expect(passwordField, "password field should be visible").toBeVisible();
    await expect(loginButton, "login buton should be visible").toBeVisible();




// 1st - login without name and passw - unsuccesfull login
    await loginButton.click();
    await expect
    await expect(emailField, "email field should be visible").toBeVisible();
    await expect(passwordField, "password field should be visible").toBeVisible();
    await expect(loginButton, "login buton should be visible").toBeVisible();


//2nd -     
    await emailField.fill(username);
    await passwordField.fill(password);
    await loginButton.click();


//3rd - succesfull login
    await emailField.fill(username);
    await passwordField.fill(password);
    await loginButton.click();
    await expect(emailField, "email field should NOT be visible").not.toBeVisible();


// const toastMessage = page.locator(".toast-message");

    const currentUser = page
        .locator(".navbar-right")
        .locator("strong");
    await expect(currentUser, "current user should be displayed").toHaveText(userFullName);



    // Check page title
    const pageTitle = await page.getByRole("heading", {level: 1});
    await expect(pageTitle, "page title should be displayed").toHaveText("Přihlášky");








});
