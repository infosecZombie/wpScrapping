const puppeteer = require('puppeteer');
const select = require('puppeteer-select');

(async () => {
  const browser = await puppeteer.launch({headless: false,
    slowMo: 250});
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);        // disable timeout
  await page.setCookie({
      'name': 'li_at',
      'value': 'AQEDATLvxm4AzsASAAABdUSEy_QAAAF1aJFP9FYABzIbqscMZ-hLb2HsXi1gAMFbsZ_Am6iAXcOiYKdiwuYFYd3ay77fo1ptPpLCPEha6D-WBTqL6xop9F5IAAg2-E2sQg7GPXHCgt7qRvmz_qnYDSAx',
      'domain': 'www.linkedin.com'

  })
  await page.goto('https://www.linkedin.com/company/javascript-developer/');        // Visit website

  const connect = await select(page).getElement('span:contains(Visit website)')
  await connect.click()
  
  // const [button] = await page.$x("//button(contains[., 'Send invitation')]")
  // await browser.close();
})();