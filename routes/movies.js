const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/current', async (req, res) => {
    const now_showing = await axios.get('https://api.qfxcinemas.com/api/public/NowShowing');
    res.json(now_showing.data)
})

router.get('/locations', async (req, res) => {
    const loc = await axios.get('https://api.qfxcinemas.com/api/public/Theatres');
    res.json(loc.data)
})

router.get('/next_change', async (req, res) => {
    const next = await axios.get('https://api.qfxcinemas.com/api/public/Theatres');
    res.json(next.data)
})

router.get('/city', async (req, res) => {
    const test = req.query.city;
    console.log(test)
    const now = await axios.get(`https://api.qfxcinemas.com/api/public/NowShowing?city=${test}`);
    res.json(now.data)
})

module.exports = router