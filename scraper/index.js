const puppeteer = require('puppeteer');
const url = 'https://scrapethissite.com/pages/forms/';

(async function main() {
    const browser = await puppeteer.launch({ headless: false, slowMo: 250 });
    const page = await browser.newPage();

    await page.goto(url);
    const teams = await page.evaluate(() =>{
        const grabFromRow = (row,classname) => row
        .querySelector(`td.${classname}`)
        .innerText
        .trim()

    })
    await browser.close();
})()

//main();