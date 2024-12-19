import puppeteer from 'puppeteer';
import { expect } from 'chai';

describe('Index.html Tests', function () {
    this.timeout(10000); // Extend timeout for Puppeteer operations

    let browser;
    let page;

    before(async () => {
        browser = await puppeteer.launch({ headless: true });
        page = await browser.newPage();
        await page.goto(`file://${process.cwd()}/index.html`);
    });

    after(async () => {
        await browser.close();
    });

    it('should have the correct title', async () => {
        const title = await page.title();
        expect(title).to.equal('Simple Web Page');
    });

    it('should contain the header element with correct text', async () => {
        const headerText = await page.$eval('header', el => el.textContent.trim());
        expect(headerText).to.equal('Welcome to My Simple Web Page');
    });

    it('should have a container with content', async () => {
        const containerExists = await page.$('.container') !== null;
        expect(containerExists).to.be.true;

        const containerText = await page.$eval('.container', el => el.textContent.trim());
        expect(containerText).to.include('This is a simple and beautiful home page.');
    });
});
