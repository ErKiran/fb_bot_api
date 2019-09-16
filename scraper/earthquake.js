const puppeteer = require('puppeteer');
const url = 'http://kalimatimarket.gov.np/daily-price-information';

(async function main() {
    const browser = await puppeteer.launch({ headless: true, waitUntil: 'load' });
    const page = await browser.newPage();
    await page.goto(url);

    await page.click('input[name=view]');
    await page.waitForSelector('tr.row1')

    const neee = await page.evaluate(() => {
        let first = Array.from(document.getElementsByClassName('row1')).map(i => i.innerText.trim());
        let second = Array.from(document.getElementsByClassName('row0')).map(i => i.innerText.trim());
        let title = Array.from(document.getElementsByClassName('trc')).map(i => i.innerText.trim());
        return {
            first,
            second,
            title,
        };
    })

    console.log(neee);
    await browser.close();


})()

//main();