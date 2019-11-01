const express = require('express')
const router = express.Router()
const {fetchSavedImageFromDisk} = require('../controllers/imageSave');

router.post('/',async (req,res)=>{
    try{
    const imagePathToSend = await fetchSavedImageFromDisk(req.body.pageId,req.body.url);
    res.json(imagePathToSend)
    }catch(e){
        res.send(e)
    }
})

module.exports = router