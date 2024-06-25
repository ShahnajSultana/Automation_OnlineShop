exports.SignUpPage = class SignUpPage {
    constructor(page) {
        this.page = page;
        //   this.email_textbox = page.locator("//input[@id='email']");
        //   this.password_textbox = page.locator("//input[@id='passwd']")
        //   this.signin_button = page.locator("//span[normalize-space()='Sign in']");





        this.create_account_email_textbox = page.locator("//input[@id='email_create']");
        this.create_account_button = page.locator("//span[normalize-space()='Create an account']");
        this.name_title_select = page.getByLabel('Mrs.');
        this.first_name_textbox = page.locator("//input[@id='customer_firstname']");
        this.last_name_textbox = page.locator("//input[@id='customer_lastname']");
        this.password_textbox = page.locator("//input[@id='passwd']");
        this.register_button = page.locator("//span[normalize-space()='Register']");

    }

    async gotoSignUpPage() {
        await this.page.goto("http://www.automationpractice.pl/index.php");
        await this.page.locator("//a[@title='Log in to your customer account']").click();
        //await this.page.pause();
    }

    async signup(create_account_email_address, first_name, last_name, password) {

        await this.create_account_email_textbox.fill(create_account_email_address);
        await this.create_account_button.click();
        await this.name_title_select.click();
        await this.first_name_textbox.fill(first_name);
        await this.last_name_textbox.fill(last_name);
        await this.password_textbox.fill(password);
        await this.register_button.click();






          }
    };