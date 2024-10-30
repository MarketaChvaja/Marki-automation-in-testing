import { test } from "@playwright/test";

// Exercises from lesson 2: SELECTORS 
// Step 1: Go to login page
// Step 2: Find locators for each element
// Step 3: Make a screenshot of each element

test ("Login page - locators - lesson 2", async ({page}) => {
await page.goto("/prihlaseni");
console.log("Check: I am on login page.");
console.log(await page.title());

// CSS locators

//tag

await page.locator("form").screenshot({path: "prtsc_form.png"});
await page.locator("input").nth(1).screenshot({path: "prtsc_input_email.png"});

// ID
await page.locator("#email").screenshot({path: "prtsc_email_by_id.png"});
await page.locator("#password").screenshot({path: "prtsc_password_by_id.png"});

// class
await page.locator(".btn-primary").screenshot({path: "btn_login_by_class.png"});

// attribute
await page.locator('[type="password"]').screenshot({path: "prtsc_password_type.png"});

// combination
await page.locator("input#email").screenshot ({path: "email_input_id.png"});
await page.locator('input[type="password"]').screenshot ({path: "password_input_type.png"});
await page.locator('button.btn-primary').screenshot ({path: "btn_class_type.png"});

await page.locator("div")
          .locator("form")
          .locator('input[type$="word"]')
          .screenshot({path: "combination.png"});

// playwright locators

await page.getByRole("heading", {level: 1}).screenshot({path: "heading.png"});
await page.getByLabel("email").screenshot ({path: "email_by_label.png"});
await page.getByText("Zapomněli jste své heslo?").screenshot({path: "btn_forget_passw_by_text.png"});


});
