const mongoose = require('mongoose')

try{
mongoose.connect(process.env.MongoURI,{ useNewUrlParser: true })
.then(
    ()=>
    console.log('Local MongoDB Connected')
)
}catch(e){
    throw new Error(`Can't connect to the Local Mongo Instance ${e}`)
}