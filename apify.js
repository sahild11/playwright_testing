const playwright = require('playwright');

async function main() {
    // Open a Chromium browser. We use headless: false
    // to be able to watch what's going on.
    const browser = await playwright.chromium.launch({
        headless: false
    });
    // Open a new page / tab in the browser.
    const page = await browser.newPage();
    // Tell the tab to navigate to the JavaScript topic page.
    await page.goto('https://edap.epa.gov/public/single/?appid=73b2b6a5-70c6-4820-b3fa-186ac094f10d&sheet=807da6b7-4d65-48bc-8615-013e01dd61c4&opt=currsel&select=clearall');
    // Pause for 10 seconds, to see what's going on
    await page.waitForTimeout(10000);
    // click export table button
    await page.click('text=" Export Table"');
    // Turn off the browser to clean up after ourselves.
    await page.waitForTimeout(10000);
    await browser.close();
}

main();
