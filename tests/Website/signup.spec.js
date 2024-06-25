import { test, expect } from "@playwright/test";
import { SignUpPage } from "../../Pages/signup_page";

test("test", async ({ page }) => {
  const SignUp = new SignUpPage(page);

  await SignUp.gotoSignUpPage();
  await SignUp.signup("shahnajqa32@yopmail.com", "Test", "Shahnaj", "123456");
});