import { test, expect } from "@playwright/test";
import { LoginPage } from "../../Pages/login_page";
import { SearchProductPage } from "../../Pages/search_product";

test("test", async ({ page }) => {
    const Login = new LoginPage(page);
    const Search_product = new SearchProductPage(page);

    await Login.gotoLoginPage();
    await Login.login("shahnajqa3@yopmail.com", "123456");
    await Search_product.search_product();

});