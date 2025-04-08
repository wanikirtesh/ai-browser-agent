const { chromium } = require('playwright');

(async () => {

  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.amazon.in/');
  await page.locator('#twotabsearchtextbox').type('iphone 11');
  await page.locator('#nav-search-submit-button').click();
  await browser.close();
})().catch(error => { // Add error catching
    console.error("An error occurred:", error);
    process.exit(1); // Exit with an error code
});