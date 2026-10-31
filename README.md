# E-commerce UI Automation – Playwright

End-to-end UI tests for a demo online shop
([automationpractice.pl](http://www.automationpractice.pl/index.php))
using Playwright (JavaScript) and the Page Object Model.

## What is tested

| Test file | Flow |
|---|---|
| `signup.spec.js` | Create a new user account |
| `login.spec.js` | Log in with valid credentials |
| `search_product.spec.js` | Log in and search for a product |
| `add_cart_for_loggedin_user.spec.js` | Log in, search and add a product to the cart |

## Tech stack
Playwright · JavaScript · Node.js · Page Object Model

## Project structure

```
Pages/            Page objects (locators + actions)
  login_page.js
  signup_page.js
  search_product.js
  add_cart_for_loggedin_user.js
tests/Website/    Test specs
playwright.config.js
```

## Setup

```bash
npm install
npx playwright install
```

Check the installed version:

```bash
npx playwright --version
```

## How to run

Run all tests in Chrome (headed):

```bash
npx playwright test --project=chromium --headed
```

Run a single test:

```bash
npx playwright test tests/Website/signup.spec.js --project=chromium --headed
npx playwright test tests/Website/login.spec.js --project=chromium --headed
npx playwright test tests/Website/search_product.spec.js --project=chromium --headed
npx playwright test tests/Website/add_cart_for_loggedin_user.spec.js --project=chromium --headed
```

Options:
- `--project=chromium` – run in Chrome only
- `--headed` – show the browser while tests run

## Report

```bash
npx playwright show-report
```
