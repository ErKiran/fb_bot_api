const express = require('express');
const { getHoroscope } = require('../controllers/horoscopeControllers');
const router = express.Router();


router.get('/', async (req, res) => {
    const data = await getHoroscope();
    res.json(data)
})

module.exports = router