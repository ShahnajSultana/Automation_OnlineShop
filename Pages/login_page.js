exports.LoginPage = class LoginPage {
    constructor(page) {
      this.page = page;
      this.email_textbox = page.locator("//input[@id='email']");
      this.password_textbox = page.locator("//input[@id='passwd']")
      this.signin_button = page.locator("//span[normalize-space()='Sign in']");
     
    }
  
    async gotoLoginPage() {
      await this.page.goto("http://www.automationpractice.pl/index.php");
      await this.page.locator("//a[@title='Log in to your customer account']").click();
    }
  
    async login(email_address, password) {
       await this.email_textbox.fill(email_address);
       await this.password_textbox.fill(password);
       await this.signin_button.click();

    
    
   }
  };

  