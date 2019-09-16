const puppeteer = require('puppeteer');
const url = 'http://kalimatimarket.gov.np/daily-price-information';

module.exports = {
    wholesale: async function wholesale() {
        const browser = await puppeteer.launch({ headless: true, waitUntil: 'load' });
        const page = await browser.newPage();
        await page.goto(url);
        await page.click('input[name=view]');
        await page.waitForSelector('tr.row1')
        const neee = await page.evaluate(() => {
            let date = Array.from(document.querySelectorAll('td')).map(i => i.innerText)[16]
            let first = Array.from(document.getElementsByClassName('row1')).map(i => i.innerText.trim());
            let second = Array.from(document.getElementsByClassName('row0')).map(i => i.innerText.trim());
            const lists = [...first, ...second];
            let splitted = [];
            lists.map(i => {
                splitted.push(i.split("\t"))
            })
            let final = [];
            splitted.map(i => {
                final.push({
                    name: i[0],
                    unit: i[1],
                    minimum: i[2],
                    maximum: i[3],
                    average: i[3]
                })
            })
            return {
                date,
                final
            };
        });
        await browser.close();
        return neee;
    },
    retail: async function retail() {
        const browser = await puppeteer.launch({ headless: true, waitUntil: 'load' });
        const page = await browser.newPage();
        await page.goto(url);
        await page.select('#pricetype', 'R')
        await page.click('input[name=view]');

        await page.waitForSelector('tr.row1')
        const neee = await page.evaluate(() => {
            let date = Array.from(document.querySelectorAll('td')).map(i => i.innerText)[16]
            let first = Array.from(document.getElementsByClassName('row1')).map(i => i.innerText.trim());
            let second = Array.from(document.getElementsByClassName('row0')).map(i => i.innerText.trim());
            const lists = [...first, ...second];
            let splitted = [];
            lists.map(i => {
                splitted.push(i.split("\t"))
            })
            let final = [];
            splitted.map(i => {
                final.push({
                    name: i[0],
                    unit: i[1],
                    minimum: i[2],
                    maximum: i[3],
                    average: i[3]
                })
            })
            return {
                date,
                final
            };
        });
        await browser.close();
        return neee;
    }
}

