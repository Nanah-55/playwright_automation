const { test, expect } = require("@playwright/test");
const { snapshot } = require("node:test");

//define a test block
test("test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

//start tracing maually
await context.tracing.start({screenshots:true, snapshots:true});

  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button123"]').click();

//stop tracing and save to a file
  await context.tracing.stop({path:"trace.zip"});

  await page.locator("div").filter({ hasText: "Swag Labs" }).nth(5).click();
});
