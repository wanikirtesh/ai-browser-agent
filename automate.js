// Use require for CommonJS modules (standard in Node.js unless configured otherwise)
const { chromium } = require('playwright'); // Import specific browser

// Use an async IIFE (Immediately Invoked Function Expression) to use await
(async () => {
    console.log("Launching browser...");
    // Launch browser (use headless: false to see the window)
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    console.log("Navigating to Google...");
    await page.goto("https://google.com");
    console.log(`Mapsd to: ${page.url()}`);

    // Find the search textarea (selector might change)
    const searchBoxSelector = "textarea[name='q']";
    console.log(`Waiting for selector: ${searchBoxSelector}`);
    await page.waitForSelector(searchBoxSelector);

    console.log("Filling search box...");
    await page.locator(searchBoxSelector).fill("Playwright browser automation with Node.js");

    console.log("Pressing Enter...");
    await page.locator(searchBoxSelector).press("Enter");
    console.log("Performed search.");

    // Wait for results to load (example: wait for network idle)
    console.log("Waiting for results page to load...");
    await page.waitForLoadState('networkidle');
    console.log(`Current URL after search: ${page.url()}`);

    const title = await page.title();
    console.log(`Page title: ${title}`);

    console.log("Waiting for 5 seconds before closing...");
    await page.waitForTimeout(5000); // Playwright's way to pause

    console.log("Closing browser...");
    await browser.close();
    console.log("Browser closed.");

})().catch(error => { // Add error catching
    console.error("An error occurred:", error);
    process.exit(1); // Exit with an error code
});