const express = require('express');
const axios = require('axios')
const router = express.Router();

router.get('/', async (req, res) => {
    const horscopes = await axios.get('http://bg.annapurnapost.com/api/horoscope');
    res.json(horscopes.data)
})

module.exports = router