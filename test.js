const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('C:\\Users\\USER\\Documents\\CICD\\index.html',{

        waitUntil: 'networkidle2',
        timeout: 60000 // Increase timeout to 60 seconds

    }); // Path to your local HTML file
    console.log('Page loaded successfully');
    await browser.close();
})();
