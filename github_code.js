const { webkit } = require('playwright');
const fs = require('fs');

(async () => {
  console.log('test');
  const browser = await webkit.launch();
  // Create pages, interact with UI elements, assert values
  const page = await browser.newPage();
  await page.goto('https://playwright.dev/docs/cli/');
  await page.screenshot({ path: `example.png` });
  const html = await page.content();
  // console.log(typeof html);
  // fs.writeFile('./test.html', html, err => {
    // if (err) {
      // console.error(err)
      // return
    // }
    //file written successfully
  // }
  // )
  await browser.close();
})();
