const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: true
  });
  const context = await browser.newContext({
    acceptDownloads: true,
    //recordVideo: {dir:'.'}
  });

  // Open new page
  const page = await context.newPage();

  // Go to https://edap.epa.gov/public/single/?appid=73b2b6a5-70c6-4820-b3fa-186ac094f10d&sheet=807da6b7-4d65-48bc-8615-013e01dd61c4&opt=currsel&select=clearall
  await page.goto('https://edap.epa.gov/public/single/?appid=73b2b6a5-70c6-4820-b3fa-186ac094f10d&sheet=807da6b7-4d65-48bc-8615-013e01dd61c4&opt=currsel&select=clearall');

  // Click text=01/04/2021 2021 2020 D3 Q-RIN $1.92 >> span
  await page.click('text=01/04/2021 2021 2020 D3 Q-RIN $1.92 >> span');

  // Click text=Export Table
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.click('text=Export Table'),
  ]);
  await download.saveAs('thefile');
  // ---------------------
  await context.close();
  await browser.close();
})();
