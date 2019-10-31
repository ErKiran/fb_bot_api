const express = require('express');
const {getHoroscope} = require('../controllers/horoscopeControllers');
const router = express.Router();

router.get('/', async (req, res) => {

    res.json(await getHoroscope())
})

module.exports = router