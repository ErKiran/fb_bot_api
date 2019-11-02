const express = require('express');
const axios = require('axios');
const { pricelist } = require('../scraper/agriculture');


const router = express.Router();

router.get('/gold', async (req, res) => {
    const list = await axios.get('http://bg.annapurnapost.com/api/commodity');
    res.json(list.data)
})

router.get('/agriculture/retail', async (req, res) => {
    const price = await pricelist('Retail');
    /*client.set('Date',price.date)
    const date = client.get('Date');
    console.log(date)*/
    console.log('Client Object', client)
    client.set('Name', 'Kiran');
    const name = client.get('Names');
    console.log(name)
    res.json(price)
})

router.get('/agriculture/wholesale', async (req, res) => {
    const price = await pricelist('Wholesale');
    res.json(price)
})

router.get('/forex', async (req, res) => {
    const todays = new Date();
    let day = todays.getDate();
    let months = todays.getMonth();
    day = day.toString().length === 2 ? day : `0${day}`;
    months = months.toString().length === 2 ? months : `0${months}`;
    const year = todays.getFullYear();
    const today = await axios.get(`https://www.nrb.org.np/exportForexJSON.php?YY=${year}&MM=${months}&DD=${day}&YY1=${year}&MM1=${months}&DD1=${day}`);
    res.json(today.data)
})

module.exports = router