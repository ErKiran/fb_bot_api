const express = require('express')
const router = express.Router()
const {quefun} =require('../jobs/queueConsumer')
const {save} = require('../jobs/que');

router.post('/',async(req,res)=>{
/**
Times -> Number of Time Queue is to be called
Name -> Name of Queue
D
*/
    //require('./redis')
console.log(req.body)

save(req.body.name,req.body.data)
res.sendStatus(201)

})

module.exports = router