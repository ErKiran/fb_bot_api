const puppeteer = require('puppeteer');
const url = 'https://scrapethissite.com/pages/forms/';

(async function main() {
    const browser = await puppeteer.launch({ headless: false, slowMo: 250 });
    const page = await browser.newPage();

    await page.goto(url);
    const teams = await page.evaluate(() => {
        const grabFromRow = (row, classname) => row
            .querySelector(`td.${classname}`)
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