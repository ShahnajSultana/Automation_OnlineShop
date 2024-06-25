exports.AddCartPage = class AddCartPage {

  constructor(page) {
    this.page = page;
    this.specific_product = page.getByText('Blouse Short sleeved blouse with feminine draped sleeve detail. $27 Add to cart');
    this.more_button = page.getByRole('link', { name: 'More' });
    this.size_option_three = page.getByLabel('Size').selectOption('3');
    this.color = page.getByRole('link', { name: 'White' });
    this.add_cart_button = page.getByRole('button', { name: 'Add to cart' });

  }

  async add_cart() {
    await this.specific_product.click();
    await this.more_button.click();
    await this.size_option_three;
    await this.page.waitForTimeout(2000);
    await this.color.click();
    await this.add_cart_button.click();

  }
};

