const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/cartoon', async (req, res) => {
    const all = await axios.get('http://bg.annapurnapost.com/api/illustration/%7Bid%7D/detail');
    res.json(all.data)
})

router.get('/all_cartoon', async (req, res) => {
    const all = await axios.get('http://bg.annapurnapost.com/api/illustration/%7Bid%7D/detail?page=1&per_page=115');
    res.json(all.data)
})
module.exports = router