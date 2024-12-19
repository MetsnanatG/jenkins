const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('C:\\Users\\USER\\Documents\\CICD\\test.js'); // Path to your local HTML file
    console.log('Page loaded successfully');
    await browser.close();
})();
