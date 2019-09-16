const puppeteer = require('puppeteer');
const url = 'http://seismonepal.gov.np/earthquakes';

async function pricelist() {
    const browser = await puppeteer.launch({ headless: true, waitUntil: 'load' });
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector('th');
    const shakey = await page.evaluate(() => {
        const titles = Array.from(document.querySelectorAll('th')).map(i => i.innerText);
        return titles
    })
    console.log(shakey)
}

pricelist()

