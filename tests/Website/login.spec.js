import { test, expect } from "@playwright/test";
import { LoginPage } from "../../Pages/login_page";

test("test", async ({ page }) => {
  const Login = new LoginPage(page);

    await Login.gotoLoginPage();
    await Login.login("shahnajqa3@yopmail.com", "123456");
});