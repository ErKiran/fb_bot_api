const puppeteer = require('puppeteer');
const url = 'http://kalimatimarket.gov.np/daily-price-information';

(async function main() {
    const browser = await puppeteer.launch({ headless: true, slowMo: 250 });
    const page = await browser.newPage();

    await page.goto(url);
    await page.click('input[name=view]');
    const teams = await page.evaluate(() => {
        const grabFromRow = (row, classname) => row
            .querySelector(`tr.${classname}`)
            .innerText
            .trim()

        const TEAM_ROW_SELECTOR = 'tr.team';

        const data = [];
        const teamRows = document.querySelectorAll(TEAM_ROW_SELECTOR);

        for (const tr of teamRows) {
            data.push({
                name: grabFromRow(tr, 'name'),
                year: grabFromRow(tr, 'year'),
                wins: grabFromRow(tr, 'wins'),
                losses: grabFromRow(tr, 'losses')
            })
        }
        return data


    })
    console.log(JSON.stringify(teams, null, 2))
    await browser.close();
})()

//main();