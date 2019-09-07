const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/gold', async (req, res) => {
    const list = await axios.get('')
})

router.get('/forex', async (req, res) => {
    const todays = new Date();
    let day = todays.getDate();
    let months = todays.getMonth();
    day = day.toString().length === 2 ? day : `0${day}`;
    months = months.toString().length === 2 ? months : `0${months}`;
    console.log(day)
    const year = todays.getFullYear();
    const today = await axios.get(`https://www.nrb.org.np/exportForexJSON.php?YY=${year}&MM=${months}&DD=${day}&YY1=${year}&MM1=${months}&DD1=${day}`);
    res.json(today.data)
})

module.exports = router