const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/sources', async (req, res) => {
    try {
        const items = await axios.get('https://timesofnepal.com.np/newsv2/source.php');
        const source = items.data;
        res.send(source)
    }
    catch (e) {
        throw e
    }
})

router.get('/trending', async (req, res) => {
    try {
        const trending = await axios.get('https://www.onlinekhabar.com/wp-json/okapi/v1/trending');
        res.json(trending.data)
    }
    catch (e) {
        throw e
    }
})

router.get('/trending_ap', async (req, res) => {
    try {
        const trending = await axios.get('http://bg.annapurnapost.com/api/trending/news');
        res.json(trending.data)
    }
    catch (e) {
        throw e
    }
})


router.get('/most_commented', async (req, res) => {
    try {
        const most = await axios.get('https://www.onlinekhabar.com/wp-json/okapi/v1/most_commented');
        res.json(most.data)
    }
    catch (e) {
        throw e
    }
})

module.exports = router