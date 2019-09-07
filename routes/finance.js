const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/gold', async (req, res) => {
    const list = await axios.get('')
})

router.get('/forex', async (req, res) => {
    const today = await axios.get('https://www.nrb.org.np/exportForexJSON.php?YY=2019&MM=09&DD=07&YY1=2019&MM1=09&DD1=07');
    res.json(today.data)
})

module.exports = router