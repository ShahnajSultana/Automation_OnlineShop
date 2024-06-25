exports.SearchProductPage = class SearchProductPage {
    constructor(page) {
        this.page = page;
        this.top_menu = page.locator("//a[@title='Women']");
        this.search_field_textbox = page.locator("//input[@id='search_query_top']");
        this.search_icon = page.locator("//button[@name='submit_search']");

    }

    async gotoLoginPage() {
        await this.page.goto("http://www.automationpractice.pl/index.php");
        await this.page.locator("//a[@title='Log in to your customer account']").click();
    }

    async search_product() {

        await this.top_menu.click();
        await this.search_field_textbox.click();
        await this.search_field_textbox.fill("blouse");
        await this.search_icon.click();

    }
};

