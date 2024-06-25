- Install and Check npm version - npm playwright -v  (v10.2.3)
- Install & Setup Playwright by running -> npm init playwright@latest
- For only specific browser use -> --project=chromium (this is only for chrome)
- For headed use -> --headed
- For running only cart purchase, run -> npx playwright test .\add_cart_for_loggedin_user.spec.js --project=chromium --headed
- For running only search purchase, run -> npx playwright test .\search_product.spec.js --project=chromium --headed
- For running only signup, run -> npx playwright test .\signup.spec.js --project=chromium --headed
- For running only search purchase, run -> npx playwright test .\login.spec.js --project=chromium --headed
- For running full project, run -> npx playwright test --project=chromium --headed 
  
