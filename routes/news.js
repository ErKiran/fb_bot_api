const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/sources', async (req, res) => {
    try {
        const items = await axios.get('https://timesofnepal.com.np/newsv2/source.php');
        res.send(items.data)
    }
    catch (e) {
        throw e
    }
})

module.exports = router