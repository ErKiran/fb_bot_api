const express = require('express')
const router = express.Router()
const { fetchSavedImageFromDisk } = require('../controllers/imageSave');

router.post('/', async (req, res) => {
    const imagePathToSend = await fetchSavedImageFromDisk(req.body.pageId, req.body.url, req.body.firstName, req.body.lastName);
    res.send(`${req.hostname}/${imagePathToSend}`)
    //res.json(imagePathToSend)
})

module.exports = router